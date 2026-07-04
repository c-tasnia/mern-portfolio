import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const tabs = [
  { id: "about", label: "About.jsx" },
  { id: "experience", label: "Experience.jsx" },
  { id: "education", label: "Education.jsx" },
  { id: "projects", label: "Projects.jsx" },
  { id: "contact", label: "Contact.jsx" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);

    const sections = tabs.map((t) => document.getElementById(t.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-surface-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => goTo("home")}
            className="mono text-sm text-fg-primary flex items-center gap-2 shrink-0"
          >
            <span className="text-amber">&lt;</span>
            <span className="font-semibold tracking-tight">tasnia</span>
            <span className="text-amber">/&gt;</span>
          </button>

          {/* Desktop editor tabs */}
          <nav className="hidden md:flex items-stretch h-14">
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => goTo(tab.id)}
                  className={`relative mono text-xs px-4 h-full flex items-center gap-2 border-x border-transparent transition-colors ${
                    isActive
                      ? "text-fg-primary bg-surface border-surface-border"
                      : "text-fg-muted hover:text-fg-primary"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-mint" : "bg-fg-faint"
                    }`}
                  />
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber" />
                  )}
                </button>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goTo("contact");
            }}
            className="hidden md:inline-flex mono text-xs px-4 py-2 border border-amber text-amber rounded hover:bg-amber hover:text-ink transition-colors"
          >
            Hire me →
          </a>

          <button
            className="md:hidden text-fg-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-surface-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              className={`w-full text-left mono text-sm px-6 py-3 border-b border-surface-border flex items-center gap-2 ${
                active === tab.id ? "text-mint" : "text-fg-muted"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => goTo("contact")}
            className="w-full text-left mono text-sm px-6 py-3 text-amber"
          >
            Hire me →
          </button>
        </div>
      )}
    </header>
  );
}
