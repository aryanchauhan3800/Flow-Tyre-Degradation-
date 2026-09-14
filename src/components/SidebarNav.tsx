"use client";

import React, { useState, useEffect } from "react";

interface StepItem {
  id: string;
  num: string;
  label: string;
  href: string;
}

const steps: StepItem[] = [
  { id: "overview", num: "01", label: "Overview", href: "#overview" },
  { id: "problem", num: "02", label: "Problem", href: "#problem" },
  { id: "data", num: "03", label: "Data", href: "#data" },
  { id: "digital-twin", num: "04", label: "Digital Twin", href: "#digital-twin" },
  { id: "residuals", num: "05", label: "Residuals", href: "#residuals" },
  { id: "confounders", num: "06", label: "Confounders", href: "#confounders" },
  { id: "tdi", num: "07", label: "TDI", href: "#tdi" },
  { id: "ml-model", num: "08", label: "ML Model", href: "#ml-model" },
  { id: "fusion", num: "09", label: "Fusion", href: "#fusion" },
  { id: "results", num: "10", label: "Decision Twin", href: "#results" }
];

export const SidebarNav: React.FC = () => {
  const [activeStep, setActiveStep] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = steps.length - 1; i >= 0; i--) {
        const step = steps[i];
        const element = document.getElementById(step.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveStep(step.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sidebar-container">
      {/* Steps List */}
      <nav className="steps-nav">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <a
              key={step.id}
              href={step.href}
              className={`step-link ${isActive ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(step.id);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveStep(step.id);
                }
              }}
            >
              <span className={`step-badge ${isActive ? "active-badge" : ""}`}>
                {step.num}
              </span>
              <span className={`step-label ${isActive ? "active-label" : ""}`}>
                {step.label}
              </span>
              {isActive && <span className="step-indicator-bar" />}
            </a>
          );
        })}
        {/* Subtle marker ring */}
        <div className="sidebar-boundary-dot" />
      </nav>

      {/* Bottom Quote & Brand */}
      <div className="sidebar-footer">
        <blockquote className="sidebar-quote">
          &ldquo;A slower lap doesn&rsquo;t tell you why the car is slower.&rdquo;
        </blockquote>
        <div className="sidebar-brand">
          <div className="brand-header-row">
            <img
              src="/images/f1_logo.png"
              alt="Formula 1 Logo"
              className="sidebar-f1-logo"
            />
            <div className="brand-logo-text">
              <span className="brand-dark">TYRE</span>
              <span className="brand-red">TRACE</span>
            </div>
          </div>
          <span className="brand-sub">Understand.</span>
          <span className="brand-sub">Predict. Decide.</span>
        </div>
      </div>

      <style jsx>{`
        .sidebar-container {
          width: 175px;
          min-width: 175px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px 12px 24px 0;
          height: calc(100vh - 75px);
          position: sticky;
          top: 65px;
          user-select: none;
        }

        .steps-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .step-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 4px 6px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }

        .step-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          border: 1px solid var(--border-medium);
          background: #ffffff;
          transition: all 0.2s ease;
        }

        .step-badge.active-badge {
          background: var(--primary-red);
          color: #ffffff;
          border-color: var(--primary-red);
          box-shadow: 0 2px 6px rgba(225, 6, 0, 0.3);
        }

        .step-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .step-label.active-label {
          color: var(--primary-red);
          font-weight: 700;
        }

        .step-indicator-bar {
          position: absolute;
          right: -10px;
          top: 6px;
          bottom: 6px;
          width: 2.5px;
          background: var(--primary-red);
          border-radius: 2px;
        }

        .sidebar-boundary-dot {
          position: absolute;
          right: -13px;
          bottom: 120px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 1.5px solid var(--primary-red);
          background: #ffffff;
        }

        .step-link:hover .step-label {
          color: var(--primary-red);
        }

        .sidebar-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 18px;
        }

        .sidebar-quote {
          font-size: 0.82rem;
          font-style: italic;
          color: #94a3b8;
          line-height: 1.35;
          font-family: Georgia, Cambria, "Times New Roman", serif;
        }

        .sidebar-brand {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .brand-header-row {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 2px;
        }

        .sidebar-f1-logo {
          height: 14px;
          width: auto;
          object-fit: contain;
        }

        .brand-logo-text {
          font-weight: 900;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          margin-bottom: 2px;
        }

        .brand-dark {
          color: #0f172a;
        }

        .brand-red {
          color: var(--primary-red);
        }

        .brand-sub {
          font-size: 0.72rem;
          color: #64748b;
          font-weight: 500;
          line-height: 1.3;
        }

        @media (max-width: 1024px) {
          .sidebar-container {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};
