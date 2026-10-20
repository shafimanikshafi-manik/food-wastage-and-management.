import React, { useState } from 'react';
import { 
  Package, 
  HandHeart, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle, 
  Truck, 
  RefreshCw
} from 'lucide-react';
import { DonationItem, RequestItem, DonationStatus, RequestStatus } from '../types';

interface DashboardProps {
  donations: DonationItem[];
  requests: RequestItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onUpdateDonationStatus: (id: string, status: DonationStatus, assignedTo?: string) => void;
  onUpdateRequestStatus: (id: string, status: RequestStatus) => void;
  onResetData: () => void;
  showToast: (msg: string, isSuccess?: boolean) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  donations,
  requests,
  searchQuery,
  setSearchQuery,
  onUpdateDonationStatus,
  onUpdateRequestStatus,
  onResetData,
  showToast
}) => {
  const [activeTab, setActiveTab] = useState<'donations' | 'requests'>('donations');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedDonation, setSelectedDonation] = useState<DonationItem | null>(null);

  // Filter donations
  const filteredDonations = donations.filter(d => {
    const matchesSearch = 
      !searchQuery ||
      d.foodName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.donorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.foodType.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || d.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Filter requests
  const filteredRequests = requests.filter(r => {
    const matchesSearch = 
      !searchQuery ||
      r.foodNeeded.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.requesterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.urgency.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || r.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleClaim = (donation: DonationItem) => {
    onUpdateDonationStatus(donation.id, 'Assigned', 'Asha Community Shelter');
    showToast(`✅ Donation #${donation.id} assigned to shelter van for pickup!`, true);
  };

  const handleMarkDelivered = (donation: DonationItem) => {
    onUpdateDonationStatus(donation.id, 'Completed');
    showToast(`🎉 Food #${donation.id} successfully delivered to beneficiaries!`, true);
  };

  const handleFulfillRequest = (request: RequestItem) => {
    onUpdateRequestStatus(request.id, 'Fulfilled');
    showToast(`🤝 Request #${request.id} marked as fulfilled!`, true);
  };

  return (
    <section id="dashboard" className="py-16 bg-white dark:bg-slate-950 border-t border-stone-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Live System Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Dynamic Surplus & Demand Feed
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Browse active surplus food items from campus dining halls & open shelter requests.
            </p>
          </div>

          {/* Quick Search & Reset Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food, location, donor..."
                className="w-56 sm:w-72 pl-9 pr-4 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <button
              onClick={onResetData}
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
              title="Restore dataset to default verified active records"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restore Data</span>
            </button>
          </div>
        </div>

        {/* Tab Selector & Filter Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-slate-800 pb-4 mb-8">
          
          {/* Main Switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => { setActiveTab('donations'); setStatusFilter('all'); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                activeTab === 'donations'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 hover:bg-stone-200'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Surplus Food Donations</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
                activeTab === 'donations' ? 'bg-emerald-700 text-white' : 'bg-stone-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
              }`}>
                {donations.length}
              </span>
            </button>

            <button
              onClick={() => { setActiveTab('requests'); setStatusFilter('all'); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition ${
                activeTab === 'requests'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 hover:bg-stone-200'
              }`}
            >
              <HandHeart className="w-4 h-4" />
              <span>Shelter Food Demands</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
                activeTab === 'requests' ? 'bg-amber-700 text-white' : 'bg-stone-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
              }`}>
                {requests.length}
              </span>
            </button>
          </div>

          {/* Quick Sub-Filter Pills */}
          <div className="flex items-center space-x-1.5 text-xs">
            <span className="text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {['all', ...(activeTab === 'donations' ? ['available', 'assigned', 'completed'] : ['open', 'in progress', 'fulfilled'])].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-2.5 py-1 rounded-lg font-semibold capitalize transition ${
                  statusFilter === s
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xs'
                    : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-stone-200 border border-stone-200 dark:border-slate-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

        </div>

        {/* Tab 1: Food Donations Cards */}
        {activeTab === 'donations' && (
          <div>
            {filteredDonations.length === 0 ? (
              <div className="p-12 text-center bg-stone-50 dark:bg-slate-900 rounded-3xl border border-dashed border-stone-300 dark:border-slate-800">
                <Package className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">No Food Donations Found</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search keywords or filter pills, or click "Reset Samples" to restore sample items.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDonations.map((d) => (
                  <div
                    key={d.id}
                    className="bg-[#fcfbf9] dark:bg-slate-900 rounded-3xl p-6 border border-stone-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          d.status === 'Available'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300'
                            : d.status === 'Assigned'
                            ? 'bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-950/60 dark:text-sky-300'
                            : 'bg-stone-100 text-slate-600 border border-stone-200 dark:bg-slate-800 dark:text-slate-300'
                        }`}>
                          {d.status === 'Available' && '● '}
                          {d.status}
                        </span>

                        <span className="text-[11px] font-mono text-slate-500 font-bold bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-stone-200 dark:border-slate-700">
                          {d.id}
                        </span>
                      </div>

                      {/* Food Name & Donor */}
                      <h4 className="font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                        {d.foodName}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        By <strong className="text-slate-800 dark:text-slate-200 font-semibold">{d.donorName}</strong> ({d.donorType})
                      </p>

                      {/* Food Metrics Grid */}
                      <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-white dark:bg-slate-800/80 rounded-2xl text-xs border border-stone-200 dark:border-slate-700">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Quantity</span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-sm">{d.quantity} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Servings</span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-sm">~{d.servings} meals</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Storage</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{d.temperature}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Category</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300 truncate block">{d.foodType}</span>
                        </div>
                      </div>

                      {/* Location & Contact Info */}
                      <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <div className="flex items-start space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{d.location}, {d.city}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{d.expiryWindow || d.preparedTime}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="font-semibold">{d.contactNumber}</span>
                        </div>
                      </div>

                      {/* Notes / Special Packaging */}
                      {d.notes && (
                        <div className="mt-3 text-[11px] p-2 bg-emerald-50/60 dark:bg-slate-800 rounded-xl text-emerald-900 dark:text-emerald-300 border border-emerald-100 dark:border-slate-700">
                          💬 {d.notes}
                        </div>
                      )}

                      {d.assignedTo && (
                        <div className="mt-2 text-[11px] text-sky-700 dark:text-sky-300 font-semibold">
                          Van Assigned: {d.assignedTo}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-5 pt-4 border-t border-stone-200 dark:border-slate-800 flex items-center gap-2">
                      {d.status === 'Available' ? (
                        <button
                          onClick={() => handleClaim(d)}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                        >
                          <Truck className="w-3.5 h-3.5" />
                          <span>Dispatch NGO Van</span>
                        </button>
                      ) : d.status === 'Assigned' ? (
                        <button
                          onClick={() => handleMarkDelivered(d)}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Mark as Delivered</span>
                        </button>
                      ) : (
                        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5 py-1">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          Delivered to beneficiaries
                        </span>
                      )}

                      <button
                        onClick={() => setSelectedDonation(d)}
                        className="py-2.5 px-3 rounded-xl border border-stone-200 dark:border-slate-700 hover:bg-stone-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200"
                        title="View Donation Slip Details"
                      >
                        Slip
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Shelter Food Requests Cards */}
        {activeTab === 'requests' && (
          <div>
            {filteredRequests.length === 0 ? (
              <div className="p-12 text-center bg-stone-50 dark:bg-slate-900 rounded-3xl border border-dashed border-stone-300 dark:border-slate-800">
                <HandHeart className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">No Food Requests Found</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  No open shelter food demands currently match your search filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRequests.map((r) => (
                  <div
                    key={r.id}
                    className="bg-[#fcfbf9] dark:bg-slate-900 rounded-3xl p-6 border border-stone-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          r.urgency.includes('Urgent')
                            ? 'bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/60 dark:text-rose-300'
                            : 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-300'
                        }`}>
                          {r.urgency}
                        </span>

                        <span className="text-[11px] font-mono text-slate-500 font-bold bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-stone-200 dark:border-slate-700">
                          {r.id}
                        </span>
                      </div>

                      {/* Requester Name & Need */}
                      <h4 className="font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                        {r.requesterName}
                      </h4>
                      <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-1">
                        Demand: {r.foodNeeded}
                      </div>

                      {/* Requirement Metrics */}
                      <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-white dark:bg-slate-800/80 rounded-2xl text-xs border border-stone-200 dark:border-slate-700">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Quantity Needed</span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-sm">{r.quantityNeededKg} kg</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Beneficiaries</span>
                          <span className="font-extrabold text-slate-900 dark:text-white text-sm">~{r.servingsNeeded} people</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Category</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{r.requesterType}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Status</span>
                          <span className="font-bold text-amber-600">{r.status}</span>
                        </div>
                      </div>

                      {/* Location & Coordinator */}
                      <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <div className="flex items-start space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{r.location}, {r.city}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{r.contactPerson} ({r.contactNumber})</span>
                        </div>
                      </div>

                      {/* Notes */}
                      {r.notes && (
                        <div className="mt-3 text-[11px] p-2 bg-amber-50/60 dark:bg-slate-800 rounded-xl text-amber-900 dark:text-amber-300 border border-amber-100 dark:border-slate-700">
                          ℹ️ {r.notes}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="mt-5 pt-4 border-t border-stone-200 dark:border-slate-800">
                      {r.status !== 'Fulfilled' ? (
                        <button
                          onClick={() => handleFulfillRequest(r)}
                          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Fulfill & Connect with Surplus</span>
                        </button>
                      ) : (
                        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1.5 py-1">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          Demand Fulfilled
                        </span>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Slip Modal Popup */}
      {selectedDonation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-stone-200 dark:border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Digital Waybill</span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">Donation Slip #{selectedDonation.id}</h4>
              </div>
              <button 
                onClick={() => setSelectedDonation(null)}
                className="text-slate-400 hover:text-slate-700 p-1 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex justify-between py-1 border-b border-stone-100 dark:border-slate-800">
                <span className="text-slate-500">Food Item:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedDonation.foodName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100 dark:border-slate-800">
                <span className="text-slate-500">Donor Name:</span>
                <span className="font-bold">{selectedDonation.donorName} ({selectedDonation.donorType})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100 dark:border-slate-800">
                <span className="text-slate-500">Total Quantity:</span>
                <span className="font-bold text-emerald-600">{selectedDonation.quantity} kg (~{selectedDonation.servings} meals)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100 dark:border-slate-800">
                <span className="text-slate-500">Storage / Temp:</span>
                <span className="font-medium">{selectedDonation.temperature}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100 dark:border-slate-800">
                <span className="text-slate-500">Pickup Location:</span>
                <span className="font-medium text-right max-w-[200px]">{selectedDonation.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100 dark:border-slate-800">
                <span className="text-slate-500">Donor Contact:</span>
                <span className="font-mono font-bold">{selectedDonation.contactNumber}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100 dark:border-slate-800">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-emerald-600">{selectedDonation.status}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 text-[11px] text-emerald-900 dark:text-emerald-300 mb-4">
              🛡️ Certified under the Food Safety and Standards (Recovery of Surplus Food) Regulations 2019.
            </div>

            <button
              onClick={() => setSelectedDonation(null)}
              className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold cursor-pointer hover:bg-slate-800"
            >
              Close Waybill Slip
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
