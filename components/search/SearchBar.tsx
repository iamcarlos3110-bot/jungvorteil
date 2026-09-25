"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Loader2 } from "lucide-react";
import { Analytics } from "@/lib/analytics";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onNavigate?: boolean;
  locale?: string;
}

export default function SearchBar({ placeholder = "Suchen...", onSearch, onNavigate = false, locale = "de" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const debounceRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setIsSearching(true);
    
    debounceRef.current = setTimeout(() => {
      if (onSearch) onSearch(value);
      setIsSearching(false);
      if (value.trim()) {
        Analytics.search(value, 0);
      }
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNavigate && query.trim()) {
      Analytics.search(query, 0);
      router.push(`/${locale}/suche?q=${encodeURIComponent(query)}`);
    }
  };

  const clearSearch = () => {
    setQuery("");
    if (onSearch) onSearch("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setIsSearching(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center w-full h-14 rounded-2xl bg-white border-2 border-gray-100 shadow-sm focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-500/10 transition-all duration-200 overflow-hidden">
        <div className="pl-4 pr-2 text-gray-400">
          <Search className="w-6 h-6" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex-grow h-full bg-transparent border-none text-gray-900 placeholder:text-gray-400 font-medium text-lg outline-none px-2"
        />
        <div className="pr-4 pl-2 flex items-center justify-center gap-2">
          {isSearching && (
            <Loader2 className="w-5 h-5 text-purple-500 animate-spin" />
          )}
          {query && !isSearching && (
            <button
              type="button"
              onClick={clearSearch}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
