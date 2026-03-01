import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onScrollToPortfolio={scrollToPortfolio} />
              <div id="portfolio">
                <Portfolio />
              </div>
              <AboutSection />
              <Testimonials />
              <Articles />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-20">
                <AboutSection />
                <div className="max-w-7xl mx-auto px-6 py-20">
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="brutal-border p-8 rounded-3xl bg-brand-yellow">
                        <h3 className="text-2xl font-black mb-4">Design</h3>
                        <p className="font-medium">UI Design, UX Research, Prototyping, Design Systems</p>
                      </div>
                      <div className="brutal-border p-8 rounded-3xl bg-brand-pink text-white">
                        <h3 className="text-2xl font-black mb-4">Development</h3>
                        <p className="font-medium">React, TypeScript, Tailwind CSS, Node.js</p>
                      </div>
                      <div className="brutal-border p-8 rounded-3xl bg-brand-blue text-white">
                        <h3 className="text-2xl font-black mb-4">Tools</h3>
                        <p className="font-medium">Figma, VS Code, Adobe Suite, Framer</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Portfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
