import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Reconnect with Nature & Yourself</h1>
          <h3>Your journey to holistic wellness starts here</h3>
          <p>Explore our natural treatments designed to heal, relax, and rejuvenate.</p>
          <div className="hero-buttons">
            <Link to="/enquiry/book" className="btn primary">Book Now</Link>
            <Link to="/contact" className="btn secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
