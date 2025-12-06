import React, { useState } from 'react';
import Button from '../components/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry. We will get back to you shortly.');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you. Reach out for bulk orders and export enquiries.</p>
                </div>
            </div>

            <div className="section container">
                <div className="contact-layout">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p className="contact-intro">
                            Whether you have a question about our products, pricing, or export capabilities,
                            our team is ready to answer all your questions.
                        </p>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h3>Our Facility</h3>
                                <p>123 Seafood Park, Coastal Road,<br />Veraval, Gujarat, India - 362265</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <div>
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <p>info@zeyfresh.com</p>
                                <p>exports@zeyfresh.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaWhatsapp className="info-icon" />
                            <div>
                                <h3>WhatsApp</h3>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
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
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
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
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="submit-btn">
                                Send Enquiry
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-section">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41705763695!2d70.3000!3d20.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd323456789abc%3A0x123456789abcdef!2sVeraval%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
