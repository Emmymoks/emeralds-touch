import React, { useState, useEffect } from 'react';

const IMAGES = {
  Soft: [
    'https://ik.imagekit.io/emmycloud/image%20(7).jpg?updatedAt=1760363051313',
    'https://ik.imagekit.io/emmycloud/image%20(8).jpg?updatedAt=1760363051310',
    'https://ik.imagekit.io/emmycloud/IMG_8186.JPG?updatedAt=1760361485015'
  ],
  Classic: [
    'https://ik.imagekit.io/emmycloud/14.16.33_115d77fe.jpg?updatedAt=1760361484552',
    'https://ik.imagekit.io/emmycloud/IMG_9180.JPG?updatedAt=1760361484410',
    'https://ik.imagekit.io/emmycloud/14.16.33_0bd6c221.jpg?updatedAt=1760361484058'
  ],
  Bridal: [
    'https://ik.imagekit.io/emmycloud/image.jpg?updatedAt=1760362786192',
    'https://ik.imagekit.io/emmycloud/image%20(3).jpg?updatedAt=1760362786042',
    'https://ik.imagekit.io/emmycloud/image%20(2).jpg?updatedAt=1760362786149'
  ]
};

const VIDEOS = {
  Soft: [
    '/IMG_6428.MP4',
    '/IMG_6429.MP4',
    '/IMG_9182.MP4'
  ],
  Classic: [
    '/IMG_6428.MP4',
    '/IMG_6429.MP4',
    '/IMG_9182.MP4'
  ],
  Bridal: [
    '/IMG_6427.MP4',
    '/IMG_9181.MP4',
    '/IMG_9179.MP4'
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
              <video className="thumb-media" src={src} muted playsInline preload="metadata" />
            )}
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div style={{ fontWeight: 700 }}>
                {category} • {mode}
              </div>
              <button className="close-x" aria-label="Close" onClick={() => setLightbox(null)}>
                ✕
              </button>
            </div>

            <div className="lightbox-body">
              <div className="lightbox-media-wrapper">
                {lightbox.type === 'img' ? (
                  <img className="lightbox-media" src={lightbox.src} alt={`${category} open`} />
                ) : (
                  <video
                    className="lightbox-media"
                    src={lightbox.src}
                    controls
                    autoPlay
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
