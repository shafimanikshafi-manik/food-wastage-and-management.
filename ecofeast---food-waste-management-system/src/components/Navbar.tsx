import React, { useState } from 'react';
import { 
  Sprout, 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  Heart, 
  Building2,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  onOpenNgoModal: () => void;
  onOpenReportModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  isAdmin,
  setIsAdmin,
  onOpenNgoModal,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Brand Logo & Real Non-Profit Tag */}
          <div className="flex items-center space-x-3 min-w-0">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform font-black">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                  Eco<span className="text-emerald-600 dark:text-emerald-400">Feast</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                  Food Rescue Network
                </span>
              </div>
            </a>

            {/* Official Network Status Pill */}
            <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Zero-Waste Community Network</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#stats" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Our Impact</a>
            <a href="#donate" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Donate Food</a>
            <a href="#request" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Request Food</a>
            <a href="#dashboard" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Live Feed</a>
            <a href="#map" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Rescue Radar</a>
            <a href="#awareness" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Food Waste Guide</a>
            <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">FAQ</a>
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Quick Search */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search meals, locations, shelters..."
                    autoFocus
                    className="w-44 sm:w-60 px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                  <button 
                    onClick={() => { setShowSearchInput(false); setSearchQuery(''); }}
                    className="ml-1 text-slate-400 hover:text-slate-700 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  title="Search items"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* NGO Network Directory Trigger */}
            <button
              onClick={onOpenNgoModal}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Verified Partner NGOs & Shelters"
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Partner Shelters</span>
            </button>

            {/* Coordinator / Admin Portal Toggle */}
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`p-2 rounded-xl transition text-xs font-semibold flex items-center space-x-1 ${
                isAdmin 
                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent'
              }`}
              title={isAdmin ? "Exit Staff Coordinator View" : "Staff Coordinator Portal"}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">{isAdmin ? 'Staff Mode Active' : 'Coordinator'}</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle Theme"
              title="Toggle Dark / Light Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#donate"
              className="hidden sm:inline-flex items-center space-x-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm shadow-emerald-600/25 transition hover:shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Donate Food</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-3">
          <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700 text-xs text-emerald-800 dark:text-emerald-300 font-semibold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              Emergency Food Hotline
            </span>
            <span className="font-bold">1800-FOOD-HELP</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <a 
              href="#stats" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Our Impact
            </a>
            <a 
              href="#donate" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Donate Food
            </a>
            <a 
              href="#request" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Request Food
            </a>
            <a 
              href="#dashboard" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Live Feed
            </a>
            <a 
              href="#map" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Rescue Radar
            </a>
            <a 
              href="#awareness" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Food Waste Guide
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              FAQ
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNgoModal();
              }}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-emerald-700 dark:text-emerald-400 text-left font-semibold"
            >
              Partner Shelters
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                setIsAdmin(!isAdmin);
                setMobileMenuOpen(false);
              }}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{isAdmin ? 'Staff Mode (Active)' : 'Coordinator Portal'}</span>
            </button>
            <a
              href="#donate"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center space-x-1.5 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Donate Food</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
