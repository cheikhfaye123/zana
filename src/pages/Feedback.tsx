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
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStarClick = (rating: number) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleStarHover = (rating: number) => {
    setHoveredStar(rating);
  };

  const handleStarLeave = () => {
    setHoveredStar(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-['Dancing_Script'] text-[#ff4b4b] mb-4"
          >
            Your Feedback
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We value your opinion and strive to improve your dining experience.
          </motion.p>
        </div>
        
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
            <p className="text-green-700 mb-6">
              We appreciate your feedback. It helps us improve and serve you better.
            </p>
            <button
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  visitDate: '',
                  location: '',
                  rating: 0,
                  comments: '',
                });
                setSubmitted(false);
              }}
              className="inline-block bg-[#ff4b4b] text-white px-6 py-2 rounded-md hover:bg-[#e64444] transition-colors"
            >
              Submit Another Response
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="visitDate" className="block text-gray-700 font-medium mb-2">
                  Visit Date
                </label>
                <input
                  type="date"
                  id="visitDate"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
                >
                  <option value="">Select a location</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Miami">Miami</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Rate Your Experience
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
            
            <div className="mb-6">
              <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#ff4b4b] text-white py-3 rounded-md hover:bg-[#e64444] transition-colors font-medium"
            >
              Submit Feedback
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default Feedback;