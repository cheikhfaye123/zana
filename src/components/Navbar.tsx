import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Facebook, Menu as MenuIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Ajout du type Language
type Language = 'ES' | 'FR' | 'EN';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      // Si on est déjà sur la page d'accueil
      document.getElementById('visit-us')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si on est sur une autre page, rediriger vers la page d'accueil avec l'ancre
      navigate('/');
      setTimeout(() => {
        document.getElementById('visit-us')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#ff4b4b] text-white py-4 px-4 md:px-8`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-white w-10 h-10 mr-2 flex items-center justify-center rounded-full">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M6 14c.111-.87 5-5.501 5-7a1 1 0 012 0c0 1.498 4.889 6.13 5 7" />
              <path d="M8 12l-1 8h10l-1-8" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-['Dancing_Script'] whitespace-nowrap tracking-wider">ZANA</span>
            <span className="text-sm whitespace-nowrap -mt-1">Street world Pasta</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <MenuIcon size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={handleLocationClick} 
            className="hover:underline text-white bg-transparent border-none cursor-pointer"
          >
            {t('nav.locations')}
          </button>
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
              <button
                onClick={handleLocationClick}
                className="block py-2 hover:underline text-white bg-transparent border-none cursor-pointer text-left"
              >
                {t('nav.locations')}
              </button>
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