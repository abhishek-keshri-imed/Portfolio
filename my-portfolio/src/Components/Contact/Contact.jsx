import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      phone: form.current.phone.value,
      message: form.current.message.value,
    };

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    emailjs
      .sendForm(
        "service_458rbwd",
        "template_vcpkgpf",
        form.current,
        "Jbk844tv-icJSw2Dq"
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setErrors({});
          form.current.reset();
        },
        (error) => {
          setSuccessMessage("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact-section" >
      <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} noValidate>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className={errors.name ? "error" : ""}
              placeholder="Your Name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className={errors.email ? "error" : ""}
              placeholder="Your Email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              className={errors.phone ? "error" : ""}
              placeholder="Your Phone Number"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="5"
              className={errors.message ? "error" : ""}
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
          {successMessage && (
            <p
              className={
                successMessage.includes("successfully")
                  ? "success-msg"
                  : "error-text"
              }
            >
              {successMessage}
            </p>
          )}
        </form>

        <div className="social-icons">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/abhishek-keshri-a7a3b3192/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>
          <a
            className="social-link"
            href="https://github.com/abhishek-keshri-imed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880.9099528636186!2d73.73268710520924!3d18.603746369588904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb219642d56d%3A0x996bb548fbb425ba!2sOYO%20Ema%20Happy%20Stay!5e0!3m2!1sen!2sin!4v1747661056818!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
