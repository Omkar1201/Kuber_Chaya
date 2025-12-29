import { useState } from 'react';
import Modal from '../components/Modal';
import './Gallery.css';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    // Placeholder images with categories
    const images = [
        { id: 1, category: 'weddings', alt: 'Wedding Ceremony' },
        { id: 2, category: 'corporate', alt: 'Corporate Event' },
        { id: 3, category: 'weddings', alt: 'Wedding Reception' },
        { id: 4, category: 'gala', alt: 'Gala Night' },
        { id: 5, category: 'parties', alt: 'Birthday Party' },
        { id: 6, category: 'weddings', alt: 'Wedding Venue' },
        { id: 7, category: 'corporate', alt: 'Conference Hall' },
        { id: 8, category: 'gala', alt: 'Gala Dinner' },
        { id: 9, category: 'parties', alt: 'Private Party' },
        { id: 10, category: 'weddings', alt: 'Outdoor Wedding' },
        { id: 11, category: 'corporate', alt: 'Team Building' },
        { id: 12, category: 'gala', alt: 'Award Ceremony' },
    ];

    const categories = [
        { value: 'all', label: 'All Events' },
        { value: 'weddings', label: 'Weddings' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'gala', label: 'Gala' },
        { value: 'parties', label: 'Parties' },
    ];

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <div className="gallery-page">
            <section className="gallery-hero">
                <div className="container">
                    <h1 className="page-title">Event Gallery</h1>
                    <p className="page-subtitle">
                        Explore our stunning venues and past celebrations. Each image tells a story of
                        unforgettable moments created at Kuber Chaya.
                    </p>
                </div>
            </section>

            <section className="gallery-content section">
                <div className="container">
                    <div className="gallery-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                                onClick={() => setFilter(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="gallery-grid">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="gallery-image-placeholder">
                                    <span className="placeholder-icon">🖼️</span>
                                    <p className="placeholder-text">{image.alt}</p>
                                </div>
                                <div className="gallery-overlay">
                                    <span className="view-icon">🔍</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Modal isOpen={selectedImage !== null} onClose={() => setSelectedImage(null)}>
                {selectedImage && (
                    <div className="modal-image-content">
                        <div className="modal-image-placeholder">
                            <span className="placeholder-icon-large">🖼️</span>
                            <h3>{selectedImage.alt}</h3>
                            <p>Image placeholder - {selectedImage.category}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Gallery;
