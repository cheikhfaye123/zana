import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Briefcase } from 'lucide-react';

const Franchising = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-['Dancing_Script'] text-[#ff4b4b] mb-4"
          >
            Franchise Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join the Zana Street world Pasta family and start your own successful business.
          </motion.p>
        </div>
        
        {/* Hero Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-16">
          <img 
            src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Franchise Opportunity" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Recipe for Success</h2>
              <p className="text-xl max-w-xl">
                Own a piece of the fastest growing pasta chain in the country
              </p>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Why Franchise With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Business Model</h3>
              <p className="text-gray-600">
                Our streamlined operations and tested recipes ensure consistent success.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Training</h3>
              <p className="text-gray-600">
                We provide thorough training for you and your staff to ensure operational excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Marketing, operations, and supply chain support to help your business thrive.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-[#ff4b4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Strong ROI</h3>
              <p className="text-gray-600">
                Competitive investment with attractive returns and multiple revenue streams.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Franchising Process</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-[#ff4b4b] text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Inquiry</h3>
                <p className="text-gray-600">
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
              <div className="bg-[#ff4b4b] text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery Meeting</h3>
                <p className="text-gray-600">
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
              <div className="bg-[#ff4b4b] text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Financial Review & Approval</h3>
                <p className="text-gray-600">
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
              <div className="bg-[#ff4b4b] text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Agreement & Training</h3>
                <p className="text-gray-600">
                  Sign the franchise agreement and begin our comprehensive training program to prepare for your grand opening.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Take the first step toward owning your own Zana Street world Pasta franchise by filling out our inquiry form.
          </p>
          <a 
            href="/franchising/apply" 
            className="inline-block bg-[#ff4b4b] text-white px-8 py-3 rounded-md hover:bg-[#e64444] transition-colors font-medium"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Franchising;