import { motion } from 'motion/react';
import { PenTool, Target, Compass, Layers } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const values = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Personalized Design",
    description: "Every project is a unique story. We don't do templates; we design for your specific character and lifestyle."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Efficient Budget",
    description: "Better value means maximizing every Rupiah. We provide transparent planning and cost-effective material choices."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "End-to-End Handling",
    description: "From the first sketch to the final brick. We manage the complexity so you can enjoy the creative process."
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Site Stewardship",
    description: "We work with the land, not against it. Harnessing natural light, wind flow, and material character."
  }
];

export default function Values() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          centered 
          subtitle="Our Value" 
          title="The Foundation of Ilalang" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-brand-earth/10 hover:border-brand-earth transition-all duration-500 bg-white shadow-sm hover:shadow-xl"
            >
              <div className="text-brand-earth mb-8 group-hover:scale-110 transition-transform origin-left duration-500">
                {value.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 tracking-tight">{value.title}</h3>
              <p className="text-sm text-brand-dark/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
