import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/your-linkedin",
      img: "https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/your-github",
      img: "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
      alt: "GitHub",
    },
    {
      href: "mailto:your@email.com",
      img: "https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/instagram-512.png",
      alt: "Email",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.message.trim())
      newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      setSuccessMsg("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              placeholder="Your Name"
            />
            {errors.name && (
              <small className="error-text">{errors.name}</small>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              placeholder="you@example.com"
            />
            {errors.email && (
              <small className="error-text">{errors.email}</small>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              placeholder="1234567890"
            />
            {errors.phone && (
              <small className="error-text">{errors.phone}</small>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <small className="error-text">{errors.message}</small>
            )}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>

          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>

        <div className="social-icons">
          {socialLinks.map(({ href, img, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={img} alt={alt} />
            </a>
          ))}
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1324.859845074552!2d73.73253600752113!3d18.603911685959037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747598436539!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

