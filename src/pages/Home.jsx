import React from 'react';

const sampleImages = [
  'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8174_iu7ynv.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8136_gpktfd.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8172_l5irh4.jpg'
];

export default function Home({ onNavigate }) {
  return (
    <section style={{ textDecoration: 'none' }}>
      <div className="hero">
        <div className="hero-left">
          <h2>Emerald's Touch</h2>
          <h2>Professional Makeup</h2>
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

        <div>
          <div className="hero-media-card">
            <video
              className="hero-media"
              src="https://res.cloudinary.com/emmys-cloud/video/upload/IMG_6429_rc3vxr.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="card" style={{ marginTop: 12 }}>
            <div className="thumb-row">
              {sampleImages.map((src) => (
                <img key={src} className="thumb-sample" src={src} alt="thumb" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section style={{ marginTop: 26 }}>
        <h3>What clients say</h3>
        <div className="reviews">
          <div className="review">
            <strong>Amaka A.</strong>
            <div style={{ color: 'var(--muted)' }}>
              Joy transformed me for my wedding — lasted all night and the photos were stunning.
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
