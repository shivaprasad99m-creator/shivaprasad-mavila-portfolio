import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[210px_1fr] sm:gap-6">
            <dt className="font-medium">{g.group}</dt>
            <dd className="leading-relaxed text-muted">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
