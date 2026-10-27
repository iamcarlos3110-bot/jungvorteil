"use client";

import React from "react";

interface TrafficDiagramProps {
  type: string;
  className?: string;
}

export default function TrafficDiagram({ type, className = "" }: TrafficDiagramProps) {
  // If it's a sign type (sign_*)
  if (type.startsWith("sign_")) {
    return renderTrafficSignSvg(type, className);
  }

  // Situations
  switch (type) {
    case "crossroad_right_priority":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">SITUATION: RECHTSVORTRITT (KEINE SCHILDER)</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            <rect x="75" y="0" width="50" height="200" fill="#334155" />
            <rect x="0" y="75" width="200" height="50" fill="#334155" />
            <line x1="100" y1="0" x2="100" y2="70" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            <line x1="100" y1="130" x2="100" y2="200" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            <line x1="0" y1="100" x2="70" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            <line x1="130" y1="100" x2="200" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            {/* Blue Car (You) */}
            <rect x="105" y="145" width="18" height="32" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="114" y="165" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
            {/* Red Car from RIGHT */}
            <rect x="145" y="78" width="32" height="18" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <text x="161" y="90" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">A</text>
          </svg>
          <div className="flex items-center gap-4 mt-2 text-xs">
            <span className="text-blue-400 font-semibold">● Mein Auto (ICH)</span>
            <span className="text-red-400 font-semibold">● Auto A (von rechts - Vortritt!)</span>
          </div>
        </div>
      );

    case "crossroad_3cars":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">SITUATION: 3 FAHRZEUGE AN KREUZUNG</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            <rect x="75" y="0" width="50" height="200" fill="#334155" />
            <rect x="0" y="75" width="200" height="50" fill="#334155" />
            {/* Blue Car ICH (bottom going straight) */}
            <rect x="105" y="145" width="18" height="32" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="114" y="165" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
            {/* Green Car B (top going south) */}
            <rect x="78" y="25" width="18" height="32" rx="4" fill="#10b981" stroke="#047857" strokeWidth="2" />
            <text x="87" y="45" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">B</text>
            {/* Red Car A (right coming from east) */}
            <rect x="145" y="78" width="32" height="18" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <text x="161" y="90" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">A</text>
          </svg>
          <div className="flex items-center gap-3 mt-2 text-[11px]">
            <span className="text-red-400 font-bold">1. Auto A</span>
            <span className="text-blue-400 font-bold">2. Mein Auto</span>
            <span className="text-emerald-400 font-bold">3. Auto B</span>
          </div>
        </div>
      );

    case "crossroad_turn_left":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">SITUATION: LINKSABBIEGEN & GEGENVERKEHR</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            <rect x="75" y="0" width="50" height="200" fill="#334155" />
            <rect x="0" y="75" width="200" height="50" fill="#334155" />
            {/* Blue Car ICH (bottom turning left) */}
            <rect x="105" y="145" width="18" height="32" rx="4" fill="#3b82f6" />
            <path d="M 114 135 Q 114 90 40 90" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4,4" />
            <text x="114" y="165" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
            {/* Green Car B (opposite going straight) */}
            <rect x="78" y="25" width="18" height="32" rx="4" fill="#10b981" />
            <line x1="87" y1="65" x2="87" y2="160" stroke="#34d399" strokeWidth="2" strokeDasharray="4,4" />
            <text x="87" y="45" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">B</text>
          </svg>
          <p className="text-xs text-amber-300 mt-2 text-center">Gegenverkehr B hat Vortritt vor dem Linksabbieger!</p>
        </div>
      );

    case "roundabout":
    case "roundabout_entering":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">SITUATION: KREISVERKEHR (VORTRITT)</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            <rect x="80" y="0" width="40" height="200" fill="#334155" />
            <rect x="0" y="80" width="200" height="40" fill="#334155" />
            <circle cx="100" cy="100" r="45" fill="#334155" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="4,4" />
            <circle cx="100" cy="100" r="22" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
            <line x1="82" y1="145" x2="118" y2="145" stroke="#f8fafc" strokeWidth="3" strokeDasharray="4,4" />
            {/* Car in roundabout */}
            <rect x="82" y="60" width="18" height="28" rx="4" fill="#10b981" transform="rotate(-40 91 74)" />
            <text x="91" y="78" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">B</text>
            {/* Car entering */}
            <rect x="103" y="155" width="18" height="30" rx="4" fill="#3b82f6" />
            <text x="112" y="174" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
          </svg>
          <div className="flex items-center gap-4 mt-2 text-xs">
            <span className="text-emerald-400 font-semibold">● Im Kreisel (B) hat Vortritt</span>
            <span className="text-blue-400 font-semibold">● Kein Blinker beim Einfahren</span>
          </div>
        </div>
      );

    case "tram_priority":
    case "tram_crossroad_left":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">SITUATION: KREUZUNG MIT TRAM</div>
          <svg viewBox="0 0 200 200" className="w-48 h-48 rounded-xl bg-slate-800">
            <rect x="75" y="0" width="50" height="200" fill="#334155" />
            <rect x="0" y="75" width="200" height="50" fill="#334155" />
            <line x1="0" y1="92" x2="200" y2="92" stroke="#94a3b8" strokeWidth="2" strokeDasharray="1,2" />
            <line x1="0" y1="108" x2="200" y2="108" stroke="#94a3b8" strokeWidth="2" strokeDasharray="1,2" />
            <rect x="15" y="90" width="55" height="20" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
            <text x="42" y="104" fill="#000000" fontSize="9" fontWeight="bold" textAnchor="middle">TRAM</text>
            <rect x="105" y="145" width="18" height="32" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="114" y="165" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
          </svg>
          <p className="text-xs text-amber-300 mt-2 text-center font-semibold">Tram hat Vortritt (auch von links)!</p>
        </div>
      );

    case "pedestrian_crossing":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">FUSSGÄNGERSTREIFEN (GELB)</div>
          <svg viewBox="0 0 180 140" className="w-44 h-32 rounded-xl bg-slate-800">
            <rect x="0" y="20" width="180" height="100" fill="#334155" />
            <rect x="70" y="25" width="12" height="90" fill="#facc15" />
            <rect x="90" y="25" width="12" height="90" fill="#facc15" />
            <rect x="110" y="25" width="12" height="90" fill="#facc15" />
            <rect x="15" y="55" width="35" height="22" rx="4" fill="#3b82f6" />
            <text x="32" y="70" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">ICH</text>
            <circle cx="100" cy="18" r="5" fill="#f87171" />
            <line x1="100" y1="23" x2="100" y2="35" stroke="#f87171" strokeWidth="2" />
          </svg>
          <p className="text-xs text-amber-300 mt-2 text-center font-medium">Gelbe Streifen: Fussgänger haben stets Vortritt!</p>
        </div>
      );

    case "bicycle_turn_right":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">RECHTSABBIEGEN MIT VELO</div>
          <svg viewBox="0 0 180 140" className="w-44 h-32 rounded-xl bg-slate-800">
            <rect x="30" y="0" width="120" height="140" fill="#334155" />
            {/* Bike lane marked in yellow or dashes */}
            <rect x="130" y="0" width="20" height="140" fill="#1e293b" stroke="#eab308" strokeWidth="1" strokeDasharray="3,3" />
            {/* Car turning right */}
            <rect x="85" y="75" width="22" height="35" rx="3" fill="#3b82f6" />
            <path d="M 96 70 Q 96 30 150 30" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="3,3" />
            {/* Bicycle going straight */}
            <circle cx="140" cy="85" r="4" fill="#10b981" />
            <line x1="140" y1="89" x2="140" y2="50" stroke="#34d399" strokeWidth="2" />
          </svg>
          <p className="text-xs text-amber-300 mt-2 text-center">Blick über die rechte Schulter: Velo hat Vortritt!</p>
        </div>
      );

    case "emergency_lane":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">RETTUNGSGASSE BEI STAU</div>
          <svg viewBox="0 0 180 140" className="w-44 h-32 rounded-xl bg-slate-800">
            <rect x="10" y="0" width="160" height="140" fill="#1e293b" />
            <rect x="25" y="20" width="22" height="35" rx="3" fill="#64748b" />
            <rect x="25" y="80" width="22" height="35" rx="3" fill="#64748b" />
            <rect x="68" y="0" width="34" height="140" fill="#0f172a" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
            <text x="85" y="70" fill="#f87171" fontSize="8" fontWeight="bold" transform="rotate(-90 85 70)" textAnchor="middle">RETTUNGSGASSE</text>
            <rect x="115" y="20" width="22" height="35" rx="3" fill="#64748b" />
            <rect x="115" y="80" width="22" height="35" rx="3" fill="#64748b" />
          </svg>
          <p className="text-xs text-slate-300 mt-2 text-center">Gasse zwischen linker und zweiter Spur freihalten</p>
        </div>
      );

    case "highway_entry":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">BESCHLEUNIGUNGSSTREIFEN AUTOBAHN</div>
          <svg viewBox="0 0 180 140" className="w-44 h-32 rounded-xl bg-slate-800">
            <rect x="20" y="0" width="70" height="140" fill="#334155" />
            <line x1="55" y1="0" x2="55" y2="140" stroke="#f8fafc" strokeWidth="2" strokeDasharray="6,6" />
            {/* Acceleration lane merging from right */}
            <path d="M 130 140 L 130 60 Q 130 20 90 0 L 90 140 Z" fill="#334155" />
            <line x1="90" y1="0" x2="90" y2="140" stroke="#f8fafc" strokeWidth="3" strokeDasharray="3,3" />
            {/* Merging Car */}
            <rect x="105" y="70" width="18" height="30" rx="3" fill="#3b82f6" />
            <text x="114" y="88" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">ICH</text>
          </svg>
          <p className="text-xs text-slate-300 mt-2 text-center">Zügig beschleunigen und Lücke nutzen. Kein Vorrang!</p>
        </div>
      );

    case "highway_distance_2sec":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">2-SEKUNDEN-REGEL (ABSTAND)</div>
          <svg viewBox="0 0 180 140" className="w-44 h-32 rounded-xl bg-slate-800">
            <rect x="40" y="0" width="100" height="140" fill="#334155" />
            {/* Lead car */}
            <rect x="80" y="15" width="20" height="32" rx="3" fill="#ef4444" />
            {/* 2-sec gap bracket */}
            <line x1="110" y1="52" x2="110" y2="88" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2,2" />
            <text x="135" y="73" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">MIN. 2 SEK.</text>
            {/* Your car */}
            <rect x="80" y="93" width="20" height="32" rx="3" fill="#3b82f6" />
            <text x="90" y="112" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">ICH</text>
          </svg>
          <p className="text-xs text-amber-300 mt-2 text-center">Abstand = Halber Tachowert in Metern</p>
        </div>
      );

    case "speed_zone_30":
      return (
        <div className={`w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
          <div className="text-xs text-slate-400 mb-2 font-bold tracking-wide">SIGNAL 2.59.1: TEMPO-30-ZONE</div>
          <div className="w-28 h-32 bg-blue-600 rounded-xl border-4 border-white flex flex-col items-center justify-center p-2 shadow-lg">
            <div className="text-white font-extrabold text-[10px] tracking-widest mb-1">ZONE</div>
            <div className="w-16 h-16 bg-white rounded-full border-4 border-red-600 flex items-center justify-center">
              <span className="text-black font-black text-xl">30</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 text-center">Rechtsvortritt an allen Kreuzungen</p>
        </div>
      );

    case "stop_sign":
      return renderTrafficSignSvg("sign_stop", className);

    default:
      return null;
  }
}

function renderTrafficSignSvg(signType: string, className: string = "") {
  let inner = null;
  let title = "SCHWEIZER VERKEHRSSIGNAL";

  switch (signType) {
    case "sign_stop":
      title = "SIGNAL 2.01: STOP (HALT)";
      inner = (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" strokeWidth="4" />
          <text x="50" y="60" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle">STOP</text>
        </svg>
      );
      break;

    case "sign_kein_vortritt":
      title = "SIGNAL 2.02: KEIN VORTRITT";
      inner = (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <polygon points="10,15 90,15 50,85" fill="#ffffff" stroke="#dc2626" strokeWidth="12" strokeLinejoin="round" />
        </svg>
      );
      break;

    case "sign_hauptstrasse":
      title = "SIGNAL 3.01: HAUPTSTRASSE (VORTRITT)";
      inner = (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <rect x="25" y="25" width="50" height="50" fill="#facc15" stroke="#ffffff" strokeWidth="6" transform="rotate(45 50 50)" />
          <rect x="23" y="23" width="54" height="54" fill="none" stroke="#000000" strokeWidth="1.5" transform="rotate(45 50 50)" />
        </svg>
      );
      break;

    case "sign_ende_hauptstrasse":
      title = "SIGNAL 3.02: ENDE DER HAUPTSTRASSE";
      inner = (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <rect x="25" y="25" width="50" height="50" fill="#94a3b8" stroke="#ffffff" strokeWidth="6" transform="rotate(45 50 50)" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="#000000" strokeWidth="4" />
        </svg>
      );
      break;

    case "sign_tempo_50":
      title = "SIGNAL 2.30.1: TEMPO 50";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-white flex items-center justify-center shadow-md">
          <span className="text-black font-black text-3xl">50</span>
        </div>
      );
      break;

    case "sign_tempo_80":
      title = "SIGNAL 2.30.1: TEMPO 80";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-white flex items-center justify-center shadow-md">
          <span className="text-black font-black text-3xl">80</span>
        </div>
      );
      break;

    case "sign_tempo_120":
      title = "SIGNAL 2.30.1: TEMPO 120 (AUTOBAHN)";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-white flex items-center justify-center shadow-md">
          <span className="text-black font-black text-2xl">120</span>
        </div>
      );
      break;

    case "sign_autobahn":
      title = "SIGNAL 4.01: AUTOBAHN";
      inner = (
        <div className="w-24 h-24 rounded-xl bg-emerald-600 border-4 border-white flex flex-col items-center justify-center shadow-md p-1">
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <line x1="25" y1="90" x2="35" y2="10" stroke="#ffffff" strokeWidth="6" />
            <line x1="75" y1="90" x2="65" y2="10" stroke="#ffffff" strokeWidth="6" />
            <rect x="15" y="45" width="70" height="8" fill="#ffffff" />
          </svg>
        </div>
      );
      break;

    case "sign_einfahrt_verboten":
      title = "SIGNAL 2.02: EINFAHRT VERBOTEN";
      inner = (
        <div className="w-24 h-24 rounded-full border-4 border-red-600 bg-red-600 flex items-center justify-center shadow-md">
          <div className="w-16 h-4 bg-white rounded-sm" />
        </div>
      );
      break;

    case "sign_ueberholen_verboten":
      title = "SIGNAL 2.44: ÜBERHOLEN VERBOTEN";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-white flex items-center justify-center gap-2 shadow-md">
          <div className="w-6 h-8 rounded bg-red-600" />
          <div className="w-6 h-8 rounded bg-black" />
        </div>
      );
      break;

    case "sign_allgemeines_fahrverbot":
      title = "SIGNAL 2.01: ALLGEMEINES FAHRVERBOT";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-white shadow-md flex items-center justify-center" />
      );
      break;

    case "sign_tempo_30":
      title = "SIGNAL 2.30.1: TEMPO 30";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-white flex items-center justify-center shadow-md">
          <span className="text-black font-black text-3xl">30</span>
        </div>
      );
      break;

    case "sign_tempo_100":
      title = "SIGNAL 2.30.1: TEMPO 100";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-white flex items-center justify-center shadow-md">
          <span className="text-black font-black text-2xl">100</span>
        </div>
      );
      break;

    case "sign_fussgaengerstreifen":
      title = "SIGNAL 4.11: FUSSGÄNGERSTREIFEN";
      inner = (
        <div className="w-24 h-24 rounded-xl bg-blue-600 border-4 border-white flex flex-col items-center justify-center shadow-md p-2">
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <polygon points="50,10 90,90 10,90" fill="#ffffff" />
            <circle cx="50" cy="35" r="7" fill="#2563eb" />
            <line x1="50" y1="42" x2="50" y2="65" stroke="#2563eb" strokeWidth="5" />
            <line x1="35" y1="55" x2="65" y2="55" stroke="#2563eb" strokeWidth="4" />
            <line x1="50" y1="65" x2="38" y2="82" stroke="#2563eb" strokeWidth="4" />
            <line x1="50" y1="65" x2="62" y2="82" stroke="#2563eb" strokeWidth="4" />
          </svg>
        </div>
      );
      break;

    case "sign_lichtsignal":
      title = "SIGNAL 1.25: LICHTSIGNALE";
      inner = (
        <div className="w-16 h-28 rounded-2xl bg-black border-2 border-slate-600 p-2 flex flex-col items-center justify-between shadow-lg">
          <div className="w-6 h-6 rounded-full bg-red-600 shadow-sm shadow-red-500/50" />
          <div className="w-6 h-6 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
          <div className="w-6 h-6 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
        </div>
      );
      break;

    case "sign_baustelle":
      title = "SIGNAL 1.14: BAUSTELLE";
      inner = (
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <polygon points="50,10 95,85 5,85" fill="#ffffff" stroke="#dc2626" strokeWidth="8" strokeLinejoin="round" />
          <circle cx="50" cy="40" r="5" fill="#000000" />
          <line x1="50" y1="45" x2="50" y2="68" stroke="#000000" strokeWidth="4" />
          <line x1="38" y1="58" x2="62" y2="58" stroke="#000000" strokeWidth="4" />
          <line x1="50" y1="68" x2="40" y2="80" stroke="#000000" strokeWidth="4" />
          <line x1="50" y1="68" x2="60" y2="80" stroke="#000000" strokeWidth="4" />
        </svg>
      );
      break;

    case "sign_parkieren_verboten":
      title = "SIGNAL 2.50: PARKIERE VERBOTEN";
      inner = (
        <div className="w-24 h-24 rounded-full border-8 border-red-600 bg-blue-600 flex items-center justify-center relative shadow-md">
          <div className="w-24 h-2 bg-red-600 rotate-45 absolute" />
        </div>
      );
      break;

    case "sign_kreisverkehr":
      title = "SIGNAL 2.15: KREISVERKEHR";
      inner = (
        <div className="w-24 h-24 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center shadow-md">
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <circle cx="50" cy="50" r="28" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="25,12" />
            <polygon points="50,15 58,25 42,25" fill="#ffffff" />
            <polygon points="80,55 70,63 70,47" fill="#ffffff" />
            <polygon points="25,75 33,65 17,65" fill="#ffffff" />
          </svg>
        </div>
      );
      break;

    default:
      inner = (
        <div className="w-20 h-20 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
          SSV SIGNAL
        </div>
      );
  }

  return (
    <div className={`w-full max-w-xs mx-auto bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center ${className}`}>
      <div className="text-[10px] text-slate-400 mb-3 font-bold tracking-wider uppercase">{title}</div>
      <div className="my-1">{inner}</div>
    </div>
  );
}
