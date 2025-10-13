import React from 'react';

const sampleImages = [
  'https://ik.imagekit.io/emmycloud/image%20(7).jpg?updatedAt=1760363051313',
  'https://ik.imagekit.io/emmycloud/14.16.33_115d77fe.jpg?updatedAt=1760361484552',
  'https://ik.imagekit.io/emmycloud/image.jpg?updatedAt=1760362786192'
];

export default function Home() {
  return (
    <section>
      <div className="hero">
        <div className="hero-left">
          <h2>Emerald's Touch</h2>
          <h2>Professional Makeup</h2>
          <div className="motto">one face, one glam at a time ✨</div>
          <p style={{ color: 'var(--muted)' }}>
            Flawless Soft, Classic and Bridal looks. From day glam to camera-ready bridal
            transformations, we craft looks that last.
          </p>

          <div className="cta" style={{ marginTop: 16 }}>
            <a className="btn" href="https://wa.me/2349060758511" target="_blank" rel="noreferrer">
              Book on WhatsApp
            </a>
          </div>
        </div>

        <div>
          <div className="hero-media-card">
            <video
              className="hero-media"
              src="/IMG_6428.MP4"
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
