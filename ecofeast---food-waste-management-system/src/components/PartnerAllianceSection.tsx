import React from 'react';
import { 
  Building2, 
  FileDown, 
  ShieldCheck, 
  Leaf, 
  CheckCircle2, 
  HeartHandshake, 
  ArrowRight
} from 'lucide-react';
import { SystemStats, DonationItem, RequestItem, NgoPartner } from '../types';
import { downloadProjectReport } from '../utils/reportGenerator';

interface PartnerAllianceSectionProps {
  stats: SystemStats;
  donations: DonationItem[];
  requests: RequestItem[];
  ngos: NgoPartner[];
  showToast: (msg: string, isSuccess?: boolean) => void;
}

export const PartnerAllianceSection: React.FC<PartnerAllianceSectionProps> = ({
  stats,
  donations,
  requests,
  ngos,
  showToast
}) => {
  const handleDownloadReport = () => {
    downloadProjectReport(stats, donations, requests, ngos);
    showToast('📑 Official EcoFeast Community & ESG Impact Audit downloaded successfully!', true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          
          {/* Top Decorative Ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-600 text-white text-[11px] font-black uppercase tracking-widest px-6 py-1.5 rounded-bl-2xl shadow-xs">
            Community Alliance
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 8 Cols: Organization Mission & ESG Value */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider border border-emerald-200 dark:border-slate-700">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Zero Hunger • Zero Waste Initiative</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Partner Your Organization With EcoFeast
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Whether you manage a university dining hall, corporate cafeteria, wedding banquet venue, or supermarket chain, EcoFeast eliminates food waste logistics. Connect directly with registered shelters and receive verifiable ESG impact metrics.
              </p>

              {/* 3 Real Partner Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-start space-x-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-slate-900 dark:text-white block font-bold">Good Samaritan Protected</strong>
                    <span className="text-slate-500 dark:text-slate-400">100% legal immunity for good-faith food donations</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-slate-900 dark:text-white block font-bold">ESG & Climate Credits</strong>
                    <span className="text-slate-500 dark:text-slate-400">Audit-ready carbon & water savings reports</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-slate-900 dark:text-white block font-bold">Rapid Cold Pickup</strong>
                    <span className="text-slate-500 dark:text-slate-400">Insulated food transport dispatched under 60 min</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Real CTAs & Impact Audit Download */}
            <div className="lg:col-span-4 flex flex-col space-y-3.5 bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Transparent Accountability
              </div>

              <div className="text-sm text-slate-700 dark:text-slate-300">
                Download the real-time verified ledger detailing all active donations, community shelters, and environmental deflection.
              </div>

              <button
                onClick={handleDownloadReport}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs shadow-md transition hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                <span>Download ESG & Impact Audit</span>
              </button>

              <a
                href="#donate"
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition hover:-translate-y-0.5"
              >
                <span>Register Surplus Batch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 pt-1">
                Zero fees for non-profits and registered shelters
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
