import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Trash2, 
  Download, 
  RefreshCw, 
  X 
} from 'lucide-react';
import { DonationItem, RequestItem, DonationStatus, RequestStatus, SystemStats } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  donations: DonationItem[];
  requests: RequestItem[];
  stats: SystemStats;
  onUpdateDonationStatus: (id: string, status: DonationStatus, assignedTo?: string) => void;
  onDeleteDonation: (id: string) => void;
  onUpdateRequestStatus: (id: string, status: RequestStatus) => void;
  onDeleteRequest: (id: string) => void;
  onResetData: () => void;
  showToast: (msg: string, isSuccess?: boolean) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  donations,
  requests,
  stats,
  onUpdateDonationStatus,
  onDeleteDonation,
  onUpdateRequestStatus,
  onDeleteRequest,
  onResetData,
  showToast
}) => {
  const [activeTab, setActiveTab] = useState<'donations' | 'requests'>('donations');

  if (!isOpen) return null;

  const exportJsonData = () => {
    const backup = {
      system: 'EcoFeast Food Rescue Network',
      version: '2.4.0-production',
      exportedAt: new Date().toISOString(),
      stats,
      donations,
      requests
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ecofeast_admin_dump_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('💾 Database snapshot downloaded as JSON file.', true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col border border-stone-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 dark:border-slate-800 flex items-center justify-between bg-stone-50/60 dark:bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Admin & Logistics Console</h3>
                <span className="text-[10px] font-bold bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 px-2.5 py-0.5 rounded-full">
                  Coordinator View
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Direct LocalStorage database management and dispatch overrides</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={exportJsonData}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-stone-200 dark:border-slate-700 text-xs font-semibold hover:bg-stone-50 transition"
              title="Export database snapshot as JSON"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Backup JSON</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Reset database to initial university seed data?')) {
                  onResetData();
                  showToast('↺ Database restored to default seed items.', true);
                }
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-semibold hover:bg-rose-100 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset DB</span>
            </button>

            <button 
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-4 flex space-x-3 border-b border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab('donations')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition ${
              activeTab === 'donations'
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Manage Food Donations ({donations.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition ${
              activeTab === 'requests'
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Manage Shelter Requests ({requests.length})
          </button>
        </div>

        {/* Content Table */}
        <div className="p-6 overflow-y-auto">
          {activeTab === 'donations' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="pb-3 font-bold">ID & Donor</th>
                    <th className="pb-3 font-bold">Food Details</th>
                    <th className="pb-3 font-bold">Quantity</th>
                    <th className="pb-3 font-bold">Location</th>
                    <th className="pb-3 font-bold">Current Status</th>
                    <th className="pb-3 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {donations.map((d) => (
                    <tr key={d.id} className="hover:bg-stone-50 dark:hover:bg-slate-800/50 transition">
                      <td className="py-3 pr-3 font-medium">
                        <span className="font-mono font-bold text-slate-900 dark:text-white block">{d.id}</span>
                        <span className="text-[11px] text-slate-500">{d.donorName} ({d.donorType})</span>
                      </td>
                      <td className="py-3 pr-3">
                        <span className="font-semibold text-slate-900 dark:text-white block">{d.foodName}</span>
                        <span className="text-[11px] text-slate-500">{d.foodType} • {d.temperature}</span>
                      </td>
                      <td className="py-3 pr-3">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block">{d.quantity} kg</span>
                        <span className="text-[11px] text-slate-500">~{d.servings} meals</span>
                      </td>
                      <td className="py-3 pr-3 text-[11px]">
                        <span className="block truncate max-w-[160px]">{d.location}</span>
                        <span className="text-slate-400">{d.contactNumber}</span>
                      </td>
                      <td className="py-3 pr-3">
                        <select
                          value={d.status}
                          onChange={(e) => {
                            onUpdateDonationStatus(d.id, e.target.value as DonationStatus);
                            showToast(`Donation #${d.id} status updated to ${e.target.value}`, true);
                          }}
                          className="px-2 py-1 rounded-lg border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-white text-[11px] font-semibold"
                        >
                          <option value="Available">Available</option>
                          <option value="Assigned">Assigned to Van</option>
                          <option value="Picked Up">Picked Up</option>
                          <option value="Completed">Delivered</option>
                        </select>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => {
                            if (confirm(`Delete donation #${d.id}?`)) {
                              onDeleteDonation(d.id);
                              showToast(`Donation #${d.id} removed.`, true);
                            }
                          }}
                          className="p-1.5 text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition"
                          title="Delete donation entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="pb-3 font-bold">ID & Requester</th>
                    <th className="pb-3 font-bold">Demand Specs</th>
                    <th className="pb-3 font-bold">Target</th>
                    <th className="pb-3 font-bold">Location</th>
                    <th className="pb-3 font-bold">Status</th>
                    <th className="pb-3 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {requests.map((r) => (
                    <tr key={r.id} className="hover:bg-stone-50 dark:hover:bg-slate-800/50 transition">
                      <td className="py-3 pr-3 font-medium">
                        <span className="font-mono font-bold text-slate-900 dark:text-white block">{r.id}</span>
                        <span className="text-[11px] text-slate-500">{r.requesterName}</span>
                      </td>
                      <td className="py-3 pr-3">
                        <span className="font-semibold text-slate-900 dark:text-white block">{r.foodNeeded}</span>
                        <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">{r.urgency}</span>
                      </td>
                      <td className="py-3 pr-3">
                        <span className="font-bold text-amber-600 dark:text-amber-400 block">{r.quantityNeededKg} kg</span>
                        <span className="text-[11px] text-slate-500">~{r.servingsNeeded} people</span>
                      </td>
                      <td className="py-3 pr-3 text-[11px]">
                        <span className="block truncate max-w-[160px]">{r.location}</span>
                        <span className="text-slate-400">{r.contactPerson} ({r.contactNumber})</span>
                      </td>
                      <td className="py-3 pr-3">
                        <select
                          value={r.status}
                          onChange={(e) => {
                            onUpdateRequestStatus(r.id, e.target.value as RequestStatus);
                            showToast(`Request #${r.id} status changed to ${e.target.value}`, true);
                          }}
                          className="px-2 py-1 rounded-lg border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-white text-[11px] font-semibold"
                        >
                          <option value="Open">Open</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Fulfilled">Fulfilled</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => {
                            if (confirm(`Delete request #${r.id}?`)) {
                              onDeleteRequest(r.id);
                              showToast(`Request #${r.id} deleted.`, true);
                            }
                          }}
                          className="p-1.5 text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition"
                          title="Delete request entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
