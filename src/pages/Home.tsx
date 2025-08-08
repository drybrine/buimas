import React, { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/X5K1nxGZ8S.png',
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/jtxK5MAJiP.png',
    'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/xg5r4y3sXu.png'
  ];
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="home-page">
      <div className="hero-banner">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/gTge2XGGx0.png" alt="Restaurant Staff" />
      </div>
      
      <div className="welcome-section">
        <h2 className="section-title">Selamat Datang di Warung Nasi Ibu Imas</h2>

        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <span>‹</span>
          </button>

          <div className="carousel-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  width="800"
                  height="400"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
