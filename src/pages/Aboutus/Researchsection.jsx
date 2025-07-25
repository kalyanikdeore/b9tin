import { BookOpen, Award as AwardIcon } from "lucide-react";
import { motion } from "framer-motion";

const aboutData = {
  research: {
    title: "Backed by Science",
    description:
      "Our approach is grounded in the latest research from neuroscience, psychoneuroimmunology, and trauma therapy. We've published multiple peer-reviewed studies demonstrating the effectiveness of our methodology.",
    icon: <BookOpen className="w-8 h-8" />,
  },
  recognition: {
    title: "Recognition & Awards",
    icon: <AwardIcon className="w-8 h-8" />,
    items: [
      "2023 Innovation in Health Award",
      "Published in Journal of Trauma & Health",
      "Featured in Health Innovation Summit",
    ],
  },
};

const ResearchSection = () => {
  return (
    <section className="py-16 md:py-24 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Research Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                {aboutData.research.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {aboutData.research.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-8">
              {aboutData.research.description}
            </p>
          </motion.div>

          {/* Recognition Column */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                <AwardIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {aboutData.recognition.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {aboutData.recognition.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
