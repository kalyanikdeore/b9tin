import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah K., Executive",
      role: "Former Chronic Migraine Sufferer",
      content:
        "After 15 years of failed treatments, B9Concept resolved my migraines in weeks. I've been pain-free for 8 months now - something no medication could achieve.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Michael T., Athlete",
      role: "Recovered from Sports Injury",
      content:
        "The chronic pain from my old injury vanished after addressing the trauma connection. My performance has surpassed pre-injury levels.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Dr. Lisa M., Physician",
      role: "Healthcare Professional",
      content:
        "As a doctor, I was skeptical but the science behind B9Concept is sound. It's transformed how I approach patient care by addressing root causes.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

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
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lives Changed by B9Concept
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Don't take our word for it - hear from those who've experienced
              the breakthrough
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-indigo-500 mb-4" />
              <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
