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
      url: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      titleKey: 'gallery.interior'
    },
    
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      titleKey: 'gallery.bar'
    },
    {
      type: 'image',
      url: '/images/outdoor.jpg',
      titleKey: 'gallery.outdoor'
    },
    {
      type: 'image',
      url: '/images/zanacup.png', // ✅ Chemin relatif à "public"
      titleKey: 'gallery.zanacup'  // 🔤 Ajoute cette clé à tes fichiers de traduction
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-[#ff4b4b] mb-12"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
            <img
              src={galleryItems[currentIndex].url}
              alt={t(galleryItems[currentIndex].titleKey)}
              className="w-full max-h-[600px]  object-contain mx-auto"
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
          >
            <ChevronLeft size={24} className="text-[#ff4b4b]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
          >
            <ChevronRight size={24} className="text-[#ff4b4b]" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#ff4b4b]' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xl text-gray-600">{t(galleryItems[currentIndex].titleKey)}</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;