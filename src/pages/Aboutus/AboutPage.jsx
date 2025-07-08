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
    title: "About B9Concept",
    subtitle: "Revolutionary Health Transformation Technology",
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
    mission: {
      title: "Our Mission",
      description:
        "To liberate millions from the endless cycle of symptom management by addressing the hidden trauma patterns that contribute to chronic health conditions.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    vision: {
      title: "Our Vision",
      description:
        "A world where chronic suffering becomes a catalyst for profound transformation—where every person discovers that their symptoms are messengers pointing toward deeper restoration, not life sentences to endure forever.",
      icon: <Globe className="w-8 h-8" />,
    },
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
    research: {
      title: "Backed by Science",
      description:
        "Our approach is grounded in the latest research from neuroscience, psychoneuroimmunology, and trauma therapy. We've published multiple peer-reviewed studies demonstrating the effectiveness of our methodology.",
      icon: <BookOpen className="w-8 h-8" />,
    },
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {aboutData.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {aboutData.subtitle}
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

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                  {aboutData.mission.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {aboutData.mission.title}
                </h3>
              </div>
              <p className="text-gray-600">{aboutData.mission.description}</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                  {aboutData.vision.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {aboutData.vision.title}
                </h3>
              </div>
              <p className="text-gray-600">{aboutData.vision.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet The Experts
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team combines expertise in neuroscience,
              trauma therapy, and energy medicine to deliver transformative
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 md:py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                  {aboutData.research.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {aboutData.research.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                {aboutData.research.description}
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                View Research Papers
              </button>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                  <AwardIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Recognition & Awards
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    2023 Innovation in Health Award
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    Published in Journal of Trauma & Health
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    Featured in Health Innovation Summit
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the B9Concept Difference?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Take the first step toward resolving your chronic conditions at
            their root cause.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium text-lg"
            >
              Contact Our Team
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
