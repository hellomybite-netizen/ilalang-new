import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  level?: 'h1' | 'h2';
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  className, 
  centered = false,
  level = 'h2',
}: SectionHeadingProps) {
  const Heading = level === 'h1' ? motion.h1 : motion.h2;

  return (
    <div className={cn(
      'mb-12 md:mb-20',
      centered ? 'text-center' : 'text-left',
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-earth mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <Heading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-medium tracking-tighter"
      >
        {title}
      </Heading>
    </div>
  );
}
