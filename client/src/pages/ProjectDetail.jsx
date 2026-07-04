import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <section className="py-24 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#projects"
          className="mono text-xs text-fg-muted hover:text-mint transition-colors inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.image && (
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-surface-border mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="section-heading text-3xl font-semibold text-fg-primary mb-4">
            {project.title}
          </h1>

          <div className="flex gap-4 mb-8">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs px-4 py-2 rounded border border-mint/50 text-mint hover:bg-mint/10 transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={14} /> Live Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs px-4 py-2 rounded border border-surface-border text-fg-muted hover:text-fg-primary transition-colors inline-flex items-center gap-2"
              >
                <Github size={14} /> Client Repo
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="mono text-[11px] px-2 py-1 rounded border border-surface-border text-mint"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="section-heading text-lg font-semibold text-fg-primary mb-2">
                Overview
              </h2>
              <p className="text-fg-muted text-sm leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="section-heading text-lg font-semibold text-fg-primary mb-2">
                Challenges
              </h2>
              <p className="text-fg-muted text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div>
              <h2 className="section-heading text-lg font-semibold text-fg-primary mb-2">
                Future Improvements
              </h2>
              <p className="text-fg-muted text-sm leading-relaxed">
                {project.improvements}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}