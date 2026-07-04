import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { profile } from "../data/portfolioData";

const codeLines = [
  { n: 1, text: "const developer = {", color: "fg-primary" },
  { n: 2, text: `  name: "${profile.name}",`, indent: true },
  { n: 3, text: `  role: "${profile.role}",`, indent: true },
  { n: 4, text: "  stack: ['MongoDB', 'Express', 'React', 'Node'],", indent: true },
  { n: 5, text: "  available: true,", indent: true },
  { n: 6, text: "};", color: "fg-primary" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 260);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section id="home" className="relative pt-32 pb-24 px-5 sm:px-8 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mono text-mint text-sm mb-4">// full-stack developer</p>
          <h1 className="section-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-fg-primary">
            Building web apps
            <br />
            <span className="text-amber">from database</span>
            <br />
            to browser.
          </h1>
          <p className="mt-6 text-fg-muted text-base sm:text-lg max-w-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-amber text-ink font-medium px-5 py-3 rounded hover:bg-amber-soft transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 border border-surface-border text-fg-primary px-5 py-3 rounded hover:border-mint hover:text-mint transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Editor window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-surface border border-surface-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface-raised">
            <span className="w-3 h-3 rounded-full bg-[#EF6161]" />
            <span className="w-3 h-3 rounded-full bg-[#E8B339]" />
            <span className="w-3 h-3 rounded-full bg-[#5EEAD4]" />
            <span className="mono text-xs text-fg-faint ml-3">developer.js</span>
          </div>
          <div className="p-6 font-mono text-sm leading-7">
            {codeLines.slice(0, visibleLines).map((line) => (
              <div key={line.n} className="flex">
                <span className="text-fg-faint w-6 select-none">{line.n}</span>
                <span className={line.indent ? "text-mint" : "text-amber"}>
                  {line.text}
                </span>
              </div>
            ))}
            {visibleLines < codeLines.length && (
              <span className="inline-block w-2 h-4 bg-mint animate-pulse ml-6" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
