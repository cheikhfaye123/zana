import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const galleryItems = [
    {
      type: 'video',
      url: '/videos/video1.mp4',
      title: 'Receta de nuestras pastas'
    },
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
      type: 'video',
      url: '/videos/video2.mp4',
      title: 'Stranger Things'
    },
    {
      type: 'image',
      url: '/images/zanacup.png',
      titleKey: 'gallery.zanacup'
    },
    {
      type: 'image',
      url: '/images/pasta-fresca.png',
      titleKey: 'gallery.pasta_fresca'
    },
    {
      type: 'image',
      url: '/images/spaghetti.png',
      titleKey: 'gallery.spaghetti'
    },
    {
      type: 'image',
      url: '/images/elaboration.png',
      titleKey: 'gallery.elaboration'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const getTitle = (item: typeof galleryItems[0]) => {
    if (item.type === 'video' && 'title' in item) {
      return item.title;
    }
    return t(item.titleKey || '');
  };

  return (
    <section className="relative py-12 sm:py-20 bg-[#FD5121] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            {t('gallery.title')}
          </h2>
        </motion.div>

        {/* Container de la galerie avec flèches à côté du cadre */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Flèche GAUCHE */}
          <button
            onClick={prevSlide}
            className="text-white hover:text-white/80 transition-all duration-300 z-20 flex-shrink-0"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} className="sm:w-12 sm:h-12 md:w-14 md:h-14 stroke-[2]" />
          </button>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[300px] w-[440px] sm:h-[400px] sm:w-[620px] md:h-[480px] md:w-[800px] rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Conteneur des images et vidéos */}
            <div className="absolute inset-0">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 1.05
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`absolute inset-0 ${
                    index === currentIndex ? 'z-10' : 'z-0'
                  }`}
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={getTitle(item)}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Flèche DROITE */}
          <button
            onClick={nextSlide}
            className="text-white hover:text-white/80 transition-all duration-300 z-20 flex-shrink-0"
            aria-label="Next image"
          >
            <ChevronRight size={40} className="sm:w-12 sm:h-12 md:w-14 md:h-14 stroke-[2]" />
          </button>
        </div>

        {/* Titre de l'image/vidéo */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-8"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
            {getTitle(galleryItems[currentIndex])}
          </h3>
          <div className="flex justify-center items-center gap-2 text-white/80">
            <span className="text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;