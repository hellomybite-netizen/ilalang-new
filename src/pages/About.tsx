import { motion } from 'motion/react';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  return (
    <div className="pb-24">
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 xl:col-span-6">
            <SectionHeading 
              subtitle="The Studio" 
              title="Architecture is the Art of Meaningful Living" 
              className="mb-8"
            />
            <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed max-w-xl">
              <p>
                Founded in Malang in 2021, <span className="text-brand-dark font-bold italic">Ilalang Architect</span> was born from a simple belief: every space has a story to tell, and every story deserves a unique character.
              </p>
              <p>
                We don't just build structures; we curate experiences. By playing with natural light, raw materials, and the dance of shadows, we create environments that breathe and resonate with their inhabitants.
              </p>
              <blockquote className="border-l-2 border-brand-earth pl-8 py-4 my-10 italic serif text-2xl text-brand-dark/90">
                “Setiap ruang punya cerita, kami merancang dengan karakter, cahaya, dan fungsi.”
              </blockquote>
            </div>
          </div>
          
          <div className="lg:col-span-12 xl:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=2071" 
                alt="Architecture Studio" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-earth/10 mix-blend-multiply" />
              {/* Floating Stat */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute bottom-10 left-10 bg-brand-dark text-white p-8 shadow-2xl"
              >
                <p className="text-4xl font-display font-bold">50+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Completed Projects</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Vision Section */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div>
              <h3 className="text-[14px] uppercase tracking-[0.4em] font-bold text-brand-earth mb-8">Character First</h3>
              <p className="text-sm leading-relaxed opacity-60">Design should never be generic. We dive deep into our clients' souls to bring out their unique architectural language.</p>
            </div>
            <div>
              <h3 className="text-[14px] uppercase tracking-[0.4em] font-bold text-brand-earth mb-8">Light & Air</h3>
              <p className="text-sm leading-relaxed opacity-60">Tropical architecture is about breathing. We prioritize natural cross-ventilation and sunlight to reduce energy footprint.</p>
            </div>
            <div>
              <h3 className="text-[14px] uppercase tracking-[0.4em] font-bold text-brand-earth mb-8">True Materials</h3>
              <p className="text-sm leading-relaxed opacity-60">We embrace the honesty of materials. Exposed concrete, warm wood, and raw stone are the palettes we love most.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Invitation */}
      <section className="py-32 bg-brand-beige border-y border-brand-earth/10">
        <div className="max-w-3xl mx-auto text-center px-6">
           <h4 className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-earth mb-8 block underline underline-offset-8">Collaborate With Us</h4>
           <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-12">Building your dream is a shared journey. Let's make it extraordinary.</h3>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
             <a href="/contact" className="px-12 py-5 bg-brand-dark text-white uppercase tracking-widest font-bold text-xs hover:bg-brand-earth transition-all">Get in Touch</a>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
