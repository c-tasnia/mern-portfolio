import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 sm:px-8 bg-ink-soft/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="gutter-line">02</span>
          <h2 className="section-heading text-3xl font-semibold text-fg-primary">Experience</h2>
        </div>

        <div className="relative pl-6 sm:pl-10">
          <div className="absolute left-[5px] sm:left-[9px] top-2 bottom-2 w-px bg-surface-border" />
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-6 sm:-left-10 top-1.5 w-2.5 h-2.5 rounded-full bg-amber ring-4 ring-ink" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="section-heading text-lg font-semibold text-fg-primary">
                  {job.role} <span className="text-fg-muted font-normal">· {job.company}</span>
                </h3>
                <span className="mono text-xs text-mint whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {job.points.map((point, j) => (
                  <li key={j} className="text-fg-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-amber mono">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
