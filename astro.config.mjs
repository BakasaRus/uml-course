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
              'modelling/01-intro',
              'modelling/02-models-and-modelling',
              'modelling/03-good-and-bad-models',
              'modelling/04-notations-and-views',
              'modelling/05-history-of-modelling',
            ],
            collapsed: true,
          }, {
            label: "Информационная система",
            items: [
              'modelling/06-information-system',
              'modelling/07-is-architecture-levels',
              'modelling/08-software-lifecycle',
            ],
            collapsed: true,
          }, {
            label: "Требования и контекст",
            items: [
              'modelling/09-requirements',
              'modelling/10-requirements-gathering',
              'modelling/11-requirements-quality',
              'modelling/12-stakeholders-and-boundary',
              'modelling/13-business-rules-and-constraints',
            ],
            collapsed: true,
          }, {
            label: "Функции и процессы",
            items: [
              'modelling/14-capabilities-and-user-goals',
              'modelling/15-use-case-specification',
              'modelling/16-scenarios-and-flows',
              'modelling/17-process-model',
              'modelling/18-process-decomposition',
              'modelling/19-process-participants-and-flows',
            ],
            collapsed: true,
          }, {
            label: "Предметная область и проектирование",
            items: [
              'modelling/20-domain-and-vocabulary',
              'modelling/21-domain-objects',
              'modelling/22-conceptual-model',
              'modelling/23-object-oriented-design',
              'modelling/24-class-identification-methods',
              'modelling/25-conceptual-vs-technical-model',
              'modelling/26-project-decisions',
            ],
            collapsed: true,
          }, {
            label: "Архитектура и согласованность",
            items: [
              'modelling/27-data-architecture',
              'modelling/28-software-architecture-and-layers',
              'modelling/29-system-architecture-and-deployment',
              'modelling/30-model-consistency-and-traceability',
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
