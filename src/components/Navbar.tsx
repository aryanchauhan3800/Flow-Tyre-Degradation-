"use client";

import React, { useState } from "react";
import { Workflow } from "lucide-react";
import { SystemDesignModal } from "./SystemDesignModal";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "home" }) => {
  const [showSystemDesign, setShowSystemDesign] = useState(false);
  const navItems = [
    { label: "Home", href: "#overview" },
    { label: "Problem", href: "#problem" },
    { label: "Data", href: "#data" },
    { label: "Physics", href: "#digital-twin" },
    { label: "AI", href: "#ml-model" },
    { label: "Demo", href: "#tdi" },
    { label: "Results", href: "#fusion" },
    { label: "About", href: "#decision-twin" }
  ];

  return (
    <>
      <header className="navbar-container">
        <div className="navbar-content">
          {/* Brand Left */}
          <a href="#overview" className="brand-group">
            <img
              src="/images/f1_logo.png"
              alt="Formula 1 Logo"
              className="brand-f1-logo"
            />
            <div className="brand-titles">
              <span className="brand-name"><span className="brand-dark">TYRE</span><span className="brand-red">TRACE</span></span>
              <span className="brand-tagline">DATA &nbsp;×&nbsp; PHYSICS &nbsp;×&nbsp; AI &nbsp;FOR FASTER DECISIONS</span>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${activeSection === item.label.toLowerCase() ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Right */}
          <div className="nav-actions">
            <button
              onClick={() => setShowSystemDesign(true)}
              className="system-design-btn"
              title="View End-to-End System Design Architecture"
            >
              <Workflow size={15} className="text-red" />
              <span>System Design</span>
            </button>

            <a
              href="https://github.com/aryanchauhan3800/tyre-degradation-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <GithubIcon size={16} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        <style jsx>{`
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
          width: 100%;
        }

        .navbar-content {
          max-width: 1560px;
          margin: 0 auto;
          padding: 10px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand-group {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-f1-logo {
          height: 22px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .brand-group:hover .brand-f1-logo {
          transform: scale(1.05);
        }

        .brand-titles {
          display: flex;
          align-items: baseline;
          gap: 16px;
          white-space: nowrap;
        }

        .brand-name {
          font-weight: 900;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          font-family: var(--font-sans);
        }

        .brand-dark {
          color: #0f172a;
        }

        .brand-red {
          color: var(--primary-red);
        }

        .brand-tagline {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          padding: 6px 4px;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .nav-link.active {
          color: var(--primary-red);
          font-weight: 600;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-red);
          border-radius: 2px;
        }

        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111827;
          color: #ffffff;
          padding: 7px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .github-btn:hover {
          background: #1f2937;
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .system-design-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #ffffff;
          color: #0f172a;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          transition: all 0.2s ease;
          border: 1px solid var(--border-subtle);
          cursor: pointer;
        }

        .system-design-btn:hover {
          background: #f8fafc;
          border-color: #ef4444;
          color: #ef4444;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.12);
        }

        .text-red {
          color: #ef4444;
        }

        @media (max-width: 1024px) {
          .brand-tagline {
            display: none;
          }
          .brand-divider {
            display: none;
          }
          .nav-links {
            gap: 14px;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
      </header>

      <SystemDesignModal
        isOpen={showSystemDesign}
        onClose={() => setShowSystemDesign(false)}
      />
    </>
  );
};
