import { useState } from "react";
import { motion } from "motion/react";
import { Edit3, Gamepad2, ChefHat, Package } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "2024年7月，新一代AI全科学习助手小P上线各大应用市场",
    category: "产品",
    author: "胡汉三",
    date: "2024年7月",
    image: "/工作1.jpg",
    size: "large",
    tab: "product"
  },
  {
    id: 2,
    title: "2024WAIC，有道小P展台",
    category: "产品",
    image: "/工作2.jpg",
    size: "small",
    tab: "product"
  },
  {
    id: 3,
    title: "2024WAIC，为参观者讲解小P功能",
    category: "产品",
    image: "/工作3.jpg",
    size: "small",
    tab: "product"
  },
  {
    id: 4,
    title: "红烧肉 - 家的味道",
    category: "厨艺",
    image: "https://picsum.photos/seed/food1/400/300",
    size: "small",
    tab: "cooking"
  },
  {
    id: 5,
    title: "麻婆豆腐 - 麻辣鲜香",
    category: "厨艺",
    image: "https://picsum.photos/seed/food2/400/300",
    size: "small",
    tab: "cooking"
  },
  {
    id: 6,
    title: "塞尔达传说 - 旷野之息",
    category: "游戏",
    image: "/游戏1.jpg",
    size: "small",
    tab: "game"
  },
  {
    id: 7,
    title: "永不能放弃的法师-小甄姬",
    category: "游戏",
    image: "/游戏1.jpg",
    size: "small",
    tab: "game"
  }
];

const tabs = [
  { id: 'product', label: '产品', icon: Package },
  { id: 'cooking', label: '厨艺', icon: ChefHat },
  { id: 'game', label: '游戏', icon: Gamepad2 },
];

export default function Articles() {
  const [activeTab, setActiveTab] = useState('product');

  const filteredArticles = articles.filter(article => article.tab === activeTab);
  const featuredArticle = filteredArticles[0];
  const smallArticles = filteredArticles.slice(1);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <h2 className="text-6xl font-black">
          我的<span className="highlight-blue">作品</span>
        </h2>
        
        <div className="flex gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 border-3 border-black rounded-xl font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]' 
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border-4 border-black rounded-[40px] p-8 space-y-6 flex flex-col">
            <div className="relative bg-gray-100 rounded-3xl border-4 border-black overflow-hidden flex items-center justify-center">
              <img src={featuredArticle.image} alt="" className="w-auto max-w-full h-auto max-h-80 object-contain" referrerPolicy="no-referrer" />
              <span className="absolute top-4 right-4 bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
                {featuredArticle.category}
              </span>
            </div>
            <h3 className="text-3xl font-black leading-tight flex-1">
              {featuredArticle.title}
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-yellow border-2 border-black rounded-full overflow-hidden">
                <img src="/avatar.png" alt="" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold">{featuredArticle.author}</p>
                <p className="text-sm text-gray-500">{featuredArticle.date}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {smallArticles.map((article) => (
              <div key={article.id} className="bg-white border-4 border-black rounded-[40px] p-6 flex gap-6 items-center">
                <div className="w-48 h-40 bg-gray-100 rounded-2xl border-4 border-black overflow-hidden flex-shrink-0 relative flex items-center justify-center">
                  <img src={article.image} alt="" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  <span className="absolute top-2 right-2 bg-black text-white px-3 py-0.5 rounded-full text-xs font-bold">
                    {article.category}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-black leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    点击查看详情
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">暂无内容</p>
        </div>
      )}
    </section>
  );
}
