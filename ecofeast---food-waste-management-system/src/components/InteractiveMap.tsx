import React, { useState } from 'react';
import { 
  MapPin, 
  Truck, 
  CheckCircle2
} from 'lucide-react';
import { MAP_ZONES } from '../data/initialData';

interface InteractiveMapProps {
  showToast: (msg: string, isSuccess?: boolean) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ showToast }) => {
  const [selectedZone, setSelectedZone] = useState<(typeof MAP_ZONES)[0] | null>(MAP_ZONES[0]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'surplus' | 'demand'>('all');

  const filteredZones = MAP_ZONES.filter(z => {
    if (activeFilter === 'surplus') return z.activeDonations > 0;
    if (activeFilter === 'demand') return z.status === 'Urgent Demand';
    return true;
  });

  const handleSimulateDispatch = (zoneName: string) => {
    showToast(`🚐 Volunteer Food Rescue Van dispatched to ${zoneName}! Estimated ETA: 18 mins`, true);
  };

  return (
    <section id="map" className="py-16 bg-[#fafaf7] dark:bg-slate-900/40 border-t border-stone-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Regional Food Rescue Radar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Food Availability & Demand Map
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Interactive food availability tracker displaying campus dining hall surplus, bakery batches, and emergency shelter drop points in real time.
          </p>
        </div>

        {/* Map Container - Crisp Light Modern Visuals */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 border border-stone-200 dark:border-slate-800 shadow-xl shadow-stone-200/50 relative overflow-hidden">
          
          {/* Top Bar Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200 dark:border-slate-800 relative z-10">
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-slate-600 dark:text-slate-400 font-medium">Zone View:</span>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  activeFilter === 'all' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-stone-200'
                }`}
              >
                All Zones (5)
              </button>
              <button
                onClick={() => setActiveFilter('surplus')}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  activeFilter === 'surplus' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-stone-200'
                }`}
              >
                Active Surplus ({MAP_ZONES.filter(z => z.activeDonations > 0).length})
              </button>
              <button
                onClick={() => setActiveFilter('demand')}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  activeFilter === 'demand' ? 'bg-rose-600 text-white shadow-xs' : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-stone-200'
                }`}
              >
                Urgent Shelters (1)
              </button>
            </div>

            <div className="flex items-center space-x-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                Surplus Ready
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                Event Banquet
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                Shelter Deficit
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-stretch">
            
            {/* Left 8 Cols: Interactive Map Canvas Graphic (Luminous Light Slate) */}
            <div className="lg:col-span-8 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f4f7f4] dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 min-h-[380px] sm:min-h-[440px] relative overflow-hidden flex flex-col justify-between">
              
              {/* Radial radar grid background */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>

              {/* Decorative City Road Grid lines */}
              <svg className="absolute inset-0 w-full h-full stroke-slate-300 dark:stroke-slate-700 fill-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,140 Q 250,180 500,120 T 1000,160" strokeWidth="2" strokeDasharray="6,6" />
                <path d="M 160,0 C 220,200 180,400 300,600" strokeWidth="2" strokeDasharray="4,4" />
                <path d="M 0,320 C 300,280 600,380 1000,310" strokeWidth="2.5" />
                <circle cx="28%" cy="32%" r="45" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
                <circle cx="68%" cy="74%" r="55" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
              </svg>

              {/* Top Watermark */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span className="font-mono bg-white/90 dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs font-semibold">
                  GPS: 28.545°N, 77.192°E • University Corridor
                </span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">⚡ Live GPS Telemetry Simulation</span>
              </div>

              {/* Interactive Zone Pins */}
              <div className="relative w-full h-72 sm:h-80">
                {filteredZones.map((zone) => {
                  const isSelected = selectedZone?.id === zone.id;
                  return (
                    <div
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      style={{ top: `${zone.latPercent}%`, left: `${zone.lngPercent}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    >
                      {/* Pulse Effect */}
                      <div className="relative flex items-center justify-center">
                        {zone.activeDonations > 0 && (
                          <span className={`absolute w-9 h-9 rounded-full opacity-75 animate-ping ${
                            zone.color === 'emerald' ? 'bg-emerald-400/40' :
                            zone.color === 'amber' ? 'bg-amber-400/40' : 'bg-rose-400/40'
                          }`}></span>
                        )}
                        
                        <div className={`w-8 h-8 rounded-full border-2 border-white shadow-xl flex items-center justify-center font-black text-xs text-white transition-transform duration-200 ${
                          isSelected ? 'scale-125 ring-4 ring-emerald-400/60' : 'group-hover:scale-110'
                        } ${
                          zone.color === 'emerald' ? 'bg-emerald-600' :
                          zone.color === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
                        }`}>
                          {zone.activeDonations > 0 ? zone.activeDonations : '!'}
                        </div>
                      </div>

                      {/* Floating tooltip */}
                      <div className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-lg transition-opacity pointer-events-none ${
                        isSelected ? 'opacity-100 bg-white text-slate-900 border border-slate-200' : 'opacity-0 group-hover:opacity-100 bg-slate-900 text-white'
                      }`}>
                        {zone.name} ({zone.foodKgAvailable > 0 ? `${zone.foodKgAvailable} kg` : 'Need Meals'})
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Instructions */}
              <div className="relative z-10 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span>💡 Click on any hotspot node to inspect real-time pantry logs & dispatch vans.</span>
                <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">5 Active City Corridors</span>
              </div>

            </div>

            {/* Right 4 Cols: Zone Details Card (Clean Light) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#fcfbf9] dark:bg-slate-800/90 rounded-2xl border border-stone-200 dark:border-slate-700 p-6">
              {selectedZone ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      selectedZone.color === 'emerald' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                      selectedZone.color === 'amber' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                      'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      {selectedZone.status}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">{selectedZone.id}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedZone.name}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{selectedZone.description}</p>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-stone-200 dark:border-slate-700 space-y-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Available Surplus:</span>
                      <strong className="text-emerald-700 dark:text-emerald-400 font-bold">{selectedZone.foodKgAvailable} kg</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Active Batches:</span>
                      <strong className="text-slate-800 dark:text-slate-200 font-bold">{selectedZone.activeDonations} donor batches</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Closest Shelter:</span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">Asha Shelter (~2.4 km)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Average Transit Time:</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">14 - 22 minutes</span>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/70 dark:bg-slate-900 rounded-xl border border-emerald-100 dark:border-slate-700 text-xs text-emerald-900 dark:text-emerald-300 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>Food batches packed in thermal boxes to preserve warmth & hygiene.</span>
                  </div>

                  <button
                    onClick={() => handleSimulateDispatch(selectedZone.name)}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-600/20 transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Dispatch Volunteer Rescue Van</span>
                  </button>
                </div>
              ) : (
                <div className="py-20 text-center text-slate-400 text-xs">
                  Select a pin on the map to view zone details.
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-stone-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Autonomous Route Optimizer</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active Pilot</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
