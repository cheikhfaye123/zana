import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery';
import { MapPin, Zap, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useRef } from 'react';
import Testimonials from '../components/Testimonials';
// Déclaration globale pour Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const Home = () => {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  
  // Initialisation Google Maps
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBozpv7IOTds4fxHazJ0v3FLsirzdLtakY&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const locations = [
        {
          position: { lat: 39.47142704091176, lng: -0.3762519711641526 },
          title: "Zana Pasta - Barcelonina",
          address: "C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, España",
          url: "https://maps.app.goo.gl/i8D6f7GGyPMLHmHT8"
        },
        {
          position: { lat: 39.474601306652026, lng: -0.347177538626442 },
          title: "Zana Pasta - Blasco Ibáñez",
          address: "C/ Blasco Ibáñez 87, Algiros, 46022, Museros, Valencia",
          url: "https://maps.app.goo.gl/MKJrPEFPvXfgGZ5K8"
        }
      ];

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 39.4739, lng: -0.3663 },
        zoom: 13,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#1a2332" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8ec3b9" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#1a2332" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#0d1b2a" }]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#2c3e50" }]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1a2332" }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#1e2a3a" }]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#1e2a3a" }]
          }
        ]
      });

      locations.forEach((location) => {
        // Créer un pin en forme de goutte (comme Google Maps)
        const markerIcon = {
          path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
          fillColor: "#FD5121",
          fillOpacity: 1,
          strokeColor: "#FFFFFF",
          strokeWeight: 2,
          scale: 2.5,
          anchor: new google.maps.Point(12, 22),
        };

        const marker = new google.maps.Marker({
          position: location.position,
          map: map,
          title: location.title,
          icon: markerIcon,
          animation: google.maps.Animation.DROP
        });

        marker.addListener("click", () => {
          window.open(location.url, "_blank");
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="padding: 12px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #FD5121; font-weight: bold; font-size: 16px;">${location.title}</h3>
            <p style="margin: 0; color: #666; font-size: 13px; line-height: 1.4;">${location.address}</p>
            <a href="${location.url}" target="_blank" style="display: inline-block; margin-top: 8px; color: #FD5121; text-decoration: none; font-weight: 500; font-size: 13px;">Ver en Google Maps →</a>
          </div>`
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    };

    loadGoogleMaps();
  }, []);
  
  return (
    <div className="pt-16">
      <HeroSlider />
      
      <Gallery />
      <Testimonials />
      
      {/* Section 4 Cartes - CERCANÍA, RAPIDEZ, INNOVACIÓN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-[#FD5121] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">CERCANÍA</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ingredientes regionales con denominación de origen.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-[#FD5121] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">RAPIDEZ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nuestras pastas se hacen en un máximo de cinco minutos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-[#FD5121] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">INNOVACIÓN</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Innovamos con sabores del mundo, todos los meses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Google Map avec 2 localisations */}
      <section id="visit-us" className="relative py-8 md:py-12" style={{ backgroundImage: `url('/images/macaroni.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay orange semi-transparent (optionnel) */}
        <div className="absolute inset-0 bg-[#FD5121]/70"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8"
          >
            {t('location.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Google Map */}
            <div 
              ref={mapRef}
              className="h-[400px] md:h-[500px] w-full shadow-2xl"
            />

            {/* Cartes des 2 localisations - Même dimension pour les 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 px-8 md:px-16">
              <motion.a
                href="https://maps.app.goo.gl/i8D6f7GGyPMLHmHT8"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-3xl hover:shadow-xl transition-all duration-300 w-full max-w-xs mx-0"
              >
                <div className="flex flex-col items-center text-center h-full justify-center min-h-[120px]">
                  <div className="w-8 h-8 bg-[#FD5121] rounded-full flex items-center justify-center mb-2">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 leading-tight">C/ BARCELONINA 2,<br />46002 VALENCIA</h3>
                  <p className="text-gray-500 text-xs">10:00 - 00:00</p>
                </div>
              </motion.a>

              <motion.a
                href="https://maps.app.goo.gl/MKJrPEFPvXfgGZ5K8"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-3xl hover:shadow-xl transition-all duration-300 w-full max-w-xs ml-auto"
              >
                <div className="flex flex-col items-center text-center h-full justify-center min-h-[120px]">
                  <div className="w-8 h-8 bg-[#FD5121] rounded-full flex items-center justify-center mb-2">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 leading-tight">AV BLASCO IBÁÑEZ 87,<br />46022</h3>
                  <p className="text-gray-500 text-xs">10:00 - 00:00</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;