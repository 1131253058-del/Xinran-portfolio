import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Design",
    image: "https://picsum.photos/seed/proj1/800/600",
    color: "bg-brand-blue"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/proj2/800/600",
    color: "bg-brand-pink"
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    image: "https://picsum.photos/seed/proj3/800/600",
    color: "bg-brand-yellow"
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Product Design",
    image: "https://picsum.photos/seed/proj4/800/600",
    color: "bg-brand-blue"
  }
];

export default function Portfolio() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black">My <span className="highlight-pink">Work</span></h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of my recent projects and design experiments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -10 }}
            className="bg-white border-4 border-black rounded-[40px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
          >
            <div className={`aspect-video ${project.color} border-b-4 border-black overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex justify-between items-center">
              <div>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-black mt-1">{project.title}</h3>
              </div>
              <div className="w-12 h-12 border-4 border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                →
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
