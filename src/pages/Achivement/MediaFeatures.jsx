import React from "react";
import bnine2 from "../../assets/Images/bnine2.mp4";
const HealthResilienceFeatures = () => {
  const features = [
    {
      title: "Personalized Resilience Plans",
      description:
        "Customized Resilience plans tailored to individual needs and preferences.",
    },
    {
      title: "Holistic Healing Approaches",
      description: "Integrating mind, body, and spirit for complete wellness.",
    },
    {
      title: "Certified Therapists",
      description: "Professionals with extensive training and certifications.",
    },
    {
      title: "Mental Health Support",
      description:
        "Access to Resilience for emotional, mental, and psychological well-being.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Health Resilience YouTube Video */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <iframe
                className="w-full h-full shadow"
                src="https://www.youtube.com/embed/kJWYfM_mFUk?si=pW1UPtEyqcT5Ft5M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Column - Health Resilience Features List */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Holistic Health Resilience Solutions
            </h2>
            <p className="text-gray-600 mb-8">
              Our Resilience services are designed to support your physical,
              mental, and emotional well-being. Explore the key features below.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
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

export default HealthResilienceFeatures;
