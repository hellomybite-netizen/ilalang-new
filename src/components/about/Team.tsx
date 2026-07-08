import { motion } from 'motion/react';
import { team } from '../../data/team';

export default function Team() {
  return (
    <section className="bg-brand-dark text-brand-beige py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-lime mb-4 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter text-brand-beige">
            The People Behind Every Design
          </h2>
        </div>

        <div className="space-y-20">
          {team.map((group) => (
            <div key={group.group}>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-lime mb-8">
                {group.group}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                {group.members.map((member, idx) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-white/5 mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <p className="text-sm font-display font-medium tracking-tight leading-snug">
                      {member.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-brand-lime/80 mt-1">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
