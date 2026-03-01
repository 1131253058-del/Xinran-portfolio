import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, X, Lock } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (password === "eiyouwei") {
      setShowPasswordModal(false);
      setPassword("");
      setError(false);
      window.open("/牛欣然简历.pdf", "_blank");
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const tabs = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我' },
    { id: 'portfolio', label: '作品' },
  ];

  return (
    <>
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
                className={`text-lg font-bold transition-colors hover:text-brand-pink ${
                  activeTab === tab.id ? 'text-brand-pink' : 'text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setShowPasswordModal(true)}
            className="bg-black text-white p-2 rounded-lg hover:scale-110 transition-transform"
          >
            <FileText size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {showPasswordModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => {
              setShowPasswordModal(false);
              setPassword("");
              setError(false);
            }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white border-4 border-black rounded-3xl p-8 max-w-sm w-full mx-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-black text-white rounded-full flex items-center justify-center">
                    <Lock size={20} />
                  </div>
                  <h3 className="text-xl font-black">查看简历</h3>
                </div>
                <button 
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword("");
                    setError(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <p className="text-gray-500 mb-4">请输入密码访问简历</p>
              
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                onKeyPress={handleKeyPress}
                placeholder="请输入密码"
                className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 ${
                  error 
                    ? "border-red-500 focus:ring-red-200" 
                    : "border-black focus:ring-gray-200"
                }`}
              />
              
              {error && (
                <p className="text-red-500 text-sm mt-2">密码错误，请重试</p>
              )}
              
              <button
                onClick={handleSubmit}
                className="w-full mt-4 bg-black text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform"
              >
                确认
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
