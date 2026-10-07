import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-[200px_1fr] md:gap-12 md:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
