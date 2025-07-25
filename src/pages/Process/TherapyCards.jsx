import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TherapyCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/therapy-services"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCards(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
              y: -5,
              scale: 1.02,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${
              card.bg_color
            } rounded-lg shadow-md overflow-hidden border-2 ${
              card.border_color || "border-transparent"
            }`}
          >
            <div className="p-6">
              {/* <div className={`text-4xl mb-4 ${card.text_color}`}>
                {card.icon}
              </div> */}
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
