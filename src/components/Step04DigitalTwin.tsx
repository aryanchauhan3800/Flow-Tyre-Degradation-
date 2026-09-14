"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Step04DigitalTwin: React.FC = () => {
  const [activeForce, setActiveForce] = useState<"drag" | "cornering" | "traction">("drag");

  const checklist = [
    { label: "Longitudinal dynamics", active: true },
    { label: "Tyre model (Pacejka-like)", active: true },
    { label: "Aerodynamic drag", active: true },
    { label: "Rolling resistance", active: true },
    { label: "Brake forces", active: true }
  ];

  return (
    <div id="digital-twin" className="digital-twin-container">
      {/* Header */}
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">04</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">FIRST PRINCIPLES TWIN</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">DIGITAL TWIN</h2>
          <span className="section-subtitle">What should the car have been doing?</span>
        </div>
      </div>

      <p className="twin-intro">
        We build a physics-based model to estimate the expected vehicle behaviour using
        first principles.
      </p>

      <div className="twin-content-grid">
        {/* Left: Physics Math & Checklist */}
        <div className="math-col">
          {/* Formula Box */}
          <div className="formula-box">
            <div className="math-row">
              <span className="formula-sym">F<sub>net</sub> = F<sub>traction</sub> − F<sub>drag</sub> − F<sub>rolling</sub> − F<sub>brake</sub></span>
            </div>
            <div className="math-subgrid">
              <div className="math-item">
                <span>a<sub>expected</sub> = </span>
                <span className="fraction">
                  <span className="num">F<sub>net</sub></span>
                  <span className="den">m</span>
                </span>
              </div>
              <div className="math-item">
                <span>F<sub>drag</sub> = </span>
                <span>½ ρ C<sub>d</sub> A v<sup>2</sup></span>
              </div>
            </div>

            {/* Real Project Vehicle Parameters */}
            <div className="physics-param-strip mono">
              <span>m: 798 kg</span>
              <span>·</span>
              <span>Cd: 1.0 (-25% DRS)</span>
              <span>·</span>
              <span>A: 1.5 m²</span>
              <span>·</span>
              <span>Crr: 0.012</span>
              <span>·</span>
              <span>a<sub>x,exp</sub>: [-14.3, +6.7] m/s²</span>
            </div>
          </div>

          {/* Checklist */}
          <div className="checklist-grid">
            {checklist.map((item, idx) => (
              <div key={idx} className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span className="check-text">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Top-Down / 3D Physics Car Model Graphic */}
        <div className="model-col">
          <div className="model-card">
            {/* Interactive Vector Overlay on Car Silhouette */}
            <div className="car-physics-canvas">
              <svg viewBox="0 0 240 220" className="physics-svg">
                <defs>
                  <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="#10b981" />
                  </marker>
                  <marker id="arrow-orange-left" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
                  </marker>
                  <marker id="arrow-orange-right" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
                  </marker>
                  <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="50%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                {/* F1 Car Silhouette Top-Down (Formula 1 monocoque, halo, front wing, rear wing, tyres) */}
                <g transform="translate(45, 20)">
                  {/* Front Wing */}
                  <rect x="35" y="10" width="80" height="12" rx="3" fill="#1e293b" />
                  <rect x="30" y="8" width="6" height="16" rx="2" fill="#e10600" />
                  <rect x="114" y="8" width="6" height="16" rx="2" fill="#e10600" />

                  {/* Front Tyres */}
                  <rect x="22" y="32" width="16" height="34" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                  <rect x="112" y="32" width="16" height="34" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                  {/* Front Wishbone Suspensions */}
                  <line x1="38" y1="46" x2="60" y2="52" stroke="#64748b" strokeWidth="2" />
                  <line x1="112" y1="46" x2="90" y2="52" stroke="#64748b" strokeWidth="2" />

                  {/* Car Chassis / Monocoque */}
                  <path
                    d="M 70 22 C 68 35, 62 60, 56 95 C 52 120, 52 145, 60 155 L 90 155 C 98 145, 98 120, 94 95 C 88 60, 82 35, 80 22 Z"
                    fill="url(#carBodyGrad)"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />

                  {/* Cockpit / Halo */}
                  <ellipse cx="75" cy="85" rx="8" ry="14" fill="#020617" stroke="#94a3b8" strokeWidth="1" />
                  <circle cx="75" cy="82" r="4.5" fill="#f59e0b" /> {/* Driver helmet */}

                  {/* Rear Tyres */}
                  <rect x="18" y="125" width="20" height="42" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                  <rect x="112" y="125" width="20" height="42" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                  {/* Rear Suspension */}
                  <line x1="38" y1="140" x2="60" y2="142" stroke="#64748b" strokeWidth="2" />
                  <line x1="112" y1="140" x2="90" y2="142" stroke="#64748b" strokeWidth="2" />

                  {/* Rear Wing */}
                  <rect x="30" y="162" width="90" height="15" rx="2" fill="#1e293b" />
                  <rect x="71" y="165" width="8" height="8" rx="2" fill="#ef4444" /> {/* Rain LED */}
                </g>

                {/* Force Vector: F_drag (Green Arrow pointing forward/up from nose) */}
                <g
                  className="force-vector"
                  onClick={() => setActiveForce("drag")}
                  style={{ cursor: "pointer" }}
                >
                  <line
                    x1="120"
                    y1="55"
                    x2="120"
                    y2="8"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    markerEnd="url(#arrow-green)"
                  />
                  <text
                    x="132"
                    y="14"
                    fill="#10b981"
                    fontSize="11"
                    fontWeight="800"
                    className="mono"
                  >
                    F<tspan dy="3" fontSize="8">drag</tspan>
                  </text>
                </g>

                {/* Force Vector: F_cornering Left (Orange Arrow) */}
                <g
                  className="force-vector"
                  onClick={() => setActiveForce("cornering")}
                  style={{ cursor: "pointer" }}
                >
                  <line
                    x1="90"
                    y1="130"
                    x2="35"
                    y2="130"
                    stroke="#f97316"
                    strokeWidth="3.5"
                    markerEnd="url(#arrow-orange-left)"
                  />
                  <text
                    x="25"
                    y="118"
                    fill="#f97316"
                    fontSize="10"
                    fontWeight="800"
                    textAnchor="end"
                    className="mono"
                  >
                    F<tspan dy="3" fontSize="7">cornering</tspan>
                  </text>
                </g>

                {/* Force Vector: F_cornering Right (Orange Arrow) */}
                <g
                  className="force-vector"
                  onClick={() => setActiveForce("cornering")}
                  style={{ cursor: "pointer" }}
                >
                  <line
                    x1="150"
                    y1="130"
                    x2="205"
                    y2="130"
                    stroke="#f97316"
                    strokeWidth="3.5"
                    markerEnd="url(#arrow-orange-right)"
                  />
                  <text
                    x="212"
                    y="118"
                    fill="#f97316"
                    fontSize="10"
                    fontWeight="800"
                    className="mono"
                  >
                    F<tspan dy="3" fontSize="7">cornering</tspan>
                  </text>
                </g>
              </svg>
            </div>

            <div className="model-caption">
              <span className="caption-main">PHYSICS MODEL</span>
              <span className="caption-sub">(Expected Behaviour)</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .digital-twin-container {
          padding: 24px 16px 24px 0;
          width: 100%;
          border-right: 1px solid var(--border-subtle);
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
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .twin-intro {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
          line-height: 1.45;
        }

        .twin-content-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 18px;
          align-items: center;
        }

        /* Math & Formulas */
        .formula-box {
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-left: 3px solid var(--primary-red);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          margin-bottom: 12px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-main);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .math-row {
          margin-bottom: 8px;
          font-weight: 700;
        }

        .math-subgrid {
          display: flex;
          align-items: center;
          gap: 20px;
          font-weight: 600;
        }

        .fraction {
          display: inline-flex;
          flex-direction: column;
          vertical-align: middle;
          text-align: center;
          padding: 0 4px;
          font-size: 0.78rem;
        }

        .num {
          border-bottom: 1px solid #0f172a;
          padding-bottom: 1px;
        }

        .physics-param-strip {
          margin-top: 8px;
          padding-top: 6px;
          border-top: 1px dashed #e2e8f0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 12px;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        :global(.check-icon) {
          color: #10b981;
          flex-shrink: 0;
        }

        .check-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* Model Column */
        .model-card {
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .car-physics-canvas {
          width: 100%;
          max-width: 220px;
          height: 160px;
        }

        .physics-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .model-caption {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 4px;
        }

        .caption-main {
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: var(--text-main);
        }

        .caption-sub {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .twin-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
