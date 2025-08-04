import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AboutHero() {
  const [aboutHero, setAboutHero] = useState({
    title: "About B9Concept",
    subtitle: "Revolutionary Health Transformation Technology",
    background_image: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchAboutHero = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/about-hero");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        setAboutHero((prev) => ({
          ...prev,
          title: data.data.title,
          subtitle: data.data.subtitle,
          background_image: data.data.background_image,
          isLoading: false,
        }));
      } catch (err) {
        setAboutHero((prev) => ({
          ...prev,
          error: err.message,
          isLoading: false,
        }));
        console.error("Fetch error:", err);
      }
    };

    fetchAboutHero();
  }, []);

  if (aboutHero.isLoading) {
    return (
      <div className="relative bg-gray-200 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse h-12 bg-gray-300 rounded w-3/4 mx-auto mb-6"></div>
          <div className="animate-pulse h-6 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
        </div>
      </div>
    );
  }

  if (aboutHero.error) {
    return (
      <div className="relative bg-red-100 text-red-800 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Error loading hero section: {aboutHero.error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-20 md:py-32">
        {aboutHero.background_image && (
          <div className="absolute inset-0 z-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${aboutHero.background_image})` }}
            ></div>
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {aboutHero.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {aboutHero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutHero;
