import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="gutter-line">03</span>
          <h2 className="section-heading text-3xl font-semibold text-fg-primary">Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group bg-surface border border-surface-border rounded-xl p-6 flex flex-col hover:border-mint/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="section-heading text-lg font-semibold text-fg-primary">
                  {project.title}
                </h3>
                <div className="flex gap-3 shrink-0 ml-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-fg-muted hover:text-mint transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-fg-muted hover:text-amber transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-fg-muted text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono text-[11px] px-2 py-1 rounded border border-surface-border text-mint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
