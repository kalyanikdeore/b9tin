import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BookAppointments = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Health?
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Take the first step toward resolving your chronic conditions at their
          root cause.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => navigate("/login")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg"
          >
            Book Appointments
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BookAppointments;
