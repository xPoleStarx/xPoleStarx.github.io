import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span>ASTRO</span> ile Spor Daha Kolay
          </h1>
          <p>Spor tutkunları için geliştirilen sosyal platform ile maç organize edin, oyuncu bulun ve takımlar oluşturun.</p>
          
          <div className="hero-cta">
            <a href="#features" className="btn btn-primary">Keşfet</a>
            <a href="#download" className="btn btn-outline">Yakında</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="phone-mockup">
            <div className="phone-screen">
              {/* Yer tutucu ekran görüntüsü - gerçek uygulama ekranıyla değiştirilebilir */}
              <div className="app-placeholder">
                <div className="app-header"></div>
                <div className="app-content">
                  <div className="app-card"></div>
                  <div className="app-card"></div>
                  <div className="app-card"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-shape"></div>
    </section>
  );
};

export default Hero; 