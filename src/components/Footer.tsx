import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
import { motion } from 'framer-motion';

const TikTokIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLocationClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      scrollToSection();
    } else {
      navigate('/');
      setTimeout(scrollToSection, 300);
    }
  };

  const scrollToSection = () => {
    const section = document.getElementById('visit-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("La section 'visit-us' n'a pas été trouvée");
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-[#68696a] text-white py-10 rounded-tl-[50px] rounded-tr-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Version mobile - Design amélioré */}
        <div className="block lg:hidden space-y-12">
          {/* Logo avec halo animé */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="relative h-24 w-24 mx-auto mb-4">
              {/* Halo animé */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-[#ff4b4b] to-[#ff6b6b] rounded-full opacity-20 blur-sm"
              />
              {/* Fond flou */}
              <div className="absolute inset-2 bg-white/10 rounded-full backdrop-blur-sm" />
              {/* Logo */}
              <div className="relative h-full w-full flex items-center justify-center">
                <img
                  src="/images/logo2.png"
                  alt="Zana Logo"
                  className="w-16 h-16 object-contain drop-shadow-lg"
                  style={{
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    filter: 'brightness(1.1)',
                  }}
                />
              </div>
            </div>
            {/* Séparateur dégradé */}
            <div className="h-1 w-16 bg-gradient-to-r from-[#ff4b4b] to-[#ff6b6b] rounded-full mx-auto" />
          </motion.div>

          {/* Liens rapides sous forme de cartes */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text"
            >
              {t('footer.quicklinks')}
            </motion.h3>
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {[
                { to: "/#visit-us", text: t('nav.locations'), onClick: handleLocationClick },
                { to: "/menu", text: t('nav.menu') },
                { to: "/news", text: t('nav.news') },
                { to: "/career", text: t('nav.career') },
                { to: "/feedback", text: t('nav.feedback'), colSpan: true }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${link.colSpan ? 'col-span-2' : ''}`}
                >
                  <Link
                    to={link.to}
                    onClick={link.onClick}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white hover:bg-[#ff4b4b]/30 transition-all duration-300 border border-white/20"
                  >
                    <span className="text-sm font-medium">{link.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact - Cartes arrondies avec icônes stylisées */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text"
            >
              {t('footer.contact')}
            </motion.h3>
            <div className="space-y-4 max-w-sm mx-auto">
              {/* Adresse */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ff4b4b] to-[#ff6b6b] rounded-full flex items-center justify-center shadow-lg">
                      <MapPin size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white/90 text-sm leading-relaxed">
                      C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Téléphone */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ff4b4b] to-[#ff6b6b] rounded-full flex items-center justify-center shadow-lg">
                      <Phone size={18} className="text-white" />
                    </div>
                  </div>
                  <span className="text-white font-medium">671 45 34 34</span>
                </div>
              </motion.div>
              
              {/* Email */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ff4b4b] to-[#ff6b6b] rounded-full flex items-center justify-center shadow-lg">
                      <Mail size={18} className="text-white" />
                    </div>
                  </div>
                  <span className="text-white text-sm">streetpastazana@gmail.com</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Réseaux sociaux - Boutons 3D */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white/80">Suivez-nous</h4>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://www.instagram.com/zanapasta"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-lg transition-all">
                  <Instagram size={28} className="text-white" />
                </div>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-lg transition-all">
                  <TikTokIcon />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Copyright avec séparateur moderne */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center pt-8"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
            <p className="text-white/70 text-sm">
              © 2025 Zana Street Pasta. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>

        {/* Version desktop - Inchangée */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & réseaux sociaux */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center mb-4">
              <div className="h-14 w-14 md:h-20 md:w-20 flex items-center justify-center">
                <img 
                  src="/images/logo2.png"
                  alt="Zana Logo"
                  className="w-full h-full object-contain"
                  style={{ 
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'scale(1.3)',
                  }}
                />
              </div>
            </div>
            <p className="text-white mb-4 text-sm sm:text-base">
              {t('footer.slogan')}
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/zanapasta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#ff4b4b] transition-colors"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#ff4b4b] transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 normal-case text-white">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link 
                  to="/#visit-us" 
                  className="text-white hover:underline hover:decoration-white transition-all block py-1"
                  onClick={handleLocationClick}
                >
                  {t('nav.locations')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white hover:underline hover:decoration-white transition-all block py-1">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white hover:underline hover:decoration-white transition-all block py-1">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-white hover:underline hover:decoration-white transition-all block py-1">
                  {t('nav.career')}
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-white hover:underline hover:decoration-white transition-all block py-1">
                  {t('nav.feedback')}
                </Link>
              </li>
              <li>
                <Link to="/franchising" className="text-white hover:underline hover:decoration-white transition-all block py-1">
                  {t('nav.franchising')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.contact')}</h3>
            <div className="space-y-3 text-white text-sm sm:text-base">
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin size={18} className="mr-2 text-[#f9f5f5]" />
                <span>C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone size={18} className="mr-2 text-[#f9f5f5]" />
                <span>671 45 34 34</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Mail size={18} className="mr-2 text-[#f9f5f5]" />
                <span>streetpastazana@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright desktop */}
        <div className="hidden lg:block border-t border-gray-800 mt-8 pt-8 text-center text-white text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;