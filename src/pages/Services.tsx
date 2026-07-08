import { motion } from 'motion/react';
import SectionHeading from '../components/ui/SectionHeading';
import { Ruler, Pencil, Hammer, Brush } from 'lucide-react';
import CostCalculator from '../components/services/CostCalculator';

const services = [
  {
    icon: <Ruler className="w-10 h-10" />,
    title: "Architecture Design",
    description: "Comprehensive architectural planning from conceptual sketches to detailed structural blueprints.",
    details: ["Conceptual Design", "Technical Drawings", "3D Visualization", "Building Permit (PBG)"]
  },
  {
    icon: <Brush className="w-10 h-10" />,
    title: "Interior Design",
    description: "Curating atmospheres that reflect personal character through material, light, and furniture selection.",
    details: ["Space Planning", "Material Boards", "Custom Furniture", "Lighting Layout"]
  },
  {
    icon: <Hammer className="w-10 h-10" />,
    title: "Design & Build",
    description: "Seamless execution where we translate designs into physical reality with our trusted construction partners.",
    details: ["Construction Mgmt", "Quality Control", "Budget Monitoring", "Post-Build Support"]
  },
  {
    icon: <Pencil className="w-10 h-10" />,
    title: "Branding Space",
    description: "Bridging the gap between corporate identity and physical environment for commercial success.",
    details: ["Retail Identity", "Experience Flow", "Signage Systems", "Thematic Environments"]
  }
];

const workflow = [
  { number: "01", step: "Consultation", desc: "Understanding your vision, needs, and budget boundaries through in-depth discussion." },
  { number: "02", step: "Concept Design", desc: "Exploring sketches, moodboards, and space configurations to find the right soul." },
  { number: "03", step: "Development", desc: "Refining the concept into detailed technical drawings and realistic 3D renderings." },
  { number: "04", step: "Execution", desc: "Supervising or constructing the project to ensure every detail matches the vision." }
];

export default function Services() {
  return (
    <div className="pb-24">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Expertise" 
            title="Our Professional Services" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 bg-white border border-brand-earth/10 hover:border-brand-earth transition-all duration-700 hover:shadow-2xl flex flex-col items-start"
              >
                <div className="text-brand-earth mb-8">{service.icon}</div>
                <h3 className="text-3xl font-display font-medium tracking-tight mb-4">{service.title}</h3>
                <p className="text-brand-dark/70 mb-8 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-brand-beige">
                  {service.details.map(d => (
                    <li key={d} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-60">
                      <div className="w-1 h-1 bg-brand-earth rounded-full" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Estimasi Awal" 
            title="Project Budgeting Tool" 
            className="mb-12"
          />
          <CostCalculator />
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-brand-dark text-brand-beige py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-tight max-w-xl">
              From First Sketch <br />
              <span className="font-sans font-light opacity-60 text-brand-earth">To Final Execution</span>
            </h2>
            <div className="md:max-w-xs pt-4">
              <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-medium">
                Our systematic approach ensures that creativity never loses its way during the construction phase.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {workflow.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-7xl font-display font-bold opacity-10 block mb-4">{item.number}</span>
                <h4 className="text-xl font-display font-bold mb-4 tracking-widest uppercase text-brand-earth">{item.step}</h4>
                <p className="text-sm opacity-60 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background micro grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>
    </div>
  );
}
