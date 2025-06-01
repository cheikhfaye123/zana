import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery';
import { MapPin, Award, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from '../context/LocationContext';

const Home = () => {
  const { t } = useLanguage();
  const locationInfo = useLocation();
  
  return (
    <div className="pt-16">
      <HeroSlider />
      
      <Gallery />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-[#292727] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('nav.locations')}</h3>
              <p className="text-gray-600">C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, España</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-[#292727] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('location.quality')}</h3>
              <p className="text-gray-600">{t('location.quality.desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section - Sans bouton */}
      <section id="visit-us" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#292727] mb-8 sm:mb-12"
          >
            {t('location.title')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden bg-gray-100">
              <img 
                src="/images/location.png"
                alt="Valencia Location"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  console.error("Erreur de chargement de l'image location");
                  e.currentTarget.src = 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#ff4b4b]" />
                  <span className="text-sm font-medium text-[#292727]">Valencia</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid gap-4 sm:gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff4b4b] to-[#ff6b6b] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin size={18} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#292727] mb-1 text-sm sm:text-base">{t('location.address')}</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{locationInfo.address}</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#292727] to-[#3f3f3f] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Phone size={18} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#292727] mb-1 text-sm sm:text-base">{t('location.phone')}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{locationInfo.phone}</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Clock size={18} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#292727] mb-1 text-sm sm:text-base">{t('location.hours_title')}</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{locationInfo.hours}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action avec le bouton "Ver en el mapa" */}
      <section className="bg-white py-16 text-[#292727] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-['Dancing_Script'] mb-6">{t('cta.hungry')}</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto">{t('cta.visit')}</p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a 
              href="https://maps.google.com/?q=C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, España"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7e7a7a] to-[#7e7a7a] text-white font-semibold px-6 py-3 rounded-full hover:from-[#ff3b3b] hover:to-[#ff5b5b] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MapPin size={18} />
              {t('cta.view_map')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;