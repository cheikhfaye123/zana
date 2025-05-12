import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "New Summer Menu Launched",
    date: "June 15, 2025",
    excerpt: "Try our refreshing summer pasta dishes featuring seasonal ingredients and light sauces perfect for warm weather.",
    image: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Grand Opening in Chicago",
    date: "May 28, 2025",
    excerpt: "We're excited to announce our newest location in downtown Chicago. Join us for the grand opening celebration!",
    image: "https://images.pexels.com/photos/6287447/pexels-photo-6287447.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Chef's Special: Truffle Pappardelle",
    date: "April 10, 2025",
    excerpt: "Our award-winning chef introduces a luxurious truffle pappardelle with wild mushrooms and aged parmesan.",
    image: "https://images.pexels.com/photos/5175537/pexels-photo-5175537.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Mobile App Launch",
    date: "March 5, 2025",
    excerpt: "Order your favorite pasta dishes on the go with our new mobile app. Available now on iOS and Android.",
    image: "https://images.pexels.com/photos/4065397/pexels-photo-4065397.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const News = () => {
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
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest happenings at Zana Street world Pasta.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a 
                  href={`/news/${item.id}`} 
                  className="inline-block text-[#ff4b4b] font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;