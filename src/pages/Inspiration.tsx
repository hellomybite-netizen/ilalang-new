import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import { ArrowRight, Clock } from 'lucide-react';
import { articles } from '../data/articles';

export default function Inspiration() {
  return (
    <div className="pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Journal & Insights" 
          title="Architectural Inspiration" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/inspiration/${article.id}`} className="block cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-brand-border">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-brand-earth mb-4">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 bg-brand-earth/30 rounded-full" />
                  <div className="flex items-center gap-1 opacity-60">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-medium tracking-tight mb-4 group-hover:text-brand-earth transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-brand-dark/60 leading-relaxed mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 text-brand-earth" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        
        {/* Newsletter Signup Banner */}
        <section className="mt-32 p-12 md:p-20 bg-white border border-brand-earth/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h3 className="text-3xl font-display font-medium tracking-tight mb-4">Join our architectural journal</h3>
            <p className="text-sm text-brand-dark/60 leading-relaxed">Weekly insights on design trends, material innovation, and studio updates curated for enthusiasts.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-8 py-4 bg-brand-beige border border-transparent focus:border-brand-earth outline-none w-full sm:min-w-[300px]"
            />
            <button className="px-10 py-4 bg-brand-dark text-white uppercase tracking-widest font-bold text-xs hover:bg-brand-earth transition-all">Join Journal</button>
          </div>
        </section>
      </div>
    </div>
  );
}
