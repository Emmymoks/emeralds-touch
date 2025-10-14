import React from 'react';

const sampleImages = [
  'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8174_iu7ynv.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8136_gpktfd.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8172_l5irh4.jpg'
];

export default function Home({ onNavigate }) {
  return (
    <section className="page" style={{ textDecoration: 'none' }}>
      <div className="hero">
        <div className="hero-left">
          <h2 className="text-reveal"><span>Emerald's Touch</span></h2>
          <h2 className="text-reveal"><span>Professional Makeup</span></h2>
          <div className="motto">one face, one glam at a time ✨</div>
          <p style={{ color: 'var(--muted)' }}>
            Flawless Soft, Classic and Bridal looks. From day glam to camera-ready bridal
            transformations, we craft looks that last.
          </p>

          {/* Updated CTA buttons with hover animations */}
          <div className="cta" style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <button
              className="btn animated-btn"
              onClick={() => onNavigate('gallery')}
              style={{ textDecoration: 'none' }}
            >
              View My Work
            </button>

            <button
              className="btn ghost animated-btn"
              onClick={() => onNavigate('contact')}
              style={{ textDecoration: 'none' }}
            >
              Make a Reservation
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-media-card">
            <video
              className="hero-media"
              src="https://res.cloudinary.com/emmys-cloud/video/upload/IMG_6429_rc3vxr.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <div className="card" style={{ marginTop: 12 }}>
            <div className="thumb-row">
              {sampleImages.map((src) => (
                <img key={src} className="thumb-sample" src={src} alt="thumb" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section style={{ marginTop: 26 }}>
        <h3 className="text-reveal"><span>What clients say</span></h3>
        <div className="reviews">
          <div className="review">
            <strong>Amaka A.</strong>
            <div style={{ color: 'var(--muted)' }}>
              Joy transformed me for my wedding. It lasted all day and the photos were stunning.
            </div>
          </div>
          <div className="review">
            <strong>Chinelo O.</strong>
            <div style={{ color: 'var(--muted)' }}>
              Professional, punctual and so creative. Soft glam that still looks natural.
            </div>
          </div>
          <div className="review">
            <strong>Funmi P.</strong>
            <div style={{ color: 'var(--muted)' }}>
              Loved my classic look for a photoshoot. Highly recommend!
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
