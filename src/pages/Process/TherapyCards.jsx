import React from "react";
import { motion } from "framer-motion";

const TherapyCards = () => {
  const cards = [
    {
      id: 1,
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your personal needs and goals.",
      icon: "🧘‍♂️",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Couples Counseling",
      description: "Improve communication and strengthen your relationship.",
      icon: "💑",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      id: 3,
      title: "Family Therapy",
      description: "Heal relationships and improve family dynamics.",
      icon: "👨‍👩‍👧‍👦",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      id: 4,
      title: "Anxiety Treatment",
      description: "Learn techniques to manage and reduce anxiety.",
      icon: "😌",
      bgColor: "bg-purple-100", // Lighter background for contrast
      textColor: "text-purple-800", // Darker purple text
      // borderColor: "border-purple-800", // Dark purple border
    },
    {
      id: 5,
      title: "Depression Help",
      description: "Professional support for overcoming depression.",
      icon: "🌞",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      id: 6,
      title: "Trauma Therapy",
      description: "Specialized care for processing traumatic experiences.",
      icon: "🕊️",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      id: 7,
      title: "Stress Management",
      description: "Tools to cope with daily stressors effectively.",
      icon: "🌿",
      bgColor: "bg-indigo-100", // Lighter background for contrast
      textColor: "text-indigo-800", // Darker indigo text
      // borderColor: "border-indigo-800", // Dark indigo border
    },
    {
      id: 8,
      title: "Online Sessions",
      description: "Therapy from the comfort of your home.",
      icon: "💻",
      bgColor: "bg-gray-50",
      textColor: "text-gray-600",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Therapy Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional care tailored to your unique needs and circumstances.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{
              y: -5, // Slight lift on hover
              scale: 1.02, // Subtle zoom effect
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", // Enhanced shadow
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${
              card.bgColor
            } rounded-lg shadow-md overflow-hidden border-2 ${
              card.borderColor || "border-transparent"
            }`}
          >
            <div className="p-6">
              <div className={`text-4xl mb-4 ${card.textColor}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TherapyCards;
