import React, { useEffect } from "react";

const WhyNotCurable = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".language-card, .flaw-card, .case-study"
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInUp");
        }
      });
    });

    cards.forEach((card) => observer.observe(card));

    // Counter animation
    const bigNumber = document.querySelector(".big-number");
    let current = 0;
    const target = 68;
    const increment = target / 50;

    const animateCounter = () => {
      if (
        bigNumber.getBoundingClientRect().top < window.innerHeight &&
        !bigNumber.classList.contains("counted")
      ) {
        bigNumber.classList.add("counted");
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          bigNumber.textContent = Math.floor(current) + "%";
        }, 30);
      }
    };

    window.addEventListener("scroll", animateCounter);
    animateCounter();
  }, []);

  return (
    <div className="relative min-h-screen py-40 bg-gradient-to-br from-indigo-400 to-purple-600 text-[#2c3e50]">
      {/* Floating Circles */}
      <div className="fixed w-full h-full top-0 left-0 pointer-events-none z-[-1]">
        <div className="absolute w-20 h-20 top-[15%] left-[8%] rounded-full bg-white/10 animate-float delay-[0s]" />
        <div className="absolute w-32 h-32 top-[70%] right-[10%] rounded-full bg-white/10 animate-float delay-[2s]" />
        <div className="absolute w-16 h-16 top-[85%] left-[15%] rounded-full bg-white/10 animate-float delay-[4s]" />
        <div className="absolute w-24 h-24 top-[40%] right-[25%] rounded-full bg-white/10 animate-float delay-[1s]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
          <div className="text-center mb-12 relative">
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full"></div>
            <h1 className="text-4xl font-bold mb-2 text-[#2c3e50] drop-shadow">
              Why Conditions Are Not Curable
            </h1>
            <div className="text-xl text-purple-500 font-semibold">
              The Conventional Medicine Trap
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl mb-10 relative overflow-hidden">
            <div className="text-2xl font-bold mb-4">
              The Uncomfortable Truth About "Incurable" Conditions
            </div>
            <p className="text-lg leading-relaxed">
              Here's what your doctor will never tell you:
              <strong> 68% of chronic conditions</strong> are labeled
              "incurable" not because they can't be resolved, but because
              conventional medicine lacks the tools to address their underlying
              trauma origins. Our analysis reveals that
              <strong> 32.8% of conditions</strong> are explicitly defined using
              terms that admit medical limitation.
            </p>
            <div className="absolute top-5 right-8 text-5xl opacity-70">⚠️</div>
          </div>

          <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white text-center p-8 rounded-xl shadow-lg mb-10 relative pulse">
            <div className="text-5xl font-extrabold big-number">68%</div>
            <div className="text-lg font-semibold">
              of chronic conditions labeled "incurable" due to system
              limitations, not actual incurability
            </div>
          </div>

          {/* Language of Medical Defeat */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#2c3e50] border-b-4 border-gradient-to-r from-red-500 to-red-700 pb-2 mb-6">
              The Language of Medical Defeat
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  term: "Chronic",
                  percent: "Found in 89% of condition definitions",
                  desc: `Medical code for "we expect this to last forever." But what if "chronic" simply means "we're treating the wrong thing"?`,
                },
                {
                  term: "Syndrome",
                  percent: "Found in 43% of conditions",
                  desc: `Fancy terminology for "a collection of symptoms we can name but don't understand."`,
                },
                {
                  term: "Idiopathic",
                  percent: "Found in 31% of conditions",
                  desc: `Medical Latin for "we have no idea what causes this." Often trauma-related.`,
                },
                {
                  term: "Poorly Understood Mechanisms",
                  percent: "Found in 76% of conditions",
                  desc: `Translation: "We can see what's happening, but we don't know why."`,
                },
                {
                  term: "Unknown Etiology",
                  percent: "Found in 52% of conditions",
                  desc: `Admitting ignorance about root causes while treating symptoms.`,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="language-card bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-md transition-transform hover:translate-y-[-5px] hover:shadow-xl"
                >
                  <div className="flex items-center text-indigo-500 font-bold text-lg mb-2">
                    🚫 {item.term}
                  </div>
                  <div className="italic text-[#34495e] mb-3 leading-relaxed">
                    {item.desc}
                  </div>
                  <div className="inline-block bg-red-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {item.percent}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add more sections here... */}
        </div>
      </div>

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        `}
      </style>
    </div>
  );
};

export default WhyNotCurable;
