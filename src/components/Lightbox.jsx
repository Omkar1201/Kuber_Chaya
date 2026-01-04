import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Lightbox.css';

function Lightbox({ isOpen, onClose, image, onNext, onPrev, hasNext, hasPrev }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && hasNext) onNext();
            if (e.key === 'ArrowLeft' && hasPrev) onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, hasNext, hasPrev, onClose, onNext, onPrev]);

    if (!isOpen || !image) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose}>×</button>

            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                {hasPrev && (
                    <button className="lightbox-nav prev" onClick={onPrev}>
                        &#10094;
                    </button>
                )}

                <div className="lightbox-image-container">
                    <div className="lightbox-placeholder">
                        <span className="lightbox-icon">📷</span>
                        <p>{image.alt}</p>
                    </div>
                </div>

                {hasNext && (
                    <button className="lightbox-nav next" onClick={onNext}>
                        &#10095;
                    </button>
                )}
            </div>

            <div className="lightbox-caption">
                <h3>{image.alt}</h3>
            </div>
        </div>
    );
}

Lightbox.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        alt: PropTypes.string,
        src: PropTypes.string // Assuming src might be added later, currently using placeholder
    }),
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    hasNext: PropTypes.bool.isRequired,
    hasPrev: PropTypes.bool.isRequired,
};

export default Lightbox;
