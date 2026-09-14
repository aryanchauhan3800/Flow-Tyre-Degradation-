"use client";

import React, { useState } from "react";
import { residualTimeSeries } from "@/data/telemetryData";

export const Step05Residuals: React.FC = () => {
  const [activeTimeIdx, setActiveTimeIdx] = useState<number | null>(0);

  const activePoint = activeTimeIdx !== null ? residualTimeSeries[activeTimeIdx] : residualTimeSeries[0];

  // SVG dimensions
  const svgWidth = 360;
  const svgHeight = 110;
  const padX = 26;
  const padY = 12;

  // Y-range: -12 to +12
  const minY = -12;
  const maxY = 12;
  const maxT = 50;

  const getY = (val: number) => {
    return svgHeight - padY - ((val - minY) / (maxY - minY)) * (svgHeight - padY * 2);
  };

  const getX = (t: number) => {
    return padX + (t / maxT) * (svgWidth - padX - 10);
  };

  // Build paths
  const actualPath = residualTimeSeries.reduce((acc, p, i) => {
    return i === 0 ? `M ${getX(p.t)} ${getY(p.actual)}` : `${acc} L ${getX(p.t)} ${getY(p.actual)}`;
  }, "");

  const expectedPath = residualTimeSeries.reduce((acc, p, i) => {
    return i === 0 ? `M ${getX(p.t)} ${getY(p.expected)}` : `${acc} L ${getX(p.t)} ${getY(p.expected)}`;
  }, "");

  const residualPath = residualTimeSeries.reduce((acc, p, i) => {
    return i === 0 ? `M ${getX(p.t)} ${getY(p.residual)}` : `${acc} L ${getX(p.t)} ${getY(p.residual)}`;
  }, "");

  const zeroY = getY(0);

  return (
    <div id="residuals" className="residuals-container">
      {/* Header */}
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">05</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">ANOMALY DETECTION</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">RESIDUAL ANALYSIS</h2>
          <span className="section-subtitle">Actual vs expected performance</span>
        </div>
      </div>

      <p className="residual-intro">
        <span className="bold-formula">Residual = what actually happened</span> — what physics expected.
      </p>

      {/* Sleek Open Telemetry Readout Strip */}
      <div className="telemetry-readout-strip">
        <div className="telemetry-col">
          <span className="telemetry-label">Actual Accel (dv/dt)</span>
          <span className="telemetry-val text-blue mono">{activePoint.actual.toFixed(1)} <small>m/s²</small></span>
        </div>
        <div className="telemetry-divider" />
        <div className="telemetry-col">
          <span className="telemetry-label">Expected Accel (F_net/m)</span>
          <span className="telemetry-val text-dark mono">{activePoint.expected.toFixed(1)} <small>m/s²</small></span>
        </div>
        <div className="telemetry-divider" />
        <div className="telemetry-col highlight-col">
          <span className="telemetry-label">Instant Residual (r_ax)</span>
          <span className="telemetry-val text-red mono">{activePoint.residual > 0 ? `+${activePoint.residual.toFixed(1)}` : `${activePoint.residual.toFixed(1)}`} <small>m/s²</small></span>
        </div>
      </div>

      {/* Real Project Empirical Validation Summary */}
      <div className="residual-meta-summary mono">
        <span>Mean Residual: -2.78 m/s²</span>
        <span>·</span>
        <span>Range: [-36.0, +18.5] m/s²</span>
        <span>·</span>
        <span>Spike Guard: &gt;60 m/s² Filtered</span>
      </div>

      {/* Chart Section */}
      <div className="chart-header-row">
        <span className="chart-title">Acceleration & Residuals</span>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-line red-line" />
            <span>Actual</span>
          </div>
          <div className="legend-item">
            <span className="legend-line dashed-line" />
            <span>Expected</span>
          </div>
          <div className="legend-item">
            <span className="legend-line cyan-line" />
            <span>Residual</span>
          </div>
        </div>
      </div>

      <div className="residual-svg-box">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="res-svg">
          {/* Zero baseline */}
          <line x1={padX} y1={zeroY} x2={svgWidth - 10} y2={zeroY} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />

          {/* Y ticks (-12, -6, 0, 6, 12) */}
          {[-12, -6, 0, 6, 12].map((yVal) => (
            <g key={yVal}>
              <text x={padX - 4} y={getY(yVal) + 3} fill="#94a3b8" fontSize="8" textAnchor="end" className="mono">
                {yVal}
              </text>
            </g>
          ))}

          {/* X ticks (0, 10, 20, 30, 40, 50) */}
          {[0, 10, 20, 30, 40, 50].map((t) => (
            <g key={t}>
              <text x={getX(t)} y={svgHeight - 1} fill="#94a3b8" fontSize="8" textAnchor="middle" className="mono">
                {t}
              </text>
            </g>
          ))}
          <text x={svgWidth - 6} y={svgHeight - 1} fill="#64748b" fontSize="8" textAnchor="end">
            Time (s)
          </text>

          {/* Y-axis label */}
          <text
            x={-svgHeight / 2}
            y="7"
            fill="#64748b"
            fontSize="7"
            transform="rotate(-90)"
            textAnchor="middle"
          >
            Acceleration (m/s²)
          </text>

          {/* Curves */}
          {/* Expected curve (Dashed black/navy) */}
          <path
            d={expectedPath}
            fill="none"
            stroke="#1e293b"
            strokeWidth="1.6"
            strokeDasharray="3 3"
          />

          {/* Actual curve (Red) */}
          <path
            d={actualPath}
            fill="none"
            stroke="#e10600"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Residual curve (Cyan) */}
          <path
            d={residualPath}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Active Hover Point */}
          {activeTimeIdx !== null && (
            <g>
              <line
                x1={getX(activePoint.t)}
                y1={padY}
                x2={getX(activePoint.t)}
                y2={svgHeight - padY}
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <circle cx={getX(activePoint.t)} cy={getY(activePoint.actual)} r="3" fill="#e10600" />
              <circle cx={getX(activePoint.t)} cy={getY(activePoint.expected)} r="3" fill="#1e293b" />
              <circle cx={getX(activePoint.t)} cy={getY(activePoint.residual)} r="3" fill="#0ea5e9" />
            </g>
          )}

          {/* Interactive Hover Targets */}
          {residualTimeSeries.map((p, idx) => (
            <rect
              key={idx}
              x={getX(p.t) - 15}
              y={0}
              width={30}
              height={svgHeight}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setActiveTimeIdx(idx)}
            />
          ))}
        </svg>
      </div>

      <style jsx>{`
        .residuals-container {
          padding: 24px 0 24px 16px;
          width: 100%;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }

        .badge-pill {
          background: var(--primary-red);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.85rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(225, 6, 0, 0.25);
          flex-shrink: 0;
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

        .residual-intro {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .bold-formula {
          font-weight: 700;
          color: var(--text-main);
        }

        /* Sleek Telemetry Readout Strip */
        .telemetry-readout-strip {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          margin-bottom: 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .telemetry-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .telemetry-col.highlight-col {
          background: #fff5f5;
          padding: 4px 8px;
          border-radius: 4px;
          border-left: 2px solid var(--primary-red);
        }

        .telemetry-divider {
          width: 1px;
          height: 28px;
          background: var(--border-subtle);
          margin: 0 12px;
          flex-shrink: 0;
        }

        .telemetry-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .telemetry-val {
          font-size: 1.05rem;
          font-weight: 800;
        }

        .text-blue { color: #2563eb; }
        .text-dark { color: #0f172a; }
        .text-red { color: #e10600; }

        .chart-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .chart-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .chart-legend {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .legend-line {
          width: 12px;
          height: 3px;
          border-radius: 2px;
        }

        .red-line { background: #e10600; }
        .dashed-line {
          border-top: 2px dashed #1e293b;
          height: 0;
        }
        .cyan-line { background: #0ea5e9; }

        .residual-svg-box {
          width: 100%;
        }

        .res-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 640px) {
          .metric-cards-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
