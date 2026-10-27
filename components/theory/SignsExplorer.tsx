"use client";

import React, { useState } from "react";
import { TRAFFIC_SIGNS, TrafficSign } from "@/data/signs";
import { Search, AlertTriangle, Shield, Compass, Navigation } from "lucide-react";

export default function SignsExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSigns = TRAFFIC_SIGNS.filter((sign) => {
    const matchesSearch = 
      sign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sign.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sign.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || sign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderSignGraphic = (sign: TrafficSign) => {
    switch (sign.svgShape) {
      case "octagon_stop":
        return (
          <div className="w-16 h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#dc2626" stroke="#ffffff" strokeWidth="4" />
              <text x="50" y="60" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle">STOP</text>
            </svg>
          </div>
        );

      case "inverted_triangle":
        return (
          <div className="w-16 h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <polygon points="10,15 90,15 50,85" fill="#ffffff" stroke="#dc2626" strokeWidth="12" strokeLinejoin="round" />
            </svg>
          </div>
        );

      case "diamond_priority":
        return (
          <div className="w-16 h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <rect x="25" y="25" width="50" height="50" fill="#facc15" stroke="#ffffff" strokeWidth="6" transform="rotate(45 50 50)" />
              <rect x="23" y="23" width="54" height="54" fill="none" stroke="#000000" strokeWidth="1.5" transform="rotate(45 50 50)" />
            </svg>
          </div>
        );

      case "triangle_danger":
        return (
          <div className="w-16 h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <polygon points="50,15 90,85 10,85" fill="#ffffff" stroke="#dc2626" strokeWidth="12" strokeLinejoin="round" />
              {sign.symbolText && (
                <text x="50" y="70" fill="#000000" fontSize="24" fontWeight="bold" textAnchor="middle">{sign.symbolText}</text>
              )}
            </svg>
          </div>
        );

      case "circle_red":
        return (
          <div className="w-16 h-16 rounded-full border-4 border-red-600 bg-white flex items-center justify-center shrink-0 shadow-sm">
            {sign.symbolText ? (
              <span className="text-black font-black text-xl">{sign.symbolText}</span>
            ) : (
              <div className="w-8 h-8 rounded-full bg-slate-100" />
            )}
          </div>
        );

      case "square_blue":
      case "circle_blue":
        return (
          <div className="w-16 h-16 rounded-2xl bg-blue-600 border-2 border-white flex flex-col items-center justify-center shrink-0 shadow-sm p-1">
            <span className="text-white font-black text-xs text-center leading-tight">
              {sign.symbolText || "ZONE"}
            </span>
          </div>
        );

      default:
        return (
          <div className="w-16 h-16 rounded-xl bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
            SSV
          </div>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header & Search */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Schweizer Verkehrssignale (SSV)
        </h1>
        <p className="text-slate-600 text-sm max-w-2xl mb-6">
          Lerne alle offiziellen Schweizer Strassenschilder, Vortrittsregeln und Vorschriften für die Theorieprüfung.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Signal suchen (z.B. Stop, Tempo 50, Einbahn, 2.01)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: "all", label: "Alle" },
              { id: "vortritt", label: "Vortritt" },
              { id: "gefahr", label: "Gefahr" },
              { id: "vorschrift", label: "Vorschrift" },
              { id: "hinweis", label: "Hinweis" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition cursor-pointer ${
                  selectedCategory === cat.id 
                    ? "bg-slate-900 text-white" 
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Signs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSigns.map((sign) => (
          <div 
            key={sign.id} 
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex items-start gap-4"
          >
            {renderSignGraphic(sign)}

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-indigo-600">
                  Signal {sign.code}
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                  {sign.categoryName}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base leading-snug mb-1.5 truncate">
                {sign.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {sign.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredSigns.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 font-medium">Keine Signale gefunden für &quot;{searchTerm}&quot;</p>
        </div>
      )}
    </div>
  );
}
