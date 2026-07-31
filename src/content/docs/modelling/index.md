---
title: Анализ и проектирование ИС
slug: modelling
sidebar:
  hidden: true
---

Теоретический материал разбит на несколько связанных этапов. Боковая навигация показывает тот же маршрут, а ссылки внутри статей ведут к подробным UML-описаниям соответствующих артефактов.

## Маршрут курса

1. **Основы моделирования** — [введение](./01-intro.md), [модель и моделирование](./02-models-and-modelling.md), [качество модели](./03-good-and-bad-models.md), [нотации и представления](./04-notations-and-views.md), [исторический контекст](./05-history-of-modelling.md).
2. **Информационная система и жизненный цикл** — [информационная система](./06-information-system.md), [уровни архитектуры](./07-is-architecture-levels.md), [жизненный цикл ПО](./08-software-lifecycle.md).
3. **Требования и контекст** — [требования](./09-requirements.md), [стейкхолдеры и граница системы](./12-stakeholders-and-boundary.md), [сбор требований](./10-requirements-gathering.md), [качество требований](./11-requirements-quality.md), [бизнес-правила и ограничения](./13-business-rules-and-constraints.md).
4. **Функции и процессы** — [цели и возможности](./14-capabilities-and-user-goals.md), [спецификация варианта использования](./15-use-case-specification.md), [сценарии и потоки](./16-scenarios-and-flows.md), [процессная модель](./17-process-model.md), [декомпозиция](./18-process-decomposition.md), [участники и потоки](./19-process-participants-and-flows.md).
5. **Предметная область и проектирование** — [словарь](./20-domain-and-vocabulary.md), [объекты предметной области](./21-domain-objects.md), [концептуальная модель](./22-conceptual-model.md), [объектно-ориентированное проектирование](./23-object-oriented-design.md), [методы выделения классов](./24-class-identification-methods.md), [концептуальная и техническая модели](./25-conceptual-vs-technical-model.md), [проектные решения и ADR](./26-project-decisions.md).
6. **Архитектура и согласованность** — [архитектура данных](./27-data-architecture.md), [программная архитектура](./28-software-architecture-and-layers.md), [системная архитектура и развёртывание](./29-system-architecture-and-deployment.md), [согласованность и трассируемость](./30-model-consistency-and-traceability.md).

Исторический материал нужен для понимания происхождения разных подходов, но не является обязательным этапом проектирования. ADR, напротив, является сквозной практикой: проектные решения фиксируются по мере прохождения любого из этапов.

## Переход к UML-справочнику

Основные соответствия между вопросами анализа и нотацией собраны в [обзоре канонических диаграмм](/reference/04-obzor-diagramm-kanonicheskie-diagrammy) и [обзоре сущностей UML](/reference/02-obzor-suschnostey). Подробное назначение конкретных диаграмм раскрывается в [диаграмме использования](/reference/07-diagramma-ispolzovaniya), [диаграмме деятельности](/reference/08-diagramma-deyatelnosti), [диаграмме классов](/reference/09-diagramma-klassov-i-obektov), [диаграмме последовательности](/reference/12-diagramma-posledovatelnosti), [диаграмме компонентов](/reference/16-diagramma-komponentov) и [диаграмме развёртывания](/reference/18-diagramma-razvertyvaniya).
