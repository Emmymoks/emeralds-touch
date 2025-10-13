import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Header({ onNavigate, route }) {
  const [open, setOpen] = useState(false);
  const nav = ["home", "gallery", "about", "contact"];
  const labels = { home: "Home", gallery: "Gallery", about: "About", contact: "Contact" };

  return (
    <header className="header">
      <div className="brand">
        <div className="logo">ET</div>
        <div>
          <h1>Emerald's Touch</h1>
          <div style={{ fontSize: 12, color: "#9aa4b2" }}>
            one face, one glam at a time ✨
          </div>
        </div>
      </div>

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

      {/* Mobile Menu */}
      <div className="hamburger">
        <button className="btn" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
        {open && (
          <div
            style={{
              position: "absolute",
              right: 14,
              top: 78,
              background: "#071428",
              padding: 12,
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {nav.map((n) => (
              <div key={n}>
                <button
                  style={{
                    background: "transparent",
                    color: "#e6eef8",
                    border: 0,
                    padding: 8,
                  }}
                  onClick={() => {
                    onNavigate(n);
                    setOpen(false);
                  }}
                >
                  {labels[n]}
                </button>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                marginTop: 8,
              }}
            >
              <a
                href="https://wa.me/2349060758511"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={20} color="#25D366" />
              </a>
              <a
                href="https://www.instagram.com/eme.raldstouch?igsh=enUybnQxZjVsZmcx"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={20} color="#E1306C" />
              </a>
              <a
                href="https://www.tiktok.com/@emeraldoflagos?_t=ZS-90WAgFJQmLy&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok size={20} color="#fff" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
