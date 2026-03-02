import { useState } from "react";
import { motion } from "motion/react";
import { Mail, FolderOpen, Phone, MessageCircle, Copy, Check } from "lucide-react";
import Modal from "./Modal";

interface HeroProps {
  onScrollToPortfolio?: () => void;
}

export default function Hero({ onScrollToPortfolio }: HeroProps) {
  const [showContact, setShowContact] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWechat, setCopiedWechat] = useState(false);

  const copyToClipboard = async (text: string, type: 'phone' | 'wechat') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedWechat(true);
        setTimeout(() => setCopiedWechat(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
          <button 
            className="brutal-btn-black"
            onClick={() => setShowContact(true)}
          >
            <Mail size={20} /> 联系我
          </button>
          <button 
            className="brutal-btn-white"
            onClick={onScrollToPortfolio}
          >
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

      <Modal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
        className="bg-white border-4 border-black rounded-3xl p-8 max-w-sm w-full mx-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-black">联系我</h3>
          <button 
            onClick={() => setShowContact(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
              
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-black rounded-xl">
            <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 font-medium">手机号</p>
              <p className="text-lg font-bold">17862932858</p>
            </div>
            <button 
              onClick={() => copyToClipboard('17862932858', 'phone')}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              {copiedPhone ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
            </button>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-black rounded-xl">
            <div className="w-12 h-12 bg-brand-pink text-white rounded-full flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 font-medium">微信</p>
              <p className="text-lg font-bold">UNICORN-C</p>
            </div>
            <button 
              onClick={() => copyToClipboard('UNICORN-C', 'wechat')}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              {copiedWechat ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
