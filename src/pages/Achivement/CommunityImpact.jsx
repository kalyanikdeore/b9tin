import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CommunityAchievement = () => {
  const [communityAchievements, setCommunityAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/community-achievements"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCommunityAchievements(data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
        // Fallback to empty array if API fails
        setCommunityAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-10 bg-blue-200 rounded-full w-1/3 mx-auto"></div>
            <div className="h-6 bg-blue-200 rounded-full w-1/4 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm border border-blue-100"
              >
                <div className="h-32 bg-blue-100 rounded-lg mb-6"></div>
                <div className="flex items-center">
                  <div className="h-14 w-14 bg-blue-200 rounded-full mr-4"></div>
                  <div className="space-y-2">
                    <div className="h-5 bg-blue-200 rounded-full w-32"></div>
                    <div className="h-4 bg-blue-200 rounded-full w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear how our therapy programs have transformed lives
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-white border-opacity-30"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-blue-400 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <blockquote className="text-lg text-gray-700 mb-8 flex-grow italic">
                "{achievement.quote}"
              </blockquote>

              {achievement.author_name && (
                <div className="mt-auto">
                  <p className="font-medium text-gray-900">
                    {achievement.author_name}
                  </p>
                  {achievement.author_title && (
                    <p className="text-gray-600">{achievement.author_title}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityAchievement;
