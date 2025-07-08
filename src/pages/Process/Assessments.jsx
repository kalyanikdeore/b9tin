import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TherapyPlatform() {
  const [activeTab, setActiveTab] = useState("technology");

  const techFeatures = [
    {
      name: "Telehealth Integration",
      description:
        "Secure video sessions with screen sharing and virtual whiteboard capabilities.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      ),
    },
    {
      name: "AI Progress Analytics",
      description:
        "Machine learning tracks treatment progress and suggests protocol adjustments.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      name: "Digital Journaling",
      description:
        "Client journal with sentiment analysis and pattern detection.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      name: "VR Exposure Therapy",
      description:
        "Virtual reality environments for controlled exposure scenarios.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
  ];

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

  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -10 },
  };

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
        <motion.div className="flex border-b border-purple-200 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("technology")}
            className={`px-6 py-3 font-medium ${
              activeTab === "technology"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-purple-400 hover:text-indigo-600"
            }`}
          >
            Technology Integration
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "technology" && (
            <motion.div
              key="technology"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 md:grid-cols-2"
              >
                {techFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <motion.div
                          whileHover={{ rotate: 10 }}
                          className="bg-indigo-100 p-3 rounded-lg mr-4"
                        >
                          <svg
                            className="h-6 w-6 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            {feature.icon}
                          </svg>
                        </motion.div>
                        <h3 className="text-xl font-semibold text-indigo-800">
                          {feature.name}
                        </h3>
                      </div>
                      <p className="text-purple-700 pl-14">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
}
