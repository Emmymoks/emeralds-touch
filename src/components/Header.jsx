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

      {/* Desktop Navigation */}
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

        {/* Social Links */}
        <div className="nav-socials">
          <a href="https://wa.me/2349060758511" target="_blank" rel="noreferrer">
            <FaWhatsapp size={20} color="#25D366" />
          </a>
          <a href="https://www.instagram.com/eme.raldstouch?igsh=enUybnQxZjVsZmcx" target="_blank" rel="noreferrer">
            <FaInstagram size={20} color="#E1306C" />
          </a>
          <a href="https://www.tiktok.com/@emeraldoflagos?_t=ZS-90WAgFJQmLy&_r=1" target="_blank" rel="noreferrer">
            <FaTiktok size={20} color="#000" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="hamburger">
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <div
            className="mobile-overlay"
            onClick={() => setOpen(false)}
          ></div>

          <div className="mobile-menu show">
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

            <div className="mobile-socials">
              <a href="https://wa.me/2349060758511" target="_blank" rel="noreferrer">
                <FaWhatsapp size={22} color="#25D366" />
              </a>
              <a href="https://www.instagram.com/eme.raldstouch?igsh=enUybnQxZjVsZmcx" target="_blank" rel="noreferrer">
                <FaInstagram size={22} color="#E1306C" />
              </a>
              <a href="https://www.tiktok.com/@emeraldoflagos?_t=ZS-90WAgFJQmLy&_r=1" target="_blank" rel="noreferrer">
                <FaTiktok size={22} color="#000000ff" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
