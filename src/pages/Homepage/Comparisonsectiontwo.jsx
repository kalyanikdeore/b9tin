import React from "react";
import { motion } from "framer-motion";
import { Check, X, Award, BarChart2 } from "lucide-react";
import treatmentComparisonVideo from "../../assets/Images/bnine2.mp4";

const TreatmentComparisonSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <BarChart2 className="w-8 h-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Success Rate Comparison
              </h3>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src={treatmentComparisonVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')] opacity-20 bg-cover bg-center"></div>
            <div className="relative z-10 flex items-center gap-4">
              <Award className="w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Important Note</h3>
                <p className="opacity-90">
                  B9Concept complements traditional medicine - we recommend
                  continuing all current treatments while adding our methodology
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentComparisonSection;
