import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES, getTranslatedCategory, CategoryKey } from './categories';

interface DishProps {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: CategoryKey;
  image?: string;
}

const MenuGrid = ({ activeCategory }: { activeCategory: string | null }) => {
  const [selectedDish, setSelectedDish] = useState<DishProps | null>(null);
  const { t } = useLanguage();

  const getCategoryKeyFromTranslated = (translatedCategory: string): CategoryKey | null => {
    const categoryEntry = Object.entries(CATEGORIES).find(([_, value]) => {
      return getTranslatedCategory(value, t) === translatedCategory;
    });
    return categoryEntry ? (categoryEntry[1] as CategoryKey) : null;
  };

  const dishes: DishProps[] = [
    {
      id: 'classic-ragu',
      name: t('menu.classic.ragu.title'),
      description: t('menu.classic.ragu.description'),
      price: '8.9',
      category: CATEGORIES.CLASSIC,
      image: '/images/menu/ragu-bolognese.png'
    },
    {
      id: 'classic-carbonara',
      name: t('menu.classic.carbonara.title'),
      description: t('menu.classic.carbonara.description'),
      price: '8.9',
      category: CATEGORIES.CLASSIC,
      image: '/images/menu/carbonara.png'
    },
    {
      id: 'tomate-albahaca',
      name: t('menu.tomate.albahaca.title'),
      description: t('menu.tomate.albahaca.description'),
      price: '6.5',
      category: CATEGORIES.CLASSIC,
      image: '/images/menu/tomate-albahaca.png'
    },
    {
      id: 'pesto-aguacate',
      name: t('menu.pesto.aguacate.title'),
      description: t('menu.pesto.aguacate.description'),
      price: '8.9',
      category: CATEGORIES.SPECIAL,
      image: '/images/menu/pesto-de-aguacate.png'
    },
    {
      id: 'trufa-parmesano',
      name: t('menu.trufa.parmesano.title'),
      description: t('menu.trufa.parmesano.description'),
      price: '7.9',
      category: CATEGORIES.SPECIAL,
      image: '/images/menu/trufa.png'
    },
    {
      id: 'alfredo-pollo',
      name: t('menu.alfredo.pollo.title'),
      description: t('menu.alfredo.pollo.description'),
      price: '8.9',
      category: CATEGORIES.SPECIAL,
      image: '/images/menu/alfredo.png'
    },
    {
      id: 'pollo-tikka',
      name: t('menu.pollo.tikka.title'),
      description: t('menu.pollo.tikka.description'),
      price: '8.9',
      category: CATEGORIES.WORLD,
      image: '/images/menu/tikka-massala.png'
    },
    {
      id: 'harissa-atun',
      name: t('menu.world.harissa.title'),
      description: t('menu.world.harissa.description'),
      price: '7.9',
      category: CATEGORIES.WORLD,
      image: '/images/menu/harissa.png'
    },
    {
      id: 'ragu-requena',
      name: t('menu.local.requena.title'),
      description: t('menu.local.requena.description'),
      price: '7.9',
      category: CATEGORIES.LOCAL,
      image: '/images/menu/ragu-blanco.png'
    }
  ];

  const desserts: DishProps[] = [
    {
      id: 'white-lotus',
      name: t('menu.desserts.white.lotus.title'),
      description: t('menu.desserts.white.lotus.description'),
      price: '5.5',
      category: CATEGORIES.DESSERTS,
      image: '/images/menu/dolce.png'
    },
    {
      id: 'ferrero-gold',
      name: t('menu.desserts.ferrero.gold.title'),
      description: t('menu.desserts.ferrero.gold.description'),
      price: '5.5',
      category: CATEGORIES.DESSERTS,
      image: '/images/menu/ferrero.png'
    }
  ];

  const beverages: DishProps[] = [
    { id: 'coca-cola', name: t('menu.drinks.coca.title'), price: '2', category: CATEGORIES.DRINKS, image: '/images/menu/coca-cola.png' },
    { id: 'coca-zero', name: t('menu.drinks.coca.zero.title'), price: '2', category: CATEGORIES.DRINKS, image: '/images/menu/coca-colazero.png' },
    { id: 'agua', name: t('menu.drinks.water.title'), price: '2', category: CATEGORIES.DRINKS , image: '/images/menu/eau.png' },
    { id: 'limonada', name: t('menu.drinks.lemonade.title'), price: '2', category: CATEGORIES.DRINKS, image: '/images/menu/limond.png' },
    {
      id: 'cerveza-turia',
      name: t('menu.drinks.turia.title'),
      price: '2',
      category: CATEGORIES.DRINKS,
      image: '/images/menu/cerveza-turia.png'
    },
    {
      id: 'cerveza-sin',
      name: t('menu.drinks.non.alcoholic.title'),
      price: '2',
      category: CATEGORIES.DRINKS,
      image: '/images/menu/zero-alcohol.png'
    }
  ];

  const activeCategoryKey = activeCategory ? getCategoryKeyFromTranslated(activeCategory) : null;

  const filteredDishes = activeCategoryKey
    ? dishes.filter(dish => dish.category === activeCategoryKey)
    : dishes;

  const showDesserts = !activeCategoryKey || activeCategoryKey === CATEGORIES.DESSERTS;
  const showBeverages = !activeCategoryKey || activeCategoryKey === CATEGORIES.DRINKS;

  return (
    <div className="space-y-8 sm:space-y-12 px-2 sm:px-0">
      {/* Dishes */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {filteredDishes.map((dish) => (
          <motion.div
            key={dish.id}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border-2 border-gray-300 shadow-sm hover:shadow-md overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => setSelectedDish(dish)}
          >
            <div className="relative pt-[70%] sm:pt-[75%] bg-gray-50">
              <img
                src={dish.image}
                alt={dish.name}
                className="absolute top-0 left-0 w-full h-full object-contain p-3 sm:p-4"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">{dish.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full border border-gray-300">
                  {getTranslatedCategory(dish.category, t)}
                </span>
                <span className="text-base sm:text-lg font-bold text-[#ff4b4b]">{dish.price}€</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desserts */}
      {showDesserts && (
        <section className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-[#ff4b4b]">
            {t('menu.category.desserts')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {desserts.map((dessert) => (
              <motion.div
                key={dessert.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border-2 border-gray-300 shadow-sm hover:shadow-md overflow-hidden cursor-pointer transition-all duration-300"
                onClick={() => setSelectedDish(dessert)}
              >
                <div className="relative pt-[70%] sm:pt-[75%] bg-gray-50">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="absolute top-0 left-0 w-full h-full object-contain p-3 sm:p-4"
                  />
                </div>
                <div className="p-3 sm:p-4 border-t-2 border-gray-300">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">{dessert.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full border border-gray-300">
                      {getTranslatedCategory(dessert.category, t)}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#ff4b4b]">{dessert.price}€</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Beverages */}
      {showBeverages && (
        <section className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-[#ff4b4b]">
            {t('menu.category.drinks')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {beverages.map((beverage) => (
              <motion.div
                key={beverage.id}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg border-2 border-gray-300 shadow-sm p-3 text-center hover:shadow-md transition-all duration-300"
              >
                {beverage.image && (
                  <img
                    src={beverage.image}
                    alt={beverage.name}
                    className="w-full h-24 object-contain mb-2"
                  />
                )}
                <h3 className="text-sm sm:text-base font-medium text-gray-900">{beverage.name}</h3>
                <p className="text-sm sm:text-base font-bold text-[#ff4b4b] mt-1 sm:mt-2">{beverage.price}€</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-xl border-2 border-gray-300 shadow-xl w-full max-w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 sm:h-56 w-full bg-gray-50 flex items-center justify-center">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="max-w-full max-h-full object-contain p-4 sm:p-6"
                />
                <button
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full p-1 sm:p-2 shadow-md border border-gray-300 hover:bg-gray-50 transition-colors"
                  onClick={() => setSelectedDish(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                    {selectedDish.name}
                  </h2>
                  <span className="text-xl sm:text-2xl font-bold text-[#ff4b4b]">{selectedDish.price}€</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block text-xs sm:text-sm font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full border border-gray-300">
                    {getTranslatedCategory(selectedDish.category, t)}
                  </span>
                </div>
                {selectedDish.description && (
                  <p className="text-gray-700 text-sm sm:text-base">
                    {selectedDish.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuGrid;
