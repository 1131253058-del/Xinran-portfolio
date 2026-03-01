import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Briefcase, Heart, GraduationCap, Star, Cat, Palmtree, X, ChevronLeft, ChevronRight } from "lucide-react";

const timeline = [
  { year: "未来", content: "未完待续…", icon: Sparkles, type: "main" },
  { year: "2026年过年", content: "带着爸妈去了三亚，还住了顶顶好的酒店，养闺女就是好啊！", icon: Palmtree, type: "side", images: ["爸爸三亚.jpg", "妈妈三亚.jpg"] },
  { year: "2025年底", content: "诶嘿，姐又上班了", icon: Briefcase, type: "main", images: ["滴滴.jpg"] },
  { year: "2025年", content: "靠，被裁员了，但是也结婚了", icon: Heart, type: "main" },
  { year: "2024年5月", content: "养了第二只加菲猫，墨墨", icon: Cat, type: "side" },
  { year: "2023年9月", content: "养了第一只加菲猫，脸脸", icon: Cat, type: "side" },
  { year: "2022年1月", content: "在网易上班了，开始了漫长的牛马生涯", icon: Briefcase, type: "main" },
  { year: "2021年12月", content: "英国布里斯托大学硕士毕业，社会学赐予我灵魂", icon: GraduationCap, type: "main" },
  { year: "2020年6月", content: "山东女子学院本科毕业，我为女院代言", icon: GraduationCap, type: "main" },
  { year: "1996年11月", content: "出生，一枚腹黑的天蝎座", icon: Star, type: "main" }
];

export default function Portfolio() {
  const [showImages, setShowImages] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (images: string[]) => {
    setSelectedImages(images);
    setCurrentIndex(0);
    setShowImages(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
  };

  return (
    <section className="pt-20 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black">关于<span className="highlight-pink">我</span></h2>
        <div className="text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          <span className="text-gray-600">循规蹈矩的人生里，</span>
          <span className="text-brand-pink font-bold">掺杂着些些叛逆</span>
          <span className="text-gray-600">...</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2"></div>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 bg-brand-pink border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="text-2xl font-black text-white">主线任务</h3>
              </motion.div>
            </div>
            <div className="text-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 bg-brand-blue border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="text-2xl font-black text-white">支线任务</h3>
              </motion.div>
            </div>
          </div>
          
          {timeline.map((item, index) => {
            const IconComponent = item.icon;
            const isMain = item.type === "main";
            const hasImages = item.images && item.images.length > 0;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative flex items-center gap-4 pb-8"
              >
                {isMain ? (
                  <>
                    <div 
                      className={`flex-1 text-right ${hasImages ? 'cursor-pointer hover:underline' : ''}`}
                      onClick={() => hasImages && handleImageClick(item.images!)}
                    >
                      <span className={`text-lg font-bold ${hasImages ? 'text-brand-pink' : 'text-brand-pink'}`}>{item.year}</span>
                      <p className="text-lg font-medium">{item.content}</p>
                    </div>
                    <div 
                      className={`w-12 h-12 border-4 border-black rounded-full flex items-center justify-center z-10 shrink-0 ${hasImages ? 'cursor-pointer hover:scale-110 transition-transform' : ''} ${isMain ? 'bg-brand-yellow' : 'bg-brand-blue'}`}
                      onClick={() => hasImages && handleImageClick(item.images!)}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div className="flex-1"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1"></div>
                    <div 
                      className="w-12 h-12 bg-brand-blue border-4 border-black rounded-full flex items-center justify-center z-10 shrink-0 cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => hasImages && handleImageClick(item.images!)}
                    >
                      <IconComponent size={18} className="text-white" />
                    </div>
                    <div 
                      className="flex-1 text-left cursor-pointer hover:underline"
                      onClick={() => hasImages && handleImageClick(item.images!)}
                    >
                      <span className="text-lg font-bold text-brand-blue">{item.year}</span>
                      <p className="text-lg font-medium">{item.content}</p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {showImages && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
            onClick={() => setShowImages(false)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowImages(false)}
                className="absolute -top-12 right-0 text-white hover:scale-110 transition-transform"
              >
                <X size={40} />
              </button>
              
              <div className="flex items-center justify-center gap-4 group">
                {selectedImages.length > 1 && (
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 text-white hover:scale-110 transition-transform opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={48} />
                  </button>
                )}
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    src={`/${selectedImages[currentIndex]}`}
                    alt={selectedImages[currentIndex]}
                    className="w-full max-h-[70vh] object-contain border-4 border-white rounded-xl"
                  />
                </AnimatePresence>
                
                {selectedImages.length > 1 && (
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 text-white hover:scale-110 transition-transform opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={48} />
                  </button>
                )}
              </div>
              
              {selectedImages.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {selectedImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentIndex ? 'bg-white' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
