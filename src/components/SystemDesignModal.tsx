"use client";

import React, { useEffect } from "react";
import { Workflow, ExternalLink, X, Download } from "lucide-react";

interface SystemDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemDesignModal: React.FC<SystemDesignModalProps> = ({
  isOpen,
  onClose,
}) => {
  const imageSrc = "/images/system_design_diagram.png";

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="design-modal-backdrop" onClick={onClose}>
      <div
        className="design-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="design-modal-header">
          <div className="modal-title-wrap">
            <div className="title-badge">
              <Workflow size={18} className="text-red" />
            </div>
            <div>
              <div className="title-row">
                <h2 className="title-text">TYRETRACE SYSTEM DESIGN</h2>
                <span className="live-pill">END-TO-END SPECIFICATION</span>
              </div>
              <p className="subtitle-text">
                11-Stage Pipeline: Track Data → Digital Twin → Residual → Confounders → TDI → ML Fusion → Decision Twin → Visualization
              </p>
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn outline-btn"
              title="Open full resolution diagram in new tab"
            >
              <ExternalLink size={14} />
              <span>Full Resolution</span>
            </a>

            <a
              href={imageSrc}
              download="TYRETRACE_System_Design.png"
              className="action-btn outline-btn"
              title="Download image"
            >
              <Download size={14} />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              className="close-btn"
              aria-label="Close system design modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Diagram Viewer */}
        <div className="design-modal-body">
          <div className="diagram-wrapper">
            <img
              src={imageSrc}
              alt="TYRETRACE End-to-End System Design: From Track Data to Winning Decisions"
              className="diagram-image"
            />
          </div>
        </div>

        {/* Footer info pill strip */}
        <div className="design-modal-footer">
          <span className="stage-step">1. DATA</span>
          <span className="arrow">→</span>
          <span className="stage-step">2. DIGITAL TWIN</span>
          <span className="arrow">→</span>
          <span className="stage-step">3. RESIDUAL</span>
          <span className="arrow">→</span>
          <span className="stage-step">4. CONFOUNDER</span>
          <span className="arrow">→</span>
          <span className="stage-step">5. TDI</span>
          <span className="arrow">→</span>
          <span className="stage-step">6. ML + FUSION</span>
          <span className="arrow">→</span>
          <span className="stage-step">7. DECISION TWIN</span>
          <span className="arrow">→</span>
          <span className="stage-step">8. SCENARIOS</span>
          <span className="arrow">→</span>
          <span className="stage-step">9. SCORING</span>
          <span className="arrow">→</span>
          <span className="stage-step">10. DECISION</span>
          <span className="arrow">→</span>
          <span className="stage-step highlight">11. VISUALIZATION</span>
        </div>
      </div>

      <style jsx>{`
        .design-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(4, 7, 15, 0.88);
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .design-modal-container {
          background: #080d1a;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(239, 68, 68, 0.15);
          width: 96vw;
          max-width: 1720px;
          height: 94vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: scaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scaleUp {
          from {
            transform: scale(0.96);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .design-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 22px;
          background: #0d1527;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 16px;
          flex-shrink: 0;
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .title-badge {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-red {
          color: #ef4444;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .title-text {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #f8fafc;
          margin: 0;
        }

        .live-pill {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
          text-transform: uppercase;
        }

        .subtitle-text {
          font-size: 0.76rem;
          color: #94a3b8;
          margin: 2px 0 0 0;
          font-family: var(--font-mono, monospace);
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.18s ease;
          cursor: pointer;
        }

        .outline-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
        }

        .outline-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .close-btn {
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          padding: 6px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .close-btn:hover {
          color: #ffffff;
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
        }

        .design-modal-body {
          flex: 1;
          overflow: auto;
          background: #050811;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .diagram-wrapper {
          width: 100%;
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .diagram-image {
          max-width: 100%;
          max-height: calc(94vh - 130px);
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #ffffff;
        }

        .design-modal-footer {
          padding: 10px 20px;
          background: #090e1d;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          font-family: var(--font-mono, monospace);
          font-size: 0.68rem;
          color: #64748b;
          flex-shrink: 0;
        }

        .stage-step {
          font-weight: 700;
          color: #94a3b8;
        }

        .stage-step.highlight {
          color: #38bdf8;
        }

        .arrow {
          color: #475569;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .subtitle-text,
          .design-modal-footer {
            display: none;
          }
          .title-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
};
