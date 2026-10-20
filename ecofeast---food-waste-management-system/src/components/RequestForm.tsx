import React, { useState } from 'react';
import { 
  HandHeart, 
  MapPin, 
  Phone, 
  Users, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { RequestItem, RequestUrgency } from '../types';

interface RequestFormProps {
  onAddRequest: (request: Omit<RequestItem, 'id' | 'createdAt' | 'status'>) => void;
  showToast: (msg: string, isSuccess?: boolean) => void;
}

export const RequestForm: React.FC<RequestFormProps> = ({ onAddRequest, showToast }) => {
  const [requesterName, setRequesterName] = useState('');
  const [requesterType, setRequesterType] = useState<RequestItem['requesterType']>('NGO');
  const [foodNeeded, setFoodNeeded] = useState('');
  const [quantityNeededKg, setQuantityNeededKg] = useState<string>('');
  const [servingsNeeded, setServingsNeeded] = useState<string>('');
  const [urgency, setUrgency] = useState<RequestUrgency>('Urgent (Within 2 hrs)');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('Metro City');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedReq, setSubmittedReq] = useState<RequestItem | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!requesterName.trim() || !foodNeeded.trim() || !quantityNeededKg || !location.trim() || !contactPerson.trim() || !contactNumber.trim()) {
      showToast('Please fill out all required fields.', false);
      return;
    }

    const qtyNum = Number(quantityNeededKg);
    if (isNaN(qtyNum) || qtyNum <= 0) {
      showToast('Please specify a valid food quantity in kg.', false);
      return;
    }

    const servNum = Number(servingsNeeded) || Math.round(qtyNum * 2.2);

    const requestData: Omit<RequestItem, 'id' | 'createdAt' | 'status'> = {
      requesterName: requesterName.trim(),
      requesterType,
      foodNeeded: foodNeeded.trim(),
      quantityNeededKg: qtyNum,
      servingsNeeded: servNum,
      urgency,
      location: location.trim(),
      city: city.trim(),
      contactPerson: contactPerson.trim(),
      contactNumber: contactNumber.trim(),
      notes: notes.trim()
    };

    onAddRequest(requestData);
    showToast(`📢 Shelter request for "${foodNeeded}" posted to the live network!`, true);

    const dummySlip: RequestItem = {
      ...requestData,
      id: `REQ-${Math.floor(200 + Math.random() * 800)}`,
      createdAt: new Date().toISOString(),
      status: 'Open'
    };
    setSubmittedReq(dummySlip);

    // Reset Form
    setRequesterName('');
    setFoodNeeded('');
    setQuantityNeededKg('');
    setServingsNeeded('');
    setLocation('');
    setContactPerson('');
    setContactNumber('');
    setNotes('');
  };

  return (
    <div id="request" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-slate-800 shadow-sm transition-colors">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-slate-800 text-amber-600 flex items-center justify-center">
          <HandHeart className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Food Request Form
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            For verified NGOs, shelters, orphanages, and community distribution centers
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Requester Name & Organization Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              NGO / Shelter / Requester Name *
            </label>
            <input
              type="text"
              required
              value={requesterName}
              onChange={(e) => setRequesterName(e.target.value)}
              placeholder="e.g. Asha Children Home, St. Jude Shelter"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Requester Classification
            </label>
            <select
              value={requesterType}
              onChange={(e) => setRequesterType(e.target.value as RequestItem['requesterType'])}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
            >
              <option value="NGO">Registered NGO / Non-Profit</option>
              <option value="Shelter Home">Night Shelter / Homeless Care</option>
              <option value="Orphanage">Children Home / Orphanage</option>
              <option value="Community Kitchen">Community Kitchen / Langar</option>
              <option value="Individual">Individual Volunteer / Citizen</option>
            </select>
          </div>
        </div>

        {/* Urgency & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Urgency Level *
            </label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value as RequestUrgency)}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition font-semibold"
            >
              <option value="Urgent (Within 2 hrs)">🚨 Urgent (Needed Within 2 Hours)</option>
              <option value="Moderate (Today)">⏳ Moderate (Needed Today)</option>
              <option value="Planned (Tomorrow)">📅 Planned (Scheduled for Tomorrow)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Quantity Needed (kg) *
            </label>
            <input
              type="number"
              required
              min="1"
              value={quantityNeededKg}
              onChange={(e) => {
                setQuantityNeededKg(e.target.value);
                if (!servingsNeeded && e.target.value) {
                  setServingsNeeded(String(Math.round(Number(e.target.value) * 2.2)));
                }
              }}
              placeholder="e.g. 20"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
            />
          </div>
        </div>

        {/* Food Needed & Number of People */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Food Needed & Dietary Requirements *
            </label>
            <input
              type="text"
              required
              value={foodNeeded}
              onChange={(e) => setFoodNeeded(e.target.value)}
              placeholder="e.g. Cooked lunch meals for 40 children, mild spices"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Beneficiaries / Servings Needed
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                value={servingsNeeded}
                onChange={(e) => setServingsNeeded(e.target.value)}
                placeholder="e.g. 45 people"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
              />
              <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>
        </div>

        {/* Location & Contact Person */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Delivery / Drop-Off Location *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. 12-B Shanti Niketan Road, Civil Lines"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
              />
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Contact Coordinator Name *
            </label>
            <input
              type="text"
              required
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              placeholder="e.g. Sister Mary / Rajesh Sharma"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
            />
          </div>
        </div>

        {/* Contact Phone & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Emergency Contact Phone *
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="+91 98334 45566"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
              />
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Operational City
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Metro City"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
            Special Notes / Delivery Windows
          </label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. We have refrigeration available. Pickup van can reach donor within 40 minutes."
            className="w-full px-4 py-2 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/40 outline-none transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm shadow-md shadow-amber-600/20 hover:shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Broadcast Food Request</span>
        </button>

      </form>

      {/* Confirmation Slip after submission */}
      {submittedReq && (
        <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> Request Broadcasted
            </span>
            <span className="font-mono bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-amber-200 dark:border-slate-700 font-bold">
              {submittedReq.id}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            Request for <strong>{submittedReq.quantityNeededKg} kg</strong> ({submittedReq.foodNeeded}) by <strong>{submittedReq.requesterName}</strong> is broadcast to all active college mess hubs and donors.
          </p>
        </div>
      )}

    </div>
  );
};
