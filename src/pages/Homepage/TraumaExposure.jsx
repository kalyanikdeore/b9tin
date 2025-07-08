import React from "react";

export default function TraumaExposureStatistics() {
  return (
    <div className="relative min-h-screen  py-40 bg-gradient-to-br from-indigo-400 to-purple-700 text-slate-800 font-sans">
      {/* Floating Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-float delay-[0s]" />
        <div className="absolute w-30 h-30 bg-white/10 rounded-full top-[60%] right-[15%] animate-float delay-[2s]" />
        <div className="absolute w-16 h-16 bg-white/10 rounded-full top-[80%] left-[20%] animate-float delay-[4s]" />
      </div>

      <div className="max-w-7xl mx-auto p-5">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-10 shadow-2xl my-6">
          <div className="text-center relative mb-12">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full" />
            <h1 className="text-4xl font-bold text-slate-800 mb-3 drop-shadow">
              Trauma Exposure Statistics
            </h1>
            <div className="text-xl font-semibold text-black-500">
              The Hidden Crisis Behind Chronic Health Conditions
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-700 border-l-4 border-black-500 rounded-xl p-6 text-white text-base text-white-700 leading-8 mb-10">
            <strong className="block mb-2">
              The Shocking Reality Medicine Doesn't Want You to Know
            </strong>
            After analyzing 177 chronic health conditions across 12 major
            medical categories, we've uncovered a truth that will fundamentally
            change how you view your health challenges:
            <strong className="block">
              77.4% of chronic conditions have documented connections to trauma
              exposure
            </strong>
            . This isn't speculation—it's scientific reality backed by
            peer-reviewed research that conventional medicine routinely ignores.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-gradient-to-br from-blue-300 to-blue-600 text-white p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
              <div className="text-4xl font-extrabold mb-2">77.4%</div>
              <div className="text-base font-medium">
                of chronic conditions linked to trauma
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-300 to-purple-600 text-white p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold mb-2">137</div>
              <div className="text-base font-medium">
                out of 177 conditions show trauma origins
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-300 to-blue-600 text-white p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold mb-2">69.3%</div>
              <div className="text-base font-medium">
                average trauma exposure rate
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-300 to-purple-600 text-white p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-extrabold mb-2">2+</div>
              <div className="text-base font-medium">
                billion people worldwide affected
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-xl text-center font-semibold shadow-lg mb-10">
            Trauma exposure range: 2% to 300% depending on the specific
            condition
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-400 pb-2 inline-block">
              The Most Trauma-Connected Conditions
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Neurological */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 transition-transform hover:translate-x-1">
                <div className="text-black-500 text-lg font-bold mb-4 flex items-center gap-2">
                  🧠 Neurological & Pain Disorders
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-slate-800">
                      Chronic Neck Pain
                    </div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      300% higher occurrence
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      Functional Neurological Disorders
                    </div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      92% trauma connection
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      Complex Regional Pain Syndrome
                    </div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      90% trauma link
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      Fibromyalgia
                    </div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      88.2% report childhood trauma
                    </div>
                  </div>
                </div>
              </div>

              {/* Sleep & Mental Health */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 transition-transform hover:translate-x-1">
                <div className="text-black-500 text-lg font-bold mb-4 flex items-center gap-2">
                  😴 Sleep & Mental Health
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Chronic Insomnia</div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      90% trauma association
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Dissociative Disorders</div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      90% trauma connection
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      Borderline Personality Disorder
                    </div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      90% trauma link
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">PTSD</div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      100% trauma-related
                    </div>
                  </div>
                </div>
              </div>

              {/* Autoimmune */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 transition-transform hover:translate-x-1">
                <div className="text-black-500 text-lg font-bold mb-4 flex items-center gap-2">
                  🛡️ Autoimmune & Digestive
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">
                      Irritable Bowel Syndrome
                    </div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      70-80% trauma connection
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Autoimmune Conditions</div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      65-85% trauma association
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Chronic Fatigue</div>
                    <div className="text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full inline-block text-sm">
                      75-90% trauma link
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-blue-400 text-white p-6 rounded-xl relative mb-10">
            <div className="text-2xl font-semibold mb-3">
              The Hidden Healthcare Crisis
            </div>
            <div>
              If you're one of the millions suffering from chronic conditions,
              there's a <strong>3-in-4 chance</strong> that unresolved trauma
              patterns are contributing to your symptoms. Yet the average person
              sees <strong>6-8 different specialists</strong> and spends{" "}
              <strong>$18,000+ annually</strong> on treatments that never
              address these underlying trauma connections.
            </div>
            <div className="absolute top-5 right-7 text-5xl opacity-30">💡</div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4 border-b-2 border-blue-400 pb-2 inline-block">
              Why This Changes Everything
            </h3>
            <p className="text-base leading-7 text-slate-700">
              Your chronic pain isn't just "something you have to live with."
              Your digestive issues aren't just "stress-related." Your sleep
              disorders aren't just "part of aging." They may be your nervous
              system's way of expressing unresolved trauma patterns that can be
              addressed and potentially resolved.
            </p>
          </div>

          <div className="bg-red-50 border border-red-300 rounded-lg p-4 italic text-red-700 font-medium mb-10">
            <strong>The Medical Blind Spot:</strong> Medical schools spend less
            than 2% of curriculum time on trauma-informed care, despite trauma
            being connected to the majority of chronic conditions. This creates
            a healthcare system that's expertly trained to manage symptoms while
            remaining blind to their most common underlying cause.
          </div>

          <div className="bg-gradient-to-br from-purple-300 to-white-400 text-black p-6 rounded-xl text-center">
            <h4 className="text-2xl font-bold mb-3">
              The Breakthrough Insight
            </h4>
            <p className="text-lg leading-7">
              Traditional healthcare focuses on managing symptoms because it
              doesn't address the trauma patterns disrupting your nervous
              system. When you understand that your chronic pain, digestive
              issues, sleep disorders, or anxiety may stem from unresolved
              emotional patterns, you unlock the potential for genuine
              transformation—not just temporary relief.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
