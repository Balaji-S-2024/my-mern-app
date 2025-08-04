import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Section 1: Contact Info */}
      <section className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="contact-card">
            <img src="/images/phone.png" alt="Phone" />
            <p>+91 98765 43210</p>
          </div>
          <div className="contact-card">
            <img src="/images/email.png" alt="Email" />
            <p>info@hospital.com</p>
          </div>
        </div>
      </section>

      {/* Section 2: Branches & Location */}
      <section className="branches-section">
        <h2>Our Branches</h2>
        <div className="branch">
          <img src="/images/hospital1.jpg" alt="Branch" />
          <div className="branch-info">
            <h3>Tirupur Branch</h3>
            <p>123 Health Street, Tirupur, Tamil Nadu</p>
            <iframe
              src="https://www.google.com/maps?q=tirupur&output=embed"
              title="Tirupur Location"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section 3: Form + Hospital Times */}
      <section className="form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="hospital-hours">
          <h3>Hospital Timings</h3>
          <p>🕐 Monday to Saturday: 8:00 AM - 8:00 PM</p>
          <p>🕐 Sunday: 9:00 AM - 2:00 PM</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
