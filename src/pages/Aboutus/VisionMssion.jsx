import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Globe,
  HeartHandshake,
  Lightbulb,
  Rocket,
} from "lucide-react";

const VisionMission = () => {
  const [visionMissions, setVisionMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVisionMissions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/vision-missions"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const missionsArray = Array.isArray(data) ? data : [];

        setVisionMissions(missionsArray);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message || "Failed to load content");
        setLoading(false);
      }
    };

    fetchVisionMissions();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-1 space-y-6 py-1">
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center bg-red-100 px-6 py-4 rounded-lg">
          <span className="text-red-600 font-medium">Error: {error}</span>
        </div>
      </div>
    );
  }

  const getIconComponent = (iconName) => {
    const icons = {
      Eye,
      Target,
      Globe,
      HeartHandshake,
      Lightbulb,
      Rocket,
    };
    return icons[iconName] || Lightbulb;
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-3">
            Our Core
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vision & Mission
          </h1>
          <div className="mx-auto h-1 w-24 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visionMissions.map((item, index) => {
            const Icon = getIconComponent(item.icon);
            return (
              <VisionMissionCard
                key={item.id}
                icon={Icon}
                title={item.title}
                text={item.content}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VisionMissionCard = ({ icon: Icon, title, text, index }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{
      y: -5,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }}
  >
    <div className="flex flex-col items-center text-center h-full">
      <div className="relative mb-6">
        <div
          className={`absolute -inset-4 rounded-full ${
            index % 3 === 0
              ? "bg-blue-100"
              : index % 3 === 1
              ? "bg-indigo-100"
              : "bg-purple-100"
          } opacity-80 blur-md`}
        ></div>
        <div
          className={`relative flex items-center justify-center w-16 h-16 rounded-full ${
            index % 3 === 0
              ? "bg-blue-500"
              : index % 3 === 1
              ? "bg-indigo-500"
              : "bg-purple-500"
          } text-white`}
        >
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-grow">{text}</p>

      <div
        className={`mt-6 w-16 h-1 ${
          index % 3 === 0
            ? "bg-blue-500"
            : index % 3 === 1
            ? "bg-indigo-500"
            : "bg-purple-500"
        } rounded-full`}
      ></div>
    </div>
  </motion.div>
);

export default VisionMission;
