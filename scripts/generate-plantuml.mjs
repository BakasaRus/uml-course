import { createHash } from "node:crypto";
import { deflateRawSync } from "node:zlib";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  applyPlantUmlDefaults,
  PLANTUML_DIAGRAMS_PATH,
  PLANTUML_SERVER_URL,
  PLANTUML_TIMEOUT,
} from "../src/lib/plantuml.js";

const ROOT = process.cwd();
const DOCS_PATH = path.join(ROOT, "src/content/docs");
const OUTPUT_PATH = path.join(ROOT, PLANTUML_DIAGRAMS_PATH);
const PLANTUML_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
const MAX_ATTEMPTS = 3;

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(entryPath);
    return entry.isFile() && /\.mdx?$/.test(entry.name) ? [entryPath] : [];
  }));
  return files.flat();
}

function encodePlantUml(source) {
  const compressed = deflateRawSync(source, { level: 9 });
  let encoded = "";
  let currentByte = 0;
  let bitsLeft = 0;

  for (const byte of compressed) {
    currentByte = (currentByte << 8) | byte;
    bitsLeft += 8;
    while (bitsLeft >= 6) {
      bitsLeft -= 6;
      encoded += PLANTUML_ALPHABET[(currentByte >> bitsLeft) & 0x3f];
    }
  }

  if (bitsLeft > 0) encoded += PLANTUML_ALPHABET[(currentByte << (6 - bitsLeft)) & 0x3f];
  return encoded;
}

async function renderSvg(source) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(`${PLANTUML_SERVER_URL}${encodePlantUml(source)}`, {
        signal: AbortSignal.timeout(PLANTUML_TIMEOUT),
      });
      const svg = await response.text();

      if (!response.ok || !svg.startsWith("<svg")) {
        throw new Error(`PlantUML returned HTTP ${response.status}`);
      }

      return svg;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }

  throw lastError;
}

function diagramFileName(filePath, source) {
  const relativePath = path.relative(ROOT, filePath);
  const baseName = relativePath.replace(/[\\/]/g, "-").replace(/\.md$/, "");
  const hash = createHash("md5").update(source).digest("hex");
  return `${baseName}-${hash}.svg`;
}

async function generateFile(filePath) {
  const markdown = await readFile(filePath, "utf8");
  const blocks = [...markdown.matchAll(/```plantuml[^\S\r\n]*\r?\n([\s\S]*?)\r?\n```/g)]
    .map((match) => applyPlantUmlDefaults(match[1]));
  const expected = new Set(blocks.map((source) => diagramFileName(filePath, source)));
  const prefix = `${path.relative(ROOT, filePath).replace(/[\\/]/g, "-").replace(/\.md$/, "")}-`;

  for (const source of blocks) {
    const fileName = diagramFileName(filePath, source);
    const outputFile = path.join(OUTPUT_PATH, fileName);
    const svg = await renderSvg(source);
    await writeFile(outputFile, svg);
    console.log(`Generated ${fileName}`);
  }

  const existing = await readdir(OUTPUT_PATH);
  await Promise.all(existing
    .filter((fileName) => fileName.startsWith(prefix) && !expected.has(fileName))
    .map((fileName) => rm(path.join(OUTPUT_PATH, fileName))));
}

await mkdir(OUTPUT_PATH, { recursive: true });
for (const filePath of await markdownFiles(DOCS_PATH)) await generateFile(filePath);
