import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-black">
          What my clients say<br />
          about <span className="highlight-blue">my work</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed doler.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto mt-20">
        <div className="bg-white border-4 border-black rounded-[40px] p-12 text-left relative z-10">
          <div className="absolute -top-6 left-12 bg-black text-white p-4 rounded-2xl">
            <Quote size={32} fill="white" />
          </div>
          
          <p className="text-2xl font-medium leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim et minim quis nostrud exercitation ullamco laboris.
          </p>
          
          <div>
            <h4 className="font-black text-xl">Lily Woods</h4>
            <p className="text-gray-500">VP of Design at Google</p>
          </div>
        </div>
        
        <div className="absolute -right-20 -bottom-10 w-[300px] h-[300px] bg-brand-pink border-4 border-black rounded-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-20 hidden lg:block">
          <img 
            src="https://picsum.photos/seed/client/300/300" 
            alt="Client" 
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
