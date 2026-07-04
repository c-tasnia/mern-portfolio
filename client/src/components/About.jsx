import { motion } from "framer-motion";
import { profile, about } from "../data/portfolioData";

function StackGroup({ label, items }) {
  return (
    <div>
      <p className="mono text-xs text-fg-faint uppercase tracking-wider mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="mono text-xs px-2.5 py-1 rounded border border-surface-border text-fg-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-12">
          <span className="gutter-line">01</span>
          <h2 className="section-heading text-3xl font-semibold text-fg-primary">About</h2>
        </div>

        <div className="grid md:grid-cols-[0.5fr_1.15fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-auto rounded-xl overflow-hidden border border-surface-border bg-surface">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full items-center justify-center mono text-fg-faint text-sm">
                add your photo at client/public/profile.jpg
              </div>
            </div>
            {/* <div className="absolute -bottom-4 -right-4 bg-surface border border-surface-border rounded-lg px-4 py-2 mono text-xs text-mint">
              status: available_for_hire
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {about.summary.map((p, i) => (
              <p key={i} className="text-fg-muted leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <StackGroup label="Langueges" items={about.stack.languages} />
              <StackGroup label="Backend" items={about.stack.backend} />
              <StackGroup label="Frontend" items={about.stack.frontend} />
              <StackGroup label="Tools" items={about.stack.tools} />
              <StackGroup label="Database" items={about.stack.database} />
              
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
