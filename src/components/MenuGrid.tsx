import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface DishProps {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const MenuGrid = ({ activeCategory }: { activeCategory: string | null }) => {
  const [selectedDish, setSelectedDish] = useState<DishProps | null>(null);
  const { t } = useLanguage();

  // Données des plats (à adapter avec vos données réelles)
  const dishes: DishProps[] = [
    // ... (insérez ici vos données de plats existantes)
    {
      id: 'ragu-bolognese',
      name: 'Ragú a la Bolognese',
      description: 'Ternera, zanahoria, ajo, cebolla, apio, tomate, AOVE',
      price: '8.9',
      category: 'CLÁSICA',
      image: '/images/ragu-bolognese.png'
    },
    {
      id: 'carbonara',
      name: 'Carbonara',
      description: 'Pecorino, guanciale, huevo, parmesano, pimienta',
      price: '8.9',
      category: 'CLÁSICA',
      image: '/images/carbonara.png'
    },
    {
      id: 'tomate-albahaca',
      name: 'Tomate albahaca',
      description: 'Tomate, ajo, cebolla, albahaca, AOVE',
      price: '6.5',
      category: 'CLÁSICA',
      image: '/images/tomate-albahaca.png'
    },
    // ESPECIAL
    {
      id: 'pesto-aguacate',
      name: 'Pesto de aguacate',
      description: 'Albahaca, parmesano, pipas de calabaza, aguacate, ajo, limón, AOVE',
      price: '8.9',
      category: 'ESPECIAL',
      image: '/images/pesto-de-aguacate.png'
    },
    {
      id: 'trufa-parmesano',
      name: 'Trufa y Parmesano',
      description: 'Pecorino romano, parmesano, crema de trufa',
      price: '7.9',
      category: 'ESPECIAL',
      image: '/images/trufa.png'
    },
    {
      id: 'alfredo-pollo',
      name: 'Alfredo pollo y champiñones',
      description: 'Parmesano, pollo, pimienta, mantequilla',
      price: '8.9',
      category: 'ESPECIAL',
      image: '/images/alfredo.png'
    },
    // SABORES DEL MUNDO
    {
      id: 'pollo-tikka',
      name: 'Pollo Tikka Masala',
      description: 'Pollo, tomates, cebolla, ajo, nata, jengibre, cúrcuma, chili',
      price: '8.9',
      category: 'SABORES DEL MUNDO',
      image: '/images/tikka-massala.png'
    },
    {
      id: 'harissa-atun',
      name: 'Harissa con Tomate y Atún',
      description: 'Ajo, alcaravea, chili, comino, cilantro, atún',
      price: '7.9',
      category: 'SABORES DEL MUNDO',
      image: '/images/harissa.png'
    },
    // LOCAL
    {
      id: 'ragu-requena',
      name: 'Ragú blanco de salchicha de Requena',
      description: 'Parmesano, salchicha, vino, cebolla, ajo, queso crema, nata',
      price: '7.9',
      category: 'LOCAL',
      image: '/images/ragu-blanco.png'
    }
  ];

  const beverages = [
    // ... (insérez ici vos données de boissons)
    { id: 'coca-cola', name: 'Coca Cola', price: '1.9' },
    { id: 'coca-zero', name: 'Coca Cola Zero', price: '1.9' },
    { id: 'agua', name: 'Agua', price: '1.9' },
    { id: 'limonada', name: 'Limonada', price: '1.9' },
    { id: 'cerveza-turia', name: 'Cerveza TURIA', price: '1.9' },
    { id: 'cerveza-sin', name: 'Cerveza sin alcohol', price: '1.9' }
  ];

  const desserts = [
    // ... (insérez ici vos données de desserts)
    {
      id: 'white-lotus',
      name: 'Dolce White Lotus',
      description: 'Delicate white chocolate mousse with lotus biscuit crumble',
      price: '5.9',
      category: 'DULCE',
      image: '/images/dolce.png'
    },
    {
      id: 'ferrero-gold',
      name: 'Ferrero GOLD Rocher',
      description: 'Hazelnut chocolate dessert with gold leaf decoration',
      price: '6.5',
      category: 'DULCE',
      image: '/images/ferrero.png'
    }
  ];

  const filteredDishes = activeCategory
    ? dishes.filter(dish => dish.category === activeCategory)
    : dishes;

  const showDesserts = !activeCategory || activeCategory === 'DULCE';
  const showBeverages = !activeCategory || activeCategory === 'BEBIDA';

  return (
    <div className="space-y-8 sm:space-y-12 px-2 sm:px-0">
      {/* Main Dishes Grid */}
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
            <div className="p-3 sm:p-4 ">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">{dish.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full border border-gray-300">
                  {dish.category}
                </span>
                <span className="text-base sm:text-lg font-bold text-[#ff4b4b]">{dish.price}€</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desserts Section */}
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
                      {dessert.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#ff4b4b]">{dessert.price}€</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Beverages Section */}
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
                <h3 className="text-sm sm:text-base font-medium text-gray-900">{beverage.name}</h3>
                <p className="text-sm sm:text-base font-bold text-[#ff4b4b] mt-1 sm:mt-2">{beverage.price}€</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Dish Detail Modal - Optimisé pour mobile */}
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">{selectedDish.name}</h2>
                  <span className="text-xl sm:text-2xl font-bold text-[#ff4b4b]">{selectedDish.price}€</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block text-xs sm:text-sm font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full border border-gray-300">
                    {selectedDish.category}
                  </span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{selectedDish.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuGrid;