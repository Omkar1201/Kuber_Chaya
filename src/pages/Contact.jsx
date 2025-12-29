import { useState } from 'react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('error');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', formData);
        setFormStatus('success');

        // Reset form
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                eventDate: '',
                message: '',
            });
            setFormStatus('');
        }, 3000);
    };

    return (
        <PageTransition>
            <div className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <h1 className="page-title">Get in Touch</h1>
                        <p className="page-subtitle">
                            Ready to plan your perfect event? Contact us today and let's create something extraordinary together.
                        </p>
                    </div>
                </section>

                <section className="contact-content section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h2>Contact Information</h2>

                                <div className="info-item">
                                    <div className="info-icon"><FaMapMarkerAlt /></div>
                                    <div className="info-text">
                                        <h3>Address</h3>
                                        <p>123 Resort Lane<br />Paradise Valley, PV 12345</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon"><FaPhoneAlt /></div>
                                    <div className="info-text">
                                        <h3>Phone</h3>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div className="info-text">
                                        <h3>Email</h3>
                                        <p>info@kuberchaya.com<br />events@kuberchaya.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon"><FaClock /></div>
                                    <div className="info-text">
                                        <h3>Business Hours</h3>
                                        <p>Monday - Sunday<br />9:00 AM - 10:00 PM</p>
                                    </div>
                                </div>

                                <div className="social-section">
                                    <h3>Follow Us</h3>
                                    <div className="social-links">
                                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-container">
                                {formStatus === 'success' ? (
                                    <div className="form-message success">
                                        <h2>✓ Thank You!</h2>
                                        <p>Your message has been sent successfully. We will get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h2>Send Us a Message</h2>
                                        <form className="contact-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email *</label>
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
                                                    <label htmlFor="phone">Phone</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="eventType">Event Type</label>
                                                    <select
                                                        id="eventType"
                                                        name="eventType"
                                                        value={formData.eventType}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select an event type</option>
                                                        <option value="wedding">Wedding</option>
                                                        <option value="corporate">Corporate Event</option>
                                                        <option value="gala">Gala</option>
                                                        <option value="party">Private Party</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="eventDate">Preferred Date</label>
                                                    <input
                                                        type="date"
                                                        id="eventDate"
                                                        name="eventDate"
                                                        value={formData.eventDate}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="message">Message *</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows="6"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>

                                            {formStatus === 'error' && (
                                                <div className="form-message error">
                                                    ✕ Please fill in all required fields.
                                                </div>
                                            )}

                                            <Button type="submit" variant="primary">Send Message</Button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

export default Contact;
