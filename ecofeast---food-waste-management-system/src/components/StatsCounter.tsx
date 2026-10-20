import React, { useEffect, useState } from 'react';
import { 
  PackageCheck, 
  HandHeart, 
  Scale, 
  Leaf, 
  Droplet, 
  Users, 
  Flame, 
  AlertTriangle 
} from 'lucide-react';
import { SystemStats } from '../types';

interface StatsCounterProps {
  stats: SystemStats;
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (end === 0) {
      setDisplayValue(0);
      return;
    }
    const duration = 800; // ms
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const stepValue = Math.ceil(end / steps);

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toLocaleString()}</span>;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  return (
    <section id="stats" className="py-16 bg-white dark:bg-slate-950 border-y border-stone-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Verified Community Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Live Waste Deflection & Hunger Relief
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Real-time numbers updated dynamically as food donors and volunteer rescue vans coordinate meal deliveries across the city.
          </p>
        </div>

        {/* 4 Main Animated Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          
          {/* Total Donations */}
          <div className="p-6 rounded-3xl bg-[#fcfbf9] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              <AnimatedNumber value={stats.totalDonationsCount} />
            </div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
              Total Food Donations
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-2">
              From mess & food outlets
            </div>
          </div>

          {/* Total Requests */}
          <div className="p-6 rounded-3xl bg-[#fcfbf9] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-lg hover:border-amber-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-slate-800 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HandHeart className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              <AnimatedNumber value={stats.totalRequestsCount} />
            </div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
              Shelter Food Requests
            </div>
            <div className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-2">
              Orphanages & shelters
            </div>
          </div>

          {/* Food Saved in Kg */}
          <div className="p-6 rounded-3xl bg-emerald-50/60 dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-600/25 group-hover:scale-110 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              <AnimatedNumber value={stats.foodSavedKg} /> <span className="text-lg font-bold">kg</span>
            </div>
            <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mt-1">
              Edible Food Saved
            </div>
            <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-2">
              ~{stats.mealsProvided} healthy meal portions
            </div>
          </div>

          {/* CO2 Emissions Averted */}
          <div className="p-6 rounded-3xl bg-[#fcfbf9] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 shadow-md shadow-teal-500/10 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              <AnimatedNumber value={stats.co2EmissionsSavedKg} /> <span className="text-lg font-bold">kg</span>
            </div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
              CO2e Landfill Averted
            </div>
            <div className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold mt-2">
              2.5 kg CO2e saved per kg food
            </div>
          </div>

        </div>

        {/* Global Food Waste Reality Cards - Clean Light Styling */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-emerald-50/70 via-[#faf9f5] to-amber-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden shadow-sm border border-emerald-100 dark:border-slate-800">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-100/50 dark:bg-emerald-900/15 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
            <div>
              <span className="text-emerald-800 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest">Global Crisis Context</span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Why Food Waste Management Matters</h3>
            </div>
            <span className="text-xs text-emerald-800 dark:text-emerald-300 bg-white/80 dark:bg-slate-800 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-slate-700 shadow-2xs font-semibold">
              UN SDG Goal #2 & #12
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-stone-200 dark:border-slate-700 shadow-xs">
              <div className="text-amber-500 mb-2">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">1.3 Billion Tons</div>
              <div className="text-xs font-semibold text-amber-700 dark:text-amber-400 mt-0.5">1/3 of Global Food</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Lost or wasted along supply chains every single year while safe to eat.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-stone-200 dark:border-slate-700 shadow-xs">
              <div className="text-sky-500 mb-2">
                <Droplet className="w-6 h-6" />
              </div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">250 Trillion Liters</div>
              <div className="text-xs font-semibold text-sky-700 dark:text-sky-400 mt-0.5">Wasted Agricultural Water</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Equals the annual water volume of 100 million Olympic swimming pools.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-stone-200 dark:border-slate-700 shadow-xs">
              <div className="text-rose-500 mb-2">
                <Flame className="w-6 h-6" />
              </div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">8 - 10% Emissions</div>
              <div className="text-xs font-semibold text-rose-700 dark:text-rose-400 mt-0.5">Landfill Methane Gas</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                If food waste were a country, it would be the world's 3rd largest polluter.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-stone-200 dark:border-slate-700 shadow-xs">
              <div className="text-indigo-500 mb-2">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">828 Million Hungry</div>
              <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 mt-0.5">Massive Distribution Gap</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Recovering just 25% of wasted food would eradicate chronic malnutrition globally.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
