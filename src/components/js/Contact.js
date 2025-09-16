import React, { useState } from "react";
import "../css/Contact.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_r4pk6d8", "template_gxc5gmi", templateParams, "iNWFLkaTADqKzU1bH")
      .then(() => {
        console.log("✅ Admin email sent!");
      })
      .catch((error) => {
        console.error("❌ Admin email error:", error);
      });

    emailjs
      .send("service_r4pk6d8", "template_47ivz5s", templateParams, "iNWFLkaTADqKzU1bH")
      .then(() => {
        console.log("✅ Auto-reply sent!");
        setStatus({ type: "success", message: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); 

        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 10000);
      })
      .catch((error) => {
        console.error("❌ Auto-reply error:", error);
        setStatus({ type: "error", message: "❌ Failed to send message. Try again." });

        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 10000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-left">
        <h2>Get in touch</h2>
        <p>Let’s create something amazing together!</p>

        <div className="contact-info">
          <div className="contact-card">
            <FiMail className="icon" />
            <div className="contact-text">
              <p>Email</p>
              <a href="mailto:hasnaainali5@gmail.com">hasnaainali5@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <FiPhone className="icon" />
            <div className="contact-text">
              <p>Call</p>
              <a href="tel:+923140805655">+92 3140805655</a>
            </div>
          </div>
          <div className="contact-card">
            <FiMapPin className="icon" />
            <div className="contact-text">
              <p>Location</p>
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

          {status.message && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
