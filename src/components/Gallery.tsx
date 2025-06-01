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
    <section className="relative py-8 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre avec meilleur responsive */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#292727] mb-4 sm:mb-6 md:mb-12 px-2"
        >
          {t('gallery.title')}
        </motion.h2>

        {/* Container de la galerie avec hauteur responsive */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-5xl mx-auto">
          {/* Conteneur des images avec contraintes améliorées */}
          <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-2 sm:inset-4 flex items-center justify-center ${
                  index === currentIndex ? 'z-10' : 'z-0'
                }`}
              >
                <img
                  src={item.url}
                  alt={t(item.titleKey)}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
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

          {/* Navigation avec taille responsive */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Points indicateurs avec meilleur espacement mobile */}
          <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-20 px-4">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#ff4b4b]' : 'bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Titre de l'image actuelle avec meilleur responsive */}
        <motion.p
          key={currentIndex} // Force re-render pour animation
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium text-[#292727] px-4"
        >
          {t(galleryItems[currentIndex].titleKey)}
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;