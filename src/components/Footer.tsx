import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
            <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
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
            <p className="text-gray-400 mb-4">Delicious pasta made fresh daily with quality ingredients.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/zanapasta?igsh=MnZyOWYyeWNkMHdo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/locations" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">{t('nav.locations')}</a></li>
              <li><a href="/menu" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">{t('nav.menu')}</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">{t('nav.news')}</a></li>
              <li><a href="/career" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">{t('nav.career')}</a></li>
              <li><a href="/feedback" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">{t('nav.feedback')}</a></li>
              <li><a href="/franchising" className="text-gray-400 hover:text-[#ff4b4b] transition-colors">{t('nav.franchising')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-[#ff4b4b]" />
                <span>C/ Barcelonina, Ciutat Vella, 46002 Valencia, Valencia</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-[#ff4b4b]" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-[#ff4b4b]" />
                <span>streetpastazana@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;