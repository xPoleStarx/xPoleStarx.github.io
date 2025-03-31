import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ASTRO
          </motion.div>
        </Link>

        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Ana Sayfa</Link></li>
            <li><Link to="/features" onClick={() => setIsOpen(false)}>Özellikler</Link></li>
            <li><Link to="/market" onClick={() => setIsOpen(false)}>Pazar</Link></li>
            <li><Link to="/revenue" onClick={() => setIsOpen(false)}>Gelir Modeli</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>İletişim</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 