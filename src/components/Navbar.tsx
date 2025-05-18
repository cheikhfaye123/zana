import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Menu as MenuIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Définition du type Language
type Language = 'ES' | 'FR' | 'EN';

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
    const element = document.getElementById('visit-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#211515] text-white py-2 px-4 md:px-8`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo container avec styles optimisés */}
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
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <MenuIcon size={24} />
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
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <Facebook size={20} />
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-[#ff4b4b] shadow-lg transform transition-transform ease-in-out duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-50`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={handleLanguageChange}
                className="border border-white rounded-full px-2 py-1 text-sm hover:bg-white hover:text-[#ff4b4b] transition-colors"
              >
                {language}
              </button>
              <button onClick={toggleMenu} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <a
                href="#visit-us"
                onClick={handleLocationClick}
                className="block py-2 hover:underline"
              >
                {t('nav.locations')}
              </a>
              <Link
                to="/menu"
                className={`block py-2 hover:underline ${location.pathname === '/menu' ? 'underline' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.menu')}
              </Link>
              <Link
                to="/news"
                className={`block py-2 hover:underline ${location.pathname === '/news' ? 'underline' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.news')}
              </Link>
              <Link
                to="/career"
                className={`block py-2 hover:underline ${location.pathname === '/career' ? 'underline' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.career')}
              </Link>
              <Link
                to="/feedback"
                className={`block py-2 hover:underline ${location.pathname === '/feedback' ? 'underline' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.feedback')}
              </Link>
              <Link
                to="/franchising"
                className={`block py-2 hover:underline ${location.pathname === '/franchising' ? 'underline' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.franchising')}
              </Link>
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="https://www.instagram.com/zanapasta?igsh=MnZyOWYyeWNkMHdo" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;