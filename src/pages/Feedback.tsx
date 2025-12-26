import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    visitDate: '',
    location: '',
    rating: 0,
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating,
    }));
  };

  const handleStarHover = (rating: number) => {
    setHoveredStar(rating);
  };

  const handleStarLeave = () => {
    setHoveredStar(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const { name, email, visitDate, location, rating } = formData;
    if (!name || !email || !visitDate || !location || rating === 0) {
      setError('Por favor, completa todos los campos obligatorios.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xqabaqko', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          visitDate: '',
          location: '',
          rating: 0,
          comments: '',
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Error al enviar el formulario');
      }
    } catch (err) {
      console.error(err);
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
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#94ba85] mb-2">¡Gracias por tu opinión!</h2>
          <p className="mb-6 text-gray-600">Hemos recibido tu feedback. ¡Gracias por ayudarnos a mejorar!</p>
          <button
            onClick={() => {
              setSubmitted(false);
            }}
            className="inline-block bg-[#ff4b4b] text-white px-6 py-2 rounded-md hover:bg-[#e64444] transition-colors"
          >
            Enviar otra opinión
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FD5121] p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 pt-9">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-9 sm:mb-4 text-center"
          >
            Danos tu Opinión
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-white"
          >
            Ayúdanos a mejorar tu experiencia.
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
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94ba85] focus:border-transparent outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Visita *
                </label>
                <input
                  type="date"
                  id="visitDate"
                  name="visitDate"
                  required
                  value={formData.visitDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94ba85] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Local *
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94ba85] focus:border-transparent outline-none"
                >
                  <option value="">Selecciona un local</option>
                  <option value="C/ Barcelonina 2, Valencia">C/ Barcelonina 2, Valencia</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Califica tu experiencia *
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => handleStarHover(star)}
                    onMouseLeave={handleStarLeave}
                    className="focus:outline-none"
                  >
                    <Star
                      fill={star <= (hoveredStar || formData.rating) ? '#ff4b4b' : 'none'}
                      color={star <= (hoveredStar || formData.rating) ? '#ff4b4b' : '#d1d5db'}
                      size={32}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                Comentarios
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94ba85] focus:border-transparent outline-none"
                placeholder="Comparte tu experiencia..."
              />
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
                isSubmitting ? 'opacity-70' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Opinión'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Feedback;