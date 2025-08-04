import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Why Us',
    dropdown: [
      { name: 'Experience', path: '/why-us/experience' },
      { name: 'Approach', path: '/why-us/approach' },
      { name: 'Results', path: '/why-us/results' },
    ],
  },
  {
    name: 'Treatments',
    dropdown: [
      { name: 'Acupuncture', path: '/treatments/acupuncture' },
      { name: 'Detox', path: '/treatments/detox' },
      { name: 'Massage', path: '/treatments/massage' },
    ],
  },
  {
    name: 'Services',
    dropdown: [
      { name: 'Consultation', path: '/services/consultation' },
      { name: 'Therapy', path: '/services/therapy' },
      { name: 'Checkups', path: '/services/checkups' },
    ],
  },
  {
    name: 'IP Service',
    dropdown: [
      { name: 'Admission', path: '/ip/admission' },
      { name: 'Facilities', path: '/ip/facilities' },
      { name: 'Discharge', path: '/ip/discharge' },
    ],
  },
  {
    name: 'Facilities',
    dropdown: [
      { name: 'Room Types', path: '/facilities/rooms' },
      { name: 'Labs', path: '/facilities/labs' },
      { name: 'Canteen', path: '/facilities/canteen' },
    ],
  },
  {
    name: 'Resource',
    dropdown: [
      { name: 'Blog', path: '/resource/blog' },
      { name: 'FAQ', path: '/resource/faq' },
      { name: 'Guides', path: '/resource/guides' },
    ],
  },
  {
    name: 'Enquiry',
    dropdown: [
      { name: 'Book Now', path: '/enquiry/book' },
      { name: 'Helpdesk', path: '/enquiry/helpdesk' },
      { name: 'Feedback', path: '/enquiry/feedback' },
    ],
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">🌿 MyLogo</Link>
      </div>

      {/* Toggle for mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#8942;
      </button>

      {/* Nav Items */}
      <ul className={`nav-items ${menuOpen ? 'show' : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className="nav-item"
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.dropdown ? (
              <>
                <span>{item.name}</span>
                {hovered === item.name && (
                  <ul className="dropdown">
                    {item.dropdown.map((drop) => (
                      <li key={drop.name}>
                        <Link to={drop.path}>{drop.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}

        {/* Contact Button */}
        <li>
        </li>
      </ul>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
    </nav>
  );
};

export default Navbar;
