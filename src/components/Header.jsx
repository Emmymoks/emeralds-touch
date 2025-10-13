import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Header({ onNavigate, route }) {
  const [open, setOpen] = useState(false);
  const nav = ["home", "gallery", "about", "contact"];
  const labels = {
    home: "Home",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
  };

  return (
    <header className="header" style={{ position: "relative", zIndex: 1100 }}>
      <div className="brand">
        <div className="logo">ET</div>
        <div>
          <h1>Emerald's Touch</h1>
          <div style={{ fontSize: 12, color: "#9aa4b2" }}>
            one face, one glam at a time ✨
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="nav">
        {nav.map((n) => (
          <button
            key={n}
            className={route === n ? "active" : ""}
            onClick={() => onNavigate(n)}
          >
            {labels[n]}
          </button>
        ))}

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <a
            className="link"
            href="https://wa.me/2349060758511"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
          >
            <FaWhatsapp size={20} color="#25D366" />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/eme.raldstouch?igsh=enUybnQxZjVsZmcx"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <FaInstagram size={20} color="#E1306C" />
          </a>
          <a
            className="link"
            href="https://www.tiktok.com/@emeraldoflagos?_t=ZS-90WAgFJQmLy&_r=1"
            target="_blank"
            rel="noreferrer"
            title="TikTok"
          >
            <FaTiktok size={20} color="#fff" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="hamburger">
        <button className="btn" onClick={() => setOpen((v) => !v)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <>
          {/* Optional overlay behind the dropdown to darken background */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(2px)",
              zIndex: 999,
            }}
          ></div>

          <div className="mobile-menu show" style={{ zIndex: 1000 }}>
            {nav.map((n) => (
              <button
                key={n}
                onClick={() => {
                  onNavigate(n);
                  setOpen(false);
                }}
                className={route === n ? "active" : ""}
              >
                {labels[n]}
              </button>
            ))}

            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <a
                href="https://wa.me/2349060758511"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={22} color="#25D366" />
              </a>
              <a
                href="https://www.instagram.com/eme.raldstouch?igsh=enUybnQxZjVsZmcx"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={22} color="#E1306C" />
              </a>
              <a
                href="https://www.tiktok.com/@emeraldoflagos?_t=ZS-90WAgFJQmLy&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok size={22} color="#fff" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
