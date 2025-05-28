import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useState } from 'react';

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.fullName || !formData.phone || !formData.email) {
      setError('Por favor, complete todos los campos obligatorios.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mzzrnydr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          restaurantLocation: 'C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', phone: '', email: '' });
      } else {
        const data = await response.json();
        setError(`Error: ${data.error || 'Error al enviar el formulario'}`);
      }
    } catch (err) {
      console.error('Error details:', err);
      setError('Error de conexión. Por favor, inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-16 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold mb-4 text-[#ff4b4b]"
        >
          ¡Gracias por tu interés!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hemos recibido tu información. Por favor, envía tu CV a nuestro correo electrónico.
        </motion.p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 pt-9">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-['Dancing_Script'] text-[#ff4b4b] mb-4"
          >
            Únete a Nuestro Equipo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comienza tu trayectoria en Zana Street world Pasta
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-2">
              Para enviar tu CV, por favor envíalo a:
            </p>
            <a 
              href={`mailto:streetpastazana@gmail.com?subject=CV%20para%20Zana%20Street%20Pasta%20-%20${encodeURIComponent(formData.fullName)}&body=${encodeURIComponent(
                `Nombre: ${formData.fullName}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\n\nDirección del restaurante:\nC/ Barcelonina 2, Ciutat Vella\n46002 Valencia, Valencia`
              )}`}
              className="text-[#ff4b4b] hover:text-[#e64444] transition-colors inline-flex items-center"
            >
              <Mail className="mr-2" size={20} />
              streetpastazana@gmail.com
            </a>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#ff4b4b] text-white py-3 rounded-md hover:bg-[#e64444] transition-colors font-medium ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Career;