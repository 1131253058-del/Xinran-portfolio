import { motion } from "motion/react";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      <div className="relative">
        <div className="w-[400px] h-[400px] bg-brand-pink border-4 border-black rounded-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <img 
            src="https://picsum.photos/seed/about/400/400" 
            alt="About Me" 
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <div className="flex-1 space-y-8">
        <h2 className="text-5xl font-black">
          Who's behind all this<br />
          <span className="highlight-blue">great work?</span>
        </h2>
        
        <p className="text-lg text-gray-600">
          Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet integer.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-brand-blue border-2 border-black rounded mt-1" />
            <div>
              <h4 className="font-bold text-xl">15+ years of experience</h4>
              <p className="text-gray-500">Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-brand-pink border-2 border-black rounded mt-1" />
            <div>
              <h4 className="font-bold text-xl">100+ successfull projects</h4>
              <p className="text-gray-500">Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.</p>
            </div>
          </div>
        </div>
        
        <button className="brutal-btn-black">
          <User size={20} /> More about me
        </button>
      </div>
    </section>
  );
}
