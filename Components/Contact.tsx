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

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Replace YOUR_FORM_ID and entry IDs with your Google Form details
    const googleFormURL =
      "https://docs.google.com/document/d/1GWJ8qyHsSN1CxTRqAUzFmtviSKUpG9B9uY8sVCEnxJk"; // Correct URL for form submission

    const formBody = new FormData();

    // Replace the placeholders below with actual entry IDs
    formBody.append("entry.1928374650", formData.name); // Replace with actual Name entry ID
    formBody.append("entry.2847563920", formData.phone); // Replace with actual Phone entry ID
    formBody.append("entry.3847562910", formData.email); // Replace with actual Email entry ID
    formBody.append("entry.4857291048", formData.subject); // Replace with actual Subject entry ID
    formBody.append("entry.5872938475", formData.message); // Replace with actual Message entry ID

    fetch(googleFormURL, {
      method: "POST",
      body: formBody,
      mode: "no-cors", // Required for Google Form submissions
    })
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        alert("Failed to send the message.");
      });
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
