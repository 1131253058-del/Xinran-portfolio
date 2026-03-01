import { motion } from "motion/react";
import { Mail, FolderOpen } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我' },
    { id: 'portfolio', label: '作品' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="bg-white border-4 border-black rounded-full py-3 px-6 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-4 border-black rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm font-bold transition-colors hover:text-brand-pink ${
                activeTab === tab.id ? 'text-brand-pink' : 'text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button className="bg-black text-white p-2 rounded-lg hover:scale-110 transition-transform">
          <Mail size={18} />
        </button>
      </div>
    </nav>
  );
}
