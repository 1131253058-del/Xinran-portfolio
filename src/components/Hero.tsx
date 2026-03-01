import { motion } from "motion/react";
import { Mail, FolderOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl lg:text-8xl font-black leading-tight"
        >
          你好呀！我是<span className="highlight-pink">胡汉三</span><br />
          一名<span className="highlight-blue">产品经理</span><br />
          来自北京
        </motion.h1>
        
        <p className="text-xl text-gray-600 max-w-lg">
          热爱产品设计，专注于用户体验与交互优化，致力于打造优秀的产品 ✨
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="brutal-btn-black">
            <Mail size={20} /> 联系我
          </button>
          <button className="brutal-btn-white">
            <FolderOpen size={20} /> 查看作品
          </button>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="relative cursor-pointer"
      >
        <div className="w-[400px] h-[450px] bg-brand-yellow border-4 border-black rounded-[40px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex items-end justify-center relative">
          <img 
            src="/avatar.png" 
            alt="胡汉三" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl">💖</div>
        </div>
      </motion.div>
    </section>
  );
}
