import React from "react";
import { motion } from "framer-motion";
import { Check, X, Award, BarChart2 } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Approach",
      traditional: "Symptom management",
      b9: "Root cause resolution",
    },
    {
      feature: "Duration",
      traditional: "Often lifelong treatment",
      b9: "Typically 6-12 weeks",
    },
    {
      feature: "Side Effects",
      traditional: "Common (40-60% of cases)",
      b9: "Rare (<5%)",
    },
    {
      feature: "Cost Over 5 Years",
      traditional: "$15,000-$50,000",
      b9: "$3,000-$6,000",
    },
    {
      feature: "Success Rate",
      traditional: "20-40% improvement",
      b9: "78-92% resolution",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            B9Concept vs Traditional Approaches
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Why our methodology delivers results when conventional methods
              fall short
            </p>
          </div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="p-4 font-bold text-gray-500">Feature</div>
            <div className="p-4 font-bold text-gray-500 text-center">
              Traditional
            </div>
            <div className="p-4 font-bold text-indigo-600 text-center">
              B9Concept
            </div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-4 font-medium text-gray-900">
                {item.feature}
              </div>
              <div className="p-4 text-gray-600 text-center flex items-center justify-center gap-1">
                {item.feature === "Success Rate" ? (
                  `${item.traditional}`
                ) : (
                  <>
                    <X className="w-4 h-4 text-red-500" />
                    <span>{item.traditional}</span>
                  </>
                )}
              </div>
              <div className="p-4 text-indigo-600 font-medium text-center flex items-center justify-center gap-1">
                {item.feature === "Success Rate" ? (
                  `${item.b9}`
                ) : (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{item.b9}</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

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
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Success rate chart"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
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

export default ComparisonSection;
