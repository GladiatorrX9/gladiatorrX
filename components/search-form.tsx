"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Database,
  Shield,
  AlertTriangle,
  Info,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { LeakOSINTResponse } from "@/types/api";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { DownloadModal } from "@/components/download-modal";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<LeakOSINTResponse | null>(null);
  const [error, setError] = useState("");
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResults(null);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query.trim() }),
      });

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError("Failed to perform search. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* Search Form */}
      <motion.form
        onSubmit={handleSearch}
        className="relative mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter search query (email, name, phone, etc.)"
              className={cn(
                "w-full px-6 py-4 pl-12 sm:pl-14 text-base sm:text-lg rounded-2xl sm:rounded-r-none",
                "bg-white dark:bg-zinc-900",
                "border-2 border-zinc-200 dark:border-zinc-700",
                "focus:border-blue-500 dark:focus:border-blue-400",
                "focus:outline-none focus:ring-4 focus:ring-blue-500/10",
                "transition-all duration-200",
                "text-zinc-900 dark:text-zinc-100",
                "placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              )}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className={cn(
              "px-8 py-4 rounded-2xl sm:rounded-l-none font-semibold text-base sm:text-lg",
              "bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
              "dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
              "text-white",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600",
              "transition-all duration-200",
              "shadow-lg hover:shadow-xl",
              "min-w-[140px] sm:min-w-[160px]",
              "flex items-center justify-center gap-2"
            )}
          >
            {loading ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span className="hidden sm:inline">Searching...</span>
                <span className="sm:hidden">Search...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5 sm:hidden" />
                <span>Search</span>
              </>
            )}
          </button>
        </div>
      </motion.form>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3"
        >
          <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-red-800 dark:text-red-200">
            {error}
          </p>
        </motion.div>
      )}

      {/* Loading State */}
      {loading && <LoadingSkeleton />}

      {/* Results */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Download Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowDownloadModal(true)}
              className={cn(
                "flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base",
                "bg-gradient-to-r from-emerald-600 to-teal-600",
                "hover:from-emerald-700 hover:to-teal-700",
                "text-white shadow-lg hover:shadow-xl",
                "transition-all duration-200",
                "hover:scale-105 active:scale-95"
              )}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Results</span>
            </button>
          </div>

          {/* Stats Header */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <StatCard
              label="Databases"
              value={results.NumOfDatabase}
              icon={<Database className="w-4 h-4 sm:w-5 sm:h-5" />}
            />
            <StatCard
              label="Total Results"
              value={results.NumOfResults}
              icon={<Shield className="w-4 h-4 sm:w-5 sm:h-5" />}
            />
            <StatCard
              label="Search Time"
              value={`${results["search time"].toFixed(3)}s`}
              icon={<Info className="w-4 h-4 sm:w-5 sm:h-5" />}
            />
            <StatCard
              label="Requests Left"
              value={results.free_requests_left}
              icon={<AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />}
            />
          </div>

          {/* Database Results */}
          {Object.entries(results.List).map(([dbName, dbData], index) => (
            <DatabaseCard
              key={dbName}
              dbName={dbName}
              dbData={dbData}
              index={index}
            />
          ))}
        </motion.div>
      )}

      {/* Download Modal */}
      {results && (
        <DownloadModal
          isOpen={showDownloadModal}
          onClose={() => setShowDownloadModal(false)}
          data={results}
          query={query}
        />
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="p-3 sm:p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-1 sm:mb-2 text-zinc-600 dark:text-zinc-400">
        {icon}
        <span className="text-xs sm:text-sm font-medium">{label}</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </div>
    </div>
  );
}

function DatabaseCard({
  dbName,
  dbData,
  index,
}: {
  dbName: string;
  dbData: any;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="mb-4 sm:mb-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        className="w-full p-4 sm:p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 truncate">
              {dbName}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
              {dbData.InfoLeak}
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-full">
                {dbData.NumOfResults}{" "}
                {dbData.NumOfResults === 1 ? "Result" : "Results"}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </button>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 max-h-96 overflow-y-auto">
            {dbData.Data.map((item: any, idx: number) => (
              <div
                key={idx}
                className="p-3 sm:p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl"
              >
                <div className="grid gap-2">
                  {Object.entries(item).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col sm:flex-row sm:gap-2 text-xs sm:text-sm"
                    >
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300 sm:min-w-32">
                        {key}:
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-400 break-all mt-0.5 sm:mt-0">
                        {typeof value === "string" || typeof value === "number"
                          ? value
                          : JSON.stringify(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
