import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="mono text-xs text-fg-faint">
          © {new Date().getFullYear()} {profile.name}. Built with the MERN stack.
        </p>
        <p className="mono text-xs text-fg-faint">designed &amp; developed by {profile.name}</p>
      </div>
    </footer>
  );
}
