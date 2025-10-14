import React, { useState, useEffect } from 'react';

const IMAGES = {
  Soft: [
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8174_iu7ynv.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8136_gpktfd.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_8172_l5irh4.jpg'
  ],
  Classic: [
    'https://ik.imagekit.io/emmycloud/14.16.33_115d77fe.jpg?updatedAt=1760361484552',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_9407_mw1tzw.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_9409_l6ccv6.jpg',
    'https://ik.imagekit.io/emmycloud/14.16.33_0bd6c221.jpg?updatedAt=1760361484058'
  ],
  Bridal: [
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_9398_qumdnj.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_9405_fsp3fx.jpg',
    'https://res.cloudinary.com/emmys-cloud/image/upload/IMG_9400_a750p1.jpg'
  ]
};

const VIDEOS = {
  Soft: [
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_9386_bzgxhb.mp4',
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_9182_tv9wom.mp4',
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_9390_dbrl0l.mp4'
  ],
  Classic: [
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_6429_rc3vxr.mp4',
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_8233_xsitdm.mov',
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_9385_jf6mhg.mp4'
  ],
  Bridal: [
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_9181_zzoiyl.mp4',
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_9179_uvpp4l.mp4',
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_4049_a6cu7l.mov',
    'https://res.cloudinary.com/emmys-cloud/video/upload/IMG_6427_bsodfy.mp4'
  ]
};

export default function Gallery() {
  const [mode, setMode] = useState('Images'); // Images | Videos
  const [category, setCategory] = useState('Soft');
  const [lightbox, setLightbox] = useState(null); // {type:'img'|'vid', src}
  const items = mode === 'Images' ? IMAGES[category] : VIDEOS[category];

  // close lightbox on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setLightbox(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section>
      <h2>Gallery</h2>

      <div className="filter-bar" aria-label="Gallery controls">
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className={`btn ${mode === 'Images' ? '' : 'ghost'}`}
            onClick={() => setMode('Images')}
            aria-pressed={mode === 'Images'}
          >
            Images
          </button>
          <button
            className={`btn ${mode === 'Videos' ? '' : 'ghost'}`}
            onClick={() => setMode('Videos')}
            aria-pressed={mode === 'Videos'}
          >
            Videos
          </button>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          {['Soft', 'Classic', 'Bridal'].map((c) => (
            <button
              key={c}
              className={category === c ? 'btn' : 'btn ghost'}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid" role="list">
        {items.map((src) => (
          <div
            className="thumb"
            key={src}
            role="listitem"
            onClick={() => setLightbox({ src, type: mode === 'Images' ? 'img' : 'vid' })}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setLightbox({ src, type: mode === 'Images' ? 'img' : 'vid' });
            }}
            aria-label={`Open ${mode === 'Images' ? 'image' : 'video'} in ${category}`}
          >
            {mode === 'Images' ? (
              <img className="thumb-media" src={src} alt={`${category} makeup`} />
            ) : (
              <video
                className="thumb-media"
                src={src}
                muted
                loop
                autoPlay
                playsInline
                preload="auto"
              />
            )}
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div style={{ fontWeight: 700 }}>
                {category} • {mode}
              </div>
              <button
                className="close-x"
                aria-label="Close"
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
            </div>

            <div className="lightbox-body">
              <div className="lightbox-media-wrapper">
                {lightbox.type === 'img' ? (
                  <img
                    className="lightbox-media"
                    src={lightbox.src}
                    alt={`${category} open`}
                  />
                ) : (
                  <video
                    className="lightbox-media"
                    src={lightbox.src}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
