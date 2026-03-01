import { motion } from "motion/react";
import { Edit3 } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "What is the right design tool to choose in 2023?",
    category: "Resources",
    author: "John Carter",
    date: "Oct 28, 2022",
    image: "https://picsum.photos/seed/art1/600/400",
    size: "large"
  },
  {
    id: 2,
    title: "Font sizes in UI design: The complete guide to follow",
    category: "Articles",
    image: "https://picsum.photos/seed/art2/400/300",
    size: "small"
  },
  {
    id: 3,
    title: "6 practical exercises to learn become a pro UI/UX designer",
    category: "News",
    image: "https://picsum.photos/seed/art3/400/300",
    size: "small"
  }
];

export default function Articles() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="text-6xl font-black">Articles & News</h2>
        <button className="brutal-btn-white">
          <Edit3 size={18} /> Browse all articles
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Large Featured Article */}
        <div className="bg-white border-4 border-black rounded-[40px] p-8 space-y-6 flex flex-col">
          <div className="relative aspect-video bg-gray-100 rounded-3xl border-4 border-black overflow-hidden">
            <img src={articles[0].image} alt="" className="w-full h-full object-cover grayscale contrast-110" referrerPolicy="no-referrer" />
            <span className="absolute top-4 right-4 bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
              {articles[0].category}
            </span>
          </div>
          <h3 className="text-3xl font-black leading-tight flex-1">
            {articles[0].title}
          </h3>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-yellow border-2 border-black rounded-full overflow-hidden">
              <img src="https://picsum.photos/seed/john/48/48" alt="" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="font-bold">{articles[0].author}</p>
              <p className="text-sm text-gray-500">{articles[0].date}</p>
            </div>
          </div>
        </div>
        
        {/* Smaller Articles Grid */}
        <div className="space-y-8">
          {articles.slice(1).map((article) => (
            <div key={article.id} className="bg-white border-4 border-black rounded-[40px] p-6 flex gap-6 items-center">
              <div className="w-48 h-40 bg-gray-100 rounded-2xl border-4 border-black overflow-hidden flex-shrink-0 relative">
                <img src={article.image} alt="" className="w-full h-full object-cover grayscale contrast-110" referrerPolicy="no-referrer" />
                <span className="absolute top-2 right-2 bg-black text-white px-3 py-0.5 rounded-full text-xs font-bold">
                  {article.category}
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
