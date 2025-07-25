import React, { useEffect, useState } from "react";

const HealthResilienceSection = () => {
  const [featuresData, setFeaturesData] = useState({
    features: [],
    sectionTitle: "",
    sectionDescription: "",
    videoUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHealthResilienceFeatures = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/health-resilience-features"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setFeaturesData({
          features: data.features || [],
          sectionTitle:
            data.sectionTitle || "Holistic Health Resilience Solutions",
          sectionDescription:
            data.sectionDescription ||
            "Our Resilience services are designed to support your physical, mental, and emotional well-being. Explore the key features below.",
          videoUrl: data.videoUrl || "",
        });
      } catch (error) {
        console.error("Error fetching health resilience features:", error);
        setError(error.message);
        setFeaturesData({
          features: [],
          sectionTitle: "Holistic Health Resilience Solutions",
          sectionDescription:
            "Our Resilience services are designed to support your physical, mental, and emotional well-being. Explore the key features below.",
          videoUrl: "",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHealthResilienceFeatures();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        Loading health resilience features...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading health resilience features: {error}
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              {featuresData.videoUrl && (
                <video controls className="w-full h-full shadow">
                  <source src={featuresData.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>

          {/* Features Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {featuresData.sectionTitle}
            </h2>
            <p className="text-gray-600 mb-8">
              {featuresData.sectionDescription}
            </p>

            <div className="space-y-6">
              {featuresData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthResilienceSection;
