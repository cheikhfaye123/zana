import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuGrid from '../components/MenuGrid';
import { useLanguage } from '../context/LanguageContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const categories = [
    { id: 'CLÁSICA', translationKey: 'menu.category.classic' },
    { id: 'ESPECIAL', translationKey: 'menu.category.special' },
    { id: 'SABORES DEL MUNDO', translationKey: 'menu.category.world' },
    { id: 'LOCAL', translationKey: 'menu.category.local' },
    { id: 'DULCE', translationKey: 'menu.category.desserts' },
    { id: 'BEBIDA', translationKey: 'menu.category.drinks' }
  ];

  // Effet pour mettre à jour la catégorie active quand la langue change
  useEffect(() => {
    if (activeCategoryKey) {
      const category = categories.find(cat => cat.translationKey === activeCategoryKey);
      if (category) {
        setActiveCategory(t(category.translationKey));
      }
    }
  }, [language, activeCategoryKey, t]);

  const handleCategoryClick = (translationKey: string | null) => {
    if (translationKey === null) {
      setActiveCategory(null);
      setActiveCategoryKey(null);
    } else {
      setActiveCategoryKey(translationKey);
      setActiveCategory(t(translationKey));
    }
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#292727] mb-3 sm:mb-4 pt-9"
          >
            {t('nav.menu')}
          </motion.h1>
          <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed"
>
  Elige tu tipo de pasta, después descubre nuestras salsas auténticas,
  elaboradas con productos de alta calidad y de forma artesanal por chefs profesionales.
  Déjate viajar por el mundo, bocado tras bocado.
</motion.p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleCategoryClick(null)}
            className={`px-3 py-1 sm:px-5 sm:py-2 text-sm sm:text-base rounded-full border-2 transition-all ${
              activeCategory === null
                ? 'bg-[#292727] text-white border-white'
                : 'bg-white text-gray-700 border-gray-400 hover:border-[#292727]'
            }`}
          >
            {t('menu.all')}
          </motion.button>
          {categories.map((category, index) => {
            const translatedCategory = t(category.translationKey);
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleCategoryClick(category.translationKey)}
                className={`px-3 py-1 sm:px-5 sm:py-2 text-sm sm:text-base rounded-full border-2 transition-all ${
                  activeCategoryKey === category.translationKey
                    ? 'bg-[#292727] text-white border-white'
                    : 'bg-white text-gray-700 border-gray-400 hover:border-gray-500'
                }`}
              >
                {translatedCategory}
              </motion.button>
            );
          })}
        </div>
                
        <MenuGrid activeCategory={activeCategory} />
      </div>
    </div>
  );
};

export default Menu;