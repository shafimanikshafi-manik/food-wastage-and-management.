import React, { useState } from 'react';
import { 
  Building2, 
  X, 
  CheckCircle2, 
  PlusCircle 
} from 'lucide-react';
import { NgoPartner } from '../types';

interface NgoDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  ngos: NgoPartner[];
  onAddNgo: (ngo: Omit<NgoPartner, 'id' | 'joinedDate' | 'verified'>) => void;
  showToast: (msg: string, isSuccess?: boolean) => void;
}

export const NgoDirectoryModal: React.FC<NgoDirectoryModalProps> = ({
  isOpen,
  onClose,
  ngos,
  onAddNgo,
  showToast
}) => {
  const [activeTab, setActiveTab] = useState<'list' | 'register'>('list');
  const [name, setName] = useState('');
  const [regId, setRegId] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [operatingArea, setOperatingArea] = useState('');
  const [dailyCapacityMeals, setDailyCapacityMeals] = useState<string>('300');
  const [hasRefrigeration, setHasRefrigeration] = useState(true);
  const [hasVehicle, setHasVehicle] = useState(true);
  const [activeVolunteers, setActiveVolunteers] = useState<string>('20');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contactPerson.trim() || !phone.trim() || !operatingArea.trim()) {
      showToast('Please fill in all mandatory NGO details.', false);
      return;
    }

    onAddNgo({
      name: name.trim(),
      regId: regId.trim() || `NGO/REG/${Math.floor(1000 + Math.random() * 9000)}`,
      contactPerson: contactPerson.trim(),
      phone: phone.trim(),
      email: email.trim(),
      operatingArea: operatingArea.trim(),
      dailyCapacityMeals: Number(dailyCapacityMeals) || 200,
      hasRefrigeration,
      hasVehicle,
      activeVolunteers: Number(activeVolunteers) || 10
    });

    showToast(`🏛️ NGO partner "${name}" successfully registered!`, true);
    setActiveTab('list');

    // Reset
    setName('');
    setRegId('');
    setContactPerson('');
    setPhone('');
    setEmail('');
    setOperatingArea('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-stone-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-stone-200 dark:border-slate-800 flex items-center justify-between bg-stone-50/60 dark:bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Partner NGO Network</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Verified distribution organizations & fleet volunteers</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Header */}
        <div className="px-6 pt-4 flex space-x-2 border-b border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab('list')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition ${
              activeTab === 'list' 
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Active NGOs ({ngos.length})
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'register' 
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Register New NGO</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {activeTab === 'list' ? (
            <div className="space-y-4">
              {ngos.map((ngo) => (
                <div 
                  key={ngo.id}
                  className="p-5 rounded-2xl bg-[#fcfbf9] dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 hover:shadow-md transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">{ngo.name}</h4>
                      {ngo.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">Reg: {ngo.regId}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs py-2 my-2 border-y border-stone-200 dark:border-slate-700">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Capacity</span>
                      <strong className="text-slate-800 dark:text-slate-200">{ngo.dailyCapacityMeals} meals/day</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Volunteers</span>
                      <strong className="text-slate-800 dark:text-slate-200">{ngo.activeVolunteers} active</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Cold Storage</span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">{ngo.hasRefrigeration ? '✅ Yes' : '❌ None'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Rescue Fleet</span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">{ngo.hasVehicle ? '🚐 Insulated Vans' : '🚶 On-foot'}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-300 gap-2 mt-2">
                    <span>📍 Area: <strong className="text-slate-900 dark:text-white">{ngo.operatingArea}</strong></span>
                    <span>Coordinator: <strong className="text-slate-900 dark:text-white">{ngo.contactPerson}</strong> ({ngo.phone})</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">NGO Organization Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hope Food Mission"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Registration / NGO Darpan ID</label>
                  <input
                    type="text"
                    value={regId}
                    onChange={(e) => setRegId(e.target.value)}
                    placeholder="e.g. DL/2023/NGO/9492"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Lead Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Anita Roy"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Operating Zones / Service Area *</label>
                <input
                  type="text"
                  required
                  value={operatingArea}
                  onChange={(e) => setOperatingArea(e.target.value)}
                  placeholder="e.g. North University Campus, Railway Colony, Sector 12"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Daily Meal Distribution Capacity</label>
                  <input
                    type="number"
                    min="10"
                    value={dailyCapacityMeals}
                    onChange={(e) => setDailyCapacityMeals(e.target.value)}
                    placeholder="300"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Volunteer Strength</label>
                  <input
                    type="number"
                    min="1"
                    value={activeVolunteers}
                    onChange={(e) => setActiveVolunteers(e.target.value)}
                    placeholder="15"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasRefrigeration}
                    onChange={(e) => setHasRefrigeration(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Has Cold Storage Facility</span>
                </label>

                <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasVehicle}
                    onChange={(e) => setHasVehicle(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Has Insulated Food Vans</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-600/20 transition cursor-pointer"
              >
                ✓ Complete NGO Registration
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
