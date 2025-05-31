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
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center  text-[#292727] mb-4"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="relative h-[500px] w-full max-w-5xl mx-auto">
          {/* Conteneur des images avec contraintes */}
          <div className="absolute inset-0 flex items-center justify-center">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex items-center justify-center ${
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

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Points indicateurs */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#ff4b4b]' : 'bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Titre de l'image actuelle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-xl font-medium text-[#292727]"
        >
          {t(galleryItems[currentIndex].titleKey)}
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;