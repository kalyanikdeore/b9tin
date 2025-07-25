import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  IoCallOutline,
  IoMailOpenOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";

export function ContactInfo() {
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
    address: "",
    working_hours: "",
    title: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/contact-settings"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message || "Failed to load contact info");
        }

        setContactInfo(result.data);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center py-10 gap-6 mt-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-[200px] bg-gray-100 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  const contactItems = [
    {
      icon: <IoCallOutline size={24} />,
      text: contactInfo.phone,
      key: "phone",
    },
    {
      icon: <IoMailOpenOutline size={24} />,
      text: contactInfo.email,
      key: "email",
    },
    {
      icon: <IoLocationOutline size={24} />,
      text: contactInfo.address,
      key: "address",
    },
    {
      icon: <IoTimeOutline size={24} />,
      text: contactInfo.working_hours,
      key: "working_hours",
    },
  ];

  return (
    <div className="mt-8">
      {contactInfo.title && (
        <h2 className="text-3xl font-bold text-center mb-8">
          {contactInfo.title}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center py-10 gap-6">
        {contactItems.map((item) => (
          <motion.div
            key={item.key}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-md hover:bg-gray-50 transition-all w-full h-[200px] rounded-lg"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-indigo-900 text-xl sm:text-2xl border-2 border-[#a89899] rounded-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-gray-500 hover:text-gray-500"
            >
              {item.icon}
            </motion.div>
            <span className="text-gray-700 mt-4 text-center whitespace-pre-wrap">
              {item.text || "Not specified"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
