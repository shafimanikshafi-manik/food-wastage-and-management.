import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Flame, 
  Lightbulb, 
  Sprout, 
  Calculator, 
  CheckCircle2, 
  TreePine, 
  Droplet, 
  BookOpen
} from 'lucide-react';
import { COMPOSTING_STEPS } from '../data/initialData';

export const AwarenessSection: React.FC = () => {
  const [weeklyWasteKg, setWeeklyWasteKg] = useState<number>(2.5);
  const [calculatorCategory, setCalculatorCategory] = useState<'individual' | 'hostel' | 'restaurant'>('individual');

  // Calculations
  const multiplier = calculatorCategory === 'individual' ? 1 : calculatorCategory === 'hostel' ? 30 : 60;
  const totalWeeklyKg = weeklyWasteKg * multiplier;
  const annualKg = Math.round(totalWeeklyKg * 52);
  const annualCo2Kg = Math.round(annualKg * 2.5);
  const annualWaterLiters = Math.round(annualKg * 850);
  const equivalentTrees = Math.round(annualCo2Kg / 22);

  return (
    <section id="awareness" className="py-20 bg-[#fafaf7] dark:bg-slate-900/40 border-t border-stone-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ecological Awareness & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Root Causes, Climate Impact & Solutions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A comprehensive curriculum guide for university campuses, dining halls, and households to eliminate food waste at the source.
          </p>
        </div>

        {/* 3 Pillar Cards: Causes, Impact, Reduction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Causes */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-slate-800 text-amber-600 flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Root Causes of Food Waste
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Food waste occurs across every step of the supply chain, from farms and transport to dining tables.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span><strong>Overproduction & Buffets:</strong> Hostels and wedding halls prepare 20-30% buffer surplus.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span><strong>Cosmetic Imperfection:</strong> Retailers discard curved carrots or blemished fruits despite identical nutrition.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span><strong>Date Label Misconceptions:</strong> Confusing "Best Before" with safety hazard and discarding good food.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span><strong>Cold Chain Inefficiencies:</strong> Lack of temperature controls in tropical transit corridors.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Environmental Impact */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-slate-800 text-rose-600 flex items-center justify-center mb-6">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Devastating Climate Impact
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              When food rots in an anaerobic landfill, it degrades without oxygen, generating deadly greenhouse gases.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>Methane (CH4) Generation:</strong> 28 times more potent than carbon dioxide at trapping heat in the atmosphere.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>Squandered Blue Water:</strong> Agriculture consumes 70% of freshwater; dumping food wastes trillions of liters.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>Deforestation:</strong> Massive tracts of forest cleared for agriculture that goes straight to garbage dumps.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>Economic Loss:</strong> Valued at over $1 Trillion annually worldwide.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Actionable Tips */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Actionable Campus & Home Tips
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Small behavioral adjustments create colossal cumulative conservation impact.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>Smart Portioning:</strong> Start with half-scoops in student dining messes. Refill without plate waste.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>The FIFO Protocol:</strong> First-In, First-Out in fridges and dorm pantries.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>Repurpose Kitchen Scraps:</strong> Simmer carrot peels, onion tops, and celery to brew vegetable stock.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>Freezer Longevity:</strong> Bread slices, cooked curries, and overripe bananas freeze safely for 90 days.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Food Waste Impact Calculator in Clean Light Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xl shadow-stone-200/40 border border-emerald-100 dark:border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center space-x-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest">Interactive Calculator</span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Your Food Waste Ecological Footprint</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Estimate how much food gets discarded weekly to see the hidden atmospheric and water toll.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">Scope / Entity</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'individual', label: 'Student / Dorm' },
                    { id: 'hostel', label: 'Hostel Wing (30x)' },
                    { id: 'restaurant', label: 'Campus Canteen (60x)' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCalculatorCategory(cat.id as any)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition text-center ${
                        calculatorCategory === cat.id
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-stone-200 dark:border-slate-700 hover:bg-stone-50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Weekly Edible Waste:</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-extrabold text-sm">{weeklyWasteKg} kg / person</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={weeklyWasteKg}
                  onChange={(e) => setWeeklyWasteKg(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>0.5 kg (Disciplined)</span>
                  <span>5 kg (Average)</span>
                  <span>10 kg (High Waste)</span>
                </div>
              </div>
            </div>

            {/* Output Visual Impact Stats */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-center shadow-xs">
                <div className="text-2xl font-black text-amber-600 dark:text-amber-400">{annualKg.toLocaleString()} kg</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Annual Food Lost</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">~{Math.round(annualKg * 2.2)} meals thrown into trash</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-center shadow-xs">
                <div className="text-2xl font-black text-rose-600 dark:text-rose-400">{annualCo2Kg.toLocaleString()} kg</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">CO2e Emissions</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-center gap-1">
                  <TreePine className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Needs {equivalentTrees} trees to offset</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-center shadow-xs">
                <div className="text-2xl font-black text-sky-600 dark:text-sky-400">{(annualWaterLiters / 1000).toLocaleString()} kL</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Blue Water Footprint</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-center gap-1">
                  <Droplet className="w-3.5 h-3.5 text-sky-500" />
                  <span>{(annualWaterLiters / 200).toFixed(0)} full bath washes</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Composting Information Section - Radiant Light Theme */}
        <div id="composting" className="bg-gradient-to-br from-emerald-50 via-[#faf9f5] to-teal-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden border border-emerald-200/70 dark:border-slate-800">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200 dark:border-slate-700 shadow-2xs">
              <Sprout className="w-3.5 h-3.5 text-emerald-600" />
              <span>Campus & Dorm Organic Recycling</span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              The 4-Step Composting Masterclass
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Inevitably, banana peels, vegetable trimmings, and tea leaves cannot be eaten. Turn them into nutrient-rich black soil conditioner!
            </p>
          </div>

          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPOSTING_STEPS.map((s) => (
              <div 
                key={s.step} 
                className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-stone-200 dark:border-slate-700 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">{s.step}</div>
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-2 mb-1">{s.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>

          {/* Composting Rules */}
          <div className="mt-10 pt-8 border-t border-emerald-200/60 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/50">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-2 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Great For Composting (Greens & Browns)
              </span>
              <p className="text-emerald-800/90 dark:text-emerald-300/80 leading-relaxed">
                Vegetable skins, coffee grounds, used tea bags, crushed eggshells, fruit rinds, fallen autumn leaves, shredded uncoated paper, cardboard strips.
              </p>
            </div>

            <div className="bg-rose-50/80 dark:bg-rose-950/40 p-4 rounded-2xl border border-rose-200 dark:border-rose-800/50">
              <span className="font-bold text-rose-900 dark:text-rose-300 block mb-2 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" /> Keep Out of Home Compost Bins
              </span>
              <p className="text-rose-800/90 dark:text-rose-300/80 leading-relaxed">
                Meat, poultry bones, dairy cheeses, deep cooking oils, diseased garden plants, plastic wrappers, glossy printed magazines, pet waste.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
