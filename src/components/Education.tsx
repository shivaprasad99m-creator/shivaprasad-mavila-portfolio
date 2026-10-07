import Section from "./Section";
import { education, certificates } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education and certificates">
      <div className="space-y-12">
        <div>
          <h3 className="font-display text-lg font-semibold">Education</h3>
          <ul className="mt-4 space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-muted">{e.school}</p>
                </div>
                <p className="text-sm text-muted">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">Certificates</h3>
          <ul className="mt-4 space-y-4">
            {certificates.map((c) => (
              <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
                <p className="text-sm text-muted">{c.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
