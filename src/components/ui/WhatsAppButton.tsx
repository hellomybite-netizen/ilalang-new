import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '6281234567890'; // Replace with actual number
  const message = encodeURIComponent('Halo Ilalang Architect, saya ingin konsultasi mengenai projek saya.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-12 right-12 flex flex-col items-end gap-3 z-[60] pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white px-4 py-2 shadow-sm rounded-full text-[10px] uppercase tracking-widest border border-brand-border animate-bounce pointer-events-auto"
      >
          Chat with us
      </motion.div>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-dark text-white flex items-center justify-center rounded-full shadow-xl hover:bg-brand-earth transition-colors pointer-events-auto"
        title="Konsultasi WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
