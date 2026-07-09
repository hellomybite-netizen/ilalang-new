import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} | Ilalang Architect`;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', article.metaDescription);
    }
    return () => {
      document.title = 'Ilalang Architect | Better Design, Better Value';
    };
  }, [id, article]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-beige">
        <h1 className="text-4xl font-display mb-4">Article Not Found</h1>
        <Link to="/inspiration" className="text-brand-earth flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Inspiration
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-beige min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link to="/inspiration" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 hover:text-brand-earth mb-12 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Inspiration
        </Link>

        <article>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-brand-earth mb-4">
            <span>{article.category}</span>
            <span className="w-1 h-1 bg-brand-earth/30 rounded-full" />
            <time className="flex items-center gap-1 opacity-60">{article.date}</time>
            <span className="w-1 h-1 bg-brand-earth/30 rounded-full" />
            <div className="flex items-center gap-1 opacity-60">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-light tracking-tight text-brand-dark mb-8">
            {article.title}
          </h1>

          <p className="text-lg text-brand-dark/70 leading-relaxed mb-10">
            {article.excerpt}
          </p>

          <div className="aspect-[16/9] overflow-hidden mb-12 bg-brand-border">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose-content space-y-6">
            {article.content.map((block, idx) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-display font-medium tracking-tight text-brand-dark mt-12 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'img') {
                return (
                  <figure key={idx} className="my-10">
                    <div className="aspect-[16/9] overflow-hidden bg-brand-border">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="text-xs text-brand-dark/50 mt-3 text-center italic">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              return (
                <p key={idx} className="text-base text-brand-dark/80 leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>
        </article>

        <div className="mt-20 pt-10 border-t border-brand-border flex justify-between items-center">
          <Link to="/inspiration" className="text-[10px] uppercase tracking-widest font-bold text-brand-earth hover:underline">
            ← All Articles
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-brand-dark text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brand-earth transition-all">
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </div>
  );
}
