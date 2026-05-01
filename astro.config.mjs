// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      plugins: [
        // starlightThemeBlack({}),
      ],
      sidebar: [
        {
          label: "Теоретический материал",
          autogenerate: { directory: "theory" },
        },
        {
          label: "Справочник по диаграммам",
          autogenerate: { directory: "diagrams" },
        },
        {
          label: "Лабораторные работы",
          autogenerate: { directory: "labs" },
        },
      ],
    }),
  ],
});
