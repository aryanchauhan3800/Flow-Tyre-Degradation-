export interface TelemetryPoint {
  distance: number; // 0 to 5793 meters
  speed: number;    // km/h
  throttle: number; // 0 to 100%
  brake: number;    // 0 to 100%
  rpm: number;      // 8000 to 12500
  gear: number;     // 1 to 8
  drs: boolean;
  tyreWear: number; // %
}

// 2023 Italian GP (Monza) - Qualifying Lap Data for VER
export const monzaTelemetry: TelemetryPoint[] = [
  { distance: 0, speed: 312, throttle: 100, brake: 0, rpm: 11800, gear: 8, drs: true, tyreWear: 94 },
  { distance: 300, speed: 338, throttle: 100, brake: 0, rpm: 12250, gear: 8, drs: true, tyreWear: 94 },
  { distance: 600, speed: 348, throttle: 100, brake: 0, rpm: 12400, gear: 8, drs: true, tyreWear: 93 },
  { distance: 800, speed: 210, throttle: 10, brake: 90, rpm: 9800, gear: 4, drs: false, tyreWear: 93 },
  { distance: 950, speed: 82, throttle: 0, brake: 100, rpm: 8400, gear: 2, drs: false, tyreWear: 92 }, // Prima Variante (T1-T2)
  { distance: 1100, speed: 135, throttle: 65, brake: 0, rpm: 9200, gear: 3, drs: false, tyreWear: 92 },
  { distance: 1400, speed: 295, throttle: 100, brake: 0, rpm: 11700, gear: 7, drs: false, tyreWear: 91 }, // Curva Grande (T3)
  { distance: 1700, speed: 320, throttle: 100, brake: 0, rpm: 12100, gear: 8, drs: false, tyreWear: 91 },
  { distance: 2000, speed: 140, throttle: 15, brake: 85, rpm: 8900, gear: 3, drs: false, tyreWear: 90 }, // Roggia Chicane (T4-T5)
  { distance: 2200, speed: 175, throttle: 70, brake: 0, rpm: 9600, gear: 4, drs: false, tyreWear: 90 },
  { distance: 2340, speed: 298, throttle: 100, brake: 0, rpm: 11850, gear: 7, drs: false, tyreWear: 89 }, // Lesmo Approach
  { distance: 2500, speed: 185, throttle: 40, brake: 50, rpm: 10100, gear: 5, drs: false, tyreWear: 89 }, // Lesmo 1 (T6)
  { distance: 2750, speed: 168, throttle: 35, brake: 45, rpm: 9900, gear: 4, drs: false, tyreWear: 88 }, // Lesmo 2 (T7)
  { distance: 3100, speed: 315, throttle: 100, brake: 0, rpm: 12050, gear: 8, drs: false, tyreWear: 88 }, // Serraglio
  { distance: 3500, speed: 340, throttle: 100, brake: 0, rpm: 12350, gear: 8, drs: true, tyreWear: 87 },
  { distance: 3800, speed: 215, throttle: 20, brake: 80, rpm: 9700, gear: 5, drs: false, tyreWear: 86 }, // Variante Ascari Entry (T8)
  { distance: 4000, speed: 195, throttle: 55, brake: 15, rpm: 9900, gear: 5, drs: false, tyreWear: 86 }, // Ascari Mid (T9)
  { distance: 4200, speed: 245, throttle: 90, brake: 0, rpm: 10800, gear: 6, drs: false, tyreWear: 85 }, // Ascari Exit (T10)
  { distance: 4600, speed: 330, throttle: 100, brake: 0, rpm: 12150, gear: 8, drs: true, tyreWear: 85 }, // Back Straight
  { distance: 4950, speed: 205, throttle: 30, brake: 70, rpm: 9800, gear: 5, drs: false, tyreWear: 84 }, // Curva Parabolica / Alboreto (T11)
  { distance: 5250, speed: 260, throttle: 95, brake: 0, rpm: 11100, gear: 7, drs: false, tyreWear: 84 },
  { distance: 5600, speed: 325, throttle: 100, brake: 0, rpm: 12100, gear: 8, drs: true, tyreWear: 83 },
  { distance: 5793, speed: 342, throttle: 100, brake: 0, rpm: 12380, gear: 8, drs: true, tyreWear: 83 }
];

export const sectors = [
  { id: "S1", name: "Sector 1", start: 0, end: 1750, time: "26.4s", apexes: ["Prima Variante", "Curva Grande"] },
  { id: "S2", name: "Sector 2", start: 1750, end: 3700, time: "27.1s", apexes: ["Variante della Roggia", "Curva di Lesmo 1 & 2"] },
  { id: "S3", name: "Sector 3", start: 3700, end: 5793, time: "25.8s", apexes: ["Variante Ascari", "Curva Parabolica"] }
];

// Residual analysis time series data (0s to 50s)
export const residualTimeSeries = [
  { t: 0, actual: 7.2, expected: 8.4, residual: -1.2 },
  { t: 5, actual: 8.8, expected: 9.1, residual: -0.3 },
  { t: 10, actual: 3.5, expected: 4.8, residual: -1.3 },
  { t: 15, actual: 6.9, expected: 7.5, residual: -0.6 },
  { t: 20, actual: 9.2, expected: 9.6, residual: -0.4 },
  { t: 25, actual: 2.1, expected: 4.2, residual: -2.1 },
  { t: 30, actual: 8.4, expected: 8.9, residual: -0.5 },
  { t: 35, actual: 5.3, expected: 6.8, residual: -1.5 },
  { t: 40, actual: 9.5, expected: 9.9, residual: -0.4 },
  { t: 45, actual: 4.1, expected: 5.6, residual: -1.5 },
  { t: 50, actual: 7.2, expected: 8.4, residual: -1.2 }
];

// Tyre Degradation Index over 50 lap stint
export const tdiStintProgression = [
  { lap: 0, tdi: 0.2 },
  { lap: 5, tdi: 1.1 },
  { lap: 10, tdi: 2.4 },
  { lap: 15, tdi: 3.8 },
  { lap: 20, tdi: 5.6 }, // current lap
  { lap: 25, tdi: 11.2 },
  { lap: 30, tdi: 24.5 },
  { lap: 35, tdi: 42.0 },
  { lap: 40, tdi: 68.3 },
  { lap: 45, tdi: 84.7 },
  { lap: 50, tdi: 96.0 }
];

export const confoundersList = [
  { id: "traffic", label: "Traffic", icon: "Car", active: true, desc: "Gap to car ahead < 1.5s (dirty air disturbance)" },
  { id: "track_limits", label: "Track Limits", icon: "Sliders", active: true, desc: "Sensors checking 4 wheels over white lines" },
  { id: "drs", label: "DRS", icon: "Wind", active: true, desc: "Rear wing flap actuation status & top speed delta" },
  { id: "safety_car", label: "Safety Car / VSC", icon: "AlertTriangle", active: false, desc: "Delta delta time neutralization phases" },
  { id: "fuel_load", label: "Fuel Load", icon: "Fuel", active: true, desc: "Burn rate mass reduction (~0.3s per 10kg burned)" },
  { id: "weather", label: "Weather", icon: "CloudRain", active: true, desc: "Track temp, ambient humidity, barometric pressure" },
  { id: "braking", label: "Braking", icon: "Disc", active: true, desc: "Peak hydraulic pressure & lockup micro-events" },
  { id: "mechanical", label: "Mechanical Issues", icon: "Wrench", active: false, desc: "MGU-K / Turbo clipping, differential slip" },
  { id: "track_evolution", label: "Track Evolution", icon: "TrendingUp", active: true, desc: "Rubbering in of racing line over session" }
];
