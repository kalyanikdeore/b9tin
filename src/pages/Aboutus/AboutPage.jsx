import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/about");
        const data = await response.json();

        const formattedData = {
          ...data,
          stats:
            typeof data.stats === "string"
              ? JSON.parse(data.stats)
              : data.stats || [],
          // Use video_url if available, otherwise fall back to video_path
          video_url:
            data.video_url ||
            (data.video_path
              ? `http://localhost:8000/${data.video_path}`
              : null),
        };

        setAboutData(formattedData);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-600">No about data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content (unchanged) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* ... keep all your existing text content ... */}
            </motion.div>

            {/* Video/Image Content */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {!isVideoPlaying && aboutData.video_url && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="bg-white/90 hover:bg-white text-indigo-600 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="h-8 w-8 fill-current" />
                    </button>
                  </div>
                )}

                {isVideoPlaying && aboutData.video_url ? (
                  <video
                    className="w-full aspect-video object-cover"
                    autoPlay
                    controls
                    muted
                    loop
                  >
                    <source src={aboutData.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full aspect-video bg-gray-800 flex items-center justify-center">
                    {aboutData.video_url ? (
                      <img
                        src={aboutData.video_url}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentElement.innerHTML =
                            '<div class="text-white">Click play to view video</div>';
                        }}
                      />
                    ) : (
                      <div className="text-white">No video available</div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
