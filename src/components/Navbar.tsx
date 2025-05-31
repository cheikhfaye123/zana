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
        <button className="md:hidden text-white z-60 relative" onClick={toggleMenu}>
          <div className="relative w-6 h-6">
            <span className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 top-2.5' : ''
            }`}></span>
            <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 top-2.5' : ''
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

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
          } md:hidden z-40`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-80 bg-[#ff4b4b] shadow-2xl transform transition-all duration-400 ease-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } md:hidden z-50`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <button
                onClick={handleLanguageChange}
                className="border-2 border-white rounded-full px-4 py-2 text-sm font-medium hover:bg-white hover:text-[#ff4b4b] transition-all duration-200 transform hover:scale-105"
              >
                {language}
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 flex-grow">
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
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      className="block py-3 text-lg font-medium hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/40"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <Link
                      to={item.to!}
                      className={`block py-3 text-lg font-medium hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/40 ${
                        location.pathname === item.to ? 'text-white font-bold' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-8 mt-8 pt-6 border-t border-white/20">
              <a 
                href="https://www.instagram.com/zanapasta?igsh=MnZyOWYyeWNkMHdo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transform hover:scale-110 transition-all duration-200"
              >
                <Instagram size={32} />
              </a>
              <a 
                href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transform hover:scale-110 transition-all duration-200"
              >
                <TikTokIcon size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;