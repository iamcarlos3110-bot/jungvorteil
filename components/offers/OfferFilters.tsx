"use client";
import React from "react";
import { OfferFilters as FiltersType, Category, City } from "@/types";
import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";

interface OfferFiltersProps {
  filters: FiltersType;
  onChange: (filters: FiltersType) => void;
  categories: Category[];
  cities: City[];
}

export default function OfferFilters({ filters, onChange, categories, cities }: OfferFiltersProps) {
  const hasActiveFilters = 
    filters.category || 
    filters.city || 
    filters.student || 
    filters.online || 
    (filters.sortBy && filters.sortBy !== "popular");

  const resetFilters = () => {
    onChange({
      category: undefined,
      city: undefined,
      student: undefined,
      online: undefined,
      sortBy: "popular"
    });
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 rounded-2xl shadow-lg border border-stone-200/90 hover:border-[#3F5E39]/30 transition-all">
      {/* Top row: Categories mobile scrollable */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <button
          onClick={() => onChange({ ...filters, category: undefined })}
          className={cn(
            "flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors shrink-0",
            !filters.category ? "bg-[#3F5E39] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          Alle
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange({ ...filters, category: cat.slug })}
            className={cn(
              "flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors shrink-0",
              filters.category === cat.slug ? "bg-[#3F5E39] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {cat.icon && <span>{cat.icon}</span>}
            {cat.name_de}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-3 border-t border-gray-100">
        {/* Toggles and dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={filters.city || ""}
            onChange={(e) => onChange({ ...filters, city: e.target.value || undefined })}
            className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#3F5E39] focus:border-[#3F5E39] block px-3 py-2 cursor-pointer font-medium outline-none"
          >
            <option value="">Alle Städte</option>
            {cities.map((city) => (
              <option key={city.id} value={city.slug}>{city.name_de}</option>
            ))}
          </select>

          <button
            onClick={() => onChange({ ...filters, student: !filters.student })}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer",
              filters.student ? "bg-[#EAF0E5] border-[#D6E2CE] text-[#3F5E39]" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
            )}
          >
            {filters.student && <Check className="w-4 h-4" />}
            Nur Studierende
          </button>

          <button
            onClick={() => onChange({ ...filters, online: !filters.online })}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer",
              filters.online ? "bg-[#EAF0E5] border-[#D6E2CE] text-[#3F5E39]" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
            )}
          >
            {filters.online && <Check className="w-4 h-4" />}
            Online
          </button>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Sortieren:</span>
            <select
              value={filters.sortBy || "popular"}
              onChange={(e) => onChange({ ...filters, sortBy: e.target.value as "popular" | "newest" | "saving" | "expiring" })}
              className="bg-white border-none text-gray-900 text-sm rounded-lg focus:ring-0 block py-2 cursor-pointer font-semibold outline-none"
            >
              <option value="popular">Beliebt</option>
              <option value="newest">Neueste</option>
              <option value="saving">Meiste Ersparnis</option>
              <option value="expiring">Bald ablaufend</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors flex items-center justify-center rounded-lg hover:bg-red-50"
              title="Filter zurücksetzen"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
