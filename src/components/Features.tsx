import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaSearchLocation, FaChartLine } from 'react-icons/fa';
import '../styles/Features.scss';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="feature-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>ASTRO'nun Özellikleri</h2>
          <p>Spor deneyiminizi yeni bir seviyeye taşıyan sosyal platform</p>
        </motion.div>
        
        <div className="features-grid">
          <FeatureCard 
            icon={<FaUsers />}
            title="Takım Oluşturma"
            description="Kendi takımınızı oluşturun, arkadaşlarınızı davet edin ve yeni oyuncular bulun."
            delay={0.1}
          />
          
          <FeatureCard 
            icon={<FaCalendarAlt />}
            title="Maç Organizasyonu"
            description="Maçları kolayca planlayın, katılımcıları yönetin ve bildirimlerle herkesi haberdar edin."
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<FaSearchLocation />}
            title="Tesis Bulma"
            description="Size en yakın spor tesislerini bulun, müsaitlik durumlarını görün ve rezervasyon yapın."
            delay={0.3}
          />
          
          <FeatureCard 
            icon={<FaChartLine />}
            title="Performans Takibi"
            description="Kişisel ve takım performansınızı analiz edin, gelişiminizi takip edin."
            delay={0.4}
          />
        </div>
        
        <motion.div 
          className="features-detail"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="features-content">
            <h3>Neden ASTRO?</h3>
            <ul className="features-list">
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <h4>Organizasyon Zorluğunu Ortadan Kaldırır</h4>
                  <p>Maç ayarlamak için WhatsApp yazışmaları ve telefon trafiğine son verir.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <h4>Oyuncu Bulma Sorununu Çözer</h4>
                  <p>Takımınıza uygun oyuncuları kolayca bulmanızı sağlar.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <h4>Saha Rezervasyonunu Kolaylaştırır</h4>
                  <p>Müsait sahaları bulma ve rezervasyon yapmada dijital çözüm sunar.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <h4>Profesyonel Takım Yönetimi</h4>
                  <p>Amatör takımlar için profesyonel yönetim araçları sağlar.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="features-image">
            <div className="image-container">
              <div className="app-screen">
                <div className="app-nav">
                  <div className="app-logo"></div>
                  <div className="app-menu">
                    <div className="menu-dot"></div>
                    <div className="menu-dot"></div>
                    <div className="menu-dot"></div>
                  </div>
                </div>
                <div className="app-content">
                  <div className="app-card">
                    <div className="card-icon"></div>
                    <div className="card-content">
                      <div className="card-title"></div>
                      <div className="card-text"></div>
                    </div>
                  </div>
                  <div className="app-card">
                    <div className="card-icon"></div>
                    <div className="card-content">
                      <div className="card-title"></div>
                      <div className="card-text"></div>
                    </div>
                  </div>
                  <div className="app-card">
                    <div className="card-icon"></div>
                    <div className="card-content">
                      <div className="card-title"></div>
                      <div className="card-text"></div>
                    </div>
                  </div>
                  <div className="app-activity">
                    <div className="activity-title"></div>
                    <div className="activity-chart">
                      <div className="chart-bar" style={{ height: '60%' }}></div>
                      <div className="chart-bar" style={{ height: '30%' }}></div>
                      <div className="chart-bar" style={{ height: '80%' }}></div>
                      <div className="chart-bar" style={{ height: '40%' }}></div>
                      <div className="chart-bar" style={{ height: '70%' }}></div>
                      <div className="chart-bar" style={{ height: '50%' }}></div>
                      <div className="chart-bar" style={{ height: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="app-nav-bottom">
                  <div className="nav-item"></div>
                  <div className="nav-item"></div>
                  <div className="nav-item"></div>
                  <div className="nav-item"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 