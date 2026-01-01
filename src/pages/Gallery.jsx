import { useState } from 'react';
import Modal from '../components/Modal';
import PageTransition from '../components/PageTransition';
import './Gallery.css';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    // Placeholder images with categories and sub-gallery items
    const images = [
        {
            id: 1,
            category: 'weddings',
            alt: 'Royal Heritage Wedding',
            gallery: Array(6).fill(null).map((_, i) => ({ id: i, alt: `Wedding Moment ${i + 1}` }))
        },
        {
            id: 2,
            category: 'corporate',
            alt: 'Annual Tech Summit',
            gallery: Array(6).fill(null).map((_, i) => ({ id: i, alt: `Conference Session ${i + 1}` }))
        },
        {
            id: 3,
            category: 'weddings',
            alt: 'Destination Wedding',
            gallery: Array(6).fill(null).map((_, i) => ({ id: i, alt: `Wedding Decor ${i + 1}` }))
        },
        {
            id: 4,
            category: 'gala',
            alt: 'Charity Gala Night',
            gallery: Array(6).fill(null).map((_, i) => ({ id: i, alt: `Gala Event ${i + 1}` }))
        },
        {
            id: 5,
            category: 'parties',
            alt: 'Birthday Bash',
            gallery: Array(8).fill(null).map((_, i) => ({ id: i, alt: `Party Vibe ${i + 1}` }))
        },
        {
            id: 6,
            category: 'weddings',
            alt: 'Garden Wedding',
            gallery: Array(5).fill(null).map((_, i) => ({ id: i, alt: `Outdoor Moment ${i + 1}` }))
        },
        {
            id: 7,
            category: 'corporate',
            alt: 'Strategy Workshop',
            gallery: Array(4).fill(null).map((_, i) => ({ id: i, alt: `Meeting Snap ${i + 1}` }))
        },
        {
            id: 8,
            category: 'gala',
            alt: 'Awards Night',
            gallery: Array(6).fill(null).map((_, i) => ({ id: i, alt: `Award Moment ${i + 1}` }))
        },
        {
            id: 9,
            category: 'parties',
            alt: 'Anniversary Celebration',
            gallery: Array(6).fill(null).map((_, i) => ({ id: i, alt: `Celebration ${i + 1}` }))
        },
        {
            id: 10,
            category: 'weddings',
            alt: 'Pre-Wedding Shoot',
            gallery: Array(4).fill(null).map((_, i) => ({ id: i, alt: `Couple Shoot ${i + 1}` }))
        },
        {
            id: 11,
            category: 'corporate',
            alt: 'Team Building',
            gallery: Array(8).fill(null).map((_, i) => ({ id: i, alt: `Activity ${i + 1}` }))
        },
        {
            id: 12,
            category: 'gala',
            alt: 'Fashion Show',
            gallery: Array(6).fill(null).map((_, i) => ({ id: i, alt: `Runway ${i + 1}` }))
        },
    ];

    const categories = [
        { value: 'all', label: 'All Projects' },
        { value: 'weddings', label: 'Weddings' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'gala', label: 'Gala & Social' },
        { value: 'parties', label: 'Private Parties' },
    ];

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <PageTransition>
            <div className="gallery-page">
                <section className="gallery-hero">
                    <div className="container">
                        <h1 className="page-title">Event Portfolio</h1>
                        <p className="page-subtitle">
                            Browse through our curated albums of past celebrations.
                            Click on any event to view the full gallery.
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
                                        <span className="placeholder-icon">📂</span>
                                        <p className="placeholder-text">{image.alt}</p>
                                        <span className="item-count">{image.gallery.length} Photos</span>
                                    </div>
                                    <div className="gallery-overlay">
                                        <span className="view-icon">View Album</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Modal isOpen={selectedImage !== null} onClose={() => setSelectedImage(null)} className="album-modal">
                    {selectedImage && (
                        <div className="modal-album-content">
                            <div className="modal-header">
                                <h2>{selectedImage.alt}</h2>
                                <p>{selectedImage.gallery.length} Photos in this album</p>
                            </div>
                            <div className="album-grid">
                                {selectedImage.gallery.map((photo, index) => (
                                    <div key={index} className="album-photo-placeholder">
                                        <span className="photo-icon">📷</span>
                                        <span className="photo-label">{photo.alt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </PageTransition>
    );
}

export default Gallery;
