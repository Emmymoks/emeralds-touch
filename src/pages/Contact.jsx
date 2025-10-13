import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    enquiry: "",
  });

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function sendWhatsApp(e) {
    e.preventDefault();
    const message = `Hello Joy, I am ${form.name || "[Name]"} from ${
      form.location || "[Location]"
    }.
Email: ${form.email || "[Email]"}
Phone: ${form.phone || "[Phone]"}
Enquiry: ${form.enquiry || "[Message]"}.`;
    const url =
      "https://wa.me/2349060758511?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  }

  return (
    <section>
      <h2>Contact</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 18,
          marginTop: 12,
        }}
      >
        {/* Contact Form */}
        <div>
          <form className="form" onSubmit={sendWhatsApp}>
            <input
              className="input"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
            />
            <input
              className="input"
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
            />
            <input
              className="input"
              placeholder="Location"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            />
            <textarea
              className="input"
              rows={5}
              placeholder="Enquiry"
              value={form.enquiry}
              onChange={(e) => update("enquiry", e.target.value)}
            ></textarea>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button className="btn" type="submit">
                Send to WhatsApp
              </button>
              <a className="link" href="tel:+2347010754360">
                Call +2347010754360
              </a>
            </div>
          </form>

          {/* Social Links with Icons */}
          <div style={{ marginTop: 18 }} className="card">
            <h4>Connect</h4>
            <div
              className="socials"
              style={{
                marginTop: 8,
                display: "flex",
                gap: 14,
                alignItems: "center",
              }}
            >
              <a
                className="link"
                href="https://wa.me/2349060758511"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
              >
                <FaWhatsapp size={24} color="#25D366" />
              </a>
              <a
                className="link"
                href="https://www.instagram.com/eme.raldstouch?igsh=enUybnQxZjVsZmcx"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <FaInstagram size={24} color="#E1306C" />
              </a>
              <a
                className="link"
                href="https://www.tiktok.com/@emeraldoflagos?_t=ZS-90WAgFJQmLy&_r=1"
                target="_blank"
                rel="noreferrer"
                title="TikTok"
              >
                <FaTiktok size={24} color="#fff" />
              </a>
            </div>
          </div>
        </div>

        {/* Studio Locations */}
        <div>
          <div className="card">
            <h4>Studio locations</h4>
            <div style={{ color: "var(--muted)" }}>
              Lagos State & Kwara State
            </div>
            <div style={{ height: 14 }} />
            <div
              style={{
                width: "100%",
                height: 300,
                overflow: "hidden",
                borderRadius: 10,
              }}
            >
              <iframe
                title="map"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15872.123456789012!2d3.379205!3d6.524379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4b7e1c5c3b1%3A0xabcdef1234567890!2sLagos%20State!5e0!3m2!1sen!2sng!4v1697040000000"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
