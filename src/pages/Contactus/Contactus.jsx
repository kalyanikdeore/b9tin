import React, { useState } from "react";
import { Input, Button, Form, Card, message } from "antd";
import { motion } from "framer-motion";

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        message.success(data.message);
        form.resetFields();
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-40"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-600 py-7 text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Google Map */}
        <motion.iframe
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          title="Google Map"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[410px] rounded-lg border border-gray-300 shadow-md"
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen
          loading="lazy"
        />

        {/* Contact Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-lg p-6">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Your name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input placeholder="your.email@example.com" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Your Message"
                rules={[
                  {
                    required: true,
                    message: "Please enter your message!",
                    min: 10,
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="How can we help you?"
                  showCount
                  maxLength={500}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="large"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
