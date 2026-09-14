"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X, Zap, Workflow } from "lucide-react";
import { SystemDesignModal } from "./SystemDesignModal";

export const Step01Hero: React.FC = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSystemDesign, setShowSystemDesign] = useState(false);

  const stats = [
    { value: "268.1 FPS", label: "Throughput (13.4× 20Hz Stream)" },
    { value: "3.63 ms", label: "Mean Pipeline Latency" },
    { value: "R² 0.9910", label: "Physics + AI Fusion (MAE 0.407)" },
    { value: "159", label: "Passing Tests (139 Back + 20 Front)" }
  ];

  return (
    <section id="overview" className="hero-section">
      <div className="hero-layout">
        {/* Left Content */}
        <div className="hero-left">
          <div className="category-tag">
            <span className="red-dash">—</span> PHYSICS-INFORMED AI
          </div>

          <h1 className="hero-title">
            TYRE INTELLIGENCE<br />
            FOR <span className="highlight-red">REAL RACING</span>
          </h1>

          <p className="hero-description">
            A data-driven, physics-informed system to detect tyre degradation,
            explain performance changes, and recommend optimal race strategy
            — in real time.
          </p>

          <div className="hero-buttons">
            <a href="#data" className="btn-primary">
              <span>Explore the Project</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => setShowDemoModal(true)}
              className="btn-secondary"
            >
              <div className="play-triangle">▶</div>
              <span>Watch Demo</span>
            </button>

            <button
              onClick={() => setShowSystemDesign(true)}
              className="btn-secondary btn-system-design"
            >
              <Workflow size={16} className="text-red" />
              <span>System Design</span>
            </button>
          </div>

          {/* 4 Stats Bar (Unboxed & Minimalist) */}
          <div className="stats-bar">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-col">
                <div className="stat-value mono">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Graphic - Seamless Car */}
        <div className="hero-right">
          {/* F1 Car Image - Pit Lane Track Asset */}
          <div className="car-image-wrapper">
            <Image
              src="/images/f1_tyretrace_pitlane.png"
              alt="TYRETRACE F1 High Performance Race Car Pit Lane"
              width={1024}
              height={426}
              priority
              className="hero-car-img"
            />
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="modal-backdrop" onClick={() => setShowDemoModal(false)}>
          <div className="modal-card modal-card-video" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <Zap size={18} className="text-red" />
                <h3>TYRETRACE System Demo</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setShowDemoModal(false)}
                aria-label="Close demo"
              >
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div className="video-player-wrapper">
                <video
                  src="/Untitled_Scene_09-10_18_35_48_20260911002622.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="demo-video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* System Design Modal */}
      <SystemDesignModal
        isOpen={showSystemDesign}
        onClose={() => setShowSystemDesign(false)}
      />

      <style jsx>{`
        .hero-section {
          padding: 10px 0 36px 0;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
          width: 100%;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 24px;
          align-items: center;
          position: relative;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .category-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .red-dash {
          color: var(--primary-red);
          font-weight: 900;
        }

        .hero-title {
          font-size: 2.35rem;
          line-height: 1.1;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .highlight-red {
          color: var(--primary-red);
        }

        .hero-description {
          font-size: 0.94rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 24px;
          max-width: 520px;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-red);
          color: #ffffff;
          padding: 11px 24px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 700;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(225, 6, 0, 0.28);
        }

        .btn-primary:hover {
          background: var(--primary-red-hover);
          transform: translateY(-1px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: var(--text-main);
          padding: 10px 22px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--border-medium);
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: var(--border-focus);
        }

        .play-triangle {
          font-size: 0.65rem;
          color: #0f172a;
        }

        .stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding-top: 20px;
          border-top: 1px solid var(--border-subtle);
          margin-top: 8px;
        }

        .stat-col {
          padding-right: 14px;
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .stat-col:last-child {
          border-right: none;
        }

        .stat-value {
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          line-height: 1.3;
          font-weight: 500;
        }

        /* Hero Right */
        .hero-right {
          position: relative;
          width: 100%;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .car-image-wrapper {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
        }

        :global(.hero-car-img) {
          width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
          display: block;
          transition: transform 0.4s ease;
        }

        :global(.hero-car-img:hover) {
          transform: scale(1.015);
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 520px;
          width: 100%;
          padding: 24px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-subtle);
          animation: modalPop 0.2s ease-out;
        }

        @keyframes modalPop {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-title-group h3 {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .text-red {
          color: var(--primary-red);
        }

        .modal-close-btn {
          color: var(--text-muted);
          padding: 4px;
          border-radius: 4px;
        }

        .modal-close-btn:hover {
          color: var(--text-main);
          background: var(--bg-subtle);
        }

        .modal-card.modal-card-video {
          max-width: 920px;
          width: 95%;
          padding: 18px 20px;
          background: #0b0f19;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .modal-card.modal-card-video .modal-header {
          margin-bottom: 12px;
        }

        .modal-card.modal-card-video .modal-title-group h3 {
          color: #f1f5f9;
        }

        .modal-card.modal-card-video .modal-close-btn {
          color: #94a3b8;
        }

        .modal-card.modal-card-video .modal-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
        }

        .video-player-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #000000;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .demo-video {
          width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: var(--radius-md);
          display: block;
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 1.85rem;
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
