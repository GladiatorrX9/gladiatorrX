"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import SearchForm from "@/components/search-form";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Shield,
  Database,
  Search,
  Lock,
  Eye,
  AlertTriangle,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Data Breach Detection",
      description:
        "Scan multiple databases to identify if your data has been compromised in any known security breaches.",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Real-time Search",
      description:
        "Get instant results from our comprehensive database of leaked information with lightning-fast search capabilities.",
      icon: <Search className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Multi-Database Coverage",
      description:
        "Access data from numerous breach databases including email leaks, password dumps, and personal information databases.",
      icon: <Database className="w-8 h-8 text-cyan-500" />,
    },
    {
      title: "Secure & Private",
      description:
        "Your searches are encrypted and private. We don't store your search queries or compromise your privacy.",
      icon: <Lock className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Detailed Insights",
      description:
        "Get comprehensive information about each breach including the source, date, and type of data compromised.",
      icon: <Eye className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Threat Monitoring",
      description:
        "Stay ahead of cyber threats by monitoring your digital footprint across the dark web and leaked databases.",
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 overflow-hidden">
      <ThemeToggle />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24 sm:pb-32">
          <div className="text-center mb-12 sm:mb-16">
            {/* Logo/Brand */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-50 tracking-tight">
                GladiatorrX
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mt-3 sm:mt-4 font-medium">
                Cyber Security Intelligence Platform
              </p>
            </div>

            {/* Tagline */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-800 dark:text-zinc-100 max-w-4xl mx-auto leading-tight px-4">
                Protect Your Digital Identity. Detect Data Breaches Before They
                Impact You.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed">
              Search across millions of leaked records to discover if your
              personal information, emails, or credentials have been exposed in
              data breaches.
            </p>
          </div>

          {/* Search Form */}
          <SearchForm />
        </div>

        <BackgroundBeams className="opacity-30" />
      </div>

      {/* Features Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4">
              Why Choose GladiatorrX?
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
              Comprehensive threat intelligence and data breach monitoring
              powered by advanced technology.
            </p>
          </div>

          <HoverEffect items={features} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black text-white py-10 sm:py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                GladiatorrX
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base">
                Leading cybersecurity intelligence platform protecting
                organizations and individuals from data breaches.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-zinc-400 text-sm sm:text-base">
                <li className="hover:text-zinc-200 transition-colors cursor-pointer">
                  Data Breach Monitoring
                </li>
                <li className="hover:text-zinc-200 transition-colors cursor-pointer">
                  Threat Intelligence
                </li>
                <li className="hover:text-zinc-200 transition-colors cursor-pointer">
                  Dark Web Scanning
                </li>
                <li className="hover:text-zinc-200 transition-colors cursor-pointer">
                  Security Audits
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-zinc-400 text-sm sm:text-base">
                <li className="hover:text-zinc-200 transition-colors">
                  Email: security@gladiatorrx.com
                </li>
                <li className="hover:text-zinc-200 transition-colors">
                  Phone: +1 (555) 123-4567
                </li>
                <li className="text-emerald-400 font-medium">
                  24/7 Support Available
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 sm:pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm sm:text-base">
            <p>
              &copy; 2025 GladiatorrX. All rights reserved. Professional
              Cybersecurity Solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
