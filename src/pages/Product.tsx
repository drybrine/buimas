import React from 'react';
import ikanBakarImg from "../assets/ikan-bakar.png";
import tahuGorengImg from "../assets/tahu-goreng.png";
import tempeGorengImg from "../assets/tempe-goreng.png";

export default function Product() {
  const menuItems = [
    {
      name: "Karedok",
      price: "Rp. 22.000,00",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/1AMttWJwvs.png"
    },
    {
      name: "Lalapan",
      price: "Rp. 5.000,00",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/eT67KKETPX.png"
    },
    {
      name: "Ayam Goreng",
      price: "Rp. 25.000,00",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/EF8TrT94Xi.png"
    },
    {
      name: "Ikan Bakar",
      price: "Rp. 30.000,00",
      image: ikanBakarImg
    },
    {
      name: "Tempe Goreng",
      price: "Rp. 8.000,00",
      image: tempeGorengImg
    },
    {
      name: "Tahu Goreng",
      price: "Rp. 8.000,00",
      image: tahuGorengImg
    }
  ];

  return (
    <section id="product" className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">MENU</h2>
        
        <div className="featured-section">
          <div className="featured-dish">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/EF8TrT94Xi.png"
              alt="Paket Nasi"
              loading="eager"
              width="600"
              height="400"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <div className="dish-info">
              <h3>Paket Nasi</h3>
              <p className="price">Rp. 39.600,00</p>
            </div>
          </div>
        </div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                width="200"
                height="200"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p className="item-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
