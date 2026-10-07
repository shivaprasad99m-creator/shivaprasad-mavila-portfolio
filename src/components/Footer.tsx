import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
