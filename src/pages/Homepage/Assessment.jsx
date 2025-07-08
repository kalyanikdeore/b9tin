import React from "react";

const ChronicHealth = () => {
  return (
    <div className="chronichealth relative min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 text-gray-800 font-sans">
      <div className="absolute inset-0 -z-10">
        <div className="absolute rounded-full bg-white/10 w-20 h-20 top-[15%] left-[8%] animate-float delay-[0s]"></div>
        <div className="absolute rounded-full bg-white/10 w-32 h-32 top-[70%] right-[10%] animate-float delay-[2s]"></div>
        <div className="absolute rounded-full bg-white/10 w-16 h-16 top-[85%] left-[15%] animate-float delay-[4s]"></div>
        <div className="absolute rounded-full bg-white/10 w-24 h-24 top-[40%] right-[25%] animate-float delay-[1s]"></div>
      </div>

      <div className="chronichealth container max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10 relative">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto mb-4 rounded"></div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Chronic Health Prevalence
            </h1>
            <p className="text-xl font-semibold text-red-500">
              The Global Epidemic of Untreated Trauma
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white rounded-xl p-8 relative overflow-hidden mb-10">
            <div className="absolute top-5 right-6 text-5xl opacity-80 drop-shadow animate-pulse">
              🌍
            </div>
            <h2 className="text-2xl font-bold mb-4">
              A World in Pain: The Numbers Behind the Crisis
            </h2>
            <p className="text-lg leading-relaxed">
              We're facing an unprecedented global health epidemic. Chronic
              conditions now affect <strong>133 million Americans</strong>
              —that's <strong>40% of the entire population</strong>. Worldwide,
              the numbers are even more staggering, with{" "}
              <strong>2.2 billion people</strong> living with conditions that
              could benefit from trauma-informed approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-6 rounded-xl text-center shadow-xl transform hover:scale-105 transition">
              <div className="text-4xl font-extrabold mb-2">133M</div>
              <p className="text-base">Americans with chronic conditions</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-6 rounded-xl text-center shadow-xl transform hover:scale-105 transition">
              <div className="text-4xl font-extrabold mb-2">40%</div>
              <p className="text-base">of entire US population affected</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-6 rounded-xl text-center shadow-xl transform hover:scale-105 transition">
              <div className="text-4xl font-extrabold mb-2">2.2B</div>
              <p className="text-base">people worldwide affected</p>
            </div>
          </div>

          {/* Add more sections like categories, toll, costs, trends using Tailwind the same way */}

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white text-center rounded-xl p-10 relative overflow-hidden">
            <div className="absolute top-5 right-6 text-4xl opacity-40">✨</div>
            <h3 className="text-2xl font-bold mb-4">
              The B9Concept Opportunity
            </h3>
            <p className="text-lg leading-relaxed">
              With such massive prevalence of trauma-connected conditions, we're
              not just addressing individual suffering—we're potentially
              impacting a global health crisis. Every person who resolves their
              trauma patterns doesn't just transform their own life; they break
              generational cycles and model possibility for millions of others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChronicHealth;

// Tailwind custom animations (add this in your tailwind.config.js under extend > keyframes and animation)
// Example:
// float: {
//   '0%, 100%': { transform: 'translateY(0) rotate(0)' },
//   '50%': { transform: 'translateY(-20px) rotate(180deg)' }
// },
// animation: {
//   float: 'float 6s ease-in-out infinite',
//   pulse: 'pulse 2s infinite'
// }
