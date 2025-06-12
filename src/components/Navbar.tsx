import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Language = 'ES' | 'FR' | 'EN';

const TikTokIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open, and fix desktop resize issue
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = () => {
    const languages: Language[] = ['ES', 'FR', 'EN'];
    const currentIndex = languages.indexOf(language);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#292727] py-2' : 'bg-[#292727] py-2'} text-white px-4 md:px-8`}>
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

        {/* Burger menu for mobile */}
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#visit-us" onClick={handleLocationClick} className="hover:underline">{t('nav.locations')}</a>
          <Link to="/menu" className={`hover:underline ${location.pathname === '/menu' ? 'underline' : ''}`}>{t('nav.menu')}</Link>
          <Link to="/news" className={`hover:underline ${location.pathname === '/news' ? 'underline' : ''}`}>{t('nav.news')}</Link>
          <Link to="/career" className={`hover:underline ${location.pathname === '/career' ? 'underline' : ''}`}>{t('nav.career')}</Link>
          <Link to="/feedback" className={`hover:underline ${location.pathname === '/feedback' ? 'underline' : ''}`}>{t('nav.feedback')}</Link>
          <Link to="/franchising" className={`hover:underline ${location.pathname === '/franchising' ? 'underline' : ''}`}>{t('nav.franchising')}</Link>
          <Link to="/quienes-somos" className={`hover:underline ${location.pathname === '/quienes-somos' ? 'underline' : ''}`}>{t('nav.quienesSomos')}</Link>
        </div>

        {/* Social icons and language */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleLanguageChange}
            className="border border-white rounded-full px-2 py-1 text-sm hover:bg-white hover:text-[#ff4b4b] transition-colors"
          >
            {language}
          </button>
          <a 
            href="https://www.instagram.com/zanapasta?igsh=MnZyOWYyeWNkMHdo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-[#FE5000] rounded-full flex items-center justify-center hover:opacity-80 transition-all"
          >
            <Instagram size={20} className="text-white" />
          </a>
          <a 
            href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-[#FE5000] rounded-full flex items-center justify-center hover:opacity-80 transition-all"
          >
            <TikTokIcon size={20} className="text-white" />
          </a>
        </div>

        {/* Mobile Menu and Backdrop */}
        <div className="md:hidden">
          <div
            className={`fixed inset-0 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm transition-all duration-500 ease-out ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } z-40`}
            onClick={toggleMenu}
          ></div>

          <div
            className={`fixed top-0 right-0 h-[100dvh] w-72 bg-[#FE5000] shadow-2xl transform transition-all duration-500 ease-out ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-full opacity-0 scale-95'
            } z-50 flex flex-col`}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Mobile Header */}
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

            {/* Mobile Links - Main content with scroll */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="px-6 space-y-2">
                {[
                  { href: "#visit-us", onClick: handleLocationClick, text: t('nav.locations') },
                  { to: "/menu", text: t('nav.menu') },
                  { to: "/news", text: t('nav.news') },
                  { to: "/career", text: t('nav.career') },
                  { to: "/feedback", text: t('nav.feedback') },
                  { to: "/franchising", text: t('nav.franchising') },
                  { to: "/quienes-somos", text: t('nav.quienesSomos') }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500 ease-out ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                    }`}
                    style={{ transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms' }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        className="group block py-4 px-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-white/50"
                      >
                        <span className="flex items-center justify-between">
                          {item.text}
                          <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Footer - Fixed at bottom */}
            <div className="p-6 border-t border-white/10 bg-[#FE5000]">
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/zanapasta?igsh=MnZyOWYyeWNkMHdo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={24} className="text-white" />
                </a>
                <a 
                  href="https://www.tiktok.com/@zana_pasta?_t=ZN-8wnBQVfvclq&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                >
                  <TikTokIcon size={24} className="text-white" />
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