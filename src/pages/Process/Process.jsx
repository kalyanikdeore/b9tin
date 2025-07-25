import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CallToAction from "../Process/CallToAction";
import ProcessAchievements from "./ProcessAchievements";
import VideoSection from "./VideoSection";
import Assessment from "./Assessments";
import Department from "./Department";
import AboutProcess from "./AboutProcess";
import Practiced from "./Practiced";
import TherapyCards from "./TherapyCards";

const HeroSection = () => {
  const [therapyData, setTherapyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make sure this URL matches your route exactly
        const response = await fetch(
          "http://localhost:8000/api/nature-therapy",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          setTherapyData(data.data);
        } else {
          throw new Error(data.message || "No data available");
        }
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-130">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-130 text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!therapyData) {
    return (
      <div className="flex items-center justify-center h-130">
        No data available
      </div>
    );
  }

  return (
    <div
      className="relative bg-cover bg-center h-130 py-44 flex items-center justify-center"
      style={{
        backgroundImage: `url('${therapyData.background_image_url}')`,
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
      <div className="relative text-center text-white z-10 px-4">
        <motion.h1
          className="text-4xl md:text-5xl mb-6 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {therapyData.title}
        </motion.h1>
        <motion.h3
          className="italic text-xl md:text-2xl mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {therapyData.subtitle}
        </motion.h3>
      </div>
    </div>
  );
};

// Main Process Component
function Process() {
  return (
    <div>
      <HeroSection />
      <AboutProcess />
      <TherapyCards />
      <Practiced />
      {/* <Department /> */}
      {/* <CallToAction /> */}
      {/* <ProcessAchievements /> */}
      <Assessment />
      {/* <VideoSection /> */}
    </div>
  );
}

export default Process;
