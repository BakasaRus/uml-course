import { isSatteriProcessor, satteri } from "@astrojs/markdown-satteri";
import { applyPlantUmlDefaults } from "../lib/plantuml.js";
import { plantUmlZoomPlugin } from "./plantuml-zoom.js";

const plantUmlDefaultsPlugin = {
  name: "uml-course-plantuml-defaults",
  code(node, context) {
    if (node.lang === "plantuml") {
      context.replaceNode(node, {
        ...node,
        value: applyPlantUmlDefaults(node.value ?? ""),
      });
    }
  },
};

export default function plantUmlDefaults() {
  return {
    name: "uml-course-plantuml-defaults",
    hooks: {
      "astro:config:setup": ({ config, updateConfig }) => {
        const processor = config.markdown?.processor;

        if (!isSatteriProcessor(processor)) {
          throw new Error("PlantUML defaults require Astro's Sätteri Markdown processor");
        }

        const options = processor.options ?? {};
        updateConfig({
          markdown: {
            processor: satteri({
              ...options,
              mdastPlugins: [...(options.mdastPlugins ?? []), plantUmlDefaultsPlugin],
              hastPlugins: [...(options.hastPlugins ?? []), plantUmlZoomPlugin],
            }),
          },
        });
      },
    },
  };
}
