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
      const response = await fetch('https://formspree.io/f/xwpoggrj', {
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-2xl font-bold text-[#94ba85] mb-4">¡Gracias por tu interés!</h2>
          <p className="mb-6 text-gray-600">Hemos recibido tu información. Por favor, envía tu CV a nuestro correo electrónico.</p>
          <a 
            href={`mailto:streetpastazana@gmail.com?subject=CV%20para%20Zana%20Street%20Pasta%20-%20${encodeURIComponent(formData.fullName)}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-[#94ba85] text-white rounded-md hover:bg-[#e64444] transition-colors"
          >
            <Mail className="mr-2" size={16} />
            Enviar CV por email
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FD5121] p-4 md:p-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 pt-9">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-[#000000] mb-2 pt-9"
          >
            Únete a Nuestro Equipo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=" text-sm text-white"
          >
            Comienza tu trayectoria en Zana Street world Pasta
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94ba85] focus:border-transparent outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94ba85] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94ba85] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Para enviar tu CV:
              </p>
              <a 
                href={`mailto:streetpastazana@gmail.com?subject=CV%20para%20Zana%20Street%20Pasta%20-%20${encodeURIComponent(formData.fullName)}`}
                className="inline-flex items-center text-sm text-[#292727] hover:text-[#535050]"
              >
                <Mail className="mr-2" size={16} />
                streetpastazana@gmail.com
              </a>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 text-sm text-red-700 bg-red-100 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-[#292727] text-white font-medium rounded-lg hover:bg-[#726d6d] transition-colors ${
                isSubmitting ? "opacity-70" : ""
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Career;