"use client";

import React, { useState } from "react";

export const Step10DecisionTwin: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<"PIT" | "STAY" | "PUSH" | "MANAGE">("MANAGE");

  const strategies = [
    {
      id: "PIT",
      action: "PIT",
      sub: "Change tyre",
      colorClass: "card-pit",
      lapDelta: "-21.4s (Pit stop loss) -> +1.8s/lap faster",
      tyreEnd: "98% (Fresh Softs)",
      risk: "Low (P2 guaranteed, P1 attack)",
      recommended: false
    },
    {
      id: "STAY",
      action: "STAY",
      sub: "Continue",
      colorClass: "card-stay",
      lapDelta: "+0.0s baseline pace",
      tyreEnd: "42% (Linear drop)",
      risk: "Medium (Vulnerable to undercut)",
      recommended: false
    },
    {
      id: "PUSH",
      action: "PUSH",
      sub: "Higher pace",
      colorClass: "card-push",
      lapDelta: "-0.45s/lap delta advantage",
      tyreEnd: "18% (Thermal cliff risk at lap 46)",
      risk: "High (Tyre blistering expected)",
      recommended: false
    },
    {
      id: "MANAGE",
      action: "MANAGE",
      sub: "Conservative",
      colorClass: "card-manage",
      lapDelta: "+0.22s/lap delta pace",
      tyreEnd: "TDI: 32.4 (Optimal stint endurance, Stint 2)",
      risk: "Optimal (Zero cliff, secure win)",
      recommended: true
    }
  ];

  const currentStrat = strategies.find((s) => s.id === selectedStrategy) || strategies[3];

  return (
    <div id="results" className="decision-container">
      {/* Header */}
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">10</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">STRATEGY SIMULATOR</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">DECISION TWIN</h2>
          <span className="section-subtitle">What should we do?</span>
        </div>
      </div>

      <p className="decision-intro">
        Simulate multiple strategy scenarios against degradation models.
      </p>

      {/* 4 Strategy Cards Grid */}
      <div className="strategy-grid">
        {strategies.map((strat) => {
          const isSelected = selectedStrategy === strat.id;
          return (
            <button
              key={strat.id}
              className={`strat-card ${strat.colorClass} ${isSelected ? "selected-strat" : ""}`}
              onClick={() => setSelectedStrategy(strat.id as any)}
            >
              <div className="strat-accent-bar" />
              <div className="strat-text-wrap">
                <span className="strat-action mono">{strat.action}</span>
                <span className="strat-sub">{strat.sub}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Scenario Simulation Feedback */}
      <div className="simulation-preview">
        <div className="preview-row">
          <span className="preview-label">Scenario Delta:</span>
          <span className="preview-val mono">{currentStrat.lapDelta}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Finish Life:</span>
          <span className="preview-val mono">{currentStrat.tyreEnd}</span>
        </div>
        <div className="preview-row">
          <span className="preview-label">Tactical Risk:</span>
          <span className="preview-val mono">{currentStrat.risk}</span>
        </div>
      </div>

      <div className="decision-footer">
        Evaluate race time, tyre life, risk and uncertainty to recommend optimal pit wall execution.
      </div>

      <style jsx>{`
        .decision-container {
          padding: 24px 0 24px 14px;
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

        .decision-intro {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .strategy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 10px;
        }

        .strat-card {
          position: relative;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
          background: #ffffff;
          border: 1px solid var(--border-medium);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
          overflow: hidden;
        }

        .strat-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: transparent;
        }

        .strat-text-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
        }

        .strat-action {
          font-size: 0.88rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          line-height: 1.1;
        }

        .strat-sub {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        /* PIT: Red */
        .card-pit .strat-accent-bar { background: #e10600; }
        .card-pit.selected-strat {
          border-color: #e10600;
          background: #fff5f5;
        }
        .card-pit.selected-strat .strat-action { color: #e10600; }

        /* STAY: Cyan/Blue */
        .card-stay .strat-accent-bar { background: #0284c7; }
        .card-stay.selected-strat {
          border-color: #0284c7;
          background: #f0f9ff;
        }
        .card-stay.selected-strat .strat-action { color: #0284c7; }

        /* PUSH: Orange */
        .card-push .strat-accent-bar { background: #ea580c; }
        .card-push.selected-strat {
          border-color: #ea580c;
          background: #fff7ed;
        }
        .card-push.selected-strat .strat-action { color: #ea580c; }

        /* MANAGE: Green */
        .card-manage .strat-accent-bar { background: #10b981; }
        .card-manage.selected-strat {
          border-color: #10b981;
          background: #ecfdf5;
        }
        .card-manage.selected-strat .strat-action { color: #10b981; }

        .simulation-preview {
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .preview-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.68rem;
        }

        .preview-label {
          color: var(--text-muted);
          font-weight: 600;
        }

        .preview-val {
          color: var(--text-main);
          font-weight: 700;
        }

        .decision-footer {
          font-size: 0.68rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        @media (max-width: 640px) {
          .strategy-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
