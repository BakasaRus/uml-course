// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Анализ и проектирование на UML",
      tableOfContents: false,
      locales: {
        root: {
          label: "Русский",
          lang: "ru-RU",
        },
      },
      plugins: [starlightImageZoom()],
      sidebar: [
        {
          label: "План",
          slug: "plan",
        },
        {
          label: "Лабораторные работы",
          autogenerate: { directory: "labs" },
        },
        {
          label: "Анализ и проектирование ИС",
          autogenerate: { directory: "theory" },
        },
        {
          label: "Справочник по UML",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Дополнительная литература",
          slug: "literature",
        },
      ],
    }),
  ],
});
