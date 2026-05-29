"use client";

import Image from "next/image";
import { useState } from "react";

const PILLS = [
  "Intelligent Insights",
  "Real-Time Tracking",
  "Seamless Collaboration",
  "Data-Driven Results",
  "Enterprise Ready",
];

const STATS = [
  { number: "2026", label: "Launch Year" },
  { number: "100%", label: "Focused Vision" },
  { number: "∞", label: "Possibilities" },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitted) return;
    setLoading(true);

    // Replace with your actual API endpoint / form handler
    await new Promise((r) => setTimeout(r, 1000));

    setSubmitted(true);
    setLoading(false);
    setEmail("");
  }

  return (
    <section className="hero">
      {/* Animated logo mark */}
      <div className="hero-icon-wrap">
        <div className="hero-icon-bg-2" />
        <div className="hero-icon-bg" />
        <Image
          src="/logo.png"
          alt="Zoowibo logo"
          width={72}
          height={72}
          className="hero-icon-img"
          priority
        />
      </div>

      {/* Eyebrow */}
      <p className="hero-eyebrow">
        <span className="eyebrow-dot" />
        Making Indian Education System Tech Driven
      </p>

      {/* Headline */}
      <h1 className="hero-headline">
        <span>Something</span>
        <span>Big</span>
        <span>Is Coming Soon.</span>
      </h1>

      {/* Sub */}
      <p className="hero-sub">We&apos;re crafting something extraordinary.</p>

      <div className="hero-divider" />

      {/* Email form */}
      {!submitted ? (
        <form className="email-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email for early access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button type="submit" className="email-btn" disabled={loading}>
            {loading ? "..." : "Notify Me"}
          </button>
        </form>
      ) : (
        <div
          className="email-form"
          style={{
            justifyContent: "center",
            padding: "16px 24px",
            color: "rgba(255,255,255,0.9)",
            fontSize: "0.95rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          ✓ &nbsp; You&apos;re on the list — we&apos;ll be in touch soon!
        </div>
      )}

      {/* Feature pills */}
      <div className="pills" role="list">
        {PILLS.map((label) => (
          <span key={label} className="pill" role="listitem">
            <span className="pill-dot" />
            {label}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div className="stats" role="list">
        {STATS.map(({ number, label }) => (
          <div key={label} className="stat" role="listitem">
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}