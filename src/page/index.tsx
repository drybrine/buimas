import React, { useState } from "react";
import "./index.css";

export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/X5K1nxGZ8S.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/jtxK5MAJiP.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/xg5r4y3sXu.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="main-container">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-content">
          <div className="logo">
            <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/uB9fesEr0p.png" alt="Bu Imas Logo" />
          </div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link active">HOME</a>
            <a href="#profil" className="nav-link">PROFIL</a>
            <a href="#product" className="nav-link">PRODUCT</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Section 1: Hero with Contact Info */}
      <section id="home" className="hero-section">
        <div className="hero-image">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/gTge2XGGx0.png" alt="Restaurant Staff" />
        </div>
        
        <div className="info-boxes">
          <div className="info-box">
            <div className="info-icon location-icon"></div>
            <h3>Lokasi</h3>
            <p>Balonggede No. 69, 38, 48, dan 93, Bandung</p>
          </div>
          
          <div className="info-box">
            <div className="info-icon mail-icon"></div>
            <h3>Social Media</h3>
            <p>@warungnasi_ibuimas</p>
          </div>
          
          <div className="info-box">
            <div className="info-icon clock-icon"></div>
            <h3>Jam Buka</h3>
            <p>07:00 - 00:00 WIB</p>
          </div>
        </div>
        
        <div className="map-background"></div>
      </section>

      {/* Section 2: Welcome with Carousel */}
      <section id="profil" className="welcome-section">
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
                <img src={slide} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>
      </section>

      {/* Section 3: Menu */}
      <section id="product" className="menu-section">
        <div className="menu-content">
          <div className="menu-left">
            <div className="featured-dish">
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/EF8TrT94Xi.png" alt="Paket Nasi" />
              <div className="dish-info">
                <h3>Paket Nasi</h3>
                <p className="price">Rp. 39.600,00</p>
              </div>
            </div>
          </div>
          
          <div className="menu-right">
            <h2 className="menu-title">MENU</h2>
            
            <div className="menu-items">
              <div className="menu-item">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/1AMttWJwvs.png" alt="Karedok" />
                <div className="item-details">
                  <h4>Karedok</h4>
                  <p className="item-price">Rp. 22.000,00</p>
                </div>
              </div>
              
              <div className="menu-item">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/eT67KKETPX.png" alt="Lalapan" />
                <div className="item-details">
                  <h4>Lalapan</h4>
                  <p className="item-price">Rp. 5.000,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section id="contact" className="testimonial-section">
        <div className="testimonial-content">
          <div className="testimonial-text">
            <h2 className="section-title">Testimoni</h2>
            <p>
              Beberapa publik figur, mulai dari artis ternama, tokoh masyarakat,
              hingga Presiden Republik Indonesia, pernah merasakan langsung kelezatan
              hidangan di Warung Nasi Ibu Imas. Kehadiran mereka bukan hanya sekadar
              mencicipi, tetapi juga menjadi bukti bahwa cita rasa autentik dan resep
              turun-temurun yang dihidangkan benar-benar memiliki daya tarik lintas kalangan.
              Suasana hangat, pelayanan ramah, dan aroma masakan yang menggugah selera
              membuat siapa pun yang datang merasa seperti sedang pulang ke rumah.
              Tak heran, banyak dari mereka yang kemudian merekomendasikan
              Warung Nasi Ibu Imas kepada teman, keluarga, bahkan penggemarnya,
              menjadikan warung ini bukan sekadar tempat makan,
              tetapi juga ikon kuliner yang membanggakan.
            </p>
          </div>
          
          <div className="testimonial-images">
            <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/5F66rNVAi0.png" alt="Customer 1" />
            <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/RaTfZjMYq1.png" alt="Customer 2" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Designed By Ahmad Ariq Alfarisi</p>
      </footer>
    </div>
  );
}
