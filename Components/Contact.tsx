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

    alert("Message sent successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <Card>
        <CardHeader>Contact Me</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "white",
                background: "linear-gradient(to right, #ec4899, #f43f5e)",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
              type="submit"
            >
              Download My CV
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
