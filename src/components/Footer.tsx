"use client";

import React, { useState } from "react";
import { FileText, Download, Check } from "lucide-react";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Footer: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Brand */}
        <div className="footer-brand">
          <div className="brand-badge">
            <img
              src="/images/f1_logo.png"
              alt="Formula 1 Logo"
              className="footer-f1-logo"
            />
            <div className="brand-text">
              <span className="brand-name">TYRETRACE</span>
              <span className="brand-tagline">Understand why. Drive smarter.</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="footer-actions">
          <a
            href="#overview"
            className="action-btn outline-btn"
          >
            <FileText size={15} />
            <span>View Full Documentation</span>
          </a>

          <button
            onClick={handleDownload}
            className="action-btn outline-btn"
          >
            {downloaded ? <Check size={15} className="text-green" /> : <Download size={15} />}
            <span>{downloaded ? "Report Ready" : "Download Report"}</span>
          </button>

          <a
            href="https://github.com/aryanchauhan3800/tyre-degradation-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn red-btn"
          >
            <GithubIcon size={15} />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
          margin-top: 32px;
          padding: 20px 0;
          width: 100%;
        }

        .footer-content {
          max-width: 1560px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-f1-logo {
          height: 22px;
          width: auto;
          object-fit: contain;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: 0.06em;
          color: var(--text-main);
        }

        .brand-tagline {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Footer Actions */
        .footer-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .outline-btn {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
        }

        .outline-btn:hover {
          background: #f8fafc;
          border-color: var(--border-medium);
        }

        .red-btn {
          background: var(--primary-red);
          color: #ffffff;
          border: 1px solid var(--primary-red);
        }

        .red-btn:hover {
          background: var(--primary-red-hover);
        }

        .text-green {
          color: #10b981;
        }

        @media (max-width: 1024px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .footer-actions {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
