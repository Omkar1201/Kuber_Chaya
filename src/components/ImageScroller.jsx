import React, { useState } from 'react';
import './ImageScroller.css';

// Importing images
import high1 from '../assets/high1.jpg';
import high2 from '../assets/high2.jpg';
import high3 from '../assets/high3.JPG';
import high4 from '../assets/high4.jpg';
import high5 from '../assets/high5.jpg';
import high6 from '../assets/high6.jpg';
import high7 from '../assets/high7.jpg';
import high8 from '../assets/high8.jpg';
import high10 from '../assets/high10.jpg';

const images = [high1, high2, high3, high4, high5, high6, high7, high8, high10];

const ImageScroller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const total = images.length;

    // derived indices
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    const prevIndex2 = (currentIndex - 2 + total) % total;
    const nextIndex2 = (currentIndex + 2) % total;

    const getSlideClass = (index) => {
        if (index === currentIndex) return 'slide active';
        if (index === prevIndex) return 'slide prev';
        if (index === nextIndex) return 'slide next';
        if (index === prevIndex2) return 'slide prev-2';
        if (index === nextIndex2) return 'slide next-2';
        return 'slide hidden';
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % total);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    const handleSlideClick = (index) => {
        if (index === prevIndex) handlePrev();
        if (index === nextIndex) handleNext();
        if (index === prevIndex2) setCurrentIndex((prev) => (prev - 2 + total) % total);
        if (index === nextIndex2) setCurrentIndex((prev) => (prev + 2) % total);
    };

    return (
        <section className="scroller-section">
            <h2 className="scroller-title">A Glimpse of Elegance</h2>
            <div className="slider-wrapper">
                <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous image">
                    &#10094;
                </button>

                <div className="slider-track">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={getSlideClass(index)}
                            onClick={() => handleSlideClick(index)}
                        >
                            <img src={src} alt={`Gallery Image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next image">
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default ImageScroller;
