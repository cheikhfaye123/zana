import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery';
import { MapPin, Award, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  
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
              <div className="w-16 h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('nav.locations')}</h3>
              <p className="text-gray-600">C/ Barcelonina, Ciutat Vella, 46002 Valencia, Valencia</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('location.quality')}</h3>
              <p className="text-gray-600">{t('location.quality.desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="visit-us" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-[#ff4b4b] mb-12"
          >
            {t('location.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/location.png" // Vérifiez que l'image existe dans public/images/
                alt="Valencia Location"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  console.error("Erreur de chargement de l'image location");
                  e.currentTarget.src = 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260'; // Image de fallback
                }}
              />
            </div>
            <div className="p-6">
             
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin size={20} className="text-[#ff4b4b] mr-3 mt-1 flex-shrink-0" />
                  <p>C/ Barcelonina, Ciutat Vella, 46002 Valencia, Valencia</p>
                </div>
                <div className="flex items-start">
                  <Phone size={20} className="text-[#ff4b4b] mr-3 mt-1 flex-shrink-0" />
                  <p>+1 (234) 567-8900</p>
                </div>
                <div className="flex items-start">
                  <Clock size={20} className="text-[#ff4b4b] mr-3 mt-1 flex-shrink-0" />
                  <p>{t('location.hours')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-[#ff4b4b] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-['Dancing_Script'] mb-6">{t('cta.hungry')}</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto">{t('cta.visit')}</p>
          <a 
            href="https://maps.google.com/?q=C/ Barcelonina, Ciutat Vella, 46002 Valencia, Valencia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#ff4b4b] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            {t('cta.directions')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;