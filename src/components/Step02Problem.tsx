"use client";

import React, { useState } from "react";

const TyreIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="18" cy="18" rx="14" ry="14" />
    <ellipse cx="18" cy="18" rx="8" ry="8" />
    <ellipse cx="18" cy="18" rx="3.5" ry="3.5" />
    <path d="M 18 4 L 18 10" />
    <path d="M 18 26 L 18 32" />
    <path d="M 4 18 L 10 18" />
    <path d="M 26 18 L 32 18" />
    <path d="M 8 8 L 12.5 12.5" />
    <path d="M 23.5 23.5 L 28 28" />
    <path d="M 28 8 L 23.5 12.5" />
    <path d="M 12.5 23.5 L 8 28" />
  </svg>
);

const AeroIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 5 22 C 10 22, 14 16, 22 16 L 31 16" />
    <path d="M 5 17 C 12 17, 16 11, 25 11 L 31 11" />
    <path d="M 31 9 L 31 24" strokeWidth="2.2" />
    <path d="M 12 26 C 18 26, 22 23, 27 23" strokeDasharray="1.5 2.5" />
  </svg>
);

const HelmetIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 8 23 C 6 20, 6 12, 13 8 C 21 4, 30 8, 30 18 C 30 22, 28 26, 23 27 L 13 27 C 10 27, 8 25, 8 23 Z" />
    <path d="M 10 16 L 24 16 C 26 16, 27 17.5, 27 19 L 26 21 C 25.5 22, 24 22.5, 22 22.5 L 12 22.5" />
    <circle cx="21" cy="20" r="1" fill="currentColor" />
  </svg>
);

const TrackIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 10 C 14 6, 22 6, 26 10 C 29 13, 28 19, 23 21 C 20 22, 17 21, 15 23 C 12 26, 11 29, 15 31 C 19 32, 23 30, 27 27" />
    <path d="M 10 10 C 7 14, 8 22, 10 25 C 11 27, 13 28, 15 31" />
  </svg>
);

const WeatherIcon = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 9 20 C 6 20, 5 17, 7 15 C 6 11, 11 8, 14 10 C 16 7, 23 7, 25 11 C 28 11, 30 13, 29 16 C 31 18, 29 20, 26 20 Z" />
    <line x1="11" y1="24" x2="9" y2="28" />
    <line x1="18" y1="24" x2="16" y2="28" />
    <line x1="25" y1="24" x2="23" y2="28" />
  </svg>
);

export const Step02Problem: React.FC = () => {
  const [selectedFactor, setSelectedFactor] = useState<string | null>("tyres");

  const factors = [
    {
      id: "tyres",
      title: "Tyres",
      icon: TyreIcon,
      desc: "Wear, temperature, compound",
      color: "#e10600",
    },
    {
      id: "aero",
      title: "Aero",
      icon: AeroIcon,
      desc: "DRS, drag, downforce",
      color: "#2563eb",
    },
    {
      id: "driver",
      title: "Driver",
      icon: HelmetIcon,
      desc: "Braking, throttle, style",
      color: "#10b981",
    },
    {
      id: "track",
      title: "Track",
      icon: TrackIcon,
      desc: "Surface, evolution, temperature",
      color: "#f59e0b",
    },
    {
      id: "weather",
      title: "Weather",
      icon: WeatherIcon,
      desc: "Rain, ambient temp, wind",
      color: "#64748b",
    }
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">02</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">FACTOR DECOUPLING</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">THE PROBLEM</h2>
          <span className="section-subtitle">Performance drops. But why?</span>
        </div>
      </div>

      <p className="problem-intro">
        A slower lap time can be caused by multiple compounding factors. Our goal is to identify if
        the tyres are really the reason before making tactical pit wall calls.
      </p>

      <div className="problem-grid">
        {/* Left: Sleek Integrated Factors Matrix Bar */}
        <div className="factors-matrix">
          {factors.map((factor) => {
            const Icon = factor.icon;
            const isSelected = selectedFactor === factor.id;
            return (
              <div
                key={factor.id}
                className={`factor-cell ${isSelected ? "selected" : ""}`}
                onClick={() => setSelectedFactor(factor.id)}
              >
                <div className="cell-indicator" />
                <div className="factor-icon-wrapper">
                  <Icon />
                </div>
                <div className="factor-title">{factor.title}</div>
                <div className="factor-desc">{factor.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Right: Monza Circuit Breakdown */}
        <div className="circuit-breakdown">
          <div className="circuit-card-header">
            <h4>SAME LAP TIME.</h4>
            <h4>DIFFERENT REASONS.</h4>
          </div>

          <div className="circuit-content">
            {/* Legend */}
            <div className="circuit-legend">
              <div className="legend-item">
                <span className="color-bar bg-red" />
                <span>Tyre issue</span>
              </div>
              <div className="legend-item">
                <span className="color-bar bg-blue" />
                <span>DRS effect</span>
              </div>
              <div className="legend-item">
                <span className="color-bar bg-green" />
                <span>Braking difference</span>
              </div>
              <div className="legend-item">
                <span className="color-bar bg-orange" />
                <span>Track evolution</span>
              </div>
            </div>

            {/* SVG Track Outline with Color segments */}
            <div className="circuit-svg-container">
              <svg viewBox="0 0 160 190" className="circuit-svg">
                {/* Background circuit glow */}
                <path
                  d="M 40 30 L 120 45 L 140 100 L 135 150 L 80 170 L 45 130 L 35 70 Z"
                  fill="none"
                  stroke="#f8fafc"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* DRS effect (Main straight - Blue) */}
                <path
                  d="M 35 70 L 40 30 L 120 45"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  className={selectedFactor === "aero" ? "pulse-stroke" : ""}
                />

                {/* Braking difference (Prima Variante chicane - Green) */}
                <path
                  d="M 120 45 L 140 100"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  className={selectedFactor === "driver" ? "pulse-stroke" : ""}
                />

                {/* Tyre issue (Curva di Lesmo & Ascari lateral load - Red) */}
                <path
                  d="M 140 100 L 135 150 L 80 170"
                  fill="none"
                  stroke="#e10600"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className={selectedFactor === "tyres" ? "pulse-stroke" : ""}
                />

                {/* Track evolution (Parabolica - Orange) */}
                <path
                  d="M 80 170 L 45 130 L 35 70"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  className={selectedFactor === "track" ? "pulse-stroke" : ""}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .problem-section {
          padding: 36px 0;
          border-bottom: 1px solid var(--border-subtle);
          width: 100%;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .sleek-index-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--primary-red);
          background: #fff1f0;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(225, 6, 0, 0.14);
          letter-spacing: 0.05em;
        }

        .idx-num {
          color: var(--primary-red);
        }

        .idx-sep {
          color: #fca5a5;
        }

        .idx-label {
          color: #475569;
          font-size: 0.68rem;
          font-weight: 700;
        }

        .header-titles {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .section-title {
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          color: var(--text-main);
          line-height: 1.15;
        }

        .section-subtitle {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .problem-intro {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: 2.85fr 1.15fr;
          gap: 20px;
          align-items: stretch;
        }

        /* Sleek Integrated Factor Matrix */
        .factors-matrix {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .factor-cell {
          position: relative;
          padding: 20px 14px 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          border-right: 1px solid #f1f5f9;
          transition: all 0.2s ease;
          background: #ffffff;
        }

        .factor-cell:last-child {
          border-right: none;
        }

        .cell-indicator {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: transparent;
          transition: all 0.2s ease;
        }

        .factor-cell:hover {
          background: #f8fafc;
        }

        .factor-cell.selected {
          background: #ffffff;
        }

        .factor-cell.selected .cell-indicator {
          background: var(--primary-red);
        }

        .factor-icon-wrapper {
          color: #64748b;
          margin-bottom: 12px;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .factor-cell:hover .factor-icon-wrapper {
          transform: translateY(-2px);
          color: var(--text-main);
        }

        .factor-cell.selected .factor-icon-wrapper {
          color: var(--primary-red);
          transform: translateY(-2px);
        }

        .factor-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 5px;
          letter-spacing: -0.01em;
        }

        .factor-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Circuit Breakdown */
        .circuit-breakdown {
          background: #fafafa;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
        }

        .circuit-card-header {
          margin-bottom: 8px;
        }

        .circuit-card-header h4 {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: 0.03em;
          line-height: 1.25;
        }

        .circuit-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
        }

        .circuit-legend {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .color-bar {
          width: 12px;
          height: 4px;
          border-radius: 2px;
        }

        .bg-red { background: #e10600; }
        .bg-blue { background: #2563eb; }
        .bg-green { background: #10b981; }
        .bg-orange { background: #f59e0b; }

        .circuit-svg-container {
          width: 95px;
          height: 105px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circuit-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .pulse-stroke {
          stroke-width: 6.5;
          filter: drop-shadow(0 0 4px currentColor);
        }

        @media (max-width: 1080px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
          .factors-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .factors-row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};
