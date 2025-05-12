import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { useState } from 'react';

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    areaOfInterest: '',
    resume: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
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
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Start your journey with Zana Street world Pasta
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
              Full Name *
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
                Phone Number *
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
                Email Address *
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                Position *
              </label>
              <select
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
              >
                <option value="">Select a position</option>
                <option value="Store Manager">Store Manager</option>
                <option value="Line Cook">Line Cook</option>
                <option value="Server">Server</option>
                <option value="Marketing Coordinator">Marketing Coordinator</option>
              </select>
            </div>

            <div>
              <label htmlFor="areaOfInterest" className="block text-gray-700 font-medium mb-2">
                Area of Interest *
              </label>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                required
                value={formData.areaOfInterest}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4b4b]"
              >
                <option value="">Select an area</option>
                <option value="Kitchen Operations">Kitchen Operations</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
              Upload Resume *
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
                className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
              >
                <Upload size={20} className="mr-2 text-gray-500" />
                <span className="text-gray-500">
                  {formData.resume ? formData.resume.name : 'Choose a file'}
                </span>
              </label>
              <p className="mt-2 text-sm text-gray-500">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff4b4b] text-white py-3 rounded-md hover:bg-[#e64444] transition-colors font-medium"
          >
            Submit Application
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Career;