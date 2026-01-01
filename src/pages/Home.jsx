import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import ImageScroller from '../components/ImageScroller';
import './Home.css';
import { FaCrown, FaHandshake, FaMusic, FaGift } from 'react-icons/fa6';

function Home() {
    const events = [
        {
            icon: <FaCrown />,
            title: 'Royal Weddings',
            description: 'Majestic ceremonies fit for royalty',
        },
        {
            icon: <FaMusic />,
            title: 'Gala Events',
            description: 'Sophisticated celebrations in style',
        },
        {
            icon: <FaHandshake />,
            title: 'Elite Gatherings',
            description: 'Exclusive venues for distinguished guests',
        },
        {
            icon: <FaGift />,
            title: 'Premium Events',
            description: 'Bespoke experiences beyond compare',
        },
    ];

    const testimonials = [
        {
            name: 'Sarah & Michael',
            event: 'Wedding',
            text: 'Kuber Chaya made our wedding day absolutely magical. The attention to detail and luxurious atmosphere exceeded all our expectations.',
            featured: true, // Popular client
        },
        {
            name: 'Tech Corp Inc.',
            event: 'Corporate Event',
            text: 'The perfect venue for our annual gala. Professional staff, stunning ambiance, and flawless execution.',
        },
        {
            name: 'Priya Sharma',
            event: 'Birthday Celebration',
            text: 'An unforgettable experience! The dark luxury theme created such an elegant atmosphere for my celebration.',
        },
    ];

    return (
        <PageTransition>
            <div className="home">
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <p className="hero-overline">Since 2010</p>
                        <h1 className="hero-title">Kuber Chaya Resort & Events</h1>
                        <div className="hero-line"></div>
                        <p className="hero-description">
                            Where every celebration becomes a masterpiece. Discover the art of hosting
                            in our meticulously designed spaces.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact">
                                <Button variant="primary">Plan Your Event</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <div className="hero-image"></div>
                    </div>
                </section>

                {/* Event Showcase */}
                <section className="event-showcase section">
                    <div className="container">
                        <div className="event-grid">
                            {events.map((event, index) => (
                                <EventCard
                                    key={index}
                                    icon={event.icon}
                                    title={event.title}
                                    description={event.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section section">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3 className="stat-number">500+</h3>
                                <p className="stat-label">Events Hosted</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-number">50+</h3>
                                <p className="stat-label">Acres of Beauty</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-number">1000+</h3>
                                <p className="stat-label">Happy Clients</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-number">24/7</h3>
                                <p className="stat-label">Concierge Service</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Scroller Section */}
                <ImageScroller />

                {/* Testimonials */}
                <section className="testimonials-section section">
                    <div className="container">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <div className="testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={`testimonial-card ${testimonial.featured ? 'featured' : ''}`}>
                                    {testimonial.featured && (
                                        <div className="ribbon">FEATURED</div>
                                    )}
                                    <div className="testimonial-header">
                                        <div className="client-avatar">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="client-info">
                                            <p className="author-name">{testimonial.name}</p>
                                            <p className="author-event">{testimonial.event}</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Ready to Create Your Perfect Event?</h2>
                            <p>Let us bring your vision to life with our premium services and stunning venues.</p>
                            <Link to="/contact">
                                <Button variant="primary">Get in Touch</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

export default Home;
