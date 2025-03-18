import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./Common/Card";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Correct Google Form URL
    const googleFormURL =
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

    const formDataGoogle = new FormData();
    formDataGoogle.append("entry.1234567890", formData.name); // Replace with actual entry ID for 'Name'
    formDataGoogle.append("entry.0987654321", formData.phone); // Replace with actual entry ID for 'Phone'
    formDataGoogle.append("entry.1122334455", formData.email); // Replace with actual entry ID for 'Email'
    formDataGoogle.append("entry.6677889900", formData.subject); // Replace with actual entry ID for 'Subject'
    formDataGoogle.append("entry.2233445566", formData.message); // Replace with actual entry ID for 'Message'

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formDataGoogle,
        mode: "no-cors", // Required for Google Forms
      });

      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to send the message.");
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>Contact Me</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg hover:from-pink-600 hover:to-rose-600"
          >
            Send Message
          </button>
        </form>
      </CardContent>
    </Card>
  );
};
