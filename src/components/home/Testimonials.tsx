import { motion } from 'motion/react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "Ilalang Architect transformed our vague ideas into a living space that feels exactly like us. Their attention to lighting is legendary.",
    author: "Andi Wijaya",
    role: "Homeowner, Malang"
  },
  {
    quote: "Working with them on our studio space was the best decision. They balanced branding and architecture seamlessly.",
    author: "Siska Putri",
    role: "CEO, Creative Hub"
  },
  {
    quote: "They managed to build our dream villa within a very tight budget without compromising on the modern aesthetics.",
    author: "Robert Evans",
    role: "Expat, Sanur"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-dark text-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/3">
          <SectionHeading 
            subtitle="Klien Kami" 
            title="Voices of Satisfaction" 
            className="text-white mb-0"
          />
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 border-l border-brand-earth/30"
            >
              <span className="serif text-6xl text-brand-earth absolute -top-4 -left-6 opacity-40">“</span>
              <p className="text-xl md:text-2xl serif italic font-light mb-6 leading-relaxed opacity-90">
                {t.quote}
              </p>
              <div>
                <p className="font-display font-bold text-sm tracking-widest uppercase">{t.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-earth mt-1 font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
