"use client";

import React, { useState } from "react";
import {
  Car,
  Sliders,
  Wind,
  AlertTriangle,
  Fuel,
  CloudRain,
  Disc,
  Wrench,
  TrendingUp
} from "lucide-react";

export const Step06Confounders: React.FC = () => {
  const [activeChannels, setActiveChannels] = useState<{ [key: string]: boolean }>({
    traffic: true,
    track_limits: true,
    drs: true,
    safety_car: false,
    fuel_load: true,
    weather: true,
    braking: true,
    mechanical: false,
    track_evolution: true
  });

  const confounders = [
    { id: "traffic", label: "Traffic", icon: Car },
    { id: "track_limits", label: "Track Limits", icon: Sliders },
    { id: "drs", label: "DRS", icon: Wind },
    { id: "safety_car", label: "Safety Car / VSC", icon: AlertTriangle },
    { id: "fuel_load", label: "Fuel Load", icon: Fuel },
    { id: "weather", label: "Weather", icon: CloudRain },
    { id: "braking", label: "Braking", icon: Disc },
    { id: "mechanical", label: "Mechanical Issues", icon: Wrench },
    { id: "track_evolution", label: "Track Evolution", icon: TrendingUp }
  ];

  const toggleChannel = (id: string) => {
    setActiveChannels((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div id="confounders" className="confounders-container">
      {/* Header */}
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">06</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">SIGNAL FILTERING</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">CONFOUNDER DETECTION</h2>
          <span className="section-subtitle">Is it really the tyres?</span>
        </div>
      </div>

      <p className="confounder-intro">
        We analyse 9 non-tyre channels to filter out false tyre signals.
      </p>

      <div className="confounder-content-grid">
        {/* Left: 9 Channels Matrix */}
        <div className="channels-grid">
          {confounders.map((item) => {
            const Icon = item.icon;
            const isEnabled = activeChannels[item.id];
            return (
              <button
                key={item.id}
                className={`channel-chip ${isEnabled ? "active-chip" : "inactive-chip"}`}
                onClick={() => toggleChannel(item.id)}
                title="Click to toggle filter channel"
              >
                <span className={`chip-led ${isEnabled ? "led-active" : "led-off"}`} />
                <Icon size={13} className="chip-icon" />
                <span className="chip-text">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Performance Loss Explanation Donut */}
        <div className="donut-console">
          <div className="donut-header">
            <h4>Performance Loss Explanation</h4>
            <span className="donut-sub mono">S_conf = 0.62 · Q_tyre = 0.31</span>
          </div>

          <div className="donut-body">
            {/* SVG Donut Chart */}
            <div className="donut-svg-wrapper">
              <svg viewBox="0 0 120 120" className="donut-svg">
                {/* Background Ring */}
                <circle cx="60" cy="60" r="44" fill="none" stroke="#f1f5f9" strokeWidth="15" />

                {/* 62% Non-Tyre Explanation (Blue) */}
                <circle
                  cx="60"
                  cy="60"
                  r="44"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="15"
                  strokeDasharray="171.4 276.5"
                  strokeDashoffset="0"
                  transform="rotate(-90 60 60)"
                />

                {/* 31% Tyre Evidence (Red) */}
                <circle
                  cx="60"
                  cy="60"
                  r="44"
                  fill="none"
                  stroke="#e10600"
                  strokeWidth="15"
                  strokeDasharray="85.7 276.5"
                  strokeDashoffset="-171.4"
                  transform="rotate(-90 60 60)"
                />

                {/* 7% Data Quality (Slate/Grey) */}
                <circle
                  cx="60"
                  cy="60"
                  r="44"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="15"
                  strokeDasharray="19.4 276.5"
                  strokeDashoffset="-257.1"
                  transform="rotate(-90 60 60)"
                />

                {/* Donut Center text */}
                <text x="60" y="56" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="900" className="mono">
                  31%
                </text>
                <text x="60" y="70" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="700">
                  Tyre Evidence
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="donut-legend">
              <div className="legend-row">
                <span className="dot bg-red" />
                <span className="leg-label">Tyre Evidence</span>
                <span className="leg-val mono">31%</span>
              </div>
              <div className="legend-row">
                <span className="dot bg-blue" />
                <span className="leg-label">Non-Tyre</span>
                <span className="leg-val mono">62%</span>
              </div>
              <div className="legend-row">
                <span className="dot bg-slate" />
                <span className="leg-label">Data Quality</span>
                <span className="leg-val mono">7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .confounders-container {
          padding: 24px 16px 24px 0;
          width: 100%;
          border-right: 1px solid var(--border-subtle);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
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
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .confounder-intro {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }

        .confounder-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 14px;
          align-items: center;
        }

        .channels-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
        }

        .channel-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 600;
          transition: all 0.15s ease;
          border: 1px solid var(--border-subtle);
          background: #ffffff;
          color: var(--text-secondary);
          text-align: left;
        }

        .channel-chip:hover {
          background: #f8fafc;
          border-color: var(--border-medium);
        }

        .channel-chip.active-chip {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: var(--text-main);
        }

        .channel-chip.inactive-chip {
          opacity: 0.45;
          text-decoration: line-through;
          background: #f8fafc;
        }

        .chip-led {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .led-active {
          background: #10b981;
          box-shadow: 0 0 4px #10b981;
        }

        .led-off {
          background: #94a3b8;
        }

        .chip-icon {
          color: #64748b;
          flex-shrink: 0;
        }

        /* Sleek Donut Console */
        .donut-console {
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 10px 12px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .donut-header {
          margin-bottom: 8px;
        }

        .donut-header h4 {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .donut-sub {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .donut-body {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .donut-svg-wrapper {
          width: 90px;
          height: 90px;
          flex-shrink: 0;
        }

        .donut-svg {
          width: 100%;
          height: 100%;
        }

        .donut-legend {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .legend-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .bg-red { background: #e10600; }
        .bg-blue { background: #38bdf8; }
        .bg-slate { background: #cbd5e1; }

        .leg-label {
          color: var(--text-secondary);
          font-weight: 600;
          flex: 1;
        }

        .leg-val {
          color: var(--text-main);
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .confounder-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
