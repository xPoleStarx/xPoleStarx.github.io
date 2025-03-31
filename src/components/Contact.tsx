import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Burada form verilerini bir API'ye gönderme işlemi yapılabilir
    
    // Form gönderildikten sonra
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // 3 saniye sonra mesajı kaldır
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>İletişim</h2>
          <p>Projemizle ilgili sorularınız için bizimle iletişime geçin</p>
        </motion.div>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>İletişim Bilgileri</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope size={20} />
              </div>
              <div className="info-content">
                <h4>E-posta</h4>
                <p>info@astroapp.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt size={20} />
              </div>
              <div className="info-content">
                <h4>Lokasyon</h4>
                <p>İstanbul, Türkiye</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaGlobe size={20} />
              </div>
              <div className="info-content">
                <h4>Web Sitesi</h4>
                <p>www.astroapp.com</p>
              </div>
            </div>
            
            <div className="contact-newsletter">
              <h4>Güncellemelerden Haberdar Olun</h4>
              <p>Yeni özellikler ve beta testi hakkında bilgi almak için abone olun.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="E-posta adresiniz" />
                <button type="button" className="btn btn-primary">Abone Ol</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Mesaj Gönder</h3>
            
            {isSubmitted && (
              <div className="form-success">
                <FaPaperPlane />
                <p>Mesajınız başarıyla gönderildi!</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <span>Gönder</span>
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="app-download" id="download">
          <motion.div
            className="download-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>ASTRO Uygulaması Yakında</h3>
            <p>Beta testi için adınızı yazdırın, uygulamayı ilk siz kullanın.</p>
            <div className="download-form">
              <input type="email" placeholder="E-posta adresiniz" />
              <button type="button" className="btn btn-primary">Kayıt Ol</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 