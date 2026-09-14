"use client";

import React from "react";
import { Disc, BarChart3, SlidersHorizontal, FileText } from "lucide-react";

export const Step08MLModel: React.FC = () => {
  const features = [
    { icon: Disc, label: "28 Physics-Informed Features" },
    { icon: BarChart3, label: "Residual Statistics (Slope, Std)" },
    { icon: SlidersHorizontal, label: "Confounder Scores (S_conf, Q_tyre)" },
    { icon: FileText, label: "Stint Context & Compound Prior" }
  ];

  return (
    <div id="ml-model" className="ml-model-container">
      {/* Header */}
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">08</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">TEMPORAL AI</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">ML MODEL</h2>
          <span className="section-subtitle">Learning from patterns</span>
        </div>
      </div>

      <p className="ml-intro">
        Random Forest Regressor trained on 28 physics-informed temporal features,
        evaluated on an independent 1,967-sample test stint.
      </p>

      <div className="ml-content-grid">
        {/* Features Column */}
        <div className="features-col">
          <span className="col-title">Feature Engineering</span>
          <div className="features-list">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="feature-item">
                  <Icon size={13} className="feature-icon" />
                  <span className="feature-label">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Model Performance Card */}
        <div className="perf-col">
          <span className="col-title">Model Performance</span>
          <div className="perf-metrics-card">
            <div className="perf-sub mono">STINT 2 TEST · 1,967 SAMPLES</div>
            <div className="perf-r2 mono">
              R² = 0.9437
            </div>
            <div className="perf-mae mono">
              MAE = 1.019 · RMSE = 1.438
            </div>
            <div className="perf-rho mono">
              Age Monotonicity: ρ = 0.8067
            </div>
          </div>
          <div className="perf-note">
            Validated against physics-derived pseudo-label, not physical tread depth.
          </div>
        </div>
      </div>

      <style jsx>{`
        .ml-model-container {
          padding: 24px 14px 24px 0;
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

        .ml-intro {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
          line-height: 1.45;
        }

        .ml-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 14px;
        }

        .col-title {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 6px;
          display: block;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 5px 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .feature-icon {
          color: #64748b;
          flex-shrink: 0;
        }

        .feature-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .perf-col {
          display: flex;
          flex-direction: column;
        }

        .perf-metrics-card {
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-left: 3px solid var(--primary-red);
          border-radius: var(--radius-sm);
          padding: 10px 12px;
          text-align: center;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .perf-sub {
          font-size: 0.62rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }

        .perf-r2 {
          font-size: 1.15rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: 0.02em;
        }

        .perf-mae {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .perf-rho {
          font-size: 0.68rem;
          font-weight: 700;
          color: #0284c7;
          margin-top: 4px;
        }

        .perf-note {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 6px;
          line-height: 1.35;
        }

        @media (max-width: 640px) {
          .ml-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
