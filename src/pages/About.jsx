import { FaHotel, FaTree, FaUtensils, FaCar, FaMusic, FaBed, FaLocationDot, FaPlane, FaBus } from 'react-icons/fa6';
import PageTransition from '../components/PageTransition';
import './About.css';

function About() {
    const facilities = [
        { icon: <FaHotel />, name: 'Grand Ballroom', description: '10,000 sq ft of elegant space' },
        { icon: <FaTree />, name: 'Garden Venues', description: 'Beautiful outdoor settings' },
        { icon: <FaUtensils />, name: 'Gourmet Catering', description: 'Award-winning culinary team' },
        { icon: <FaCar />, name: 'Valet Parking', description: 'Complimentary for all guests' },
        { icon: <FaMusic />, name: 'Sound & Lighting', description: 'Professional AV equipment' },
        { icon: <FaBed />, name: 'Guest Suites', description: 'Luxury accommodations' },
    ];

    return (
        <PageTransition>
            <div className="about-page">
                <section className="about-hero">
                    <div className="container">
                        <h1 className="page-title">About Kuber Chaya</h1>
                        <p className="page-subtitle">
                            A legacy of luxury, a tradition of excellence
                        </p>
                    </div>
                </section>

                <section className="about-story section">
                    <div className="container">
                        <div className="story-content">
                            <h2>Our Story</h2>
                            <p>
                                Kuber Chaya was born from a vision to create the ultimate event destination where
                                luxury meets perfection. Established in 2010, our resort has become synonymous with
                                elegance, sophistication, and unforgettable celebrations.
                            </p>
                            <p>
                                Nestled in a pristine location, our 50-acre property combines natural beauty with
                                world-class facilities. Every detail has been meticulously crafted to provide an
                                atmosphere of refined luxury that elevates every occasion.
                            </p>
                            <p>
                                From intimate gatherings to grand celebrations, we've hosted over 500 events,
                                creating memories that last a lifetime. Our commitment to excellence and attention
                                to detail has made us the preferred choice for discerning hosts who demand nothing
                                but the best.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="facilities-section section">
                    <div className="container">
                        <h2 className="section-title">Our Facilities</h2>
                        <div className="facilities-grid">
                            {facilities.map((facility, index) => (
                                <div key={index} className="facility-card">
                                    <div className="facility-icon">{facility.icon}</div>
                                    <h3>{facility.name}</h3>
                                    <p>{facility.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section >

                <section className="mission-section section">
                    <div className="container">
                        <div className="mission-content">
                            <div className="mission-item">
                                <h3>Our Mission</h3>
                                <p>
                                    To create extraordinary experiences that exceed expectations, transforming every
                                    event into an unforgettable celebration of life's most precious moments.
                                </p>
                            </div>
                            <div className="mission-item">
                                <h3>Our Vision</h3>
                                <p>
                                    To be recognized as the premier luxury event destination, setting the standard
                                    for excellence in hospitality and event management.
                                </p>
                            </div>
                            <div className="mission-item">
                                <h3>Our Values</h3>
                                <p>
                                    Excellence, Integrity, Innovation, and Personalized Service. These principles
                                    guide everything we do, ensuring every guest receives the royal treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="location-section section">
                    <div className="container">
                        <h2 className="section-title">Location & Accessibility</h2>
                        <div className="location-content">
                            <div className="location-info">
                                <h3>Easy to Reach</h3>
                                <ul className="location-list">
                                    <li><FaLocationDot className="location-icon" /> Located in Paradise Valley, just 30 minutes from the city center</li>
                                    <li><FaPlane className="location-icon" /> 45 minutes from International Airport</li>
                                    <li><FaCar className="location-icon" /> Ample parking for 500+ vehicles</li>
                                    <li><FaBus className="location-icon" /> Complimentary shuttle service available</li>
                                </ul>
                            </div>
                            <div className="map-container">
                                <iframe
                                    title="Kuber Chaya Location"
                                    src="https://maps.google.com/maps?q=17.597169013017833,74.05709766651228&z=15&t=k&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </PageTransition>
    );
}

export default About;
