import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const featuredProjects = [
  {
    id: 1,
    title: "The Linear House",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070",
    location: "Malang",
    gridArea: "lg:col-span-8 lg:row-span-2"
  },
  {
    id: 2,
    title: "Oak & Stone Studio",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070",
    location: "Batu",
    gridArea: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: 3,
    title: "Urban Loft Branding",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2070",
    location: "Surabaya",
    gridArea: "lg:col-span-4 lg:row-span-1"
  }
];

export default function Showcase() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading 
            subtitle="Selected Works" 
            title="A Collection of Character" 
            className="mb-0 md:max-w-xl"
          />
          <Link 
            to="/portfolio" 
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold pb-2 border-b border-brand-earth/30 hover:border-brand-earth transition-all"
          >
            View All Portfolio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[800px]">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden ${project.gridArea}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{project.category} // {project.location}</span>
                <h3 className="text-3xl font-display font-medium tracking-tight mb-4">{project.title}</h3>
                <Link to={`/portfolio`} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                  View Detail <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
