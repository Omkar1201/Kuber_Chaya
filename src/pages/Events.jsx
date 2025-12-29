import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import styles from './Events.module.css';
import { FaCrown, FaHandshake, FaMusic, FaGift } from 'react-icons/fa6';

function Events() {
    const eventTypes = [
        {
            icon: <FaCrown />,
            title: 'Royal Weddings',
            description: 'Transform your special day into a fairy tale with our luxurious wedding venues. From intimate ceremonies to grand celebrations, we provide the perfect backdrop for your love story.',
            features: ['Capacity: Up to 500 guests', 'Indoor & Outdoor Venues', 'Bridal Suites', 'Custom Decor', 'Professional Coordination'],
        },
        {
            icon: <FaHandshake />,
            title: 'Corporate Events',
            description: 'Elevate your business gatherings with our state-of-the-art facilities. Perfect for conferences, seminars, product launches, and team-building retreats.',
            features: ['Capacity: Up to 300 guests', 'AV Equipment', 'High-Speed WiFi', 'Breakout Rooms', 'Catering Services'],
        },
        {
            icon: <FaMusic />,
            title: 'Gala Celebrations',
            description: 'Host unforgettable galas and formal events in our elegant ballrooms. Sophisticated ambiance meets impeccable service for your most prestigious occasions.',
            features: ['Capacity: Up to 400 guests', 'Grand Ballroom', 'Premium Bar Service', 'Live Entertainment Space', 'Valet Parking'],
        },
        {
            icon: <FaGift />,
            title: 'Private Parties',
            description: 'Celebrate life\'s special moments in style. From milestone birthdays to anniversary celebrations, we create personalized experiences that your guests will never forget.',
            features: ['Capacity: Up to 200 guests', 'Flexible Spaces', 'Custom Themes', 'DJ & Sound System', 'Photo Booth Areas'],
        },
    ];

    return (
        <PageTransition>
            <div className={styles.eventsPage}>
                <section className={styles.eventsHero}>
                    <div className="container">
                        <h1 className={styles.pageTitle}>Our Events</h1>
                        <p className={styles.pageSubtitle}>
                            Discover the perfect venue for your celebration. Each event type is carefully curated
                            to provide an exceptional experience tailored to your needs.
                        </p>
                    </div>
                </section>

                <section className={`${styles.eventsContent} section`}>
                    <div className="container">
                        {eventTypes.map((event, index) => (
                            <div key={index} className={`${styles.eventDetail} ${index % 2 === 1 ? styles.reverse : ''}`}>
                                <div className={styles.iconWrapper}>
                                    <div className={styles.icon}>
                                        {event.icon}
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h2>{event.title}</h2>
                                    <p className={styles.description}>{event.description}</p>
                                    <ul className={styles.features}>
                                        {event.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <Button variant="primary" to="/contact">Inquire Now</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section >

                <section className={`${styles.eventsCta} section`}>
                    <div className="container">
                        <div className={styles.ctaBox}>
                            <h2>Need Help Choosing?</h2>
                            <p>Our event specialists are here to help you find the perfect venue and services for your occasion.</p>
                            <Button variant="secondary" to="/contact">Contact Our Team</Button>
                        </div>
                    </div>
                </section>
            </div >
        </PageTransition>
    );
}

export default Events;
