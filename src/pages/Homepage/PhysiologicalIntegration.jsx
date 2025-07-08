import React, { useEffect } from "react";

const ChronicHealth = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInUp");
        }
      });
    });

    const cards = document.querySelectorAll(
      ".global-stat-card, .condition-item, .cost-category, .toll-stat"
    );
    cards.forEach((card) => observer.observe(card));

    const categorySections = document.querySelectorAll(".category-section");
    categorySections.forEach((section) => {
      section.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.01)";
        this.style.transition = "all 0.3s ease";
      });
      section.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-br py-45 from-indigo-400 to-purple-700 min-h-screen">
      <div className="fixed w-full h-full top-0 left-0 pointer-events-none z-0">
        <div className="absolute rounded-full bg-white/10 w-20 h-20 top-[15%] left-[8%] animate-float delay-[0s]" />
        <div className="absolute rounded-full bg-white/10 w-32 h-32 top-[70%] right-[10%] animate-float delay-[2s]" />
        <div className="absolute rounded-full bg-white/10 w-16 h-16 top-[85%] left-[15%] animate-float delay-[4s]" />
        <div className="absolute rounded-full bg-white/10 w-24 h-24 top-[40%] right-[25%] animate-float delay-[1s]" />
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
          <div className="text-center mb-12 relative">
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-sm">
              Chronic Health Prevalence
            </h1>
            <p className="text-xl font-semibold text-purpe-500">
              The Global Epidemic of Untreated Trauma
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-8 rounded-xl mb-10 relative overflow-hidden">
            <div className="absolute top-5 right-6 text-5xl opacity-80 drop-shadow animate-pulse">
              🌍
            </div>
            <h2 className="text-2xl font-bold mb-4">
              A World in Pain: The Numbers Behind the Crisis
            </h2>
            <p className="text-lg leading-relaxed">
              We're facing an unprecedented global health epidemic. Chronic
              conditions now affect <strong>133 million Americans</strong>
              —that's
              <strong> 40% of the entire population</strong>. Worldwide, the
              numbers are even more staggering, with{" "}
              <strong>2.2 billion people</strong>
              living with conditions that could benefit from trauma-informed
              approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <div className="global-stat-card pulse bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-8 rounded-xl text-center shadow-xl relative overflow-hidden">
              <div className="text-4xl font-extrabold mb-2">133M</div>
              <div className="text-base font-medium">
                Americans with chronic conditions
              </div>
            </div>
            <div className="global-stat-card bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-8 rounded-xl text-center shadow-xl relative overflow-hidden">
              <div className="text-4xl font-extrabold mb-2">40%</div>
              <div className="text-base font-medium">
                of entire US population affected
              </div>
            </div>
            <div className="global-stat-card bg-gradient-to-br from-purple-400 to-indigo-600 text-white p-8 rounded-xl text-center shadow-xl relative overflow-hidden">
              <div className="text-4xl font-extrabold mb-2">2.2B</div>
              <div className="text-base font-medium">
                people worldwide affected
              </div>
            </div>
          </div>

          {/* Additional categories and sections go here using the same layout */}
        </div>
      </div>
    </div>
  );
};

export default ChronicHealth;

// Tailwind animation extension required in tailwind.config.js:
// extend: {
//   animation: {
//     float: 'float 6s ease-in-out infinite',
//     pulse: 'pulse 2s infinite',
//     slideInUp: 'slideInUp 0.6s ease-out',
//   },
//   keyframes: {
//     float: {
//       '0%, 100%': { transform: 'translateY(0) rotate(0)' },
//       '50%': { transform: 'translateY(-20px) rotate(180deg)' },
//     },
//     slideInUp: {
//       from: { opacity: 0, transform: 'translateY(30px)' },
//       to: { opacity: 1, transform: 'translateY(0)' },
//     },
//   },
// }
