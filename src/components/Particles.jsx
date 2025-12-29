import { useEffect, useState } from 'react';
import './Particles.css';

function Particles() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate 50 particles with random properties
        const particleArray = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 8,
            duration: Math.random() * 5 + 5,
        }));
        setParticles(particleArray);
    }, []);

    return (
        <div className="particles-container">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: `${particle.left}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default Particles;
