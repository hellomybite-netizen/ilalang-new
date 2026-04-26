import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, MapPin, Briefcase, Info, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SERVICE_RATES = {
  'Architecture Design': 150000,
  'Interior Design': 250000,
  'Design & Build': 6500000,
};

const LOCATION_MULTIPLIERS = {
  'Malang': 1.0,
  'Surabaya': 1.1,
  'Jakarta': 1.25,
  'Other': 1.15,
};

export default function CostCalculator() {
  const [service, setService] = useState<keyof typeof SERVICE_RATES>('Architecture Design');
  const [area, setArea] = useState<number>(100);
  const [location, setLocation] = useState<keyof typeof LOCATION_MULTIPLIERS>('Malang');

  const estimate = useMemo(() => {
    const baseRate = SERVICE_RATES[service];
    const multiplier = LOCATION_MULTIPLIERS[location];
    return baseRate * area * multiplier;
  }, [service, area, location]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white border border-brand-border p-8 md:p-12 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Inputs */}
        <div className="space-y-10">
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-earth">
              <Briefcase className="w-3 h-3" /> Tipe Jasa
            </label>
            <div className="grid grid-cols-1 gap-2">
              {Object.keys(SERVICE_RATES).map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s as any)}
                  className={cn(
                    "text-left px-6 py-4 border text-xs uppercase tracking-widest font-bold transition-all",
                    service === s 
                      ? "bg-brand-dark text-white border-brand-dark" 
                      : "border-brand-border hover:border-brand-earth text-brand-dark/60"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-earth">
              <MapPin className="w-3 h-3" /> Lokasi Proyek
            </label>
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value as any)}
              className="w-full px-6 py-4 border border-brand-border text-xs uppercase tracking-widest font-bold outline-none focus:border-brand-earth transition-colors bg-white"
            >
              {Object.keys(LOCATION_MULTIPLIERS).map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-earth">
              Luas Bangunan (m²)
            </label>
            <div className="relative">
              <input 
                type="number" 
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full px-6 py-4 border border-brand-border text-sm font-bold outline-none focus:border-brand-earth transition-colors"
                min="10"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-bold opacity-40">SQ. METERS</span>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="bg-brand-beige p-10 flex flex-col justify-between border border-brand-border/50">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-earth mb-4 block">Initial Estimate</span>
            <motion.div 
              key={estimate}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4"
            >
              {formatCurrency(estimate)}
            </motion.div>
            <p className="text-xs text-brand-dark/50 leading-relaxed uppercase tracking-wider font-medium mb-8">
              Estimasi untuk {service} di {location} dengan luas {area}m².
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4 p-4 bg-brand-border/20 border-l-2 border-brand-earth">
              <Info className="w-4 h-4 text-brand-earth shrink-0" />
              <p className="text-[9px] uppercase tracking-widest leading-relaxed font-bold opacity-60">
                Nilai di atas adalah perkiraan awal (budgeting purpose). Biaya aktual bergantung pada kompleksitas desain, pemilihan material, dan survei lapangan.
              </p>
            </div>

            <a 
              href={`https://wa.me/6281234567890?text=Halo Ilalang Architect, saya baru saja menggunakan kalkulator estimasi untuk jasa ${service} di ${location} dengan luas ${area}m2. Ingin konsultasi lebih lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-8 py-5 bg-brand-dark text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-earth transition-all group"
            >
              Konsultasi Detail
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
