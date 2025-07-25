import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Award, BarChart2 } from "lucide-react";

const ComparisonSection = () => {
  const [comparisonData, setComparisonData] = useState({
    loading: true,
    error: null,
    data: {
      title: "Why Choose B9Concept?",
      subtitle: "See how we compare to traditional approaches",
      badgeText: "Comparison",
      comparisonItems: [],
      noteText:
        "Our success rates are based on actual client results and may vary depending on individual circumstances.",
      successRateImage: "",
      noteImage: "",
    },
  });

  useEffect(() => {
    const fetchComparisonData = async () => {
      try {
        // Fetch comparison items
        const itemsResponse = await fetch(
          "http://localhost:8000/api/comparison-items"
        );
        if (!itemsResponse.ok) {
          throw new Error("Failed to fetch comparison items");
        }
        const comparisonItems = await itemsResponse.json();

        // Update state with fetched data
        setComparisonData((prev) => ({
          ...prev,
          loading: false,
          data: {
            ...prev.data,
            comparisonItems: Array.isArray(comparisonItems)
              ? comparisonItems
              : [],
          },
        }));
      } catch (error) {
        console.error("Fetch error:", error);
        setComparisonData((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };

    fetchComparisonData();
  }, []);

  if (comparisonData.loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (comparisonData.error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-lg mx-4">
        <h3 className="text-red-600 font-medium">
          Error loading comparison data
        </h3>
        <p className="text-red-500 mt-2">{comparisonData.error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Retry
        </button>
      </div>
    );
  }

  const { data } = comparisonData;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {data.badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">{data.subtitle}</p>
          </div>
        </motion.div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="p-4 font-bold text-gray-500">Feature</div>
            <div className="p-4 font-bold text-gray-500 text-center">
              Traditional
            </div>
            <div className="p-4 font-bold text-indigo-600 text-center">
              B9Concept
            </div>
          </div>

          {data.comparisonItems.length > 0 ? (
            data.comparisonItems.map((item, index) => (
              <motion.div
                key={item.id || index}
                className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 font-medium text-gray-900">
                  {item.feature}
                </div>
                <div className="p-4 text-gray-600 text-center flex items-center justify-center gap-1">
                  {item.feature === "Success Rate" ? (
                    `${item.traditional}`
                  ) : (
                    <>
                      {item.show_icons !== false && (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                      <span>{item.traditional}</span>
                    </>
                  )}
                </div>
                <div className="p-4 text-indigo-600 font-medium text-center flex items-center justify-center gap-1">
                  {item.feature === "Success Rate" ? (
                    `${item.b9}`
                  ) : (
                    <>
                      {item.show_icons !== false && (
                        <Check className="w-4 h-4 text-green-500" />
                      )}
                      <span>{item.b9}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No comparison items available
            </div>
          )}
        </div>
        {/* Rest of your component remains the same
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <BarChart2 className="w-8 h-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Success Rate Comparison
              </h3>
            </div>
            {data.successRateImage ? (
              <img
                src={data.successRateImage}
                alt="Success rate chart"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            ) : (
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-500">
                No image uploaded
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: data.noteImage
                  ? `url(${data.noteImage})`
                  : "none",
              }}
            ></div>
            <div className="relative z-10 flex items-center gap-4">
              <Award className="w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Important Note</h3>
                <p className="opacity-90">{data.noteText}</p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ComparisonSection;
