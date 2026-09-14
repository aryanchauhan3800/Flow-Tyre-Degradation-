"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SidebarNav } from "@/components/SidebarNav";
import { Step01Hero } from "@/components/Step01Hero";
import { Step02Problem } from "@/components/Step02Problem";
import { Step03Data } from "@/components/Step03Data";
import { Step04DigitalTwin } from "@/components/Step04DigitalTwin";
import { Step05Residuals } from "@/components/Step05Residuals";
import { Step06Confounders } from "@/components/Step06Confounders";
import { Step07TDI } from "@/components/Step07TDI";
import { Step08MLModel } from "@/components/Step08MLModel";
import { Step09Fusion } from "@/components/Step09Fusion";
import { Step10DecisionTwin } from "@/components/Step10DecisionTwin";

export default function Home() {
  return (
    <div className="tyretrace-app">
      <Navbar />

      <main className="main-wrapper">
        <div className="dashboard-grid">
          {/* Left Vertical Stepper Navigation */}
          <SidebarNav />

          {/* Main Dashboard Engineering Flow */}
          <div className="flow-sections">
            {/* Step 01: Overview / Hero */}
            <Step01Hero />

            {/* Step 02: The Problem */}
            <Step02Problem />

            {/* Step 03: The Data */}
            <Step03Data />

            {/* Row: Step 04 Digital Twin & Step 05 Residual Analysis */}
            <div className="two-col-row">
              <Step04DigitalTwin />
              <Step05Residuals />
            </div>

            {/* Row: Step 06 Confounder Detection & Step 07 Tyre Degradation Index */}
            <div className="two-col-row">
              <Step06Confounders />
              <Step07TDI />
            </div>

            {/* Row: Step 08 ML Model, Step 09 Fusion, Step 10 Decision Twin */}
            <div className="three-col-row">
              <Step08MLModel />
              <Step09Fusion />
              <Step10DecisionTwin />
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .tyretrace-app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-main);
        }

        .main-wrapper {
          flex: 1;
          max-width: 1560px;
          margin: 0 auto;
          width: 100%;
          padding: 12px 24px;
        }

        .dashboard-grid {
          display: flex;
          gap: 28px;
          position: relative;
        }

        .flow-sections {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 0;
        }

        .two-col-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          border-bottom: 1px solid var(--border-subtle);
          padding: 12px 0;
        }

        .three-col-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          align-items: stretch;
          border-bottom: 1px solid var(--border-subtle);
          padding: 12px 0;
        }

        @media (max-width: 1280px) {
          .three-col-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 1024px) {
          .two-col-row {
            grid-template-columns: 1fr;
          }
          .three-col-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
