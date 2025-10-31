"use client";

export function LoadingSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 space-y-6">
      {/* Stats Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl animate-pulse"
          >
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-20 mb-3"></div>
            <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-16"></div>
          </div>
        ))}
      </div>

      {/* Database Cards Skeleton */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden animate-pulse"
        >
          <div className="p-6">
            <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-48 mb-3"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full mb-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
