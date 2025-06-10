import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // Ajout de l'import

const slides = [
  {
    id: 1,
    image: '/images/menu/ragu-bolognese.png',
    title: 'CLÁSICA',
    description: 'Ragú a la Bolognese'
  },
  {
    id: 2,
    image: '/images/menu/pesto-de-aguacate.png',
    title: 'ESPECIAL',
    description: 'Pesto de aguacate'
  },
  {
    id: 3,
    image: '/images/menu/harissa.png',
    title: 'SABORES DEL MUNDO',
    description: 'Harissa con Tomate y Atún'
  },
  {
    id: 4,
    image: '/images/menu/ragu-blanco.png',
    title: 'LOCAL',
    description: 'Ragú blanco de salchicha de Requena'
  }
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage(); // Ajout du hook useLanguage

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-[#a3a2a2] w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center md:text-left md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Dancing_Script'] mb-4 sm:mb-6">
              {slides[currentIndex].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-md mx-auto md:mx-0">
              {slides[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white p-2 border-4 border-white shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bouton Menu modifié pour utiliser la traduction */}
        <motion.div
          className=" mt-4 mx-auto
      md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link to="/menu">
            <motion.button
              className="bg-[#FE5000] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#e64800",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.span
                animate={{
                  x: isHovered ? [0, 2, -2, 2, 0] : 0
                }}
                transition={{
                  duration: 0.5,
                  repeat: isHovered ? Infinity : 0
                }}
              >
                {t('menu.button.view')} {/* Utilisation de la traduction */}
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      

      

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;