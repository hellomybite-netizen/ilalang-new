import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '@/src/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

const projects = [
  {
    id: 1,
    title: "Minimalist Pavilion",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1974",
    aspect: "aspect-[4/5]"
  },
  {
    id: 2,
    title: "Skyline Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069",
    aspect: "aspect-[3/2]"
  },
  {
    id: 3,
    title: "Onyx Kitchen",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1556911223-e270252bd061?auto=format&fit=crop&q=80&w=1964",
    aspect: "aspect-[1/1]"
  },
  {
    id: 4,
    title: "Heritage Renewal",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2067",
    aspect: "aspect-[3/4]"
  },
  {
    id: 5,
    title: "Zen Courtyard",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
    aspect: "aspect-[4/3]"
  },
  {
    id: 6,
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
    aspect: "aspect-[2/3]"
  },
  {
    id: 7,
    title: "Nordic Living",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1916",
    aspect: "aspect-[4/5]"
  },
  {
    id: 8,
    title: "Glass House",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2070",
    aspect: "aspect-[3/2]"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading 
            subtitle="Archive & Exploration" 
            title="Portfolio Collection" 
            className="mb-0"
          />
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all duration-300",
                  activeCategory === cat 
                    ? "bg-brand-dark text-white border-brand-dark" 
                    : "bg-transparent text-brand-dark border-brand-dark/10 hover:border-brand-earth"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-pointer"
              >
                <div className={cn("overflow-hidden bg-brand-border", project.aspect)}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-display font-medium tracking-tight group-hover:text-brand-earth transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mt-1">
                      {project.category}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
