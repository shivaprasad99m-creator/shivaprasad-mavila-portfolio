import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="work" title="Projects">
      <div className="space-y-8">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-signal md:p-8"
          >
            <h3 className="font-display text-xl font-semibold leading-snug md:text-2xl">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.context}</p>

            <dl className="mt-6 grid gap-x-8 gap-y-5 text-[15px] leading-relaxed md:grid-cols-[110px_1fr]">
              <dt className="font-medium text-muted">Problem</dt>
              <dd>{p.problem}</dd>
              <dt className="font-medium text-muted">Solution</dt>
              <dd>{p.solution}</dd>
              <dt className="font-medium text-muted">My role</dt>
              <dd>{p.contribution}</dd>
              <dt className="font-medium text-muted">Outcome</dt>
              <dd>
                <ul className="space-y-1.5 border-l-2 border-mark pl-4">
                  {p.outcome.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </dd>
              <dt className="font-medium text-muted">Built with</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded border border-line px-2.5 py-1 text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
