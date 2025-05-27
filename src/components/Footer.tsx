import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLocationClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Empêche le comportement par défaut du lien
    e.preventDefault();
    
    // Si nous sommes déjà sur la page d'accueil
    if (window.location.pathname === '/') {
      scrollToSection();
    } else {
      // Si nous sommes sur une autre page, naviguer vers l'accueil
      navigate('/');
      
      // Scroll après un léger délai pour permettre le chargement
      setTimeout(scrollToSection, 300);
    }
  };

  const scrollToSection = () => {
    const section = document.getElementById('visit-us');
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn("La section 'visit-us' n'a pas été trouvée");
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Colonne Logo et Réseaux Sociaux */}
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
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Delicious pasta made fresh daily with quality ingredients.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/zanapasta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#ff4b4b] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#ff4b4b] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Colonne Liens Rapides */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link 
                  to="/#visit-us" 
                  className="text-gray-400 hover:text-[#ff4b4b] transition-colors block py-1"
                  onClick={handleLocationClick}
                >
                  {t('nav.locations')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-[#ff4b4b] transition-colors block py-1">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-[#ff4b4b] transition-colors block py-1">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-[#ff4b4b] transition-colors block py-1">
                  {t('nav.career')}
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-400 hover:text-[#ff4b4b] transition-colors block py-1">
                  {t('nav.feedback')}
                </Link>
              </li>
              <li>
                <Link to="/franchising" className="text-gray-400 hover:text-[#ff4b4b] transition-colors block py-1">
                  {t('nav.franchising')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin size={18} className="mr-2 text-[#ff4b4b] flex-shrink-0" />
                <span>C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone size={18} className="mr-2 text-[#ff4b4b] flex-shrink-0" />
                <span>671 45 34 34</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Mail size={18} className="mr-2 text-[#ff4b4b] flex-shrink-0" />
                <span>streetpastazana@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;