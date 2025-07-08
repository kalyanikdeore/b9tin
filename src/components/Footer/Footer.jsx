import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const socialIcons = [
    { icon: FaInstagram, label: "Instagram", color: "text-indigo-600" },
    { icon: FaLinkedinIn, label: "LinkedIn", color: "text-blue-600" },
    { icon: FaFacebookF, label: "Facebook", color: "text-blue-700" },
    { icon: FaTwitter, label: "Twitter", color: "text-sky-500" },
    { icon: FaYoutube, label: "YouTube", color: "text-red-600" },
  ];

  const quickLinks = [
    { name: "Our Methodology", link: "/methodology" },
    { name: "Science & Research", link: "/research" },
    { name: "Success Stories", link: "/success-stories" },
    { name: "About B9Concept", link: "/about" },
    { name: "Practitioner Training", link: "/training" },
    { name: "Contact Us", link: "/contact" },
  ];

  const resources = [
    { name: "Blog & Articles", link: "/blog" },
    { name: "Research Papers", link: "/research-papers" },
    { name: "FAQs", link: "/faqs" },
    { name: "Webinars", link: "/webinars" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Media Kit", link: "/media-kit" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-indigo-900 to-purple-900 text-white pt-16 pb-8 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <h2 className="text-2xl font-bold mb-4 text-white relative z-10">
            B9Concept
          </h2>
          <p className="text-sm text-indigo-100 mb-4 relative z-10">
            Revolutionary Health Transformation Technology that addresses root
            causes, not just symptoms. Our science-backed approach helps resolve
            trauma patterns contributing to chronic conditions.
          </p>
          <div className="flex gap-4 mt-6 relative z-10">
            {socialIcons.map(({ icon: Icon, label, color }, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                title={label}
                className={`cursor-pointer bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 ${color}`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.link}
                  className="text-indigo-100 hover:text-white transition-colors flex items-center group"
                >
                  <FiArrowRight
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    size={14}
                  />
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-3">
            {resources.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.link}
                  className="text-indigo-100 hover:text-white transition-colors flex items-center group"
                >
                  <FiArrowRight
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    size={14}
                  />
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <h3 className="text-xl font-semibold mb-4 text-white relative z-10">
            Contact Us
          </h3>
          <ul className="text-sm text-indigo-100 space-y-4 relative z-10">
            <li className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                className="text-indigo-300 mt-1 flex-shrink-0"
              />
              <span>
                123 Wellness Way, Suite 500
                <br />
                San Francisco, CA 94107
                <br />
                United States
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline
                size={20}
                className="text-indigo-300 flex-shrink-0"
              />
              <div>
                <a href="tel:+18005551234" className="hover:text-white">
                  +1 (800) 555-1234
                </a>
                <div className="text-xs text-indigo-200 mt-1">
                  Mon-Fri: 9am-6pm PST
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineEmail
                size={20}
                className="text-indigo-300 flex-shrink-0"
              />
              <a
                href="mailto:support@b9concept.com"
                className="hover:text-white"
              >
                support@b9concept.com
              </a>
            </li>
          </ul>

          <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <h4 className="font-medium mb-2">Join Our Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/20 text-white placeholder-indigo-200 px-3 py-2 text-sm rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm rounded-r font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center text-sm text-indigo-300 border-t border-indigo-800 pt-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">B9Concept</span>. All
            Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Medical Disclaimer
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="mt-4 text-xs text-indigo-400">
          <p>
            B9Concept is not a medical treatment but may complement your
            healthcare. Always consult with your physician.
          </p>
          <p className="mt-1">
            Results vary based on individual commitment and condition severity.
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
