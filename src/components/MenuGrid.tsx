import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface DishProps {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const dishes: DishProps[] = [
  // CLÁSICA
  {
    id: 'ragu-bolognese',
    name: 'Ragú a la Bolognese',
    description: 'Ternera, zanahoria, ajo, cebolla, apio, tomate, AOVE',
    price: '8.9',
    category: 'CLÁSICA',
    image: '/images/ragu-bolognese.png' // Chemin local modifié
  },
  {
    id: 'carbonara',
    name: 'Carbonara',
    description: 'Pecorino, guanciale, huevo, parmesano, pimienta',
    price: '8.9',
    category: 'CLÁSICA',
    image: '/images/carbonara.jpg' // Chemin local modifié
  },
  {
    id: 'tomate-albahaca',
    name: 'Tomate albahaca',
    description: 'Tomate, ajo, cebolla, albahaca, AOVE',
    price: '6.5',
    category: 'CLÁSICA',
    image: '/images/tomate-albahaca.jpg' // Chemin local modifié
  },
  // ESPECIAL
  {
    id: 'pesto-aguacate',
    name: 'Pesto de aguacate',
    description: 'Albahaca, parmesano, pipas de calabaza, aguacate, ajo, limón, AOVE',
    price: '8.9',
    category: 'ESPECIAL',
    image: '/images/pesto-de-aguacate.png' // Modification du chemin vers l'image locale
  },
  {
    id: 'trufa-parmesano',
    name: 'Trufa y Parmesano',
    description: 'Pecorino romano, parmesano, crema de trufa',
    price: '7.9',
    category: 'ESPECIAL',
    image: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'alfredo-pollo',
    name: 'Alfredo pollo y champiñones',
    description: 'Parmesano, pollo, pimienta, mantequilla',
    price: '8.9',
    category: 'ESPECIAL',
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'mac-cheese',
    name: 'Mac&Cheese',
    description: 'Parmesano, chéddar, queso crema, mostaza, pimentón ahumado',
    price: '7.9',
    category: 'ESPECIAL',
    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  // SABORES DEL MUNDO
  {
    id: 'pollo-tikka',
    name: 'Pollo Tikka Masala',
    description: 'Pollo, tomates, cebolla, ajo, nata, jengibre, cúrcuma, chili',
    price: '8.9',
    category: 'SABORES DEL MUNDO',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'harissa-atun',
    name: 'Harissa con Tomate y Atún',
    description: 'Ajo, alcaravea, chili, comino, cilantro, atún',
    price: '7.9',
    category: 'SABORES DEL MUNDO',
    image: 'https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'huancaina',
    name: 'Huancaína',
    description: 'Queso crema, ají amarillo, leche evaporada',
    price: '7.9',
    category: 'SABORES DEL MUNDO',
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  // LOCAL
  {
    id: 'ragu-requena',
    name: 'Ragú blanco de salchicha de Requena',
    description: 'Parmesano, salchicha, vino, cebolla, ajo, queso crema, nata',
    price: '7.9',
    category: 'LOCAL',
    image: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=600'
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
    description: 'Ternera, zanahoria, ajo, cebolla, apio, tomate',
    price: 'X',
    category: 'DULCE',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ferrero-gold',
    name: 'Ferrero GOLD Rocher',
    description: 'Pecorino, guanciale, huevo, parmesano, pimienta',
    price: 'X',
    category: 'DULCE',
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const MenuCard = ({ dish }: { dish: DishProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative pt-[75%] bg-gray-50">
        <img
          src={dish.image}
          alt={dish.name}
          className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold">{dish.name}</h3>
            <p className="text-sm text-gray-500">{dish.category}</p>
          </div>
          <p className="text-lg font-semibold">{dish.price}€</p>
        </div>
        <p className="text-gray-600">{dish.description}</p>
      </div>
    </motion.div>
  );
};

interface MenuGridProps {
  activeCategory: string | null;
}

const MenuGrid = ({ activeCategory }: MenuGridProps) => {
  const filteredDishes = activeCategory
    ? dishes.filter(dish => dish.category === activeCategory)
    : dishes;

  const showDesserts = !activeCategory || activeCategory === 'DULCE';
  const showBeverages = !activeCategory || activeCategory === 'BEBIDA';

  return (
    <div className="space-y-12">
      {/* Main Dishes */}
      {filteredDishes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}

      {/* Desserts */}
      {showDesserts && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-[#ff4b4b]">DULCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <motion.div
                key={dessert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative pt-[75%]">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{dessert.name}</h3>
                    <p className="text-lg font-semibold">{dessert.price}</p>
                  </div>
                  <p className="text-gray-600">{dessert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Beverages */}
      {showBeverages && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-[#ff4b4b]">BEBIDA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {beverages.map((beverage) => (
              <div key={beverage.id} className="bg-white rounded-lg shadow-md p-4 text-center">
                <h3 className="text-lg mb-2">{beverage.name}</h3>
                <p className="text-lg font-semibold">{beverage.price}€</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MenuGrid;