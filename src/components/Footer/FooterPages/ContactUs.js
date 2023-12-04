import React, { useState } from 'react';
import '../../../styles/footer/footerPages/ContactUs.css'; // Import the CSS file
import CompanySocials from '../CompanySocials/CompanySocials';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add additional logic for form submission, such as sending data to a server
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="contact-us">Get in Touch</h2>
        <p>Email: info@aicansell.com</p>
        <p>Phone: (+91) 98110 73247</p>
        <p>Phone: (+91) 85271 40141</p>
        <p>Address: Delaware/ Gurugram</p>
        <CompanySocials />
      </div>

      <div className="form-container">
        <h2 className="cancellation">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="subject">Subject:</label>
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
