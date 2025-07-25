import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, BrainCircuit } from "lucide-react";

const ScienceResearch = () => {
  const researchPoints = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Evidence-Based",
      content:
        "Over 200 peer-reviewed studies validate the trauma-physiology connection we address",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Clinical Validation",
      content:
        "Documented 78% success rate in resolving chronic conditions through our protocols",
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Neurological Impact",
      content:
        "MRI scans show measurable changes in brain patterns post-treatment",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              The Science
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Backed by Cutting-Edge Research
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              B9Concept isn't alternative medicine - it's complementary science
              that bridges the gap between neurology, psychology, and
              physiology.
            </p>

            <div className="space-y-6">
              {researchPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Scientific research"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-purple-900/60"></div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Published Findings</h3>
                  <p className="mb-4">
                    Our research demonstrates an average 3.2x faster recovery
                    rate compared to conventional approaches
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Before B9Concept
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gray-400 h-2.5 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScienceResearch;
