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
    <footer className="relative bg-[#68696a] text-white py-16 rounded-tl-[50px] rounded-tr-[50px] overflow-hidden">
      {/* Effet de fond avec gradient et particules */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#68696a] via-[#5a5b5c] to-[#4a4b4c] opacity-90"></div>
      
      {/* Formes géométriques décoratives */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff4b4b]/10 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#ff4b4b]/8 to-transparent rounded-full blur-2xl transform -translate-x-24 translate-y-24"></div>
      
      {/* Lignes décoratives */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Version mobile */}
        <div className="block lg:hidden space-y-12">
          {/* Logo avec effet de halo */}
          <div className="relative h-24 w-24 mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff4b4b]/20 to-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10 hover:border-[#ff4b4b]/30 transition-all duration-300">
              <img
                src="/images/logo2.png"
                alt="Zana Logo"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                style={{
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'scale(1.3)',
                }}
              />
            </div>
          </div>

          {/* Liens rapides avec cartes */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              <span className="relative z-10">{t('footer.quicklinks')}</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#ff4b4b] to-white/50"></div>
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff4b4b]/20 transition-all duration-300">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/#visit-us"
                    className="group flex items-center justify-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300"
                    onClick={handleLocationClick}
                  >
                    <span className="relative">{t('nav.locations')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="group flex items-center justify-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.menu')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="group flex items-center justify-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.news')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="group flex items-center justify-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.career')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="group flex items-center justify-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.feedback')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact avec design moderne */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              <span className="relative z-10">{t('footer.contact')}</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#ff4b4b] to-white/50"></div>
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff4b4b]/20 transition-all duration-300">
              <div className="flex flex-col items-center space-y-4 text-sm">
                {/* Adresse */}
                <div className="group flex w-full max-w-xs mx-auto p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 mr-3">
                    <div className="p-2 bg-[#ff4b4b]/20 rounded-full group-hover:bg-[#ff4b4b]/30 transition-colors duration-300">
                      <MapPin size={18} className="text-[#ff4b4b]" />
                    </div>
                  </div>
                  <span className="text-left">C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia</span>
                </div>
                
                {/* Téléphone */}
                <div className="group flex w-full max-w-xs mx-auto p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 mr-3">
                    <div className="p-2 bg-[#ff4b4b]/20 rounded-full group-hover:bg-[#ff4b4b]/30 transition-colors duration-300">
                      <Phone size={18} className="text-[#ff4b4b]" />
                    </div>
                  </div>
                  <span>671 45 34 34</span>
                </div>
                
                {/* Email */}
                <div className="group flex w-full max-w-xs mx-auto p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 mr-3">
                    <div className="p-2 bg-[#ff4b4b]/20 rounded-full group-hover:bg-[#ff4b4b]/30 transition-colors duration-300">
                      <Mail size={18} className="text-[#ff4b4b]" />
                    </div>
                  </div>
                  <span>streetpastazana@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux avec effets */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/zanapasta"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#ff4b4b]/50 text-white hover:text-[#ff4b4b] transition-all duration-300 transform hover:scale-110">
                <Instagram size={28} />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#ff4b4b]/50 text-white hover:text-[#ff4b4b] transition-all duration-300 transform hover:scale-110">
                <TikTokIcon size={28} />
              </div>
            </a>
          </div>

          {/* Copyright avec design moderne */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-px top-1/2 transform -translate-y-1/2"></div>
            <div className="relative bg-[#68696a] px-6 text-center">
              <div className="text-white text-sm pt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                © 2025 Zana Street Pasta. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>

        {/* Version desktop avec design moderne */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & réseaux sociaux */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center mb-6">
              <div className="relative h-14 w-14 md:h-20 md:w-20 group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff4b4b]/20 to-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10 hover:border-[#ff4b4b]/30 transition-all duration-300 flex items-center justify-center">
                  <img 
                    src="/images/logo2.png"
                    alt="Zana Logo"
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                    style={{ 
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'scale(1.3)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff4b4b]/20 transition-all duration-300 mb-6">
              <p className="text-white mb-4 text-sm sm:text-base leading-relaxed">
                {t('footer.slogan')}
              </p>
            </div>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/zanapasta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
                <div className="relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#ff4b4b]/50 text-white hover:text-[#ff4b4b] transition-all duration-300 transform hover:scale-110">
                  <Instagram size={28} />
                </div>
              </a>
              <a 
                href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
                <div className="relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#ff4b4b]/50 text-white hover:text-[#ff4b4b] transition-all duration-300 transform hover:scale-110">
                  <TikTokIcon size={28} />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-6 normal-case text-white relative">
              <span className="relative z-10">{t('footer.quicklinks')}</span>
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#ff4b4b] to-white/50"></div>
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff4b4b]/20 transition-all duration-300">
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link 
                    to="/#visit-us" 
                    className="group flex items-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300"
                    onClick={handleLocationClick}
                  >
                    <span className="relative">{t('nav.locations')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="group flex items-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.menu')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="group flex items-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.news')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="group flex items-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.career')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="group flex items-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.feedback')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link to="/franchising" className="group flex items-center p-3 rounded-xl hover:bg-white/10 text-white transition-all duration-300">
                    <span className="relative">{t('nav.franchising')}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4b4b] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              <span className="relative z-10">{t('footer.contact')}</span>
              <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#ff4b4b] to-white/50"></div>
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff4b4b]/20 transition-all duration-300">
              <div className="space-y-4 text-white text-sm sm:text-base">
                <div className="group flex items-center justify-center sm:justify-start p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-[#ff4b4b]/20 rounded-full mr-3 group-hover:bg-[#ff4b4b]/30 transition-colors duration-300">
                    <MapPin size={18} className="text-[#f9f5f5]" />
                  </div>
                  <span>C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia</span>
                </div>
                <div className="group flex items-center justify-center sm:justify-start p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-[#ff4b4b]/20 rounded-full mr-3 group-hover:bg-[#ff4b4b]/30 transition-colors duration-300">
                    <Phone size={18} className="text-[#f9f5f5]" />
                  </div>
                  <span>671 45 34 34</span>
                </div>
                <div className="group flex items-center justify-center sm:justify-start p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-[#ff4b4b]/20 rounded-full mr-3 group-hover:bg-[#ff4b4b]/30 transition-colors duration-300">
                    <Mail size={18} className="text-[#f9f5f5]" />
                  </div>
                  <span>streetpastazana@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright desktop avec design moderne */}
        <div className="hidden lg:block mt-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-px top-1/2 transform -translate-y-1/2"></div>
            <div className="relative bg-[#68696a] flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/10">
                <p className="text-white text-sm">{t('footer.copyright')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;