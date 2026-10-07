import { profile, metrics } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-12 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-xl text-signal md:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{profile.positioning}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              See my projects
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                className="rounded border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-signal"
              >
                Download résumé
              </a>
            ) : (
              <a
                href="#contact"
                className="rounded border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-signal"
              >
                Contact me
              </a>
            )}
          </div>

          <p className="mt-6 text-sm text-muted">Based in Dubai. Open to AI Engineer roles.</p>
        </div>

        <aside aria-labelledby="results-heading" className="rounded-lg border border-line bg-surface p-6">
          <h2 id="results-heading" className="font-display text-lg font-semibold">
            Results from my work
          </h2>
          <p className="mt-1 text-sm text-muted">Figures as reported in my résumé.</p>
          <ul className="mt-5 space-y-5">
            {metrics.map((m, i) => (
              <li key={m.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm">{m.label}</span>
                  <span className="font-mono text-base font-medium tabular-nums">{m.value}</span>
                </div>
                {m.bar !== undefined && (
                  <div className="mt-2 h-1.5 w-full rounded-full bg-line/60" role="presentation">
                    <div
                      className="bar h-full rounded-full bg-mark"
                      style={{ width: `${m.bar}%`, ["--delay" as string]: `${200 + i * 110}ms` }}
                    />
                  </div>
                )}
                <p className="mt-1.5 text-xs text-muted">{m.context}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
