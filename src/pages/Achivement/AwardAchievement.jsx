import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AwardAchievement = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/awards");

        if (!response.ok) {
          throw new Error("Failed to fetch awards data");
        }

        const data = await response.json();
        setAchievements(data.data);
      } catch (err) {
        setError(err.message || "Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  const handleImageClick = (image, name) => {
    setSelectedImage({ image, name });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  // Animation variants
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (loading) {
    return (
      <div className="text-center py-8 mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Our Awards & Achievements
        </h2>
        <div className="flex justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-40 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Our Awards & Achievements
        </h2>
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="text-center py-8 mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Our Awards & Achievements
      </h2>
      <div className="flex flex-wrap justify-around gap-4">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="flex-1 min-w-[200px] max-w-[250px] cursor-pointer"
            whileHover="hover"
            whileTap="tap"
            variants={imageVariants}
          >
            <img
              src={`http://localhost:8000/uploads/${achievement.image}`}
              alt={`${achievement.name} Award`}
              className="w-90 h-50 rounded-lg shadow-md"
              onClick={() =>
                handleImageClick(achievement.image, achievement.name)
              }
            />
            <p className="mt-2 text-lg text-gray-600">{achievement.name}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <motion.div
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
              <div className="p-8">
                <motion.img
                  src={`http://localhost:8000/uploads/${selectedImage.image}`}
                  alt="Enlarged Award"
                  className="w-full h-auto max-h-[70vh] object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="mt-4 text-xl font-semibold text-gray-800">
                    {selectedImage.name}
                  </p>
                  <p className="text-gray-600">
                    Additional information about this award can go here.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AwardAchievement;
