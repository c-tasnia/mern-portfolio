import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group bg-surface border border-surface-border rounded-lg overflow-hidden flex flex-col hover:border-mint/50 transition-colors"
            >
              {project.image && (
                <div className="aspect-[16/10] w-full overflow-hidden bg-ink-soft">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="section-heading text-base font-semibold text-fg-primary truncate">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="mono text-[11px] px-2 py-1 rounded border border-mint/50 text-mint hover:bg-mint/10 transition-colors inline-flex items-center gap-1"
                      >
                        <ExternalLink size={12} /> Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="text-fg-muted hover:text-mint transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-fg-muted text-xs leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="mono text-[10px] px-1.5 py-0.5 rounded border border-surface-border text-mint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mono text-xs px-3 py-1.5 rounded border border-amber/50 text-amber hover:bg-amber/10 transition-colors text-center"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}