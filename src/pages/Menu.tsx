import { motion } from 'framer-motion';
import { useState } from 'react';
import MenuGrid from '../components/MenuGrid';
import { useLanguage } from '../context/LanguageContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { t } = useLanguage();

  const categories = [
    { id: 'CLÁSICA', translationKey: 'menu.category.classic' },
    { id: 'ESPECIAL', translationKey: 'menu.category.special' },
    { id: 'SABORES DEL MUNDO', translationKey: 'menu.category.world' },
    { id: 'LOCAL', translationKey: 'menu.category.local' },
    { id: 'DULCE', translationKey: 'menu.category.desserts' },
    { id: 'BEBIDA', translationKey: 'menu.category.drinks' }
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff4b4b] mb-3 sm:mb-4"
          >
            {t('nav.menu')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2"
          >
            {t('menu.subtitle')}
          </motion.p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1 sm:px-5 sm:py-2 text-sm sm:text-base rounded-full border-2 transition-all ${
              activeCategory === null
                ? 'bg-[#ff4b4b] text-white border-[#ff4b4b]'
                : 'bg-white text-gray-700 border-gray-400 hover:border-[#ff4b4b]'
            }`}
          >
            {t('menu.all')}
          </motion.button>
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 sm:px-5 sm:py-2 text-sm sm:text-base rounded-full border-2 transition-all ${
                activeCategory === category.id
                  ? 'bg-[#ff4b4b] text-white border-[#ff4b4b]'
                  : 'bg-white text-gray-700 border-gray-400 hover:border-[#ff4b4b]'
              }`}
            >
              {t(category.translationKey)}
            </motion.button>
          ))}
        </div>
        
        <MenuGrid activeCategory={activeCategory} />
      </div>
    </div>
  );
};

export default Menu;