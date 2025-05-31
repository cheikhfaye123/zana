import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu as MenuIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Définition du type Language
type Language = 'ES' | 'FR' | 'EN';

// Composant TikTok SVG personnalisé
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

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prévenir le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = () => {
    const languages: Language[] = ['ES', 'FR', 'EN'];
    const currentIndex = languages.indexOf(language as Language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const handleLocationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const currentPath = location.pathname;

    if (currentPath === '/') {
      document.getElementById('visit-us')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#visit-us';
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#292727] text-white py-2 px-4 md:px-8`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
            <img 
              src="/images/logo.png"
              alt="Zana Logo"
              className="w-full h-full object-contain"
              style={{ 
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'scale(1.3)',
              }}
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-60 relative p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 ml-auto" 
          onClick={toggleMenu}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white rounded-full transform transition-all duration-300 origin-center ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-200 ${
              isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
            }`}></span>
            <span className={`block h-0.5 w-full bg-white rounded-full transform transition-all duration-300 origin-center ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#visit-us" onClick={handleLocationClick} className="hover:underline">
            {t('nav.locations')}
          </a>
          <Link to="/menu" className={`hover:underline ${location.pathname === '/menu' ? 'underline' : ''}`}>
            {t('nav.menu')}
          </Link>
          <Link to="/news" className={`hover:underline ${location.pathname === '/news' ? 'underline' : ''}`}>
            {t('nav.news')}
          </Link>
          <Link to="/career" className={`hover:underline ${location.pathname === '/career' ? 'underline' : ''}`}>
            {t('nav.career')}
          </Link>
          <Link to="/feedback" className={`hover:underline ${location.pathname === '/feedback' ? 'underline' : ''}`}>
            {t('nav.feedback')}
          </Link>
          <Link to="/franchising" className={`hover:underline ${location.pathname === '/franchising' ? 'underline' : ''}`}>
            {t('nav.franchising')}
          </Link>
        </div>

        {/* Social Icons & Language */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleLanguageChange}
            className="border border-white rounded-full px-2 py-1 text-sm hover:bg-white hover:text-[#ff4b4b] transition-colors"
          >
            {language}
          </button>
          <a href="https://www.instagram.com/zanapasta?igsh=MnZyOWYyeWNkMHdo" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <Instagram size={28} />
          </a>
          <a href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <TikTokIcon size={28} />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm transition-all duration-500 ease-out ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } z-40`}
            onClick={toggleMenu}
          ></div>

          {/* Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-screen w-72 bg-gradient-to-br from-[#ff4b4b] to-[#e53e3e] shadow-2xl transform transition-all duration-500 ease-out ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-full opacity-0 scale-95'
            } z-50`}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Menu Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/70 text-sm font-medium tracking-wide">MENU</span>
                </div>
                <button
                  onClick={handleLanguageChange}
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-medium hover:bg-white hover:text-[#ff4b4b] transition-all duration-300 transform hover:scale-105"
                >
                  {language}
                </button>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="px-6 py-8 space-y-2">
              {[
                { href: "#visit-us", onClick: handleLocationClick, text: t('nav.locations') },
                { to: "/menu", text: t('nav.menu') },
                { to: "/news", text: t('nav.news') },
                { to: "/career", text: t('nav.career') },
                { to: "/feedback", text: t('nav.feedback') },
                { to: "/franchising", text: t('nav.franchising') }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ease-out ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-12 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms'
                  }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      className="group block py-4 px-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-white/50"
                    >
                      <span className="flex items-center justify-between">
                        {item.text}
                        <svg 
                          className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={item.to!}
                      className={`group block py-4 px-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-white/50 ${
                        location.pathname === item.to ? 'bg-white/20 border-white font-bold' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center justify-between">
                        {item.text}
                        <svg 
                          className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/10">
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/zanapasta?igsh=MnZyOWYyeWNkMHdo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
                >
                  <TikTokIcon size={24} />
                </a>
              </div>
              <div className="text-center mt-4">
                <span className="text-white/50 text-xs tracking-widest">ZANA PASTA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;