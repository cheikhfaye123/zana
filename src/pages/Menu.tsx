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
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-['Dancing_Script'] text-[#ff4b4b] mb-4"
          >
            {t('nav.menu')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('menu.subtitle')}
          </motion.p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === null
                ? 'bg-[#ff4b4b] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#ff4b4b] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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