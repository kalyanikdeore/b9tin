import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCTASection = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/cta-section/active"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch CTA section data");
        }

        const data = await response.json();
        setCtaData(data.data);
      } catch (err) {
        setError(err.message || "Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchCTASection();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading CTA section...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  if (!ctaData) {
    return <div className="text-center py-16">No CTA section available</div>;
  }

  // Helper function to get full image URLs
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `http://localhost:8000/storage/${path}`;
  };

  return (
    <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={
            ctaData.background_image
              ? getImageUrl(ctaData.background_image)
              : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          }
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white relative">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: ctaData.overlay_image
                ? `url(${getImageUrl(ctaData.overlay_image)})`
                : "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')",
            }}
          ></div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {ctaData.badge_text || "Limited Availability"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {ctaData.title || "Ready to Transform Your Life?"}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              {ctaData.subtitle ||
                "Join thousands of happy customers who have already experienced the change."}
            </p>
            <button className="group relative overflow-hidden bg-white text-indigo-600 hover:text-indigo-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              <span className="relative z-10">
                {ctaData.button_text || "Get Started Now"}
              </span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            {ctaData.disclaimer || "Results may vary from person to person."}
          </p>
          <p className="mt-2">
            {ctaData.results_note ||
              "Average results based on customer surveys."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
