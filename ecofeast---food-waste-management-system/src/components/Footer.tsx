import React from 'react';
import { 
  Sprout, 
  PhoneCall, 
  ShieldCheck, 
  Heart, 
  ArrowUp,
  MapPin,
  Mail,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-16 pb-12 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-600/20">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                Eco<span className="text-emerald-600 dark:text-emerald-400">Feast</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              An intelligent, community-driven food rescue network built to divert surplus cooked meals, fresh produce, and bakery batches from landfills directly to vulnerable families and shelters.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Non-Profit Food Rescue</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Rescue Network</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#stats" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Impact Statistics & Counters</a></li>
              <li><a href="#donate" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Surplus Food Donation Portal</a></li>
              <li><a href="#request" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Community Shelter Food Requests</a></li>
              <li><a href="#dashboard" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Live Rescue Feed & Dispatch</a></li>
              <li><a href="#map" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Regional Availability Radar</a></li>
              <li><a href="#awareness" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Waste Prevention & Composting</a></li>
              <li><a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Food Safety & Good Samaritan Law</a></li>
            </ul>
          </div>

          {/* Food Safety & Guidelines */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Safety & Compliance</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>Good Samaritan Law:</strong> Full legal liability immunity for bona fide food donations.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>4-Hour Window:</strong> Perishable hot food is collected and served within 4 hours.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>Cold-Chain Transit:</strong> Refrigerated batches handled with food-safe thermal carriers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>Verified Non-Profits:</strong> Only registered orphanages, shelters, and soup kitchens.</span>
              </li>
            </ul>
          </div>

          {/* Emergency Hunger Support & Helplines */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-sm">
              <PhoneCall className="w-4 h-4 text-rose-500" />
              <span>Emergency Hunger Line</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              For immediate food rescue pickups from major events or urgent shelter meal requirements:
            </p>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs shadow-xs">
              <div className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-between">
                <span>Toll-Free Hotline:</span>
                <span>1800-FOOD-HELP</span>
              </div>
              <div className="text-slate-800 dark:text-slate-200 flex items-center justify-between">
                <span>Dispatch Coordinator:</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span>Operational Hours:</span>
                <span>7:00 AM – 11:30 PM Daily</span>
              </div>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>contact@ecofeast.org</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-400 text-center sm:text-left">
            © 2026 <strong className="text-slate-800 dark:text-white">EcoFeast Food Rescue Network</strong>. All rights reserved. Dedicated to UN SDG #2 (Zero Hunger) & SDG #12 (Responsible Consumption).
          </p>

          <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
            <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Terms of Service</a>
            <span>•</span>
            <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Safety Standards</a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition shadow-2xs ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
