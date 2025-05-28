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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Vérifier la taille du fichier (max 5MB)
      if (e.target.files[0].size > 5 * 1024 * 1024) {
        setError('El archivo es demasiado grande (máx. 5MB)');
        return;
      }
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
      setError(''); // Effacer les erreurs précédentes
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation supplémentaire
    if (!formData.fullName || !formData.phone || !formData.email) {
      setError('Por favor, complete todos los campos obligatorios.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.resume) {
      setError('Por favor, sube tu CV.');
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('Nombre', formData.fullName);
    formDataToSend.append('Teléfono', formData.phone);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('CV', formData.resume);

    try {
      const response = await fetch('https://formspree.io/f/xyzwrbwd', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setSubmitted(true);
        setFormData({ fullName: '', phone: '', email: '', resume: null });
      } else {
        setError('Hubo un error al enviar el formulario. Intente de nuevo.');
        console.error('Formspree error:', responseData);
      }
    } catch (err) {
      setError('Error de conexión. Por favor, verifique su conexión a internet e intente nuevamente.');
      console.error('Submission error:', err);
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
          ¡Gracias!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Su solicitud ha sido enviada correctamente. ¡Esperamos contar con usted pronto!
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
              Subir CV * (PDF, DOC, DOCX - Máx. 5MB)
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="resume"
                className={`flex items-center justify-center w-full px-4 py-2 border rounded-md cursor-pointer ${
                  formData.resume 
                    ? "border-green-500 bg-green-50" 
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Upload size={20} className="mr-2 text-gray-500" />
                <span className="text-gray-500">
                  {formData.resume ? formData.resume.name : 'Selecciona un archivo'}
                </span>
              </label>
            </div>
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