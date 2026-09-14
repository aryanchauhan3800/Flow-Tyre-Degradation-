"use client";

import React, { useState } from "react";
import { tdiStintProgression } from "@/data/telemetryData";

export const Step07TDI: React.FC = () => {
  const [hoverLap, setHoverLap] = useState<number | null>(4); // default lap 20

  const svgWidth = 240;
  const svgHeight = 110;
  const padX = 26;
  const padY = 12;

  const maxLap = 50;
  const maxTDI = 100;

  const getX = (lap: number) => padX + (lap / maxLap) * (svgWidth - padX - 10);
  const getY = (tdi: number) => svgHeight - padY - (tdi / maxTDI) * (svgHeight - padY * 2);

  const pathD = tdiStintProgression.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${getX(p.lap)} ${getY(p.tdi)}` : `${acc} L ${getX(p.lap)} ${getY(p.tdi)}`;
  }, "");

  const activePoint = hoverLap !== null ? tdiStintProgression[hoverLap] : tdiStintProgression[4];

  return (
    <div id="tdi" className="tdi-container">
      {/* Header */}
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">07</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">SEVERITY INDEX</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">TYRE DEGRADATION INDEX</h2>
          <span className="section-subtitle">A clean, interpretable tyre wear metric</span>
        </div>
      </div>

      {/* Unified Telemetry Console */}
      <div className="tdi-console">
        {/* Left: Current TDI Readout */}
        <div className="tdi-readout-col">
          <span className="tdi-card-label">CURRENT TDI</span>
          <div className="tdi-big-number mono">
            {activePoint.tdi.toFixed(1)}
          </div>
          <div className={`tdi-health-badge ${activePoint.tdi < 15 ? "healthy" : activePoint.tdi < 35 ? "early" : activePoint.tdi < 55 ? "moderate" : activePoint.tdi < 75 ? "high" : "critical"}`}>
            {activePoint.tdi < 15 ? "HEALTHY" : activePoint.tdi < 35 ? "EARLY WEAR" : activePoint.tdi < 55 ? "MODERATE" : activePoint.tdi < 75 ? "HIGH WEAR" : "CRITICAL"}
          </div>
          <div className="tdi-session-stat mono">
            <span>μ: 5.69</span>
            <span>·</span>
            <span>max: 13.62</span>
          </div>
        </div>

        <div className="console-divider" />

        {/* Center: TDI Over Stint Graph */}
        <div className="tdi-graph-col">
          <div className="stint-graph-header">
            <h4>TDI Over Stint (Stint 2 Test Laps)</h4>
            <span className="graph-sub mono">Lap {activePoint.lap} · TDI {activePoint.tdi.toFixed(1)}</span>
          </div>

          <div className="stint-svg-wrapper">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="stint-svg">
              {/* Y Grid lines */}
              <line x1={padX} y1={getY(100)} x2={svgWidth - 10} y2={getY(100)} stroke="#f1f5f9" strokeWidth="1" />
              <line x1={padX} y1={getY(50)} x2={svgWidth - 10} y2={getY(50)} stroke="#f1f5f9" strokeWidth="1" />
              <line x1={padX} y1={getY(0)} x2={svgWidth - 10} y2={getY(0)} stroke="#e2e8f0" strokeWidth="1" />

              {/* Y Axis labels */}
              <text x={padX - 4} y={getY(100) + 3} fill="#94a3b8" fontSize="8" textAnchor="end" className="mono">100</text>
              <text x={padX - 4} y={getY(50) + 3} fill="#94a3b8" fontSize="8" textAnchor="end" className="mono">50</text>
              <text x={padX - 4} y={getY(0) + 3} fill="#94a3b8" fontSize="8" textAnchor="end" className="mono">0</text>

              {/* X Axis labels */}
              {[0, 10, 20, 30, 40, 50].map((l) => (
                <text key={l} x={getX(l)} y={svgHeight - 1} fill="#94a3b8" fontSize="8" textAnchor="middle" className="mono">
                  {l}
                </text>
              ))}

              {/* X Axis title */}
              <text x={svgWidth / 2 + padX / 2} y={svgHeight - 1} fill="#64748b" fontSize="8" textAnchor="middle">
                Lap Number
              </text>

              {/* Curve */}
              <path
                d={pathD}
                fill="none"
                stroke="var(--primary-red)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Active point marker */}
              {activePoint && (
                <g>
                  <circle
                    cx={getX(activePoint.lap)}
                    cy={getY(activePoint.tdi)}
                    r="4"
                    fill="var(--primary-red)"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={getX(activePoint.lap)}
                    y1={getY(activePoint.tdi)}
                    x2={getX(activePoint.lap)}
                    y2={svgHeight - padY}
                    stroke="var(--primary-red)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                </g>
              )}

              {/* Click/Hover target columns */}
              {tdiStintProgression.map((p, i) => (
                <rect
                  key={i}
                  x={getX(p.lap) - 10}
                  y={0}
                  width={20}
                  height={svgHeight}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoverLap(i)}
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="console-divider" />

        {/* Right: TDI Scale */}
        <div className="tdi-scale-col">
          <span className="scale-title">SEVERITY TIERS</span>
          <div className="scale-content">
            <div className="scale-gradient-bar" />
            <div className="scale-tiers">
              <div className="scale-tier">
                <span className="scale-range mono">&lt;15</span>
                <span className="scale-label text-healthy">Healthy</span>
              </div>
              <div className="scale-tier">
                <span className="scale-range mono">15-35</span>
                <span className="scale-label text-early">Early</span>
              </div>
              <div className="scale-tier">
                <span className="scale-range mono">35-55</span>
                <span className="scale-label text-mod">Moderate</span>
              </div>
              <div className="scale-tier">
                <span className="scale-range mono">55-75</span>
                <span className="scale-label text-high">High</span>
              </div>
              <div className="scale-tier">
                <span className="scale-range mono">75+</span>
                <span className="scale-label text-critical">Critical</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tdi-footer-note">
        <span>TDI is an inferred degradation severity index [0–100], not physical tread depth.</span>
        <span>·</span>
        <span>REAL_REPLAY: 4-wheel corner TDI strictly UNAVAILABLE (FastF1 sensor policy).</span>
      </div>

      <style jsx>{`
        .tdi-container {
          padding: 24px 0 24px 16px;
          width: 100%;
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

        /* Unified Telemetry Console */
        .tdi-console {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
          gap: 12px;
        }

        .console-divider {
          width: 1px;
          height: 100px;
          background: var(--border-subtle);
          flex-shrink: 0;
        }

        /* Readout Col */
        .tdi-readout-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 110px;
          flex-shrink: 0;
        }

        .tdi-card-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .tdi-big-number {
          font-size: 1.85rem;
          font-weight: 900;
          color: var(--text-main);
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .tdi-health-badge {
          font-size: 0.62rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          letter-spacing: 0.04em;
          color: #ffffff;
        }

        .tdi-health-badge.healthy { background: #10b981; }
        .tdi-health-badge.early { background: #0284c7; }
        .tdi-health-badge.moderate { background: #f59e0b; }
        .tdi-health-badge.high { background: #f97316; }
        .tdi-health-badge.critical { background: #ef4444; }

        .tdi-session-stat {
          margin-top: 5px;
          font-size: 0.62rem;
          color: var(--text-muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Graph Col */
        .tdi-graph-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .stint-graph-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .stint-graph-header h4 {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .graph-sub {
          font-size: 0.65rem;
          color: var(--primary-red);
          font-weight: 700;
        }

        .stint-svg-wrapper {
          width: 100%;
        }

        .stint-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Scale Col */
        .tdi-scale-col {
          display: flex;
          flex-direction: column;
          min-width: 130px;
          flex-shrink: 0;
        }

        .scale-title {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }

        .scale-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .scale-gradient-bar {
          width: 5px;
          height: 68px;
          border-radius: 3px;
          background: linear-gradient(180deg, #10b981 0%, #0284c7 25%, #f59e0b 50%, #f97316 75%, #ef4444 100%);
          flex-shrink: 0;
        }

        .scale-tiers {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }

        .scale-tier {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.65rem;
          gap: 6px;
        }

        .scale-range {
          color: var(--text-muted);
          font-weight: 600;
        }

        .scale-label {
          font-weight: 700;
        }

        .text-critical { color: #ef4444; }
        .text-high { color: #f97316; }
        .text-mod { color: #f59e0b; }
        .text-early { color: #0284c7; }
        .text-healthy { color: #10b981; }

        .tdi-footer-note {
          margin-top: 10px;
          font-size: 0.65rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
        }

        @media (max-width: 768px) {
          .tdi-console {
            flex-direction: column;
            align-items: stretch;
          }
          .console-divider {
            width: 100%;
            height: 1px;
          }
        }
      `}</style>
    </div>
  );
};
