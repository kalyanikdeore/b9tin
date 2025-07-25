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
// import Testimonials from "./Testimonials";
import ScienceResearch from "./ScienceResearch";
import ProcessSection from "./ProcessSection";
import ComparisonSection from "./ComparisonSection";
import Comparisonsectiontwo from "./Comparisonsectiontwo";
import FinalCTA from "./FinalCTA";
import Testimonials from "./Testimonials";
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
      <Comparisonsectiontwo />
      <ProcessSection />
      <ScienceResearch />
      <FinalCTA />
      <Testimonials />

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
