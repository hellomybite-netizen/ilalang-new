import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '@/src/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { projects, categories } from '../data/projects';

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
                className="break-inside-avoid relative group"
              >
                <Link to={`/portfolio/${project.id}`} className="block cursor-pointer">
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
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
