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

  const dishes: DishProps[] = [
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
      image: '/images/tomate-albahaca.jpg'
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
      image: '/images/trufa.jpg'
    },
    {
      id: 'alfredo-pollo',
      name: 'Alfredo pollo y champiñones',
      description: 'Parmesano, pollo, pimienta, mantequilla',
      price: '8.9',
      category: 'ESPECIAL',
      image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg'
    },
    // SABORES DEL MUNDO
    {
      id: 'pollo-tikka',
      name: 'Pollo Tikka Masala',
      description: 'Pollo, tomates, cebolla, ajo, nata, jengibre, cúrcuma, chili',
      price: '8.9',
      category: 'SABORES DEL MUNDO',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg'
    },
    {
      id: 'harissa-atun',
      name: 'Harissa con Tomate y Atún',
      description: 'Ajo, alcaravea, chili, comino, cilantro, atún',
      price: '7.9',
      category: 'SABORES DEL MUNDO',
      image: 'https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg'
    },
    // LOCAL
    {
      id: 'ragu-requena',
      name: 'Ragú blanco de salchicha de Requena',
      description: 'Parmesano, salchicha, vino, cebolla, ajo, queso crema, nata',
      price: '7.9',
      category: 'LOCAL',
      image: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg'
    }
  ];

  const beverages = [
    { id: 'coca-cola', name: 'Coca Cola', price: '1.9' },
    { id: 'coca-zero', name: 'Coca Cola Zero', price: '1.9' },
    { id: 'agua', name: 'Agua', price: '1.9' },
    { id: 'limonada', name: 'Limonada', price: '1.9' },
    { id: 'cerveza-turia', name: 'Cerveza TURIA', price: '1.9' },
    { id: 'cerveza-sin', name: 'Cerveza sin alcohol', price: '1.9' }
  ];

  const desserts = [
    {
      id: 'white-lotus',
      name: 'Dolce White Lotus',
      description: 'Delicate white chocolate mousse with lotus biscuit crumble',
      price: '5.9',
      category: 'DULCE',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
    },
    {
      id: 'ferrero-gold',
      name: 'Ferrero GOLD Rocher',
      description: 'Hazelnut chocolate dessert with gold leaf decoration',
      price: '6.5',
      category: 'DULCE',
      image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg'
    }
  ];


  const filteredDishes = activeCategory
    ? dishes.filter(dish => dish.category === activeCategory)
    : dishes;

  const showDesserts = !activeCategory || activeCategory === 'DULCE';
  const showBeverages = !activeCategory || activeCategory === 'BEBIDA';

  return (
    <div className="space-y-12">
      {/* Main Dishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDishes.map((dish) => (
          <motion.div
            key={dish.id}
            whileHover={{ 
              y: -5,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => setSelectedDish(dish)}
          >
            <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center">
              <img
                src={dish.image}
                alt={dish.name}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
            <div className="p-4 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                  {dish.category}
                </span>
                <span className="text-lg font-bold text-[#ff4b4b]">{dish.price}€</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desserts Section */}
      {showDesserts && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-[#ff4b4b]">
            {t('menu.category.desserts')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <motion.div
                key={dessert.id}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md overflow-hidden cursor-pointer transition-all duration-300"
                onClick={() => setSelectedDish(dessert)}
              >
                <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">{dessert.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                      {dessert.category}
                    </span>
                    <span className="text-lg font-bold text-[#ff4b4b]">{dessert.price}€</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Beverages Section */}
      {showBeverages && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-[#ff4b4b]">
            {t('menu.category.drinks')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {beverages.map((beverage) => (
              <motion.div
                key={beverage.id}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-medium text-gray-900">{beverage.name}</h3>
                <p className="font-bold text-[#ff4b4b] mt-2">{beverage.price}€</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Dish Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl border border-gray-200 shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="max-w-full max-h-full object-contain p-8"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
                  onClick={() => setSelectedDish(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedDish.name}</h2>
                  <span className="text-2xl font-bold text-[#ff4b4b]">{selectedDish.price}€</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                    {selectedDish.category}
                  </span>
                </div>
                <p className="text-gray-700">{selectedDish.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuGrid;