import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Market.scss';

const Market: React.FC = () => {
  return (
    <section className="market" id="market">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Hedef Pazar</h2>
          <p>ASTRO, büyüyen bir pazara hitap eden yenilikçi bir çözüm sunuyor</p>
        </motion.div>
        
        <div className="market-content">
          <motion.div 
            className="market-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Hedef Kitle</h3>
            <ul className="market-list">
              <li>Spor yapan 18-45 yaş arası bireyler</li>
              <li>Amatör takımlar ve yöneticileri</li>
              <li>Spor tesisleri</li>
              <li>Rekreasyonel sporcular</li>
              <li>Kurumsal müşteriler</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="market-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Pazar Büyüklüğü</h3>
            <div className="market-stats">
              <div className="stat">
                <h4>Türkiye</h4>
                <ul>
                  <li>20M aktif sporcu</li>
                  <li>10.000+ spor tesisi</li>
                  <li>3 milyar TL halı saha pazarı</li>
                </ul>
              </div>
              <div className="stat">
                <h4>Küresel</h4>
                <ul>
                  <li>2026'ya kadar 30 milyar dolarlık spor teknolojisi pazarı</li>
                  <li>Yıllık %15 büyüyen dijital spor platformları</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="market-competitors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Pazardaki Mevcut Çözümler</h3>
          
          <div className="competitors-grid">
            <div className="competitor-card">
              <h4>İletişim Uygulamaları</h4>
              <p>WhatsApp, Telegram grupları</p>
            </div>
            
            <div className="competitor-card">
              <h4>Sosyal Medya</h4>
              <p>Facebook grupları, Instagram paylaşımları</p>
            </div>
            
            <div className="competitor-card">
              <h4>Rezervasyon Siteleri</h4>
              <p>Spor tesislerinin web siteleri, telefonla rezervasyon</p>
            </div>
            
            <div className="competitor-card">
              <h4>Genel İlanlar</h4>
              <p>Sahibinden.com, forum siteleri</p>
            </div>
          </div>
          
          <div className="market-conclusion">
            <h3>ASTRO'nun Farkı</h3>
            <p>ASTRO, sadece rezervasyon veya organizasyon değil, spor ekosistemini kapsayan sosyal ağ ve takım yönetimi gibi bütünleşik bir çözüm sunar.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market; 