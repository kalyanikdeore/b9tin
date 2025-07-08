import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "No dangerous side effects",
    "Non-invasive and natural",
    "Works alongside your current treatments",
    "Scientifically validated approach",
    "Personalized to your unique needs",
    "Long-term results, not temporary relief",
  ];

  return (
    <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center"></div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Limited Availability
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Ready for Your Transformation?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Take the first step toward resolving your chronic condition at
                  its source. Our practitioners are accepting a limited number
                  of new clients this month.
                </p>

                <button className="group relative overflow-hidden bg-white text-indigo-600 hover:text-indigo-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <span className="relative z-10">Begin Your Journey</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </motion.div>
            </div>

            <div className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-amber-500" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Why Choose B9Concept Today
                  </h3>
                </div>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Happy client"
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-8 text-center text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            B9Concept is not a medical treatment but may complement your
            healthcare. Always consult with your physician.
          </p>
          <p className="mt-2">
            Results vary based on individual commitment and condition severity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
