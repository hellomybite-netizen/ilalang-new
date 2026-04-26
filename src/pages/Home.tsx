import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Showcase from '../components/home/Showcase';
import Values from '../components/home/Values';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <div className="bg-brand-beige">
      <Hero />
      <Showcase />
      <Values />
      <Testimonials />
      
      {/* Start Project CTA */}
      <section className="py-32 px-6 md:px-12 text-center bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-earth mb-8 block">
              Ready to manifest your vision?
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-12">
              Start Your Project <br />
              <span className="serif italic font-light opacity-60">With Ilalang Today</span>
            </h2>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-brand-dark text-white uppercase tracking-[0.2em] font-bold text-sm hover:bg-brand-earth transition-all group"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-beige -z-0 translate-x-1/2 rotate-12 opacity-50" />
      </section>
    </div>
  );
}
