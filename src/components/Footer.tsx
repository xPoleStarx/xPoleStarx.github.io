import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>ASTRO</h2>
          <p>Spor tutkunları için geliştirilen sosyal platform</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Sayfalar</h3>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/features">Özellikler</Link></li>
              <li><Link to="/market">Pazar</Link></li>
              <li><Link to="/revenue">Gelir Modeli</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>İletişim</h3>
            <ul>
              <li>info@astroapp.com</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Takip Edin</h3>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ASTRO. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 