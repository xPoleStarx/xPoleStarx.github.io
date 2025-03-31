import React from 'react';
import { motion } from 'framer-motion';
import { FaPercentage, FaCrown, FaAd, FaShoppingBag, FaBuilding } from 'react-icons/fa';
import '../styles/Revenue.scss';

interface RevenueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  delay: number;
}

const RevenueItem: React.FC<RevenueItemProps> = ({ icon, title, description, details, delay }) => {
  return (
    <motion.div 
      className="revenue-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="revenue-icon">{icon}</div>
      <div className="revenue-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="revenue-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Revenue: React.FC = () => {
  return (
    <section className="revenue" id="revenue">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Gelir Modeli</h2>
          <p>ASTRO'nun sürdürülebilir büyümesini sağlayan çeşitlendirilmiş gelir stratejisi</p>
        </motion.div>
        
        <div className="revenue-model">
          <RevenueItem 
            icon={<FaPercentage />}
            title="Komisyon Bazlı Gelir"
            description="Platform üzerinden yapılan işlemlerden alınan komisyonlar"
            details={[
              "Saha rezervasyonlarından %8-12 komisyon",
              "Maç katılım ücretlerinden %5-10 komisyon"
            ]}
            delay={0.1}
          />
          
          <RevenueItem 
            icon={<FaCrown />}
            title="Freemium Model"
            description="Kullanıcı türüne göre özelleştirilmiş premium abonelikler"
            details={[
              "Oyuncu Premium (39.90 TL/ay): Sınırsız maç başvurusu, gelişmiş istatistikler",
              "Takım Premium (99.90 TL/ay): Takım yönetim araçları, turnuva düzenleme",
              "Tesis Premium (299.90 TL/ay): Rezervasyon yönetimi, öne çıkma"
            ]}
            delay={0.2}
          />
          
          <RevenueItem 
            icon={<FaAd />}
            title="Reklam Gelirleri"
            description="Platform içi reklam fırsatları"
            details={[
              "Uygulama içi reklamlar",
              "Sponsorlu maçlar ve tesisler"
            ]}
            delay={0.3}
          />
          
          <RevenueItem 
            icon={<FaShoppingBag />}
            title="Yan Hizmetler"
            description="Ekosistemi genişleten ek hizmet gelirleri"
            details={[
              "Spor ekipmanı satış komisyonu",
              "Turnuva organizasyonu",
              "Antrenman ve eğitim paketleri"
            ]}
            delay={0.4}
          />
          
          <RevenueItem 
            icon={<FaBuilding />}
            title="Kurumsal Çözümler"
            description="Şirketler ve tesisler için özel çözümler"
            details={[
              "Şirketler için özel spor organizasyonları",
              "Spor tesisleri için rezervasyon API entegrasyonu"
            ]}
            delay={0.5}
          />
        </div>
        
        <motion.div 
          className="revenue-strategy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Büyüme Stratejisi</h3>
          <div className="revenue-timeline">
            <div className="timeline-item">
              <h4>1. yıl</h4>
              <p>Kullanıcı tabanını genişletme, komisyon ve reklam gelirleri</p>
            </div>
            
            <div className="timeline-item">
              <h4>2. yıl</h4>
              <p>Premium abonelik ve kurumsal çözümler</p>
            </div>
            
            <div className="timeline-item">
              <h4>5 yıllık projeksiyon</h4>
              <div className="revenue-projection">
                <div className="projection-item">
                  <div className="projection-bar" style={{ width: '40%' }}></div>
                  <div className="projection-label">Komisyon Gelirleri: %40</div>
                </div>
                
                <div className="projection-item">
                  <div className="projection-bar" style={{ width: '35%' }}></div>
                  <div className="projection-label">Premium Üye Gelirleri: %35</div>
                </div>
                
                <div className="projection-item">
                  <div className="projection-bar" style={{ width: '15%' }}></div>
                  <div className="projection-label">Reklam Gelirleri: %15</div>
                </div>
                
                <div className="projection-item">
                  <div className="projection-bar" style={{ width: '10%' }}></div>
                  <div className="projection-label">Diğer Gelirler: %10</div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="strategy-conclusion">
            Bu model, ASTRO'nun büyük bir ekosistem oluşturarak sürekli büyüyen bir platform olmasını sağlayacaktır.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Revenue; 