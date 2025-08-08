import React from 'react';
import restaurantStaffImg from '../assets/restaurant-staff.jpg';

export default function Contact() {
  return (
    <section id="contact" className="hero-section">
      <div className="hero-image">
        <img src={restaurantStaffImg} alt="Restaurant Staff" />
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
  );
}
