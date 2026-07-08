import { motion } from 'motion/react';
import SectionHeading from '../components/ui/SectionHeading';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Get In Touch" 
          title="Start Your Journey" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7 bg-white p-10 md:p-16 shadow-xl border border-brand-earth/5"
          >
            <h3 className="text-3xl font-display font-medium tracking-tight mb-8">Share Your Ideas</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Full Name</label>
                  <input type="text" className="w-full border-b border-brand-earth/20 focus:border-brand-earth outline-none py-3 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Email Address</label>
                  <input type="email" className="w-full border-b border-brand-earth/20 focus:border-brand-earth outline-none py-3 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Service Interest</label>
                <select className="w-full border-b border-brand-earth/20 focus:border-brand-earth outline-none py-3 transition-colors bg-white">
                  <option>Architecture Design</option>
                  <option>Interior Design</option>
                  <option>Design & Build</option>
                  <option>Branding Space</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Your Message</label>
                <textarea rows={4} className="w-full border-b border-brand-earth/20 focus:border-brand-earth outline-none py-3 transition-colors resize-none" placeholder="Tell us about your project, location, and vision..." />
              </div>

              <button className="flex items-center gap-4 px-12 py-5 bg-brand-dark text-white uppercase tracking-[0.2em] font-bold text-xs hover:bg-brand-earth transition-all shadow-lg group">
                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Info */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-earth mb-6">Contact Info</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-earth/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-brand-earth" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Call Us</p>
                      <p className="font-display font-medium">+62 811-3198-800</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-earth/20 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-brand-earth" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Email Us</p>
                      <p className="font-display font-medium">hello@ilalangarch.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-earth/20 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-brand-earth" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Visit Studio</p>
                      <p className="font-display font-medium leading-relaxed">Jl. Simpang Pandan Arum No.1, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-earth mb-6">Social Discovery</h4>
                <a href="#" className="flex items-center gap-4 group">
                   <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center group-hover:bg-brand-earth transition-colors">
                     <Instagram className="w-4 h-4" />
                   </div>
                   <p className="text-sm font-display font-bold tracking-widest uppercase">@ilalang.arch</p>
                </a>
              </div>
            </motion.div>

            {/* Mock Google Map */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="w-full aspect-[16/9] bg-brand-border overflow-hidden group border border-brand-earth/10"
            >
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2066" 
                 alt="Malang Map Placeholder" 
                 className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-125"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-brand-beige p-6 shadow-2xl relative">
                   <MapPin className="w-8 h-8 text-brand-earth mb-2 mx-auto" />
                   <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark">Ilalang Studio — Malang</p>
                   <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-beige rotate-45" />
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
