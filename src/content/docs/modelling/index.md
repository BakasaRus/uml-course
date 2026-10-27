---
title: Анализ и проектирование ИС
slug: modelling
---

Теоретический материал разбит на несколько связанных этапов. Боковая навигация показывает тот же маршрут, а ссылки внутри статей ведут к подробным UML-описаниям соответствующих артефактов.

## Маршрут курса

1. **Основы моделирования** — [введение](/modelling/intro), [модель и моделирование](/modelling/models-and-modelling), [качество модели](/modelling/good-and-bad-models), [нотации и представления](/modelling/notations-and-views), [исторический контекст](/modelling/history-of-modelling).
2. **Информационная система и жизненный цикл** — [информационная система](/modelling/information-system), [уровни архитектуры](/modelling/is-architecture-levels), [жизненный цикл ПО](/modelling/software-lifecycle).
3. **Требования и контекст** — [требования](/modelling/requirements), [стейкхолдеры и граница системы](/modelling/stakeholders-and-boundary), [сбор требований](/modelling/requirements-gathering), [качество требований](/modelling/requirements-quality), [бизнес-правила и ограничения](/modelling/business-rules-and-constraints).
4. **Функции и процессы** — [цели и возможности](/modelling/capabilities-and-user-goals), [спецификация варианта использования](/modelling/use-case-specification), [сценарии и потоки](/modelling/scenarios-and-flows), [процессная модель](/modelling/process-model), [декомпозиция](/modelling/process-decomposition), [участники и потоки](/modelling/process-participants-and-flows).
5. **Предметная область и проектирование** — [словарь](/modelling/domain-and-vocabulary), [объекты предметной области](/modelling/domain-objects), [концептуальная модель](/modelling/conceptual-model), [объектно-ориентированное проектирование](/modelling/object-oriented-design), [методы выделения классов](/modelling/class-identification-methods), [концептуальная и техническая модели](/modelling/conceptual-vs-technical-model), [проектные решения и ADR](/modelling/project-decisions).
6. **Архитектура и согласованность** — [архитектура данных](/modelling/data-architecture), [программная архитектура](/modelling/software-architecture-and-layers), [системная архитектура и развёртывание](/modelling/system-architecture-and-deployment), [согласованность и трассируемость](/modelling/model-consistency-and-traceability).

Исторический материал нужен для понимания происхождения разных подходов, но не является обязательным этапом проектирования. ADR, напротив, является сквозной практикой: проектные решения фиксируются по мере прохождения любого из этапов.

## Переход к нотации UML

После основного маршрута можно разобрать [распределение ответственности, GRASP и паттерны](/modelling/responsibility-and-patterns), затем [получение проверок и тестов из моделей](/modelling/model-based-testing). Это дополнительные темы для обоснования и проверки решений; отдельные лабораторные по ним не требуются.

Основные соответствия между вопросами анализа и нотацией собраны в [выборе UML-диаграммы](/notation/choosing-a-diagram) и [классификаторах, именах и пространствах имён](/notation/classifiers-and-namespaces). Подробное назначение конкретных диаграмм раскрывается в [диаграмме использования](/notation/usecase-diagrams), [диаграмме деятельности](/notation/activity-diagrams), [концептуальной диаграмме классов](/notation/conceptual-class-diagrams), [диаграмме последовательности](/notation/sequence-diagrams), [диаграмме компонентов](/notation/component-diagrams) и [диаграмме развёртывания](/notation/deployment-diagrams).
