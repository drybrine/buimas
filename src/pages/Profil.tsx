import React from 'react';

export default function Profil() {
  const testimonials = [
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/5F66rNVAi0.png",
      alt: "Customer enjoying meal"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-08/RaTfZjMYq1.png",
      alt: "Happy customers at restaurant"
    }
  ];

  return (
    <section id="profil" className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="section-title">Testimoni</h2>
        
        <div className="testimonial-content">
          <div className="testimonial-text">
            <p>
              Beberapa publik figur, mulai dari artis ternama, tokoh masyarakat,
              hingga Presiden Republik Indonesia, pernah merasakan langsung kelezatan
              hidangan di Warung Nasi Ibu Imas. Kehadiran mereka bukan hanya sekadar
              mencicipi, tetapi juga menjadi bukti bahwa cita rasa autentik dan resep
              turun-temurun yang dihidangkan benar-benar memiliki daya tarik lintas kalangan.
            </p>
            <p>
              Suasana hangat, pelayanan ramah, dan aroma masakan yang menggugah selera
              membuat siapa pun yang datang merasa seperti sedang pulang ke rumah.
              Tak heran, banyak dari mereka yang kemudian merekomendasikan
              Warung Nasi Ibu Imas kepada teman, keluarga, bahkan penggemarnya,
              menjadikan warung ini bukan sekadar tempat makan,
              tetapi juga ikon kuliner yang membanggakan.
            </p>
          </div>
        </div>

        <div className="testimonial-gallery">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-image-wrapper">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                loading="lazy"
                width="350"
                height="500"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
