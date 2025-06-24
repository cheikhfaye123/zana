import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
import FranchiseForm from '../components/FranchiseForm';

const Franchising = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292727] mb-9 sm:mb-4"
          >
            Franchise Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2"
          >
            Join the Zana Street world Pasta family and start your own successful business.
          </motion.p>
        </div>
        
        {/* Hero Image */}
        <div className="relative bg-white h-60 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-10 sm:mb-16 mx-2 sm:mx-0 flex items-center justify-center">
  <img 
    src="/images/franchising/ZANA_LOGO.png" 
    alt="Franchise Opportunity" 
    className="max-h-full max-w-full object-contain"
  />
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
    <div className="text-center text-white">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">A Recipe for Success</h2>
      <p className="text-xs sm:text-base md:text-xl max-w-md sm:max-w-xl mx-auto">
        Own a piece of the fastest growing pasta chain in the country
      </p>
    </div>
  </div>
</div>

        
        {/* Benefits */}
        <div className="mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Why Franchise With Us?</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUp size={20} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Proven Business Model</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our streamlined operations and tested recipes ensure consistent success.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Comprehensive Training</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We provide thorough training for you and your staff to ensure operational excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Briefcase size={20} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Ongoing Support</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Marketing, operations, and supply chain support to help your business thrive.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <DollarSign size={20} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Strong ROI</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Competitive investment with attractive returns and multiple revenue streams.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Steps */}
        <div className="mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Franchising Process</h2>
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-[#ff4b4b] text-white text-xl sm:text-2xl font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Initial Inquiry</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Fill out our franchise application form to express your interest and provide basic information about your background and financial qualifications.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-[#ff4b4b] text-white text-xl sm:text-2xl font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Discovery Meeting</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Meet with our franchise development team to discuss the opportunity in detail and ask any questions you may have.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-[#ff4b4b] text-white text-xl sm:text-2xl font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Financial Review & Approval</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We'll review your financial qualifications and business experience to ensure a good fit with our franchise system.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-[#ff4b4b] text-white text-xl sm:text-2xl font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Agreement & Training</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Sign the franchise agreement and begin our comprehensive training program to prepare for your grand opening.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h2>
          <p className="text-sm sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Take the first step toward owning your own Zana Street world Pasta franchise by filling out our inquiry form.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-block bg-[#ff4b4b] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-[#e64444] transition-colors font-medium text-sm sm:text-base"
          >
            Apply Now
          </button>
        </div>

        {/* Franchise Form Modal */}
        <FranchiseForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </div>
  );
};

export default Franchising;