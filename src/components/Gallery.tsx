import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const galleryItems = [
    {
      type: 'image',
      url: '/images/outdoor2.png',
      titleKey: 'gallery.interior'
    },
    {
      type: 'image',
      url: '/images/zanapasta.png',
      titleKey: 'gallery.bar'
    },
    {
      type: 'image',
      url: '/images/outdoor.jpg',
      titleKey: 'gallery.outdoor'
    },
    {
      type: 'image',
      url: '/images/zanacup.png',
      titleKey: 'gallery.zanacup'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative py-12 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ff4b4b]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#292727]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Titre amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292727] mb-4">
            {t('gallery.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff4b4b] to-[#ff6b6b] mx-auto rounded-full"></div>
        </motion.div>

        {/* Container de la galerie avec design amélioré */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Conteneur des images - MÊME LOGIQUE */}
          <div className="absolute inset-0 flex items-center justify-center">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center justify-center ${
                  index === currentIndex ? 'z-10' : 'z-0'
                }`}
              >
                <img
                  src={item.url}
                  alt={t(item.titleKey)}
                  className="max-h-full max-w-full object-contain rounded-lg"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxHeight: '100%',
                    maxWidth: '100%'
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation - MÊME LOGIQUE, design amélioré */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 
                      bg-white/90 backdrop-blur-sm text-[#292727] p-3 sm:p-4 rounded-full 
                      hover:bg-white hover:scale-110 hover:shadow-xl
                      transition-all duration-300 shadow-lg group"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 
                      bg-white/90 backdrop-blur-sm text-[#292727] p-3 sm:p-4 rounded-full 
                      hover:bg-white hover:scale-110 hover:shadow-xl
                      transition-all duration-300 shadow-lg group"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Points indicateurs - MÊME LOGIQUE, style amélioré */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-[#ff4b4b] shadow-lg' 
                    : 'w-3 h-3 bg-white/60 hover:bg-white/80 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Overlay dégradé pour le texte */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-15"></div>
        </motion.div>

        {/* Titre de l'image - MÊME LOGIQUE, style amélioré */}
        <motion.div
          key={currentIndex} // Animation au changement
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-8"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#292727] mb-2">
            {t(galleryItems[currentIndex].titleKey)}
          </h3>
          <div className="flex justify-center items-center gap-2 text-gray-500">
            <span className="text-sm">
              {currentIndex + 1} sur {galleryItems.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;