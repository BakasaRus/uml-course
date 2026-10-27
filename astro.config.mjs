// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import plantuml from "astro-plantuml";
import starlightImageZoom from 'starlight-image-zoom';
import plantUmlDefaults from "./src/integrations/plantuml-defaults.js";
import {
  PLANTUML_DIAGRAMS_PATH,
  PLANTUML_SERVER_URL,
  PLANTUML_TIMEOUT,
} from "./src/lib/plantuml.js";


const isGitHubPages = process.env.GITHUB_PAGES === "true";

// https://astro.build/config
export default defineConfig({
  site: "https://uml.itmo.is",
  integrations: [
    plantUmlDefaults(),
    plantuml({
      diagramsPath: PLANTUML_DIAGRAMS_PATH,
      format: "svg",
      serverUrl: PLANTUML_SERVER_URL,
      timeout: PLANTUML_TIMEOUT,
    }),
    starlight({
      title: "Анализ и проектирование на UML",
      disable404Route: true,
      plugins: [starlightImageZoom()],
      customCss: [
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/600.css',
        './src/styles/plantuml.css',
      ],
      locales: {
        root: {
          label: "Русский",
          lang: "ru-RU",
        },
      },
      sidebar: [
        {
          label: "Лабораторные работы",
          items: [{
            autogenerate: { directory: "labs" }
          }],
        },
        {
          label: "Анализ и проектирование",
          items: [
            'modelling', {
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
              'modelling/responsibility-and-patterns',
              'modelling/model-based-testing',
            ],
            collapsed: true,
          }],
        },
        {
          label: "Нотация UML",
          items: [
            'notation',
            {
              label: "Как читать UML",
              items: [
                'notation/model-and-diagrams',
                'notation/relations',
                'notation/naming-model-elements',
                'notation/choosing-a-diagram',
              ],
              collapsed: true,
            }, {
              label: "Функции и процессы",
              items: [
                'notation/usecase-diagrams',
                'notation/activity-diagrams',
                'notation/activity-advanced',
              ],
              collapsed: true,
            }, {
              label: "Структура и жизненный цикл",
              items: [
                'notation/conceptual-class-diagrams',
                'notation/technical-class-diagrams',
                'notation/class-relations-advanced',
                'notation/object-diagrams',
                'notation/state-machine-diagrams',
                'notation/state-machine-advanced',
              ],
              collapsed: true,
            }, {
              label: "Взаимодействия",
              items: [
                'notation/sequence-diagrams',
                'notation/system-sequence-diagrams',
                'notation/sequence-advanced',
                'notation/communication-diagrams',
                'notation/interaction-overview-diagrams',
                'notation/timing-diagrams',
              ],
              collapsed: true,
            }, {
              label: "Архитектура и развёртывание",
              items: [
                'notation/package-diagrams',
                'notation/component-diagrams',
                'notation/internal-structure-diagrams',
                'notation/deployment-diagrams',
                'notation/deployment-advanced',
              ],
              collapsed: true,
            }, {
              label: "Расширенная нотация",
              items: [
                'notation/classifiers-and-namespaces',
                'notation/types-properties-and-values',
                'notation/behaviors-events-and-calls',
                'notation/stereotypes-and-profiles',
                'notation/constraints-and-ocl',
                'notation/information-flows',
              ],
              collapsed: true,
            },
          ],
        },
        {
          label: "Архитектурные представления C4",
          items: [
            'c4',
            'c4/context',
            'c4/containers',
            'c4/components-and-code',
            'c4/dynamic-and-deployment',
            'c4/uml-and-consistency',
          ],
          collapsed: true,
        },
        {
          label: "Дополнительная литература",
          slug: "literature",
        },
        // {
        //   label: "Подготовка к зачёту",
        //   slug: "exam-preparation",
        // },
      ],
    }),
  ],
});
