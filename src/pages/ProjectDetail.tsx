import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-beige">
        <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
        <Link to="/portfolio" className="text-brand-earth flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-beige min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 hover:text-brand-earth mb-12 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-brand-earth text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-light tracking-tight text-brand-dark mb-8">
            {project.title}
          </h1>
          
          {project.description && (
            <div className="max-w-2xl text-brand-dark/70 leading-relaxed md:text-lg">
              <p>{project.description}</p>
            </div>
          )}
        </div>

        {/* Main Image */}
        <div className="w-full h-[50vh] md:h-[70vh] mb-12 md:mb-24 overflow-hidden bg-brand-border">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 opacity-50">Project Gallery</h3>
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="break-inside-avoid overflow-hidden bg-brand-border group">
                  <img 
                    src={img} 
                    alt={`${project.title} - Gallery ${idx + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
