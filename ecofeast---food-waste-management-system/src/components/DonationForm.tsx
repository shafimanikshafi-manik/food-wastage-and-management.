import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { FoodType, DonationItem } from '../types';

interface DonationFormProps {
  onAddDonation: (donation: Omit<DonationItem, 'id' | 'createdAt' | 'status'>) => void;
  showToast: (msg: string, isSuccess?: boolean) => void;
}

export const DonationForm: React.FC<DonationFormProps> = ({ onAddDonation, showToast }) => {
  const [donorName, setDonorName] = useState('');
  const [donorType, setDonorType] = useState<DonationItem['donorType']>('Hostel Mess');
  const [foodType, setFoodType] = useState<FoodType>('Cooked Meals');
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState<string>('');
  const [servings, setServings] = useState<string>('');
  const [location, setLocation] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city] = useState('Metro City');
  const [contactNumber, setContactNumber] = useState('');
  const [preparedTime, setPreparedTime] = useState('Today, 1:00 PM');
  const [expiryWindow, setExpiryWindow] = useState('Safe for next 5-6 hours');
  const [temperature, setTemperature] = useState<'Hot' | 'Room Temp' | 'Refrigerated'>('Hot');
  const [notes, setNotes] = useState('');
  const [submittedDonation, setSubmittedDonation] = useState<DonationItem | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!donorName.trim() || !foodName.trim() || !quantity || !location.trim() || !contactNumber.trim()) {
      showToast('Please fill in all required fields.', false);
      return;
    }

    const qtyNum = Number(quantity);
    if (isNaN(qtyNum) || qtyNum <= 0) {
      showToast('Please enter a valid positive quantity.', false);
      return;
    }

    const servNum = Number(servings) || Math.round(qtyNum * 2.2);

    const donationData: Omit<DonationItem, 'id' | 'createdAt' | 'status'> = {
      donorName: donorName.trim(),
      donorType,
      foodType,
      foodName: foodName.trim(),
      quantity: qtyNum,
      servings: servNum,
      location: location.trim(),
      landmark: landmark.trim(),
      city,
      contactNumber: contactNumber.trim(),
      preparedTime,
      expiryWindow,
      temperature,
      notes: notes.trim()
    };

    onAddDonation(donationData);
    showToast(`🎉 Thank you, ${donorName}! Donation of ${qtyNum} kg recorded.`, true);

    const dummySlip: DonationItem = {
      ...donationData,
      id: `DON-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      status: 'Available'
    };
    setSubmittedDonation(dummySlip);

    // Reset Form
    setDonorName('');
    setFoodName('');
    setQuantity('');
    setServings('');
    setLocation('');
    setLandmark('');
    setContactNumber('');
    setNotes('');
  };

  return (
    <div id="donate" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-slate-800 shadow-sm transition-colors">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 flex items-center justify-center">
          <UtensilsCrossed className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Food Donation Form
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Post surplus cooked meals, bakery, or groceries for immediate pickup
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Donor Name & Donor Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Donor Name / Establishment *
            </label>
            <input
              type="text"
              required
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="e.g. Campus Hostel Mess #2, Green Bakery"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Donor Category
            </label>
            <select
              value={donorType}
              onChange={(e) => setDonorType(e.target.value as DonationItem['donorType'])}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            >
              <option value="Hostel Mess">Hostel Mess / Dining Hall</option>
              <option value="College Canteen">College Canteen / Cafeteria</option>
              <option value="Restaurant">Restaurant / Bistro</option>
              <option value="Event/Wedding">Wedding / Banquet Party</option>
              <option value="Supermarket">Supermarket / Grocery Mart</option>
              <option value="Individual">Individual Donor / Resident</option>
            </select>
          </div>
        </div>

        {/* Food Type & Specific Item Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Food Type *
            </label>
            <select
              value={foodType}
              onChange={(e) => setFoodType(e.target.value as FoodType)}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            >
              <option value="Cooked Meals">Cooked Meals (Rice, Curry, Dal, Roti)</option>
              <option value="Bakery & Bread">Bakery & Bread</option>
              <option value="Fresh Fruits & Veggies">Fresh Fruits & Vegetables</option>
              <option value="Raw Grains & Rice">Raw Grains & Pulses</option>
              <option value="Packaged Foods">Packaged / Sealed Foods</option>
              <option value="Dairy Products">Dairy Products (Paneer, Milk)</option>
              <option value="Beverages">Beverages / Juice</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Food Item Details *
            </label>
            <input
              type="text"
              required
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="e.g. Vegetable Biryani, Dal Makhani & Roti"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            />
          </div>
        </div>

        {/* Quantity (kg) & Servings Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Approximate Weight (in Kg) *
            </label>
            <input
              type="number"
              step="0.5"
              min="0.5"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 15"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Estimated Servings / People Fed
            </label>
            <input
              type="number"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              placeholder="e.g. 35 people"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            />
          </div>
        </div>

        {/* Pickup Location & Landmark */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Pickup Address / Gate *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Canteen Gate, North Campus"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
              />
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Landmark & City
            </label>
            <input
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              placeholder="e.g. Near Engineering Auditorium"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            />
          </div>
        </div>

        {/* Contact Information & Storage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Contact Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
              />
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Storage Condition
            </label>
            <select
              value={temperature}
              onChange={(e) => setTemperature(e.target.value as 'Hot' | 'Room Temp' | 'Refrigerated')}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            >
              <option value="Hot">♨️ Hot / Freshly Cooked</option>
              <option value="Refrigerated">❄️ Chilled / Refrigerated (Below 4°C)</option>
              <option value="Room Temp">📦 Ambient / Room Temp (Dry/Bakery)</option>
            </select>
          </div>
        </div>

        {/* Preparation Time & Expiry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Prepared / Packaged At
            </label>
            <div className="relative">
              <input
                type="text"
                value={preparedTime}
                onChange={(e) => setPreparedTime(e.target.value)}
                placeholder="e.g. 1:00 PM Today"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
              />
              <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Best Before / Expiry Window
            </label>
            <input
              type="text"
              value={expiryWindow}
              onChange={(e) => setExpiryWindow(e.target.value)}
              placeholder="e.g. Safe until 9:00 PM tonight"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
            Special Instructions / Packaging Details
          </label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Packed in clean stainless steel containers. Please bring clean vessels or insulated boxes."
            className="w-full px-4 py-2 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/40 outline-none transition"
          />
        </div>

        {/* Hygiene Assurance Notice */}
        <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex items-start space-x-2 text-xs text-emerald-900 dark:text-emerald-300">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
          <span>
            By submitting, you certify that this food was prepared hygienically and stored in food-grade packaging. Protected under FSSAI Surplus Food Regulations 2019.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Publish Food Donation</span>
        </button>

      </form>

      {/* Confirmation Slip after submission */}
      {submittedDonation && (
        <div className="mt-6 p-4 rounded-2xl bg-emerald-50/80 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Donation Slip Generated
            </span>
            <span className="font-mono bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-emerald-200 dark:border-slate-700 font-bold">
              {submittedDonation.id}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            <strong>{submittedDonation.foodName}</strong> ({submittedDonation.quantity} kg / ~{submittedDonation.servings} meals) from <strong>{submittedDonation.donorName}</strong> is now live on the dynamic feed.
          </p>
        </div>
      )}

    </div>
  );
};
