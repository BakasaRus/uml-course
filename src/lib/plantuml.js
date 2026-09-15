export const PLANTUML_DIAGRAMS_PATH = "src/diagrams/plantuml";
export const PLANTUML_SERVER_URL = "https://www.plantuml.com/plantuml/svg/";
export const PLANTUML_TIMEOUT = 20_000;

const DEFAULTS = [
  "skinparam ArrowThickness 1.6",
  "skinparam ActorBorderThickness 1.6",
  "skinparam ActorBorderColor #CBD5E1",
  "skinparam ActorBackgroundColor #1E293B",
  "skinparam ActorFontColor #E2E8F0",
  "skinparam UsecaseBorderThickness 1.6",
  "skinparam UsecaseBackgroundColor #1E293B",
  "skinparam UsecaseBorderColor #CBD5E1",
  "skinparam UsecaseFontColor #E2E8F0",
  "skinparam ClassBackgroundColor #1E293B",
  "skinparam ClassBorderColor #CBD5E1",
  "skinparam ClassFontColor #E2E8F0",
  "skinparam ClassAttributeFontColor #E2E8F0",
  "skinparam ClassStereotypeFontColor #CBD5E1",
  "skinparam ObjectBackgroundColor #1E293B",
  "skinparam ObjectBorderColor #CBD5E1",
  "skinparam ObjectFontColor #E2E8F0",
  "skinparam ObjectAttributeFontColor #E2E8F0",
  "skinparam InterfaceBackgroundColor #1E293B",
  "skinparam InterfaceBorderColor #CBD5E1",
  "skinparam InterfaceFontColor #E2E8F0",
  "skinparam ComponentBackgroundColor #1E293B",
  "skinparam ComponentBorderColor #CBD5E1",
  "skinparam ComponentFontColor #E2E8F0",
  "skinparam NodeBackgroundColor #1E293B",
  "skinparam NodeBorderColor #CBD5E1",
  "skinparam ArtifactBackgroundColor #1E293B",
  "skinparam ArtifactBorderColor #CBD5E1",
  "skinparam DatabaseBackgroundColor #1E293B",
  "skinparam DatabaseBorderColor #CBD5E1",
  "skinparam PackageBackgroundColor #0F172A",
  "skinparam PackageBorderColor #CBD5E1",
  "skinparam PackageFontColor #E2E8F0",
  "skinparam ParticipantBackgroundColor #1E293B",
  "skinparam ParticipantBorderColor #CBD5E1",
  "skinparam ParticipantFontColor #E2E8F0",
  "skinparam SequenceLifeLineBackgroundColor #1E293B",
  "skinparam SequenceLifeLineBorderColor #64748B",
  "skinparam SequenceGroupBorderColor #CBD5E1",
  "skinparam SequenceGroupBackgroundColor #1E293B",
  "skinparam SequenceGroupHeaderFontColor #E2E8F0",
  "skinparam ActivityBackgroundColor #1E293B",
  "skinparam ActivityBorderColor #CBD5E1",
  "skinparam ActivityFontColor #E2E8F0",
  "skinparam ActivityDiamondBackgroundColor #1E293B",
  "skinparam ActivityDiamondBorderColor #CBD5E1",
  "skinparam ActivityDiamondFontColor #E2E8F0",
  "skinparam ActivityStartColor #CBD5E1",
  "skinparam ActivityEndColor #CBD5E1",
  "skinparam ActivityBarColor #CBD5E1",
  "skinparam StateBackgroundColor #1E293B",
  "skinparam StateBorderColor #CBD5E1",
  "skinparam StateFontColor #E2E8F0",
  "skinparam StateStartColor #CBD5E1",
  "skinparam StateEndColor #CBD5E1",
  "skinparam NoteBackgroundColor #1E293B",
  "skinparam NoteBorderColor #CBD5E1",
  "skinparam NoteFontColor #E2E8F0",
  "skinparam TitleFontColor #E2E8F0",
  "skinparam RectangleBorderThickness 1.6",
  "skinparam RectangleBackgroundColor #1E293B",
  "skinparam RectangleBorderColor #CBD5E1",
  "skinparam RectangleFontColor #E2E8F0",
  "skinparam BackgroundColor #0F172A",
  "skinparam DefaultFontColor #E2E8F0",
  "skinparam ArrowColor #94A3B8",
].join("\n");

export function applyPlantUmlDefaults(source) {
  const diagram = source.trim();
  const opening = /^@startuml[^\r\n]*(?:\r?\n|$)/.exec(diagram);

  if (!opening) {
    throw new Error("PlantUML blocks must start with @startuml");
  }

  return `${opening[0]}${DEFAULTS}\n${diagram.slice(opening[0].length)}`;
}
