import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Newsletter */}
        <div className="bg-white rounded-[40px] p-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
             <Mail size={40} className="text-black" />
          </div>
          <h2 className="text-3xl font-black text-black flex-1">Subscribe to my newsletter</h2>
          <div className="w-full lg:w-auto flex border-4 border-black rounded-full p-1 overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-3 flex-1 outline-none text-black font-medium"
            />
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-yellow border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-black rounded-full" />
              </div>
              <span className="text-2xl font-black">Paperfolio X</span>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor amet consecte adipiscing elit. Lectus mattis nunc.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                  i === 0 ? 'bg-brand-blue' : i === 1 ? 'bg-brand-blue' : i === 2 ? 'bg-brand-pink' : i === 3 ? 'bg-brand-pink' : 'bg-brand-pink'
                }`}>
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Pages</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Single Project</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Utility Pages</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Style Guide</a></li>
              <li><a href="#" className="hover:text-white">Start Here</a></li>
              <li><a href="#" className="hover:text-white">404 Not Found</a></li>
              <li><a href="#" className="hover:text-white">Password protected</a></li>
              <li><a href="#" className="hover:text-white">Licenses</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2"><Mail size={18} /> nikhil@helpinggeeks.com</li>
              <li className="flex items-center gap-2">📞 +91-9000057810</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 text-center text-gray-500 text-sm">
          Made by Nikhil - Powered by V0
        </div>
      </div>
    </footer>
  );
}
