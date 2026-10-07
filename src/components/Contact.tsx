import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose text-lg leading-relaxed">
        I'm looking for AI Engineer roles. The quickest way to reach me is email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block break-all font-display text-2xl font-semibold text-signal underline decoration-1 underline-offset-4 hover:decoration-2 md:text-3xl"
      >
        {profile.email}
      </a>
      <dl className="mt-8 grid gap-4 text-[15px] sm:grid-cols-[110px_1fr]">
        <dt className="text-muted">Phone</dt>
        <dd>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-signal">
            {profile.phone}
          </a>
        </dd>
        <dt className="text-muted">LinkedIn</dt>
        <dd>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="break-all hover:text-signal">
            {profile.linkedin.replace("https://www.", "")}
          </a>
        </dd>
        <dt className="text-muted">GitHub</dt>
        <dd>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="break-all hover:text-signal">
            {profile.github.replace("https://", "")}
          </a>
        </dd>
        <dt className="text-muted">Location</dt>
        <dd>{profile.location}</dd>
      </dl>
    </Section>
  );
}
