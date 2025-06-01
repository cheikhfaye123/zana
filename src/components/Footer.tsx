import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

const TikTokIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
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
        
        {/* Version mobile */}
        <div className="block lg:hidden space-y-10">
          {/* Logo */}
          <div className="h-20 w-20 mx-auto">
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

          {/* Liens rapides */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/#visit-us"
                  className="text-white hover:underline hover:decoration-white transition-all block"
                  onClick={handleLocationClick}
                >
                  {t('nav.locations')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white hover:underline hover:decoration-white transition-all block">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white hover:underline hover:decoration-white transition-all block">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-white hover:underline hover:decoration-white transition-all block">
                  {t('nav.career')}
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-white hover:underline hover:decoration-white transition-all block">
                  {t('nav.feedback')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Version colonne avec icônes alignées */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.contact')}</h3>
            <div className="flex flex-col items-center space-y-3 text-sm">
              {/* Adresse */}
              <div className="flex w-full max-w-xs mx-auto">
                <div className="flex-shrink-0 mr-3">
                  <MapPin size={18} className="text-[#ff4b4b] mt-0.5" />
                </div>
                <span className="text-left">C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia</span>
              </div>
              
              {/* Téléphone */}
              <div className="flex w-full max-w-xs mx-auto">
                <div className="flex-shrink-0 mr-3">
                  <Phone size={18} className="text-[#ff4b4b]" />
                </div>
                <span>671 45 34 34</span>
              </div>
              
              {/* Email */}
              <div className="flex w-full max-w-xs mx-auto">
                <div className="flex-shrink-0 mr-3">
                  <Mail size={18} className="text-[#ff4b4b]" />
                </div>
                <span>streetpastazana@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center space-x-4">
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
              <TikTokIcon size={28} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white text-sm pt-6 border-t border-gray-700">
            © 2025 Zana Street Pasta. Todos los derechos reservados.
          </div>
        </div>

        {/* Version desktop */}
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
                <TikTokIcon size={28} />
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