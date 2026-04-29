// Barrel export for the centralised UI primitive library.
// Import any primitive via `@/components/ui` rather than the individual file.
//
//   import { Section, SectionHeader, Headline, StatNumeric, Tag, Card, Button } from "@/components/ui";
//
// Adding a new primitive? Drop the file in this folder and re-export it here.

export { default as Section } from "./Section";
export { default as Eyebrow } from "./Eyebrow";
export { default as Kicker } from "./Kicker";
export { default as Headline, HeadlineAccent } from "./Headline";
export { default as SectionHeader } from "./SectionHeader";
export { default as StatNumeric } from "./StatNumeric";
export { default as Tag, TagRow } from "./Tag";
export {
  default as Card,
  CardHeader,
  CardIcon,
  CardTag,
  CardTitle,
  CardDesc,
  CardFooter,
  CardChip,
  CardChipRow,
  ACCENTS,
  type Accent,
} from "./Card";
export { default as Button } from "./Button";
