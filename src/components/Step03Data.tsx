"use client";

import React, { useState } from "react";
import { monzaTelemetry, sectors } from "@/data/telemetryData";
import { Flag } from "lucide-react";

export const Step03Data: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<
    "Speed" | "Throttle" | "Brake" | "RPM" | "Gear" | "DRS" | "Tyre Life"
  >("Speed");

  const [hoverIndex, setHoverIndex] = useState<number | null>(10); // default to 2340m

  const metaPills = [
    { label: "2023 Italian GP", sub: "Monza" },
    { label: "Driver", sub: "VER (#1 RB19)" },
    { label: "Session", sub: "Qualifying Replay" },
    { label: "Replay Frames", sub: "603 (20 Hz)" },
    { label: "ML Stint Data", sub: "4,582 Frames (3 Stints)" },
    { label: "Data Source", sub: "FastF1 (Official)" }
  ];

  const channels: Array<"Speed" | "Throttle" | "Brake" | "RPM" | "Gear" | "DRS" | "Tyre Life"> = [
    "Speed",
    "Throttle",
    "Brake",
    "RPM",
    "Gear",
    "DRS",
    "Tyre Life"
  ];

  // SVG dimensions
  const svgWidth = 620;
  const svgHeight = 160;
  const paddingX = 40;
  const paddingY = 20;

  const maxDist = 5793;

  // Channel range scale
  const getChannelValue = (pt: typeof monzaTelemetry[0]) => {
    switch (activeChannel) {
      case "Speed": return pt.speed;
      case "Throttle": return pt.throttle;
      case "Brake": return pt.brake;
      case "RPM": return pt.rpm;
      case "Gear": return pt.gear;
      case "DRS": return pt.drs ? 100 : 0;
      case "Tyre Life": return pt.tyreWear;
    }
  };

  const getChannelUnit = () => {
    switch (activeChannel) {
      case "Speed": return "km/h";
      case "Throttle": return "%";
      case "Brake": return "%";
      case "RPM": return "RPM";
      case "Gear": return "Gear";
      case "DRS": return "Status";
      case "Tyre Life": return "% Grip";
    }
  };

  const maxVal = activeChannel === "Speed" ? 400 : activeChannel === "RPM" ? 13000 : activeChannel === "Gear" ? 8 : 100;
  const minVal = activeChannel === "RPM" ? 7500 : 0;

  // Build SVG path
  const points = monzaTelemetry.map((pt) => {
    const x = paddingX + (pt.distance / maxDist) * (svgWidth - paddingX - 10);
    const val = getChannelValue(pt);
    const y = svgHeight - paddingY - ((val - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
    return { x, y, pt };
  });

  const pathD = points.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, "");

  const activePoint = hoverIndex !== null ? points[hoverIndex] : points[10];

  return (
    <section id="data" className="data-section">
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">03</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">TELEMETRY INGESTION</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">THE DATA</h2>
          <span className="section-subtitle">Real F1 telemetry from FastF1</span>
        </div>
      </div>

      <div className="data-grid">
        {/* Left Column: Sleek Telemetry Metadata Console */}
        <div className="telemetry-meta-console">
          <div className="meta-cells-grid">
            {metaPills.map((pill, idx) => (
              <div key={idx} className="meta-cell">
                <span className="meta-cell-label">{pill.label}</span>
                <span className="meta-cell-val mono">{pill.sub}</span>
              </div>
            ))}
          </div>
          <div className="data-provenance-tag">
            <span className="prov-dot" />
            <span className="prov-text">FastF1 Channels: Speed, Throttle, Brake, Gear, RPM, DRS. Unmeasured channels strictly tagged UNAVAILABLE.</span>
          </div>
        </div>

        {/* Center: Interactive Telemetry Chart */}
        <div className="chart-box">
          {/* Channel Tabs */}
          <div className="tabs-row">
            {channels.map((ch) => (
              <button
                key={ch}
                className={`tab-btn ${activeChannel === ch ? "active-tab" : ""}`}
                onClick={() => setActiveChannel(ch)}
              >
                {ch}
              </button>
            ))}
          </div>

          {/* Chart SVG Canvas */}
          <div className="svg-wrapper">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="telemetry-svg"
            >
              {/* Sector Background Grid & Labels */}
              <line x1={paddingX} y1={paddingY} x2={svgWidth - 10} y2={paddingY} stroke="#f1f5f9" strokeWidth="1" />
              <line x1={paddingX} y1={svgHeight / 2} x2={svgWidth - 10} y2={svgHeight / 2} stroke="#f1f5f9" strokeWidth="1" />
              <line x1={paddingX} y1={svgHeight - paddingY} x2={svgWidth - 10} y2={svgHeight - paddingY} stroke="#e2e8f0" strokeWidth="1" />

              {/* Sector 1 & Sector 2 divider lines */}
              {/* S1: ~1750m */}
              <line
                x1={paddingX + (1750 / maxDist) * (svgWidth - paddingX - 10)}
                y1={10}
                x2={paddingX + (1750 / maxDist) * (svgWidth - paddingX - 10)}
                y2={svgHeight - paddingY}
                stroke="#e2e8f0"
                strokeDasharray="3 3"
              />
              <text
                x={paddingX + (1750 / 2 / maxDist) * (svgWidth - paddingX - 10)}
                y={18}
                fill="#94a3b8"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
              >
                S1
              </text>

              {/* S2: ~3700m */}
              <line
                x1={paddingX + (3700 / maxDist) * (svgWidth - paddingX - 10)}
                y1={10}
                x2={paddingX + (3700 / maxDist) * (svgWidth - paddingX - 10)}
                y2={svgHeight - paddingY}
                stroke="#e2e8f0"
                strokeDasharray="3 3"
              />
              <text
                x={paddingX + (2725 / maxDist) * (svgWidth - paddingX - 10)}
                y={18}
                fill="#94a3b8"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
              >
                S2
              </text>

              {/* S3 */}
              <text
                x={paddingX + (4750 / maxDist) * (svgWidth - paddingX - 10)}
                y={18}
                fill="#94a3b8"
                fontSize="10"
                fontWeight="700"
                textAnchor="middle"
              >
                S3
              </text>

              {/* Y Axis scale markers */}
              <text x="30" y={paddingY + 4} fill="#94a3b8" fontSize="9" textAnchor="end" className="mono">
                {maxVal}
              </text>
              <text x="30" y={svgHeight / 2 + 3} fill="#94a3b8" fontSize="9" textAnchor="end" className="mono">
                {Math.round((maxVal + minVal) / 2)}
              </text>
              <text x="30" y={svgHeight - paddingY} fill="#94a3b8" fontSize="9" textAnchor="end" className="mono">
                {minVal}
              </text>

              {/* Y-axis Title */}
              <text
                x={-svgHeight / 2}
                y="10"
                fill="#64748b"
                fontSize="8"
                fontWeight="600"
                transform="rotate(-90)"
                textAnchor="middle"
              >
                {activeChannel} ({getChannelUnit()})
              </text>

              {/* X Axis distance ticks */}
              {[0, 1000, 2000, 3000, 4000, 5000].map((dist) => {
                const tickX = paddingX + (dist / maxDist) * (svgWidth - paddingX - 10);
                return (
                  <g key={dist}>
                    <line x1={tickX} y1={svgHeight - paddingY} x2={tickX} y2={svgHeight - paddingY + 4} stroke="#cbd5e1" />
                    <text x={tickX} y={svgHeight - 6} fill="#94a3b8" fontSize="8" textAnchor="middle" className="mono">
                      {dist.toLocaleString()}
                    </text>
                  </g>
                );
              })}
              <text x={svgWidth - 25} y={svgHeight - 6} fill="#64748b" fontSize="8" fontWeight="600">
                Distance (m)
              </text>

              {/* Main Line Trace */}
              <path
                d={pathD}
                fill="none"
                stroke="var(--primary-red)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Active Scrubber Indicator & Callout */}
              {activePoint && (
                <g>
                  {/* Vertical hairline */}
                  <line
                    x1={activePoint.x}
                    y1={paddingY}
                    x2={activePoint.x}
                    y2={svgHeight - paddingY}
                    stroke="var(--primary-red)"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />

                  {/* Active dot */}
                  <circle
                    cx={activePoint.x}
                    cy={activePoint.y}
                    r="4"
                    fill="var(--primary-red)"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />

                  {/* Annotation Badge matching image: "298 km/h @ 2,340 m" */}
                  <rect
                    x={Math.max(paddingX, Math.min(svgWidth - 110, activePoint.x - 50))}
                    y={Math.max(22, activePoint.y - 32)}
                    width="100"
                    height="20"
                    rx="3"
                    fill="#ffffff"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
                  />
                  <text
                    x={Math.max(paddingX + 50, Math.min(svgWidth - 60, activePoint.x))}
                    y={Math.max(35, activePoint.y - 19)}
                    fill="#0f172a"
                    fontSize="9"
                    fontWeight="700"
                    textAnchor="middle"
                    className="mono"
                  >
                    {getChannelValue(activePoint.pt)} {getChannelUnit()} @ {activePoint.pt.distance} m
                  </text>
                </g>
              )}

              {/* Invisible interactive hover bars across points */}
              {points.map((p, i) => (
                <rect
                  key={i}
                  x={p.x - 12}
                  y={0}
                  width={24}
                  height={svgHeight}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoverIndex(i)}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Right Column: Track Map Card */}
        <div className="track-map-card">
          <div className="track-map-header">
            <div className="track-info">
              <span className="track-title">Track: Monza</span>
              <span className="track-sub">Length: 5.793 km</span>
              <span className="track-sub">Turns: 11</span>
            </div>
          </div>

          <div className="track-map-body">
            {/* Monza Track Layout */}
            <div className="track-svg-box">
              <svg viewBox="0 0 160 170" className="track-svg">
                {/* Sector 1 (Curva Grande) */}
                <path
                  d="M 30 140 L 40 40 L 90 20 L 110 35"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Sector 2 (Lesmo & Serraglio) */}
                <path
                  d="M 110 35 L 140 40 L 130 90 L 70 140"
                  fill="none"
                  stroke="#e10600"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Sector 3 (Ascari & Parabolica) */}
                <path
                  d="M 70 140 L 50 160 L 25 155 L 30 140"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Start/Finish Line */}
                <circle cx="30" cy="140" r="3.5" fill="#ffffff" stroke="#e10600" strokeWidth="2" />
              </svg>
            </div>

            {/* Sector Times List */}
            <div className="sector-times-list">
              {sectors.map((sec) => (
                <div key={sec.id} className="sector-time-row mono">
                  <span className="sec-tag">{sec.id}</span>
                  <span className="sec-val">{sec.time}</span>
                </div>
              ))}
              <div className="finish-flag-row">
                <Flag size={14} className="finish-flag-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .data-section {
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

        .data-grid {
          display: grid;
          grid-template-columns: 200px 1fr 210px;
          gap: 16px;
          align-items: stretch;
        }

        /* Sleek Telemetry Meta Console */
        .telemetry-meta-console {
          background: #fafafa;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .meta-cells-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 8px;
        }

        .meta-cell {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .meta-cell-label {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .meta-cell-val {
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.25;
        }

        .data-provenance-tag {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }

        .prov-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0284c7;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .prov-text {
          font-size: 0.62rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        /* Chart Box */
        .chart-box {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
        }

        .tabs-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .tab-btn {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          border: 1px solid transparent;
          background: #f8fafc;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .tab-btn:hover {
          background: #f1f5f9;
        }

        .tab-btn.active-tab {
          background: #ffffff;
          color: var(--primary-red);
          border-color: var(--primary-red-border);
          font-weight: 700;
          box-shadow: 0 1px 3px rgba(225, 6, 0, 0.15);
        }

        .svg-wrapper {
          width: 100%;
          flex: 1;
        }

        .telemetry-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Track Map Card */
        .track-map-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 12px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .track-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .track-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .track-sub {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .track-map-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 6px;
        }

        .track-svg-box {
          width: 110px;
          height: 120px;
        }

        .track-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .sector-times-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
        }

        .sector-time-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
        }

        .sec-tag {
          font-weight: 800;
          color: var(--text-main);
        }

        .sec-val {
          color: var(--text-secondary);
          font-weight: 600;
        }

        .finish-flag-row {
          display: flex;
          justify-content: flex-end;
          padding-top: 4px;
        }

        .finish-flag-icon {
          color: #0f172a;
        }

        @media (max-width: 1200px) {
          .data-grid {
            grid-template-columns: 1fr;
          }
          .meta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
