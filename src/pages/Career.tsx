import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { useState } from 'react';

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!formData.resume) {
      setError('Por favor, sube tu CV.');
      return;
    }

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('resume', formData.resume);

    try {
      const response = await fetch('https://formspree.io/f/xyzwrbwd', { // Remplace par ton endpoint Formspree
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', phone: '', email: '', resume: null });
      } else {
        setError('Hubo un error al enviar el formulario. Intente de nuevo.');
      }
    } catch (err) {
      setError('Hubo un error al enviar el formulario. Intente de nuevo.');
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-16 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#ff4b4b]">¡Gracias!</h2>
        <p>Su solicitud ha sido enviada correctamente. ¡Esperamos contar con usted pronto!</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16"> {/* pt-24 pour baisser le titre */}
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
          encType="multipart/form-data"
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
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
              Subir CV *
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0,0,0,0)',
                  border: 0,
                }}
              />
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
              >
                <Upload size={20} className="mr-2 text-gray-500" />
                <span className="text-gray-500">
                  {formData.resume ? formData.resume.name : 'Selecciona un archivo'}
                </span>
              </label>
              <p className="mt-2 text-sm text-gray-500">
                Formatos aceptados: PDF, DOC, DOCX (Máx. 5MB)
              </p>
            </div>
          </div>

          {error && <p className="mb-4 text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#ff4b4b] text-white py-3 rounded-md hover:bg-[#e64444] transition-colors font-medium"
          >
            Enviar Solicitud
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Career;
