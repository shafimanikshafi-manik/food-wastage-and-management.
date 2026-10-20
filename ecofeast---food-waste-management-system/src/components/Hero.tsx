import React from 'react';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  TrendingUp, 
  UtensilsCrossed,
  Clock,
  Building2
} from 'lucide-react';
import { SystemStats } from '../types';

interface HeroProps {
  stats: SystemStats;
  onOpenDonate: () => void;
  onOpenRequest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ stats, onOpenDonate, onOpenRequest }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Background Decorative Rings in Soft Light Tones */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-emerald-100/30 via-teal-100/20 to-sky-100/30 dark:from-emerald-900/10 dark:to-slate-900/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Real Network Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 shadow-xs text-xs font-semibold text-emerald-900 dark:text-emerald-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Food Rescue Initiative · Connecting Surplus to Shelters</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Bridge the Gap Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500">Surplus Food</span> and Empty Plates
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Every day, wholesome edible food from university dining halls, wedding banquets, and restaurants ends up in landfills. <strong>EcoFeast</strong> connects verified food donors with local community shelters, orphanages, and food banks within minutes.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#donate"
                onClick={onOpenDonate}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Donate Surplus Food</span>
              </a>

              <a
                href="#request"
                onClick={onOpenRequest}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200 dark:border-slate-700 shadow-xs hover:-translate-y-0.5 transition-all"
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Request Food for Shelter</span>
              </a>

              <a
                href="#dashboard"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all"
              >
                <span>Live Feed</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Good Samaritan Protected</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Rapid Pickup Under 60 Mins</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Non-Profit Partners</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Metric Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/60">
              
              {/* Floating pill badge */}
              <div className="absolute -top-3.5 -right-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Live Rescue Dispatch
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Community Pulse</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Real-time local waste deflection</p>
                </div>
              </div>

              {/* 3 Metric Highlights */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 block">Food Rescued & Distributed</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{stats.foodSavedKg} kg</span>
                  </div>
                  <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-lg font-bold">
                    ~{stats.mealsProvided} Meals
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-slate-800 border border-amber-100 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-amber-900 dark:text-amber-300 block">CO2e Emissions Prevented</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{stats.co2EmissionsSavedKg} kg</span>
                  </div>
                  <span className="text-xs bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2.5 py-1 rounded-lg font-bold">
                    Zero Landfill
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50/70 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-sky-900 dark:text-sky-300 block">Fresh Water Conserved</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{(stats.waterSavedLiters / 1000).toFixed(1)}k L</span>
                  </div>
                  <span className="text-xs bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 px-2.5 py-1 rounded-lg font-bold">
                    Hydration
                  </span>
                </div>
              </div>

              {/* Verified Dispatch Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  3 Verified Shelters On Call
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Avg. 52 min Pickup</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
