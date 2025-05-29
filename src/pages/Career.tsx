//import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useState, ChangeEvent } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
}

const Career = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.fullName || !formData.phone || !formData.email) {
      setError('Por favor, completa todos los campos obligatorios');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, introduce un correo electrónico válido');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center p-6">
        <div
          className="text-center max-w-md"
          style={{ animation: 'fadeInScale 0.5s ease-out forwards' }}
        >
          <h2 className="text-2xl font-bold text-green-600 mb-4">¡Gracias por tu interés!</h2>
          <p className="mb-6">
            Hemos recibido tu información. Por favor, envía tu CV a nuestro correo electrónico.
          </p>
          <a
            href={`mailto:streetpastazana@gmail.com?subject=CV%20para%20Zana%20Street%20Pasta%20-%20${encodeURIComponent(formData.fullName)}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            <Mail className="mr-2" size={16} />
            Enviar CV por email
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeInScale { animation: fadeInScale 0.5s ease-out; }
        .animate-slideDown { animation: slideDown 0.8s ease-out; }
        .animate-slideUp { animation: slideUp 0.6s ease-out 0.2s both; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out both; }
        .animate-scaleIn { animation: scaleIn 0.8s ease-out; }
        .animate-spin { animation: spin 1s linear infinite; }
        .field-1 { animation-delay: 0.3s; }
        .field-2 { animation-delay: 0.4s; }
        .field-3 { animation-delay: 0.5s; }
        .email-section { animation: fadeInScale 0.6s ease-out 0.6s both; }
      `}</style>

      <div className="min-h-screen bg-gray-50 p-4 md:p-8 relative overflow-hidden">
        {/* Images de fond animées */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/emploi/teamzana.png"
            alt="Équipe Zana"
            className="absolute top-20 right-10 w-1/3 max-w-xs opacity-70 transform rotate-6"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <img
            src="/images/emploi/harissa.png"
            alt="Spécialité Harissa"
            className="absolute bottom-20 left-10 w-1/4 max-w-xs opacity-70 transform -rotate-6"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <div className="max-w-md mx-auto relative z-10">
          <div className="text-center mb-8 pt-9 animate-slideDown">
            <h1 className="text-3xl font-serif text-gray-800 mb-2 pt-9">
              Únete a Nuestro Equipo
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Comienza tu trayectoria en Zana Street world Pasta
            </p>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="animate-scaleIn">
            <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90 border border-gray-100 animate-slideUp">
              <div className="space-y-6">
                {[
                  { id: 'fullName', label: 'Nombre Completo *', type: 'text' },
                  { id: 'phone', label: 'Teléfono *', type: 'tel' },
                  { id: 'email', label: 'Correo Electrónico *', type: 'email' }
                ].map((field, index) => (
                  <div key={field.id} className={`animate-slideInLeft field-${index + 1}`}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      value={(formData as any)[field.id]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                    />
                  </div>
                ))}

                <div className="pt-2 email-section">
                  <p className="text-sm font-medium text-gray-700 mb-2">Para enviar tu CV:</p>
                  <a
                    href={`mailto:streetpastazana@gmail.com?subject=CV%20para%20Zana%20Street%20Pasta%20-%20${encodeURIComponent(formData.fullName)}`}
                    className="inline-flex items-center text-sm text-gray-800 hover:text-green-600 transition-all duration-200 transform hover:translate-x-1"
                  >
                    <Mail className="mr-2" size={16} />
                    streetpastazana@gmail.com
                  </a>
                </div>

                {error && (
                  <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg animate-fadeInScale">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 bg-green-600 text-white font-medium rounded-lg transition-all duration-200 hover:bg-green-700 hover:shadow-lg transform hover:scale-105 active:scale-95 ${
                    isSubmitting ? 'opacity-70' : ''
                  }`}
                >
                  {isSubmitting ? <span className="inline-block animate-spin">⏳</span> : 'Enviar Solicitud'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
