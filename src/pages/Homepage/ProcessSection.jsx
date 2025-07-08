import React from "react";
import { motion } from "framer-motion";
import {
  CircleDot,
  Zap,
  CheckCircle,
  HeartPulse,
  Brain,
  Leaf,
  Shield,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProcessSection = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: "assessment",
      icon: <CircleDot className="w-8 h-8" />,
      title: "Assessment",
      description: "Comprehensive evaluation of your trauma patterns",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/TreatmentLimitations",
    },
    {
      id: "energy-restoration",
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Restoration",
      description: "Rebalancing nervous system responses",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/TraumaExposure",
    },
    {
      id: "cognitive-reframing",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Cognitive Reframing",
      description: "Reprogramming stress responses",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/WhyConditions",
    },
    {
      id: "physiological-integration",
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Physiological Integration",
      description: "Supporting natural healing processes",
      image:
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/PhysiologicalIntegration",
    },
    {
      id: "neural-rewiring",
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Rewiring",
      description: "Creating new neural pathways",
      image:
        "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/neural-rewiring",
    },
    {
      id: "holistic-balance",
      icon: <Leaf className="w-8 h-8" />,
      title: "Holistic Balance",
      description: "Aligning mind-body connection",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/holistic-balance",
    },
    {
      id: "resilience-building",
      icon: <Shield className="w-8 h-8" />,
      title: "Resilience Building",
      description: "Strengthening coping mechanisms",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/resilience-building",
    },
    {
      id: "performance-boost",
      icon: <Activity className="w-8 h-8" />,
      title: "Performance Boost",
      description: "Enhancing daily functioning",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      path: "/performance-boost",
    },
  ];

  // Function to handle card click
  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Complete Transformation Pathway
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              An 8-phase methodology for comprehensive healing and growth
            </p>
          </div>
        </motion.div>

        {/* 8 Cards Grid - 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(step.path)} // Use the path from step object
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full inline-flex mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Brain scan"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transformation Timeline
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { time: "1-2 Weeks", result: "Initial awareness" },
                { time: "3-4 Weeks", result: "Energy shifts" },
                { time: "5-6 Weeks", result: "Behavior changes" },
                { time: "7-8 Weeks", result: "Sustainable results" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-xl font-bold mb-1">{item.time}</div>
                  <div className="text-sm opacity-80">{item.result}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
