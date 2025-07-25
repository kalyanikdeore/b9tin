import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TherapyPlatform() {
  const [activeTab, setActiveTab] = useState("technology");
  const [features, setFeatures] = useState({
    technology: [],
    methods: [],
    research: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/therapy-platform"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setFeatures(result.data);
        } else {
          throw new Error(result.message || "Failed to load features");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching therapy features:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { y: -5, transition: { duration: 0.2 } },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10 },
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        Error: {error}
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="therapy-platform-container">
      <header>
        <h1>Evidence-Based Therapy Platform</h1>
        <p>Combining proven methods with modern technology</p>
      </header>

      <div className="tabs">
        {["technology", "methods", "research"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "technology" && "Technology Integration"}
            {tab === "methods" && "Therapeutic Methods"}
            {tab === "research" && "Evidence-Based Research"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="tab-content"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="features-grid"
          >
            {features[activeTab]?.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="feature-card"
              >
                <h3>{feature.feature_name}</h3>
                <p>{feature.feature_description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
