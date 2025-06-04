import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, ChefHat, Users, Heart, Sparkles, Star } from 'lucide-react';

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

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6 overflow-hidden">
        {/* Particules d'arrière-plan */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative text-center max-w-md bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-30 transform transition-all duration-1000 hover:scale-105">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
            <Heart className="text-white w-10 h-10" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            ¡Gracias por tu interés!
          </h2>
          
          <p className="mb-8 text-white text-opacity-90 text-lg">
            Hemos recibido tu información. Por favor, envía tu CV a nuestro correo electrónico.
          </p>
          
          <a 
            href={`mailto:streetpastazana@gmail.com?subject=CV%20para%20Zana%20Street%20Pasta%20-%20${encodeURIComponent(formData.fullName)}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-red-500 hover:to-red-600 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105"
          >
            <Mail className="mr-3 w-5 h-5" />
            Enviar CV por email
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Formes géométriques animées d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 rounded-3xl animate-spin" 
             style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/4 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-30 rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 -left-10 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 opacity-30 rounded-2xl animate-pulse" />
      </div>

      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-md mx-auto">
          {/* En-tête avec animations */}
          <div className="text-center mb-12 pt-8">
            <div className="relative mb-6">
              <div className="inline-block animate-bounce">
                <ChefHat className="w-16 h-16 text-green-600 mx-auto mb-4" />
              </div>
              
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-3 relative bg-gradient-to-r from-gray-800 via-purple-600 to-gray-800 bg-clip-text text-transparent">
              Únete a Nuestro Equipo
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-full transform scale-x-0 animate-pulse" 
                   style={{ animation: 'scale-x 2s ease-in-out infinite' }} />
            </h1>
            
            <p className="text-lg text-gray-600 flex items-center justify-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
              Comienza tu trayectoria en Zana Street world Pasta
              <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
            </p>

            {/* Indicateurs de bénéfices */}
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 bg-white bg-opacity-70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Équipe dynamique</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Ambiance familiale</span>
              </div>
            </div>
          </div>

          {/* Formulaire avec glassmorphism */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-white bg-opacity-20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white border-opacity-30 overflow-hidden transform transition-all duration-500 hover:shadow-3xl"
          >
            {/* Effet de brillance animé */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform skew-x-12 -translate-x-full animate-pulse" />

            <div className="space-y-6 relative z-10">
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="animate-bounce">👤</span>
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-white border-opacity-50 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300 text-gray-800 placeholder-gray-500 transform focus:scale-105"
                  placeholder="Tu nombre completo..."
                />
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="animate-pulse">📱</span>
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-white border-opacity-50 rounded-2xl focus:ring-2 focus:ring-green-500 bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300 text-gray-800 placeholder-gray-500 transform focus:scale-105"
                    placeholder="+34 123 456 789"
                  />
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="animate-bounce">📧</span>
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-white border-opacity-50 rounded-2xl focus:ring-2 focus:ring-green-500 bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300 text-gray-800 placeholder-gray-500 transform focus:scale-105"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-gradient-to-r from-green-500 to-purple-500 bg-opacity-20 rounded-2xl p-4 border border-green-500 border-opacity-30">
                  <p className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="animate-bounce">💌</span>
                    Para enviar tu CV:
                  </p>
                  <a 
                    href={`mailto:streetpastazana@gmail.com?subject=CV%20para%20Zana%20Street%20Pasta%20-%20${encodeURIComponent(formData.fullName)}`}
                    className="inline-flex items-center text-gray-800 hover:text-green-600 font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    streetpastazana@gmail.com
                  </a>
                </div>
              </div>

              {error && (
                <div className="p-4 text-sm text-red-700 bg-red-100 bg-opacity-80 backdrop-blur-sm rounded-2xl border border-red-200 animate-pulse">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform hover:scale-105 hover:shadow-2xl ${
                  isSubmitting ? "opacity-70" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="animate-bounce">🚀</span>
                    Enviar Solicitud
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Message motivant en bas */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm animate-pulse">
              ✨ Rejoins une équipe passionnée et créative ! ✨
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scale-x {
            0%, 100% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Career;