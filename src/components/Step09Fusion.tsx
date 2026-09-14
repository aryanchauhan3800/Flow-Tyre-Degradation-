"use client";

import React, { useState } from "react";
import { Check, Plus } from "lucide-react";

export const Step09Fusion: React.FC = () => {
  const [physicsWeight, setPhysicsWeight] = useState<number>(60);

  const aiWeight = 100 - physicsWeight;

  return (
    <div id="fusion" className="fusion-container">
      {/* Header */}
      <div className="section-header">
        <div className="sleek-index-tag mono">
          <span className="idx-num">09</span>
          <span className="idx-sep">/</span>
          <span className="idx-label">HYBRID FUSION</span>
        </div>
        <div className="header-titles">
          <h2 className="section-title">PHYSICS + AI</h2>
          <span className="section-subtitle">Combining best of both worlds</span>
        </div>
      </div>

      <div className="fusion-body">
        {/* Formula Diagram */}
        <div className="fusion-diagram">
          {/* Physics Component */}
          <div className="component-box">
            <span className="comp-title">Physics Twin</span>
            <span className="comp-weight mono">{physicsWeight}%</span>
          </div>

          <div className="plus-symbol">
            <Plus size={14} strokeWidth={2.5} />
          </div>

          {/* AI Component */}
          <div className="component-box">
            <span className="comp-title">ML Model</span>
            <span className="comp-weight mono">{aiWeight}%</span>
          </div>

          <div className="equal-divider">
            <span className="down-arrow">→</span>
          </div>

          {/* Combined Final Estimate */}
          <div className="estimate-box">
            <span className="comp-title">Fused Estimate (α = 0.60)</span>
            <div className="estimate-metrics">
              <span className="est-val mono">R² = 0.9910</span>
              <span className="est-val mono">MAE = 0.407</span>
              <span className="est-sub mono">ρ = 0.8063</span>
            </div>
          </div>
        </div>

        {/* Validation Badge */}
        <div className="validation-pill">
          <Check size={13} className="check-green" strokeWidth={3} />
          <span>Physics-anchored pseudo-label reference.</span>
        </div>
      </div>

      <style jsx>{`
        .fusion-container {
          padding: 24px 14px;
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

        .fusion-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .fusion-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          flex-wrap: wrap;
        }

        .component-box {
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          text-align: center;
          min-width: 78px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .comp-title {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          display: block;
          margin-bottom: 2px;
        }

        .comp-weight {
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--text-main);
        }

        .plus-symbol {
          color: #94a3b8;
          display: flex;
          align-items: center;
        }

        .equal-divider {
          color: #94a3b8;
          font-weight: 900;
          padding: 0 2px;
        }

        .down-arrow {
          font-size: 1.1rem;
          color: #94a3b8;
        }

        .estimate-box {
          background: #ffffff;
          border: 1px solid var(--border-medium);
          border-left: 3px solid var(--primary-red);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          text-align: center;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .estimate-metrics {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .est-val {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--primary-red);
        }

        .est-sub {
          font-size: 0.65rem;
          font-weight: 700;
          color: #64748b;
          margin-top: 1px;
        }

        .validation-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: var(--radius-full);
          padding: 4px 12px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #065f46;
        }

        :global(.check-green) {
          color: #10b981;
        }

        @media (max-width: 640px) {
          .fusion-diagram {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
