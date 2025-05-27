import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLocation } from '../context/LocationContext';

const Locations = () => {
  const locationInfo = useLocation();

  const locations = [
    {
      id: 1,
      city: 'Valencia',
      address: locationInfo.address,
      phone: locationInfo.phone,
      hours: locationInfo.hours,
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
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
            Our Location
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Visit us at our restaurant in Valencia and enjoy our delicious pasta dishes.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto w-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.city}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{location.city}</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-[#ff4b4b] mr-3 mt-1 flex-shrink-0" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="text-[#ff4b4b] mr-3 mt-1 flex-shrink-0" />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <Clock size={20} className="text-[#ff4b4b] mr-3 mt-1 flex-shrink-0" />
                    <p>{location.hours}</p>
                  </div>
                </div>
                <a 
                  href={`https://maps.google.com/?q=${location.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-[#ff4b4b] text-white px-4 py-2 rounded-md hover:bg-[#e64444] transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;