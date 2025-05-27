import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "En breve nuestra pasta de verano",
    date: "June 15, 2025",
    excerpt: "Prueba nuestros refrescantes platos de pasta de verano con ingredientes de temporada y salsas ligeras, perfectos para el clima cálido.",
    image: "/images/franchising/ZANA_LOGO.png"
  },
  {
    id: 2,
    title: "Nueva apertura en Benidorm",
    date: "May 28, 2025",
    excerpt: "¡Estamos emocionados de anunciar nuestra nueva ubicación en Benidorm. Únete a nosotros para la celebración de la gran inauguración!",
    image: "/images/franchising/ZANA_LOGO.png"
  },
  {
    id: 3,
    title: "En breve nuestra app Zana",
    date: "April 10, 2025",
    excerpt: "Nuestro chef galardonado presenta una pasta lujosa con setas silvestres y parmesano añejo.",
    image: "/images/franchising/ZANA_LOGO.png"
  },
  {
    id: 4,
    title: "Chefs' Special: Ragu blanco de salchicha de Requena",
    date: "March 5, 2025",
    excerpt: "Pide tus platos de pasta favoritos sobre la marcha con nuestra nueva aplicación móvil. Disponible ahora en iOS y Android.",
    image: "/images/ragu-blanco.png"
  }
];

const News = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-['Dancing_Script'] text-[#ff4b4b] mb-3"
          >
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest happenings at Zana Street world Pasta.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 -mt-7">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden flex flex-col h-full"
            >
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-100 p-3 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>

                {/* Texte affiché complet si l'article est étendu */}
                <p className="text-gray-600 text-sm mb-3">
                  {expandedId === item.id ? item.excerpt : item.excerpt.slice(0, 180) + '...'}
                </p>

                {/* Bouton d'affichage */}
                <button
                  onClick={() =>
                    setExpandedId(expandedId === item.id ? null : item.id)
                  }
                  className="text-[#ff4b4b] text-sm font-medium hover:underline"
                >
                  {expandedId === item.id ? 'Show Less ↑' : 'Read More →'}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
