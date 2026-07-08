import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pb-20 pt-32 md:pt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="md:col-span-6 lg:col-span-5 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#8C867A] text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
              Better Design, Better Value
            </span>
            <h1 className="text-5xl md:text-[64px] lg:text-[84px] leading-[1] md:leading-[0.9] font-light tracking-tight mb-8">
              Designing Spaces<br />
              <span className="font-sans font-light text-brand-dark/80">That Tell Your Story</span>
            </h1>
            <p className="text-brand-dark/60 text-sm leading-relaxed max-w-[380px] mb-10 md:mb-12">
              Studio arsitektur berbasis di Malang yang merancang harmoni antara karakter ruang, cahaya alami, dan material mentah.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 md:px-10 py-4 md:py-5 bg-brand-dark text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#333] transition-all flex items-center justify-center gap-3 group"
              >
                Konsultasi Gratis
              </Link>
              <Link 
                to="/portfolio" 
                className="px-8 md:px-10 py-4 md:py-5 border border-brand-border text-brand-dark text-[10px] uppercase tracking-widest font-bold hover:bg-brand-border transition-all flex items-center justify-center"
              >
                Lihat Portfolio
              </Link>
            </div>

            {/* Micro Value Props */}
            <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-brand-border pt-8 md:pt-10">
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest">Personalized</div>
                <div className="text-[9px] text-brand-earth tracking-wider">Tailored to your lifestyle</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest">Efficient</div>
                <div className="text-[9px] text-brand-earth tracking-wider">Budget-conscious design</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest">End-to-End</div>
                <div className="text-[9px] text-brand-earth tracking-wider">Seamless execution</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="grid md:col-span-6 lg:col-span-7 h-[400px] md:h-[540px] grid-cols-1 md:grid-cols-2 gap-4 relative mt-12 md:mt-0">
           <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-[#EAE8E4] w-full h-full rounded-tr-[80px] md:rounded-tr-[120px] overflow-hidden relative group"
           >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <div className="text-[10px] uppercase tracking-widest opacity-80">Featured Project</div>
                <div className="text-lg md:text-xl font-sans font-light">The Sunken Residence, Batu</div>
              </div>
           </motion.div>
           
           <div className="hidden md:grid grid-rows-2 gap-4 h-full min-h-0">
              <div className="bg-[#E2DDD5] rounded-bl-[60px] overflow-hidden relative h-full min-h-0">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Interior" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-6 text-[9px] uppercase tracking-widest text-brand-dark/40 font-bold">Interior Design</div>
              </div>
              <div className="bg-brand-border overflow-hidden relative h-full min-h-0">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Commercial" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-6 text-[9px] uppercase tracking-widest text-brand-dark/40 font-bold">Commercial Space</div>
              </div>
           </div>
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left text-[140px] font-bold text-black/[0.02] pointer-events-none uppercase tracking-tighter hidden xl:block">
        Architecture
      </div>
    </section>
  );
}
