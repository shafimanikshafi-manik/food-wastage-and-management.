/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Heart, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { DonationItem, RequestItem, NgoPartner, DonationStatus, RequestStatus } from './types';
import { storageService } from './services/storageService';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { DonationForm } from './components/DonationForm';
import { RequestForm } from './components/RequestForm';
import { Dashboard } from './components/Dashboard';
import { InteractiveMap } from './components/InteractiveMap';
import { AwarenessSection } from './components/AwarenessSection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { PartnerAllianceSection } from './components/PartnerAllianceSection';
import { NgoDirectoryModal } from './components/NgoDirectoryModal';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';

export default function App() {
  // Theme State - Default explicitly to light mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ecofeast_theme');
      if (saved) return saved === 'dark';
      return false; // Default to clean light mode
    } catch {
      return false;
    }
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ecofeast_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ecofeast_theme', 'light');
    }
  }, [darkMode]);

  // Core Data States loaded from LocalStorage
  const [donations, setDonations] = useState<DonationItem[]>(() => storageService.getDonations());
  const [requests, setRequests] = useState<RequestItem[]>(() => storageService.getRequests());
  const [ngos, setNgos] = useState<NgoPartner[]>(() => storageService.getNgos());

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isNgoModalOpen, setIsNgoModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState<{ message: string; isSuccess: boolean; visible: boolean }>({
    message: '',
    isSuccess: true,
    visible: false
  });

  const showToast = useCallback((message: string, isSuccess = true) => {
    setToast({ message, isSuccess, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 4000);
  }, []);

  // Handlers for Donations
  const handleAddDonation = (donationData: Omit<DonationItem, 'id' | 'createdAt' | 'status'>) => {
    const newItem = storageService.saveDonation(donationData);
    setDonations(prev => [newItem, ...prev]);
  };

  const handleUpdateDonationStatus = (id: string, status: DonationStatus, assignedTo?: string) => {
    const updated = storageService.updateDonationStatus(id, status, assignedTo);
    setDonations(updated);
  };

  const handleDeleteDonation = (id: string) => {
    const updated = storageService.deleteDonation(id);
    setDonations(updated);
  };

  // Handlers for Requests
  const handleAddRequest = (requestData: Omit<RequestItem, 'id' | 'createdAt' | 'status'>) => {
    const newItem = storageService.saveRequest(requestData);
    setRequests(prev => [newItem, ...prev]);
  };

  const handleUpdateRequestStatus = (id: string, status: RequestStatus) => {
    const updated = storageService.updateRequestStatus(id, status);
    setRequests(updated);
  };

  const handleDeleteRequest = (id: string) => {
    const updated = storageService.deleteRequest(id);
    setRequests(updated);
  };

  // Handlers for NGOs
  const handleAddNgo = (ngoData: Omit<NgoPartner, 'id' | 'joinedDate' | 'verified'>) => {
    const newNgo = storageService.saveNgo(ngoData);
    setNgos(prev => [newNgo, ...prev]);
  };

  // Reset to Initial Seed Data
  const handleResetData = () => {
    const res = storageService.resetToInitialData();
    setDonations(res.donations);
    setRequests(res.requests);
    setNgos(res.ngos);
  };

  // Dynamic system statistics
  const stats = storageService.calculateStats(donations, requests);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        onOpenNgoModal={() => setIsNgoModalOpen(true)}
        onOpenReportModal={() => {}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          stats={stats}
          onOpenDonate={() => {
            const el = document.getElementById('donate');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenRequest={() => {
            const el = document.getElementById('request');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Animated Statistics & Impact Counters */}
        <StatsCounter stats={stats} />

        {/* 4. Core Form Action Sections: Donation & Request */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Contribution Channels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Give Surplus or Request Meals
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Submit food surplus from campus dining halls, banquets, and restaurants, or post urgent dietary demands for community shelters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <DonationForm 
              onAddDonation={handleAddDonation} 
              showToast={showToast} 
            />
            <RequestForm 
              onAddRequest={handleAddRequest} 
              showToast={showToast} 
            />
          </div>
        </section>

        {/* 5. Live Interactive Dashboard & Feed */}
        <Dashboard
          donations={donations}
          requests={requests}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onUpdateDonationStatus={handleUpdateDonationStatus}
          onUpdateRequestStatus={handleUpdateRequestStatus}
          onResetData={handleResetData}
          showToast={showToast}
        />

        {/* 6. Food Availability Map Prototype */}
        <InteractiveMap showToast={showToast} />

        {/* 7. Awareness, Environmental Impact & Composting Section */}
        <AwarenessSection />

        {/* 8. Testimonials & FAQs Section */}
        <TestimonialsAndFaq />

        {/* 9. Partner & ESG Community Impact Alliance */}
        <PartnerAllianceSection
          stats={stats}
          donations={donations}
          requests={requests}
          ngos={ngos}
          showToast={showToast}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* NGO Network Directory & Registration Modal */}
      <NgoDirectoryModal
        isOpen={isNgoModalOpen}
        onClose={() => setIsNgoModalOpen(false)}
        ngos={ngos}
        onAddNgo={handleAddNgo}
        showToast={showToast}
      />

      {/* Admin / Coordinator Panel Modal */}
      <AdminPanel
        isOpen={isAdmin}
        onClose={() => setIsAdmin(false)}
        donations={donations}
        requests={requests}
        stats={stats}
        onUpdateDonationStatus={handleUpdateDonationStatus}
        onDeleteDonation={handleDeleteDonation}
        onUpdateRequestStatus={handleUpdateRequestStatus}
        onDeleteRequest={handleDeleteRequest}
        onResetData={handleResetData}
        showToast={showToast}
      />

      {/* Global Toast Notification */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
          toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`px-5 py-3.5 rounded-2xl shadow-xl flex items-center space-x-3 text-sm font-bold ${
          toast.isSuccess 
            ? 'bg-white text-slate-800 border border-slate-200 shadow-slate-900/10' 
            : 'bg-rose-600 text-white border border-rose-500'
        }`}>
          {toast.isSuccess ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-white shrink-0" />
          )}
          <span>{toast.message}</span>
          <button 
            onClick={() => setToast(prev => ({ ...prev, visible: false }))}
            className="ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
