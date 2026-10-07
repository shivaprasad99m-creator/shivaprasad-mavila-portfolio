import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((r) => (
          <li key={r.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-xl font-semibold">{r.role}</h3>
              <p className="text-sm text-muted">{r.period}</p>
            </div>
            <p className="mt-1 text-muted">
              {r.company}, {r.place}
            </p>
            <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 leading-relaxed marker:text-signal">
              {r.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
