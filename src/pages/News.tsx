import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const News = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { t } = useLanguage();

  const pastaDelMes = {
    name: t('news.pasta_del_mes.name'),
    description: t('news.pasta_del_mes.description'),
    image: "/images/menu/ragu-blanco.png"
  };

  const newsItems = [
    {
      id: 6,
      title: t('news.benidorm.title'),
      date: "11 de mayo de 2026",
      excerpt: t('news.benidorm.excerpt'),
      image: "/images/franchising/ZANA_LOGO.png"
    },
    {
      id: 1,
      title: t('news.summer_pasta.title'),
      date: "June 15, 2025",
      excerpt: t('news.summer_pasta.excerpt'),
      image: "/images/franchising/ZANA_LOGO.png"
    },
    {
      id: 3,
      title: t('news.app.title'),
      date: "April 10, 2025",
      excerpt: t('news.app.excerpt'),
      image: "/images/franchising/ZANA_LOGO.png"
    },
    {
      id: 4,
      title: t('news.special.title'),
      date: "March 5, 2025",
      excerpt: t('news.special.excerpt'),
      image: "/images/menu/ragu-blanco.png"
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-[#FD5121]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#000000] mb-3 pt-9"
          >
            {t('news.latest')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white max-w-2xl mx-auto"
          >
            {t('news.stay_updated')}
          </motion.p>
        </div>

        {/* Pasta del Mes — Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
            <div className="sm:w-56 w-full h-48 sm:h-auto flex-shrink-0 bg-gray-100 overflow-hidden">
              <img
                src={pastaDelMes.image}
                alt={pastaDelMes.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 bg-[#FD5121] text-white text-xs font-bold px-3 py-1 rounded-full">
                  <Star size={12} />
                  {t('news.pasta_del_mes.badge')}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{pastaDelMes.name}</h2>
              <p className="text-gray-600 text-sm">{pastaDelMes.description}</p>
            </div>
          </div>
        </motion.div>

        {/* News grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden flex flex-col h-full"
            >
              <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-100 p-2 overflow-hidden">
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
                <p className="text-gray-600 text-sm mb-3">
                  {expandedId === item.id ? item.excerpt : item.excerpt.slice(0, 180) + '...'}
                </p>
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="text-[#ff4b4b] text-sm font-medium hover:underline"
                >
                  {expandedId === item.id ? t('news.show_less') : t('news.read_more')}
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