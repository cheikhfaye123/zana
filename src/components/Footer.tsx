import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

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
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Version mobile */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="flex flex-col items-start">
              {/* Cercles agrandis et alignés sur la largeur de ZANA */}
              <div className="flex justify-between w-[85px] mb-2 ml-8">
                <div className="w-6 h-6 bg-[#FE5000] rounded-full"></div>
                <div className="w-6 h-6 bg-[#FE5000] rounded-full"></div>
                <div className="w-6 h-6 bg-[#FE5000] rounded-full"></div>
              </div>
              <img 
                src="/images/franchising/ZANA_LOGO.png" 
                alt="Zana Street World Pasta" 
                className="h-16 object-contain"
              />
            </div>

            {/* Enlaces de interés */}
            <div className="text-center">
              <h3 className="text-sm font-bold text-black mb-4 tracking-wide">ENLACES DE INTERÉS</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/#visit-us" 
                    onClick={handleLocationClick}
                    className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors"
                  >
                    UBICACIÓN
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                    MENÚ
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                    NOVEDADES
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                    EMPLEO
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                    OPINIONES
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contáctanos */}
            <div className="text-center">
              <h3 className="text-sm font-bold text-black mb-4 tracking-wide">CONTÁCTANOS</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>C/ BARCELONINA 2,</p>
                <p>VALENCIA</p>
                <p className="pt-2">AV BLASCO IBÁÑEZ 87,</p>
                <p>VALENCIA</p>
              </div>
            </div>
          </div>

          {/* Copyright mobile */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © 2025 Zana Street World Pasta. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Version desktop */}
        <div className="hidden lg:flex lg:justify-between lg:items-start">
          {/* Logo */}
          <div className="flex flex-col items-start">
            {/* Cercles agrandis et alignés sur la largeur de ZANA */}
            <div className="flex justify-between w-[115px] mb-2 ml-8">
              <div className="w-8 h-8 bg-[#FE5000] rounded-full"></div>
              <div className="w-8 h-8 bg-[#FE5000] rounded-full"></div>
              <div className="w-8 h-8 bg-[#FE5000] rounded-full"></div>
            </div>
            <img 
              src="/images/franchising/ZANA_LOGO.png" 
              alt="Zana Street World Pasta" 
              className="h-20 object-contain"
            />
          </div>

          {/* Enlaces de interés */}
          <div>
            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">ENLACES DE INTERÉS</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/#visit-us" 
                  onClick={handleLocationClick}
                  className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors"
                >
                  UBICACIÓN
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                  MENÚ
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                  NOVEDADES
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                  EMPLEO
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm text-gray-700 hover:text-[#FE5000] transition-colors">
                  OPINIONES
                </Link>
              </li>
            </ul>
          </div>

          {/* Contáctanos */}
          <div>
            <h3 className="text-sm font-bold text-black mb-4 tracking-wide">CONTÁCTANOS</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <p>C/ BARCELONINA 2,</p>
              <p>VALENCIA</p>
              <p className="pt-3">AV BLASCO IBÁÑEZ 87,</p>
              <p>VALENCIA</p>
            </div>
          </div>
        </div>

        {/* Copyright desktop */}
        <div className="hidden lg:block mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Zana Street World Pasta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;