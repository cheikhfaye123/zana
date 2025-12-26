import { motion } from 'framer-motion';

// Données des témoignages - Facile à modifier ou ajouter
const testimonials = [
  {
    id: 1,
    text: "MUY BUENO, VIVIMOS POR EL BARRIO ASÍ QUE COMEMOS MUY SEGUIDO AQUÍ. SU PASTA CARBONARA ES LO MÁXIMO",
    author: "Sandra",
    image: "/images/reviews/persona1.jpg"
  },
  {
    id: 2,
    text: "LA PASTA ES ARTESANAL Y SE NOTA, LOS SABORES ESTÁN MUY BIEN LOGRADOS, PERO LO QUE MÁS ME GUSTA ES LA ATENCIÓN",
    author: "Patricia",
    image: "/images/reviews/persona2.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              {/* Image ronde */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-[#FD5121]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Texte */}
              <div className="flex-1">
                <p className="text-gray-700 text-sm md:text-base italic leading-relaxed mb-2">
                  "{testimonial.text}"
                </p>
                <p className="text-[#FD5121] font-bold text-sm">
                  - {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;