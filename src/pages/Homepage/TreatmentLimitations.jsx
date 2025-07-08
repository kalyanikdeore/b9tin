import React from "react";

export default function TreatmentLimitations() {
  return (
    <div className="relative w-full  py-40 min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 text-gray-800">
      {/* Floating Circles */}
      <div className="fixed w-full h-full top-0 left-0 pointer-events-none z-0">
        <div className="absolute w-20 h-20 bg-white/10 rounded-full animate-float left-[8%] top-[15%]" />
        <div className="absolute w-30 h-30 bg-white/10 rounded-full animate-float delay-[2s] right-[10%] top-[70%]" />
        <div className="absolute w-15 h-15 bg-white/10 rounded-full animate-float delay-[4s] left-[15%] top-[85%]" />
        <div className="absolute w-24 h-24 bg-white/10 rounded-full animate-float delay-[1s] right-[25%] top-[40%]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 md:p-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-black-500 to-yellow-400 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 drop-shadow">
              Treatment Limitations
            </h1>
            <div className="text-xl text-gray-500 font-semibold">
              Why Current Approaches Keep You Trapped in Suffering
            </div>
          </div>

          {/* Brutal Reality */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white text-center p-8 rounded-xl relative overflow-hidden mb-10">
            <div className="text-3xl font-bold mb-4">
              The Brutal Reality of Treatment Failure
            </div>
            <p className="text-lg leading-relaxed">
              Here's the truth no medical professional wants to admit:{" "}
              <strong>
                100% of chronic conditions in our database have documented
                treatment limitations
              </strong>
              . This isn't because individual doctors are failing—it's because
              the entire system is designed around managing symptoms rather than
              resolving underlying causes.
            </p>
            <div className="absolute top-5 right-8 text-6xl opacity-20">💔</div>
          </div>

          {/* 100% Stat */}
          <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white text-center p-8 rounded-xl shadow-xl mb-10 animate-pulse">
            <div className="text-5xl font-extrabold mb-2">100%</div>
            <div className="text-lg font-semibold">
              of chronic conditions have documented treatment limitations
            </div>
          </div>

          {/* Five Categories Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2 relative pb-2 inline-block">
              The Five Categories of Treatment Failure
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></span>
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 gap-8">
            {/* Category 1 */}
            <div className="bg-white border-l-8 border-indigo-500 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl w-[70px] h-[70px] flex items-center justify-center text-3xl mr-4">
                  🔴
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    Category 1: Openly Acknowledged "No Cure"
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    (47% of conditions)
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Medical professionals openly admit there is no cure available
                for nearly half of all chronic conditions, despite decades of
                research and billions in funding.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
                <div className="font-semibold text-blue-600 mb-2">
                  Examples of Medical Admissions:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                    <div className="font-semibold">Fibromyalgia</div>
                    <div className="text-sm">
                      "No cure available; central sensitization mechanisms
                      remain poorly understood"
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                    <div className="font-semibold">
                      Complex Regional Pain Syndrome
                    </div>
                    <div className="text-sm">
                      "No cure; many develop permanent disabilities despite
                      treatment"
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                    <div className="font-semibold">
                      Irritable Bowel Syndrome
                    </div>
                    <div className="text-sm">
                      "Chronic condition requiring lifelong dietary and
                      pharmaceutical management"
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                    <div className="font-semibold">
                      Chronic Fatigue Syndrome
                    </div>
                    <div className="text-sm">
                      "No specific treatment; management focuses on symptom
                      relief"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* You can continue with Categories 2 - 5 similarly following this structure */}
          </div>
        </div>
      </div>
    </div>
  );
}
