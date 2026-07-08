import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-beige text-brand-dark pt-32 pb-16 px-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
        {/* Brand Col */}
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-3 mb-8 group">
            <img src="/logo.png" alt="Ilalang Architect" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs mb-10">
            Designing spaces that harmonize character, light, and function. Based in Malang, serving excellence nationwide.
          </p>
          <div className="flex gap-6 text-[10px] tracking-widest uppercase text-brand-earth font-bold">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Ready for New Project</span>
            </div>
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-earth">Explore</h4>
          <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-widest font-bold">
            <li><Link to="/portfolio" className="hover:text-brand-earth transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-brand-earth transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-earth transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-earth transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-earth">Contact Information</h4>
          <ul className="flex flex-col gap-4 text-[11px] font-bold opacity-60 tracking-widest uppercase">
            <li>Jl. Simpang Pandan Arum No.1<br />Jatimulyo, Kec. Lowokwaru<br />Kota Malang, Jawa Timur 65141</li>
            <li>+62 811-3198-800</li>
            <li>hello@ilalangarch.com</li>
          </ul>
        </div>

        {/* Social Column */}
        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-earth">Digital Presence</h4>
          <div className="flex gap-10 text-[10px] tracking-widest uppercase font-bold">
            <a href="https://www.instagram.com/ilalang.architect/" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">Instagram</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
        <p>© {currentYear} Ilalang Architect. Crafted with Purpose.</p>
        <div className="flex gap-8">
          <Link to="#" className="hover:text-brand-earth transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-brand-earth transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
