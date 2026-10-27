"use client";

import React from "react";

interface TrafficDiagramProps {
  type: string;
  className?: string;
}

export default function TrafficDiagram({ type, className = "" }: TrafficDiagramProps) {
  switch (type) {
    case "crossroad_right_priority":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-medium tracking-wide">SITUATION: KREUZUNG (RECHTSVORTRITT)</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            {/* Asphalt Roads */}
            <rect x="75" y="0" width="50" height="200" fill="#334155" />
            <rect x="0" y="75" width="200" height="50" fill="#334155" />
            {/* Road Markings */}
            <line x1="100" y1="0" x2="100" y2="70" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            <line x1="100" y1="130" x2="100" y2="200" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            <line x1="0" y1="100" x2="70" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            <line x1="130" y1="100" x2="200" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            {/* Blue Car (You) moving UP */}
            <rect x="105" y="145" width="18" height="32" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <polygon points="114,140 108,145 120,145" fill="#60a5fa" />
            <text x="114" y="165" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
            {/* Red Car coming from RIGHT */}
            <rect x="145" y="78" width="32" height="18" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <polygon points="140,87 145,81 145,93" fill="#f87171" />
            <text x="161" y="90" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">A</text>
          </svg>
          <div className="flex items-center gap-4 mt-2 text-xs">
            <span className="flex items-center gap-1 text-blue-400 font-semibold"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> Mein Auto</span>
            <span className="flex items-center gap-1 text-red-400 font-semibold"><span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> Auto A (von rechts)</span>
          </div>
        </div>
      );

    case "roundabout":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-medium tracking-wide">SITUATION: KREISVERKEHR (KREISEL)</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            {/* Roads */}
            <rect x="80" y="0" width="40" height="200" fill="#334155" />
            <rect x="0" y="80" width="200" height="40" fill="#334155" />
            {/* Roundabout Ring */}
            <circle cx="100" cy="100" r="45" fill="#334155" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="4,4" />
            <circle cx="100" cy="100" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
            {/* Kein Vortritt Teeth at bottom entrance */}
            <line x1="82" y1="145" x2="118" y2="145" stroke="#f8fafc" strokeWidth="3" strokeDasharray="4,4" />
            {/* Car B inside roundabout */}
            <rect x="82" y="60" width="18" height="28" rx="4" fill="#10b981" stroke="#047857" strokeWidth="1.5" transform="rotate(-40 91 74)" />
            <text x="91" y="78" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">B</text>
            {/* Car A entering from bottom */}
            <rect x="103" y="155" width="18" height="30" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="112" y="174" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
          </svg>
          <div className="flex items-center gap-4 mt-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Im Kreisel (B)</span>
            <span className="flex items-center gap-1 text-blue-400 font-semibold"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> Einfahrend (ICH)</span>
          </div>
        </div>
      );

    case "tram_priority":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-medium tracking-wide">SITUATION: KREUZUNG MIT TRAM</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            <rect x="75" y="0" width="50" height="200" fill="#334155" />
            <rect x="0" y="75" width="200" height="50" fill="#334155" />
            {/* Tram Tracks horizontal */}
            <line x1="0" y1="92" x2="200" y2="92" stroke="#94a3b8" strokeWidth="2" strokeDasharray="1,2" />
            <line x1="0" y1="108" x2="200" y2="108" stroke="#94a3b8" strokeWidth="2" strokeDasharray="1,2" />
            {/* Tram coming from LEFT */}
            <rect x="15" y="90" width="55" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
            <text x="42" y="104" fill="#000000" fontSize="9" fontWeight="bold" textAnchor="middle">TRAM</text>
            {/* You moving UP */}
            <rect x="105" y="145" width="18" height="32" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="114" y="165" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
          </svg>
          <div className="flex items-center gap-4 mt-2 text-xs">
            <span className="flex items-center gap-1 text-amber-400 font-semibold"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Tram (von links)</span>
            <span className="flex items-center gap-1 text-blue-400 font-semibold"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> Mein Auto</span>
          </div>
        </div>
      );

    case "stop_sign":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-medium tracking-wide">SIGNAL 2.01: STOP (HALT)</div>
          <svg viewBox="0 0 160 160" className="w-36 h-36">
            {/* Octagon Red Stop Sign */}
            <polygon points="48,10 112,10 150,48 150,112 112,150 48,150 10,112 10,48" fill="#dc2626" stroke="#ffffff" strokeWidth="6" />
            <text x="80" y="95" fill="#ffffff" fontSize="32" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">STOP</text>
          </svg>
          <p className="text-xs text-slate-300 mt-2 text-center">Vollständiger Stillstand an der Haltelinie obligatorisch!</p>
        </div>
      );

    case "speed_zone_30":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-medium tracking-wide">SIGNAL 2.59.1: TEMPO-30-ZONE</div>
          <div className="w-32 h-36 bg-blue-600 rounded-xl border-4 border-white flex flex-col items-center justify-center p-2 shadow-lg">
            <div className="text-white font-extrabold text-xs tracking-widest mb-1">ZONE</div>
            <div className="w-20 h-20 bg-white rounded-full border-4 border-red-600 flex items-center justify-center">
              <span className="text-black font-black text-2xl">30</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 text-center">Rechtsvortritt an allen Kreuzungen</p>
        </div>
      );

    case "pedestrian_crossing":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-medium tracking-wide">FUSSGÄNGERSTREIFEN (VORTRITT)</div>
          <svg viewBox="0 0 180 140" className="w-44 h-32 rounded-xl bg-slate-800">
            {/* Road */}
            <rect x="0" y="20" width="180" height="100" fill="#334155" />
            {/* Yellow pedestrian crossing stripes (Swiss standard is yellow) */}
            <rect x="70" y="25" width="12" height="90" fill="#facc15" />
            <rect x="90" y="25" width="12" height="90" fill="#facc15" />
            <rect x="110" y="25" width="12" height="90" fill="#facc15" />
            {/* Car approaching */}
            <rect x="15" y="55" width="35" height="22" rx="4" fill="#3b82f6" />
            <text x="32" y="70" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
            {/* Pedestrian */}
            <circle cx="100" cy="18" r="5" fill="#f87171" />
            <line x1="100" y1="23" x2="100" y2="35" stroke="#f87171" strokeWidth="2" />
          </svg>
          <p className="text-xs text-amber-300 mt-2 text-center font-medium">Gelbe Streifen: Fussgänger haben stets Vortritt!</p>
        </div>
      );

    case "emergency_lane":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-medium tracking-wide">RETTUNGSGASSE BEI STAU</div>
          <svg viewBox="0 0 180 140" className="w-44 h-32 rounded-xl bg-slate-800">
            <rect x="10" y="0" width="160" height="140" fill="#1e293b" />
            {/* Left lane cars */}
            <rect x="25" y="20" width="22" height="35" rx="3" fill="#64748b" />
            <rect x="25" y="80" width="22" height="35" rx="3" fill="#64748b" />
            {/* Rettungsgasse in the middle */}
            <rect x="68" y="0" width="34" height="140" fill="#0f172a" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
            <text x="85" y="70" fill="#f87171" fontSize="8" fontWeight="bold" transform="rotate(-90 85 70)" textAnchor="middle">RETTUNGSGASSE</text>
            {/* Right lane cars */}
            <rect x="115" y="20" width="22" height="35" rx="3" fill="#64748b" />
            <rect x="115" y="80" width="22" height="35" rx="3" fill="#64748b" />
          </svg>
          <p className="text-xs text-slate-300 mt-2 text-center">Gasse zwischen linker und mittlerer/rechter Spur freihalten</p>
        </div>
      );

    default:
      return null;
  }
}
