"use client";

import React, { useState } from "react";
import { Container, Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WAREHOUSE_HAZARDS } from "@/data/platform";
import { HazardPoint } from "@/types";
import {
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Eye,
  ShieldAlert,
  Info,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHazardPreview: React.FC = () => {
  const [discoveredIds, setDiscoveredIds] = useState<string[]>([]);
  const [activeHazard, setActiveHazard] = useState<HazardPoint | null>(
    WAREHOUSE_HAZARDS[0]
  );
  const [showHint, setShowHint] = useState(false);

  const totalHazards = WAREHOUSE_HAZARDS.length;
  const score = discoveredIds.length;
  const isComplete = score === totalHazards;

  const handlePointClick = (hazard: HazardPoint) => {
    setActiveHazard(hazard);
    if (!discoveredIds.includes(hazard.id)) {
      setDiscoveredIds((prev) => [...prev, hazard.id]);
    }
  };

  const resetSimulation = () => {
    setDiscoveredIds([]);
    setActiveHazard(WAREHOUSE_HAZARDS[0]);
    setShowHint(false);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAF8] border-b border-[#E1E7E3] relative overflow-hidden" id="interactive-simulation">
      <Container size="xl">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <Badge variant="crimson" size="sm">
                Interactive Innovation
              </Badge>
              <span className="text-xs font-semibold text-[#52665C] uppercase tracking-wider">
                SafeStep Simulation Engine
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
              360° Workplace Hazard Scenarios
            </h2>
            <p className="text-base text-[#3D4F47] leading-relaxed">
              Experience the core difference of Laliguras. Click on the highlighted inspection points below to identify active safety hazards in this warehouse environment.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              onClick={resetSimulation}
              className="text-xs"
            >
              Reset Scenario
            </Button>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Info className="w-3.5 h-3.5" />}
              onClick={() => setShowHint(!showHint)}
              className="text-xs"
            >
              {showHint ? "Hide Hints" : "Show Hint"}
            </Button>
          </div>
        </div>

        {/* Simulation Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Simulated Interactive Viewport */}
          <div className="lg:col-span-8 bg-[#0F2D24] rounded-2xl p-4 sm:p-6 shadow-xl border border-[#1E4639] text-white">
            {/* Top Control Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E4639] text-xs">
              <div className="flex items-center gap-2 font-mono text-[#A8BFB5]">
                <Eye className="w-4 h-4 text-[#E63952]" />
                <span>ENVIRONMENT: LOGISTICS WAREHOUSE FLOOR</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#C4D6CD]">Hazards Found:</span>
                <span className="bg-[#9E1A2F] text-white font-mono font-bold px-2.5 py-0.5 rounded text-xs">
                  {score} / {totalHazards}
                </span>
              </div>
            </div>

            {/* Interactive Viewport Canvas */}
            <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-radial from-[#1A382F] via-[#0E261E] to-[#071611] border border-[#215645] select-none">
              {/* Architectural Warehouse Visual Grid & Illustration */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Racking perspective lines */}
                <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#43685C" />
                      <stop offset="100%" stopColor="#1E4639" />
                    </linearGradient>
                  </defs>
                  {/* Warehouse Racks */}
                  <rect x="5%" y="15%" width="22%" height="70%" fill="none" stroke="#52786B" strokeWidth="1.5" />
                  <line x1="5%" y1="35%" x2="27%" y2="35%" stroke="#52786B" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="5%" y1="55%" x2="27%" y2="55%" stroke="#52786B" strokeWidth="1" strokeDasharray="3 3" />

                  <rect x="35%" y="10%" width="30%" height="65%" fill="none" stroke="#52786B" strokeWidth="1.5" />
                  <line x1="35%" y1="30%" x2="65%" y2="30%" stroke="#52786B" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="35%" y1="50%" x2="65%" y2="50%" stroke="#52786B" strokeWidth="1" strokeDasharray="3 3" />

                  <rect x="72%" y="20%" width="23%" height="65%" fill="none" stroke="#52786B" strokeWidth="1.5" />

                  {/* Floor walkway demarcation */}
                  <line x1="10%" y1="88%" x2="90%" y2="88%" stroke="#EAB308" strokeWidth="2" strokeDasharray="8 6" />
                  <line x1="20%" y1="94%" x2="80%" y2="94%" stroke="#EAB308" strokeWidth="2" strokeDasharray="8 6" />
                </svg>
              </div>

              {/* Warehouse Floor Features (Forklift, Exit, Spills, Lifting worker silhouettes) */}
              {/* Emergency Exit Door */}
              <div className="absolute top-[28%] left-[14%] w-12 h-20 border-2 border-emerald-500/50 bg-emerald-950/40 rounded flex flex-col items-center justify-center p-1 pointer-events-none">
                <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-tighter">Exit</span>
                <div className="w-8 h-8 rounded-full bg-red-950/60 border border-red-500/40 flex items-center justify-center mt-1">
                  <span className="text-[7px] text-red-300">Blocked</span>
                </div>
              </div>

              {/* Forklift Zone */}
              <div className="absolute top-[46%] left-[72%] w-20 h-16 border border-amber-500/40 bg-amber-950/30 rounded flex items-center justify-center pointer-events-none">
                <span className="text-[9px] font-semibold text-amber-300">Forklift Route</span>
              </div>

              {/* Spill Zone */}
              <div className="absolute top-[72%] left-[58%] w-16 h-8 rounded-full bg-amber-400/20 border border-amber-400/40 blur-[1px] pointer-events-none flex items-center justify-center">
                <span className="text-[7px] text-amber-200 font-mono">Spill</span>
              </div>

              {/* Hint Bar Banner */}
              {showHint && (
                <div className="absolute top-3 inset-x-3 bg-[#091C16]/95 border border-[#22C55E]/40 p-2.5 rounded-lg text-xs text-[#C4D6CD] flex items-center gap-2 z-30 animate-in fade-in">
                  <Info className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>
                    Hint: Look closely at the emergency door, high rack tier, moving machinery lane, floor surface, and manual lifting posture.
                  </span>
                </div>
              )}

              {/* Interactive Target Pins */}
              {WAREHOUSE_HAZARDS.map((hazard, index) => {
                const isDiscovered = discoveredIds.includes(hazard.id);
                const isSelected = activeHazard?.id === hazard.id;

                return (
                  <button
                    key={hazard.id}
                    type="button"
                    style={{
                      left: `${hazard.xPercent}%`,
                      top: `${hazard.yPercent}%`,
                    }}
                    onClick={() => handlePointClick(hazard)}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none",
                      isSelected && "scale-110"
                    )}
                    aria-label={`Hazard ${index + 1}: ${hazard.title}`}
                  >
                    {/* Pulsating outer beacon */}
                    <span
                      className={cn(
                        "absolute -inset-2 rounded-full opacity-75 animate-ping duration-1000",
                        isDiscovered ? "bg-[#22C55E]/40" : "bg-[#E63952]/60"
                      )}
                    />

                    {/* Central Target Pin */}
                    <span
                      className={cn(
                        "relative flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold font-mono transition-all shadow-lg",
                        isDiscovered
                          ? "bg-[#0E6245] border-[#B4E5CE] text-white"
                          : "bg-[#9E1A2F] border-white text-white group-hover:scale-110",
                        isSelected && "ring-4 ring-white/50"
                      )}
                    >
                      {isDiscovered ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </span>

                    {/* Hover tooltip label */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-[#0A1914] text-white text-[11px] font-medium whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#1E4639]">
                      {isDiscovered ? hazard.title : `Inspect Point #${index + 1}`}
                    </span>
                  </button>
                );
              })}

              {/* Completion Celebration Overlay */}
              {isComplete && (
                <div className="absolute inset-0 bg-[#0F2D24]/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center z-30 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 border border-[#22C55E] flex items-center justify-center text-[#22C55E] mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                    Inspection Complete!
                  </h3>
                  <p className="text-sm text-[#C4D6CD] max-w-sm mb-4">
                    Outstanding job. You successfully identified all {totalHazards} safety risks. In the full SafeStep platform, this completes module exercise 1.3.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    href="/contact"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Full Platform Demo
                  </Button>
                </div>
              )}
            </div>

            {/* Instruction Footer */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8BFB5] gap-2">
              <p>💡 Click any numbered target pin to inspect potential workplace risks.</p>
              <p className="font-mono">Engine: SafeStep WebXR Simulation v1.4</p>
            </div>
          </div>

          {/* Right Inspector Detail Panel */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="p-6 border-[#E1E7E3] shadow-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E1E7E3]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#52665C]">
                  Inspector Analysis
                </span>
                {activeHazard && (
                  <Badge
                    variant={
                      activeHazard.severity === "critical"
                        ? "crimson"
                        : "warning"
                    }
                    size="sm"
                  >
                    {activeHazard.severity.toUpperCase()} RISK
                  </Badge>
                )}
              </div>

              {activeHazard ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShieldAlert className="w-4 h-4 text-[#9E1A2F]" />
                      <h3 className="text-lg font-bold text-[#0A1914]">
                        {activeHazard.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#52665C]">
                      Status:{" "}
                      {discoveredIds.includes(activeHazard.id) ? (
                        <span className="text-[#0E6245] font-semibold">Identified & Logged</span>
                      ) : (
                        <span className="text-[#831526] font-semibold">Active Hazard</span>
                      )}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#F8FAF8] rounded-lg border border-[#E1E7E3] space-y-1.5">
                    <p className="text-xs font-semibold text-[#0A1914] uppercase tracking-wider">
                      Hazard Description
                    </p>
                    <p className="text-sm text-[#3D4F47] leading-relaxed">
                      {activeHazard.description}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#EBF3F0] rounded-lg border border-[#CDE1D9] space-y-1.5">
                    <p className="text-xs font-semibold text-[#0F2D24] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6245]" />
                      Corrective Action Required
                    </p>
                    <p className="text-sm text-[#163E32] leading-relaxed">
                      {activeHazard.correctAction}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      href="/platform"
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Learn More About 360° Training →
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-[#52665C]">
                  <AlertTriangle className="w-8 h-8 text-[#EAB308] mx-auto mb-2" />
                  <p className="text-sm">Click any point on the scenario to view risk breakdown.</p>
                </div>
              )}
            </Card>

            {/* Quick stats mini card */}
            <div className="p-4 rounded-xl border border-[#E1E7E3] bg-white flex items-center justify-between">
              <div>
                <p className="text-xs text-[#52665C] font-medium">SafeStep Retention</p>
                <p className="text-lg font-bold text-[#0F2D24]">Up to 4x Higher</p>
              </div>
              <span className="text-xs text-[#3D4F47] max-w-[140px] text-right">
                Compared to passive slide-based training.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
