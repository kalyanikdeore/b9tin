import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Play,
  ArrowRight,
  ChevronRight,
  Heart,
  Info,
  ShieldCheck,
  Zap,
  Leaf,
  UserCheck,
  Clock,
  Award,
  BarChart2,
  Users,
  Globe,
  Award as AwardIcon,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const AboutPage = () => {
  const [loading, setLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Mock data - replace with your actual API call
  const aboutData = {
    description:
      "B9Concept is a breakthrough approach to health that addresses the root causes of chronic conditions by resolving trauma patterns that conventional medicine overlooks. Our methodology combines advanced cognitive reframing techniques with energy restoration to create lasting transformation.",
    video_path: "about-video.mp4",
    button_text: "Learn About Our Process",
    button_link: "/process",
    stats: [
      { value: "10+", label: "Years of Research" },
      { value: "500+", label: "Success Stories" },
      { value: "95%", label: "Satisfaction Rate" },
    ],

    team: [
      {
        name: "Dr. Sarah Johnson",
        role: "Founder & Lead Researcher",
        bio: "With over 15 years in neuroscience and trauma therapy, Dr. Johnson developed the B9Concept methodology after discovering the profound connection between unresolved trauma and chronic health conditions.",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Michael Chen",
        role: "Clinical Director",
        bio: "A pioneer in energy medicine, Michael brings 12 years of clinical experience integrating cognitive and energetic approaches to healing.",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dr. Emily Rodriguez",
        role: "Research Scientist",
        bio: "PhD in Psychoneuroimmunology, specializing in the mind-body connection and trauma's impact on physical health.",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  };

  // Simulate loading if you're fetching from an API
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  The B9Concept Difference
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"></div>
              </motion.div>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {aboutData.description}
              </motion.p>

              {aboutData.button_text && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link to={aboutData.button_link}>
                    <button className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                      <span className="relative z-10 flex items-center">
                        {aboutData.button_text}
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </motion.div>
              )}

              <motion.div
                className="mt-12 grid grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {aboutData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100"
                  >
                    <p className="text-3xl font-bold text-indigo-600">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
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
                {!isVideoPlaying && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="bg-white/90 hover:bg-white text-indigo-600 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="h-8 w-8 fill-current" />
                    </button>
                  </div>
                )}
                <div className="w-full aspect-video bg-gray-800 flex items-center justify-center">
                  <p className="text-white">Video Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
