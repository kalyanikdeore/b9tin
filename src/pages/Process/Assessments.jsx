import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TherapyPlatform() {
  const [techFeatures, setTechFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/therapy-platform-features"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setTechFeatures(result.data);
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6 flex items-center justify-center">
        <div className="text-indigo-900 text-lg">Loading features...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6 flex items-center justify-center">
        <div className="text-red-500 text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6"
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h1 className="text-4xl text-center font-bold mb-2 text-indigo-900">
          Evidence-Based Therapy Platform
        </h1>
        <p className="text-lg text-center text-purple-800">
          Combining proven therapeutic methods with modern technology for
          optimal outcomes
        </p>
      </motion.header>

      <main className="max-w-6xl mx-auto">
        {techFeatures.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            {techFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-purple-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-purple-800">
            No features available at the moment.
          </div>
        )}
      </main>
    </motion.div>
  );
}
