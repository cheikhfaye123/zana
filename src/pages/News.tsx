import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const News = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: t('news.summer_pasta.title'),
      date: "June 15, 2025",
      excerpt: t('news.summer_pasta.excerpt'),
      image: "/images/franchising/ZANA_LOGO.png"
    },
    {
      id: 2,
      title: t('news.new_location.title'),
      date: "May 28, 2025",
      excerpt: t('news.new_location.excerpt'),
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
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-['Dancing_Script'] text-[#292727] mb-3 pt-9"
          >
            {t('news.latest')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('news.stay_updated')}
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
