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
              <div id="about" className="pt-24">
                <Portfolio />
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
