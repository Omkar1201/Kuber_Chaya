import PropTypes from 'prop-types';
import './EventCard.css';

function EventCard({ icon, title, description }) {
    return (
        <div className="event-card">
            <div className="event-icon">{icon}</div>
            <h3 className="event-title">{title}</h3>
            <p className="event-description">{description}</p>
        </div>
    );
}

EventCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default EventCard;
