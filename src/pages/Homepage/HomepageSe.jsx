import React, { useState } from "react";
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
} from "lucide-react";
import HeroSection from "./Herosection/Herosection";
import WhyB9Concept from "./WhyB9Concept";
import Aboutb9 from "./Aboutb9";
import Testimonials from "./Testimonials";
import ScienceResearch from "./ScienceResearch";
import ProcessSection from "./ProcessSection";
import ComparisonSection from "./ComparisonSection";
import FinalCTA from "./FinalCTA";

const HomepageSe = () => {
  const [activeTab, setActiveTab] = useState("approach");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroContent = {
    title: "Revolutionary Health Transformation Technology",
    subtitle: "Where Restoration Begins Within",
    description:
      "B9Concept addresses the root causes of chronic conditions by resolving trauma patterns that conventional medicine overlooks.",
    ctaText: "Begin Your Transformation",
    videoUrl: "https://example.com/video.mp4",
    stats: [
      { value: "77.4%", label: "Conditions Linked to Trauma" },
      { value: "92%", label: "Success Rate" },
      { value: "10+", label: "Years of Research" },
    ],
  };

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      title: "Trauma Resolution",
      description:
        "Address the root causes of chronic conditions by resolving underlying trauma patterns.",
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Energy Restoration",
      description:
        "Restore your body's natural energy flow for optimal vitality and resilience.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-indigo-600" />,
      title: "Holistic Healing",
      description:
        "Comprehensive approach that integrates mind, body, and energy systems.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      role: "Fibromyalgia Patient",
      quote:
        "After years of failed treatments, B9Concept helped me regain my life in just 3 sessions.",
      rating: 5,
    },
    {
      name: "Michael T.",
      role: "Chronic Fatigue Sufferer",
      quote:
        "The results were immediate and profound. I have energy again for the first time in a decade.",
      rating: 5,
    },
    {
      name: "Dr. Emily R.",
      role: "Neurologist",
      quote:
        "B9Concept represents a paradigm shift in how we approach chronic conditions. The science is compelling.",
      rating: 4,
    },
  ];

  const processSteps = [
    {
      title: "Assessment",
      description:
        "Comprehensive evaluation of your condition and trauma history",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Custom Protocol",
      description: "Personalized treatment plan based on your unique needs",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Transformation",
      description:
        "Targeted sessions to resolve trauma and restore energy flow",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Results",
      description: "Sustained improvement and ongoing support",
      icon: <BarChart2 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />
      <Aboutb9 />
      <WhyB9Concept />
      <ComparisonSection />
      <ProcessSection />
      <ScienceResearch />
      <FinalCTA />
      <Testimonials />

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The B9Concept Transformation Journey
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100"
                >
                  <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    {step.icon}
                  </div>
                  <div className="md:h-24">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  <div className="mt-4 text-indigo-600 font-bold">
                    Step {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Lives Every Day
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Health?
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
              Learn More
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageSe;
