import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function WhatsAppButton() {
  const location = useLocation();
  const whatsappNumber = '628113198800';
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const isLuxuryHouseLanding = normalizedPath === '/arsitek-rumah-mewah';
  const message = encodeURIComponent(
    isLuxuryHouseLanding
      ? 'Halo Ilalang Architect, saya tertarik konsultasi desain rumah mewah. Lokasi proyek saya di ... dan luas lahannya sekitar ... m².'
      : 'Halo Ilalang Architect, saya ingin konsultasi mengenai projek saya.',
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const trackClick = () => {
    const browserWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    browserWindow.dataLayer?.push({
      event: 'generate_lead',
      lead_method: 'whatsapp',
      landing_page: isLuxuryHouseLanding ? 'arsitek_rumah_mewah' : normalizedPath,
      cta_position: 'floating',
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 flex-col items-end gap-3 z-[60] pointer-events-none md:bottom-12 md:right-12 ${isLuxuryHouseLanding ? 'hidden md:flex' : 'flex'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden bg-white px-4 py-2 shadow-sm rounded-full text-[10px] uppercase tracking-widest border border-brand-border animate-bounce pointer-events-auto md:block"
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
        onClick={trackClick}
        className="w-14 h-14 bg-brand-dark text-white flex items-center justify-center rounded-full shadow-xl hover:bg-brand-earth transition-colors pointer-events-auto"
        title="Konsultasi WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
