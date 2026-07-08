import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const featuredProjects = [
  {
    id: "al-azhar-iibs",
    title: "Al Azhar IIBS",
    category: "Educational",
    image: "/images/showcase/al-azhar-iibs-building.jpg",
    location: "Tangerang Selatan",
    gridArea: "lg:col-span-8 lg:row-span-2"
  },
  {
    id: "padel-garden-araya",
    title: "Padel Garden Araya",
    category: "Sport",
    image: "/images/showcase/padel-garden-locker.jpg",
    location: "Malang",
    gridArea: "lg:col-span-4 lg:row-span-1"
  },
  {
    id: "reven-leather",
    title: "Reven Leather",
    category: "Commercial",
    image: "/images/showcase/reven-leather-house.jpg",
    location: "Malang",
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
              className={`relative group overflow-hidden aspect-square md:aspect-video lg:aspect-auto ${project.gridArea}`}
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
                <Link to={`/portfolio/${project.id}`} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
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
