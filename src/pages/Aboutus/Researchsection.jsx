import { BookOpen, Award as AwardIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ResearchSection = () => {
  const [researchData, setResearchData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/research-section"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch research data");
        }
        const data = await response.json();
        setResearchData(data.data.section);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <p>Loading research data...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!researchData) {
    return null;
  }

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
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {researchData.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-8">{researchData.description}</p>
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
                Recognition & Awards
              </h3>
            </div>
            <ul className="space-y-4">
              {researchData.awards?.map((item, index) => (
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
                  <span className="text-gray-600">{item.award}</span>
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
