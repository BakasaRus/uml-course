// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

// https://astro.build/config
export default defineConfig({
  site: "https://uml.itmo.is",
  integrations: [
    starlight({
      title: "Анализ и проектирование на UML",
      customCss: [
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/600.css',
      ],
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
          label: "Лабораторные работы",
          items: [{
            autogenerate: { directory: "labs" }
          }],
        },
        {
          label: "Анализ и проектирование ИС",
          items: [{
            label: "Основы моделирования",
            items: [
              'modelling/intro',
              'modelling/models-and-modelling',
              'modelling/good-and-bad-models',
              'modelling/notations-and-views',
              'modelling/history-of-modelling',
            ],
            collapsed: true,
          }, {
            label: "Информационная система",
            items: [
              'modelling/information-system',
              'modelling/is-architecture-levels',
              'modelling/software-lifecycle',
            ],
            collapsed: true,
          }, {
            label: "Требования и контекст",
            items: [
              'modelling/requirements',
              'modelling/business-rules-and-constraints',
              'modelling/stakeholders-and-boundary',
              'modelling/requirements-gathering',
              'modelling/requirements-quality',
            ],
            collapsed: true,
          }, {
            label: "Функции и процессы",
            items: [
              'modelling/capabilities-and-user-goals',
              'modelling/use-case-specification',
              'modelling/scenarios-and-flows',
              'modelling/process-model',
              'modelling/process-decomposition',
              'modelling/process-participants-and-flows',
            ],
            collapsed: true,
          }, {
            label: "Предметная область и проектирование",
            items: [
              'modelling/domain-and-vocabulary',
              'modelling/domain-objects',
              'modelling/conceptual-model',
              'modelling/object-oriented-design',
              'modelling/class-identification-methods',
              'modelling/conceptual-vs-technical-model',
              'modelling/project-decisions',
            ],
            collapsed: true,
          }, {
            label: "Архитектура и согласованность",
            items: [
              'modelling/data-architecture',
              'modelling/software-architecture-and-layers',
              'modelling/system-architecture-and-deployment',
              'modelling/model-consistency-and-traceability',
            ],
            collapsed: true,
          }],
        },
        {
          label: "Справочник по UML",
          items: [{
            autogenerate: { directory: "reference" }
          }],
        },
        {
          label: "Дополнительная литература",
          slug: "literature",
        },
      ],
    }),
  ],
});
