export function generateSingleFileHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EcoFeast - Food Waste Management & Rescue Network</title>
  <meta name="description" content="EcoFeast Food Rescue Network - Surplus Food Management Platform">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            cream: {
              50: '#fdfbf7',
              100: '#f8f4ea',
              200: '#f2ebd7',
              300: '#e8dcbf',
              400: '#dcc8a0',
              500: '#cdb17e',
            },
            sage: {
              50: '#f4f8f4',
              100: '#e5f1e5',
              200: '#cce3cd',
              300: '#a5cfa8',
              400: '#78b57d',
              500: '#55995b',
              600: '#427c47',
              700: '#36633b',
              800: '#2e4f32',
              900: '#27422b',
              950: '#122315',
            }
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; background-color: #faf7f0; color: #283629; }
    .dark body { background-color: #121814; color: #f7f5ed; }
    .stat-card { transition: all 0.2s ease-in-out; }
    .stat-card:hover { transform: translateY(-4px); }
  </style>
</head>
<body class="bg-[#faf7f0] text-[#283629] dark:bg-[#121814] dark:text-[#f7f5ed] transition-colors duration-200">
  <!-- Navbar -->
  <header class="sticky top-0 z-50 bg-[#faf7f0]/95 dark:bg-[#131b14]/95 backdrop-blur-md border-b border-[#ded5bd] dark:border-[#243326]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#427c47] to-[#78b57d] flex items-center justify-center text-white shadow-md shadow-[#427c47]/20 font-bold text-xl">🌱</div>
        <div>
          <span class="font-extrabold text-xl tracking-tight text-[#253226] dark:text-[#faf8f2]">Eco<span class="text-[#55995b] dark:text-[#78b57d]">Feast</span></span>
          <span class="hidden sm:inline-block ml-2 text-xs bg-[#edf6ee] dark:bg-[#1d2a1e] text-[#2d5932] dark:text-[#bde4bf] font-medium px-2 py-0.5 rounded-full border border-[#cbe1cc] dark:border-[#2d4230]">Food Rescue Network</span>
        </div>
      </div>
      <nav class="hidden md:flex items-center space-x-6 text-sm font-medium text-[#445345] dark:text-[#d3ded3]">
        <a href="#stats" class="hover:text-[#427c47] dark:hover:text-[#78b57d] transition">Statistics</a>
        <a href="#donate" class="hover:text-[#427c47] dark:hover:text-[#78b57d] transition">Donate Food</a>
        <a href="#request" class="hover:text-[#427c47] dark:hover:text-[#78b57d] transition">Food Request</a>
        <a href="#dashboard" class="hover:text-[#427c47] dark:hover:text-[#78b57d] transition">Live Dashboard</a>
        <a href="#map" class="hover:text-[#427c47] dark:hover:text-[#78b57d] transition">Availability Map</a>
        <a href="#awareness" class="hover:text-[#427c47] dark:hover:text-[#78b57d] transition">Awareness</a>
        <a href="#faq" class="hover:text-[#427c47] dark:hover:text-[#78b57d] transition">FAQ</a>
      </nav>
      <div class="flex items-center space-x-3">
        <button id="themeToggleBtn" onclick="toggleTheme()" class="p-2 rounded-lg bg-[#ede5d3] dark:bg-[#1f2b20] text-[#364537] dark:text-[#cbd8cb] hover:bg-[#e0d6c0] dark:hover:bg-[#28392a] transition" title="Toggle Dark/Light Mode">
          <span id="themeIcon">🌙</span>
        </button>
        <a href="#donate" class="bg-[#427c47] hover:bg-[#36633b] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition">Donate Now</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#f5efe3] via-[#faf7f0] to-[#faf7f0] dark:from-[#18241b] dark:via-[#121814] dark:to-[#121814]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#edf6ee] dark:bg-[#1d2a1e] text-[#2d5932] dark:text-[#bde4bf] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#cbe1cc] dark:border-[#2d4230]">
        <span>🌱 Community Food Rescue Initiative</span> • <span>Zero Landfill Waste</span>
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#253226] dark:text-[#faf8f2] max-w-4xl mx-auto leading-tight">
        Turn Surplus Food into <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#427c47] via-[#55995b] to-[#78b57d] dark:from-[#78b57d] dark:via-[#9cd4a3] dark:to-[#cce8ce]">Nourishment, Not Landfill Waste</span>
      </h1>
      <p class="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        A smart food waste management bridge connecting campus dining halls, restaurants, and individuals with local NGOs and night shelters.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a href="#donate" class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/25 transition">🍲 Donate Surplus Food</a>
        <a href="#request" class="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl font-bold transition">🙋 Request Food for Shelter</a>
        <a href="#dashboard" class="px-6 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold transition">📊 View Live Dashboard</a>
      </div>
    </div>
  </section>

  <!-- Interactive Counters / Impact Stats -->
  <section id="stats" class="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-xl mx-auto mb-10">
        <h2 class="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400">Live Dynamic System Impact</h2>
        <p class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Real-Time Community Impact</p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="stat-card p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
          <div class="text-3xl mb-1">📦</div>
          <div id="statTotalDonations" class="text-3xl font-black text-slate-900 dark:text-white">0</div>
          <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-1">Total Donations</div>
        </div>
        <div class="stat-card p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
          <div class="text-3xl mb-1">🤝</div>
          <div id="statTotalRequests" class="text-3xl font-black text-slate-900 dark:text-white">0</div>
          <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mt-1">Shelter Requests</div>
        </div>
        <div class="stat-card p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center">
          <div class="text-3xl mb-1">⚖️</div>
          <div id="statFoodSaved" class="text-3xl font-black text-emerald-600 dark:text-emerald-400">0</div>
          <div class="text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase mt-1">Food Saved (kg)</div>
        </div>
        <div class="stat-card p-6 bg-teal-50 dark:bg-teal-950/40 rounded-2xl border border-teal-200 dark:border-teal-800 text-center">
          <div class="text-3xl mb-1">🌿</div>
          <div id="statCo2Saved" class="text-3xl font-black text-teal-600 dark:text-teal-400">0</div>
          <div class="text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase mt-1">CO2e Prevented (kg)</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Forms Grid: Donate & Request -->
  <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      <!-- Food Donation Form -->
      <div id="donate" class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl">🍲</div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Food Donation Form</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">Post surplus food from restaurants, messes, or events</p>
          </div>
        </div>

        <form id="donationForm" onsubmit="handleDonationSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Donor / Establishment Name *</label>
            <input type="text" id="donorName" required placeholder="e.g. Campus Hostel Mess #2, Green Bakery" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Donor Type</label>
              <select id="donorType" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
                <option value="Hostel Mess">College / Hostel Mess</option>
                <option value="Restaurant">Restaurant / Cafe</option>
                <option value="Event/Wedding">Wedding / Banquet</option>
                <option value="Supermarket">Supermarket / Grocery</option>
                <option value="Individual">Individual Citizen</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Food Category *</label>
              <select id="foodType" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
                <option value="Cooked Meals">Cooked Meals (Rice, Curry, Roti)</option>
                <option value="Bakery & Bread">Bakery & Bread</option>
                <option value="Fresh Fruits & Veggies">Fresh Fruits & Vegetables</option>
                <option value="Raw Grains & Rice">Raw Grains & Pulses</option>
                <option value="Packaged Foods">Packaged / Sealed Foods</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Food Item Name & Details *</label>
            <input type="text" id="foodName" required placeholder="e.g. Vegetable Pulao, Paneer Curry, Fresh Apples" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Quantity (kg) *</label>
              <input type="number" id="quantity" required min="1" max="1000" placeholder="e.g. 25" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Approx. Servings *</label>
              <input type="number" id="servings" required min="1" placeholder="e.g. 60" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Pickup Location & Landmark *</label>
            <input type="text" id="location" required placeholder="e.g. Block C Canteen, Campus North Gate, Ring Road" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Contact Phone Number *</label>
              <input type="tel" id="contactNumber" required placeholder="e.g. +91 98765 43210" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Storage Condition</label>
              <select id="temperature" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
                <option value="Hot">Hot / Freshly Prepared</option>
                <option value="Refrigerated">Chilled / Refrigerated</option>
                <option value="Room Temp">Ambient / Room Temp</option>
              </select>
            </div>
          </div>

          <button type="submit" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md shadow-emerald-600/20 transition">
            ✓ Post Food Donation
          </button>
        </form>
      </div>

      <!-- Food Request Form -->
      <div id="request" class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xl">🙋</div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Food Request Form</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">For NGOs, orphanages, shelters, and community kitchens</p>
          </div>
        </div>

        <form id="requestForm" onsubmit="handleRequestSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">NGO / Shelter / Requester Name *</label>
            <input type="text" id="requesterName" required placeholder="e.g. Asha Children Home, St. Jude Shelter" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Organization Type</label>
              <select id="requesterType" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
                <option value="NGO">Registered NGO</option>
                <option value="Orphanage">Children Home / Orphanage</option>
                <option value="Shelter Home">Night Shelter / Homeless Care</option>
                <option value="Community Kitchen">Community Kitchen / Langar</option>
                <option value="Individual">Individual Volunteer</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Urgency Priority *</label>
              <select id="urgency" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
                <option value="Urgent (Within 2 hrs)">🚨 Urgent (Within 2 Hours)</option>
                <option value="Moderate (Today)">⏳ Moderate (Needed Today)</option>
                <option value="Planned (Tomorrow)">📅 Planned (For Tomorrow)</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Food Needed & Dietary Needs *</label>
            <input type="text" id="foodNeeded" required placeholder="e.g. Cooked lunch meals for 40 children, mild spices" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Quantity Needed (kg) *</label>
              <input type="number" id="reqQuantity" required min="1" placeholder="e.g. 20" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Servings Count *</label>
              <input type="number" id="reqServings" required min="1" placeholder="e.g. 45" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Delivery / Shelter Location *</label>
            <input type="text" id="reqLocation" required placeholder="e.g. 12-B Shanti Niketan Road, Civil Lines" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Contact Person *</label>
              <input type="text" id="contactPerson" required placeholder="e.g. Sister Mary / Rajesh" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">Contact Phone *</label>
              <input type="tel" id="reqContactNumber" required placeholder="e.g. +91 98112 33445" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none">
            </div>
          </div>

          <button type="submit" class="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold shadow-md shadow-teal-600/20 transition">
            ✓ Submit Food Request
          </button>
        </form>
      </div>

    </div>
  </section>

  <!-- Interactive Live Dashboard & Search -->
  <section id="dashboard" class="py-16 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Real-Time Database Feed</span>
          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Interactive Feed & Matching</h2>
        </div>
        <div class="flex items-center gap-3">
          <input type="text" id="dashboardSearch" onkeyup="handleSearch()" placeholder="🔍 Search food, donor, city, location..." class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm w-72 outline-none focus:ring-2 focus:ring-emerald-500">
          <button onclick="resetData()" class="px-3 py-2 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700">↺ Reset Sample Data</button>
        </div>
      </div>

      <!-- Tab Buttons -->
      <div class="flex space-x-2 border-b border-slate-200 dark:border-slate-800 mb-6">
        <button id="tabDonationsBtn" onclick="switchDashboardTab('donations')" class="pb-3 px-4 font-bold text-sm border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400">Available Food Donations (<span id="countDonations">0</span>)</button>
        <button id="tabRequestsBtn" onclick="switchDashboardTab('requests')" class="pb-3 px-4 font-bold text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400">Open Shelter Requests (<span id="countRequests">0</span>)</button>
      </div>

      <!-- Donation Cards Container -->
      <div id="donationsList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

      <!-- Request Cards Container (hidden initially) -->
      <div id="requestsList" class="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </div>
  </section>

  <!-- Interactive Map Section -->
  <section id="map" class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-10">
      <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Geospatial Distribution</span>
      <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Local Food Availability Map Prototype</h2>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Visualizing live food surplus points, college mess clusters, and partner shelter destinations.</p>
    </div>

    <div class="bg-slate-900 rounded-3xl p-6 relative overflow-hidden border border-slate-800 shadow-2xl min-h-[420px] flex flex-col justify-between">
      <!-- Simulated Map Canvas Background Grid -->
      <div class="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <!-- Top Legend -->
      <div class="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700">
        <div class="flex items-center gap-4 text-xs font-medium text-slate-300">
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span> Active Surplus (Ready for Pickup)</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> High Volume Banquet</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Urgent Shelter Demand</span>
        </div>
        <div class="text-xs text-emerald-400 font-semibold">City Region: Metro North & Campus Zone</div>
      </div>

      <!-- Interactive Map Simulated Area -->
      <div class="relative z-10 my-8 h-64 sm:h-80 w-full rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
        <!-- Zone 1 -->
        <div onclick="showZoneAlert('North University Campus Hub: 65 kg surplus across 4 messes.')" class="absolute top-[28%] left-[24%] cursor-pointer group">
          <div class="relative flex items-center justify-center">
            <span class="absolute w-8 h-8 rounded-full bg-emerald-500/30 animate-ping"></span>
            <span class="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow flex items-center justify-center text-[10px] text-white font-bold">1</span>
          </div>
          <div class="opacity-0 group-hover:opacity-100 transition absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-900 text-white text-[11px] px-2.5 py-1 rounded shadow">Campus Mess Hub (65 kg)</div>
        </div>

        <!-- Zone 2 -->
        <div onclick="showZoneAlert('Central Commercial Plaza: 20 kg whole grain bakery items available.')" class="absolute top-[48%] left-[54%] cursor-pointer group">
          <div class="relative flex items-center justify-center">
            <span class="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow flex items-center justify-center text-[10px] text-white font-bold">2</span>
          </div>
          <div class="opacity-0 group-hover:opacity-100 transition absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-900 text-white text-[11px] px-2.5 py-1 rounded shadow">Bakery Plaza (20 kg)</div>
        </div>

        <!-- Zone 3 -->
        <div onclick="showZoneAlert('South Expressway Banquet Strip: 75 kg wedding surplus chilled at 4°C.')" class="absolute top-[70%] left-[68%] cursor-pointer group">
          <div class="relative flex items-center justify-center">
            <span class="w-5 h-5 rounded-full bg-amber-500 border-2 border-white shadow flex items-center justify-center text-[10px] text-white font-bold">3</span>
          </div>
          <div class="opacity-0 group-hover:opacity-100 transition absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-900 text-white text-[11px] px-2.5 py-1 rounded shadow">Royal Banquets (75 kg)</div>
        </div>

        <!-- Zone 4 -->
        <div onclick="showZoneAlert('Old City Station Shelter Ring: Urgent demand for 70 hot meals!')" class="absolute top-[35%] left-[80%] cursor-pointer group">
          <div class="relative flex items-center justify-center">
            <span class="absolute w-8 h-8 rounded-full bg-rose-500/40 animate-ping"></span>
            <span class="w-5 h-5 rounded-full bg-rose-500 border-2 border-white shadow flex items-center justify-center text-[10px] text-white font-bold">4</span>
          </div>
          <div class="opacity-0 group-hover:opacity-100 transition absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-rose-900 text-white text-[11px] px-2.5 py-1 rounded shadow">Night Shelter Ring (Urgent Need)</div>
        </div>

        <div class="absolute bottom-3 left-4 text-xs text-slate-500">💡 Click any pin on the map to view real-time zone telemetry.</div>
      </div>

      <!-- Map Bottom Cards -->
      <div class="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300">
          <span class="font-bold text-white block">Fast Response Guarantee</span>
          Surplus cooked items matched with nearby shelters within 3.5 km radius.
        </div>
        <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300">
          <span class="font-bold text-white block">Insulated Van Network</span>
          Partnered with 3 volunteer NGO fleets equipped with thermal containers.
        </div>
        <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-slate-300">
          <span class="font-bold text-white block">Zero Cost to Donors</span>
          100% free community logistics coordinated by student volunteers.
        </div>
      </div>
    </div>
  </section>

  <!-- Awareness & Composting Section -->
  <section id="awareness" class="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Educational Awareness</span>
        <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Causes, Impacts & Reduction Guide</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Equipping university students and community citizens with practical ways to tackle food wastage.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <div class="text-2xl mb-3">⚠️</div>
          <h4 class="font-bold text-lg text-slate-900 dark:text-white mb-2">Core Causes of Waste</h4>
          <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
            <li>Over-purchasing and lack of meal planning.</li>
            <li>Cosmetic rejection of oddly shaped fruits and vegetables.</li>
            <li>Inadequate cold storage and transport delays.</li>
            <li>Large buffet portion sizes in college messes and weddings.</li>
          </ul>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <div class="text-2xl mb-3">🌍</div>
          <h4 class="font-bold text-lg text-slate-900 dark:text-white mb-2">Environmental Impact</h4>
          <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
            <li>Rotting food in landfills emits potent methane gas (28x more potent than CO2).</li>
            <li>Wastes 25% of the world's agricultural water supply.</li>
            <li>Accelerates deforestation and biodiversity loss for grazing land.</li>
            <li>Generates 8-10% of total anthropogenic greenhouse emissions.</li>
          </ul>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <div class="text-2xl mb-3">💡</div>
          <h4 class="font-bold text-lg text-slate-900 dark:text-white mb-2">Actionable Reduction Tips</h4>
          <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-4">
            <li>Follow the FIFO (First-In, First-Out) rule in your pantry.</li>
            <li>Take smaller first servings in hostel canteens and buffets.</li>
            <li>Store vegetable peels in the freezer for nutrient-rich soups.</li>
            <li>Freeze leftover bread and ripe bananas before they spoil.</li>
          </ul>
        </div>
      </div>

      <!-- Composting Step-by-Step Guide -->
      <div class="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
        <div class="max-w-2xl mb-8">
          <span class="text-xs uppercase font-bold tracking-widest text-emerald-400">Dorm & Home Composting Guide</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold mt-1">Transform Inevitable Scraps into "Black Gold"</h3>
          <p class="text-sm text-emerald-100 mt-2">Food scraps like tea leaves, coffee grounds, and fruit peels can be composted organically instead of rotting in plastic garbage bags.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            <span class="text-2xl font-black text-emerald-300">01</span>
            <h5 class="font-bold text-sm mt-2">Ventilated Bin</h5>
            <p class="text-xs text-emerald-100/80 mt-1">Drill air holes in a recycled 20L bucket with a tight bottom lid.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            <span class="text-2xl font-black text-emerald-300">02</span>
            <h5 class="font-bold text-sm mt-2">2:1 Brown/Green Ratio</h5>
            <p class="text-xs text-emerald-100/80 mt-1">2 parts dry brown leaves/cardboard to 1 part green wet veggie peels.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            <span class="text-2xl font-black text-emerald-300">03</span>
            <h5 class="font-bold text-sm mt-2">Weekly Aeration</h5>
            <p class="text-xs text-emerald-100/80 mt-1">Turn weekly to supply oxygen so beneficial aerobic bacteria thrive odorless.</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            <span class="text-2xl font-black text-emerald-300">04</span>
            <h5 class="font-bold text-sm mt-2">Harvest Fertilizer</h5>
            <p class="text-xs text-emerald-100/80 mt-1">In 6-8 weeks, harvest nutrient-dense soil tonic for campus gardens!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section (Accordion) -->
  <section id="faq" class="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Knowledge Base</span>
      <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
    </div>

    <div class="space-y-4">
      <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h4 class="font-bold text-base text-slate-900 dark:text-white">How do we ensure donated food is safe and hygienic?</h4>
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">Donors specify preparation time, storage condition (refrigerated vs hot), and temperature. Cooked meals must be transferred within 4-5 hours of preparation or kept chilled below 4°C. Our verified NGOs follow strict olfactory and temperature probe guidelines before serving.</p>
      </div>

      <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h4 class="font-bold text-base text-slate-900 dark:text-white">Are food donors legally protected under the Good Samaritan law?</h4>
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">Yes! In India, FSSAI regulations and the Food Safety and Standards (Recovery of Surplus Food) Regulations 2019 protect bona-fide donors who donate surplus food in good faith from civil or criminal liability.</p>
      </div>

      <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h4 class="font-bold text-base text-slate-900 dark:text-white">What types of food can be donated through EcoFeast?</h4>
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">We accept cooked banquet and mess meals, bakery goods, packaged unopened foods, fresh fruits, vegetables, grains, and unopened dairy. We do not accept spoiled food or expired items.</p>
      </div>

      <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h4 class="font-bold text-base text-slate-900 dark:text-white">How does EcoFeast work?</h4>
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">EcoFeast is an intelligent food rescue system connecting surplus food donors (campus dining halls, restaurants, banquet events) directly with local registered shelters and food pantries in real time.</p>
      </div>
    </div>
  </section>

  <!-- Community Alliance Banner -->
  <section class="py-12 bg-emerald-50 dark:bg-emerald-950/30 border-y border-emerald-200 dark:border-emerald-900">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-block p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-emerald-300 dark:border-emerald-700 mb-4">
        <span class="text-2xl">🌱</span>
      </div>
      <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white">EcoFeast Community Alliance</h3>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
        Dedicated to eradicating hunger and eliminating food waste across our communities.
      </p>
      <div class="mt-4 flex flex-wrap justify-center gap-3 text-xs font-semibold">
        <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">Mission: Zero Food Waste</span>
        <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">Standards: Good Samaritan Protected</span>
        <span class="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">UN SDG #2 (Zero Hunger) & #12 (Responsible Consumption)</span>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
      <div>
        <p class="text-white font-bold text-sm">EcoFeast - Food Rescue Network</p>
        <p class="mt-1">Connecting Surplus Food with Vulnerable Communities</p>
      </div>
      <div class="flex items-center gap-6">
        <a href="#stats" class="hover:text-emerald-400">Statistics</a>
        <a href="#donate" class="hover:text-emerald-400">Donate</a>
        <a href="#request" class="hover:text-emerald-400">Request</a>
        <a href="#map" class="hover:text-emerald-400">Map</a>
        <a href="#faq" class="hover:text-emerald-400">FAQ</a>
      </div>
      <p>© 2026 EcoFeast Food Rescue Network. All rights reserved.</p>
    </div>
  </footer>

  <!-- Notification Toast Container -->
  <div id="toast" class="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-semibold pointer-events-none"></div>

  <!-- JavaScript Logic -->
  <script>
    // Initial Seed Data
    const DEFAULT_DONATIONS = [
      { id: 'DON-101', donorName: 'Campus North Hostel Mess', donorType: 'Hostel Mess', foodType: 'Cooked Meals', foodName: 'Rice, Dal Makhani & Mixed Veg', quantity: 35, servings: 85, location: 'Block C, University Campus', contactNumber: '+91 98765 43210', temperature: 'Hot', status: 'Available', createdAt: 'Today, 1:00 PM' },
      { id: 'DON-102', donorName: 'Golden Crust Artisan Bakery', donorType: 'Restaurant', foodType: 'Bakery & Bread', foodName: 'Whole Wheat Breads & Buns', quantity: 20, servings: 50, location: 'Shop 14, Commercial Sector 18', contactNumber: '+91 98111 22334', temperature: 'Room Temp', status: 'Assigned', createdAt: 'Today, 11:30 AM' },
      { id: 'DON-103', donorName: 'Grand Royal Banquet Hall', donorType: 'Event/Wedding', foodType: 'Cooked Meals', foodName: 'Paneer Butter Masala & Pulao', quantity: 75, servings: 180, location: 'Bypass Expressway', contactNumber: '+91 99887 76655', temperature: 'Refrigerated', status: 'Completed', createdAt: 'Yesterday, 10:30 PM' }
    ];

    const DEFAULT_REQUESTS = [
      { id: 'REQ-201', requesterName: 'Asha Children Home & Orphanage', requesterType: 'Orphanage', foodNeeded: 'Nutritious dinner meals for 45 children', quantityNeededKg: 25, servingsNeeded: 50, urgency: 'Urgent (Within 2 hrs)', location: '12-B Shanti Niketan Road', contactPerson: 'Sister Mary', contactNumber: '+91 98334 45566', status: 'Open' },
      { id: 'REQ-202', requesterName: 'Robin Hood Youth Feeding Guild', requesterType: 'Community Kitchen', foodNeeded: 'Bulk cooked meals or grains for slum cluster', quantityNeededKg: 60, servingsNeeded: 120, urgency: 'Moderate (Today)', location: 'Riverbank Community Hall', contactPerson: 'Arunav', contactNumber: '+91 98450 12345', status: 'In Progress' }
    ];

    // Local Storage Helpers
    function getDonations() {
      const data = localStorage.getItem('ecofeast_donations');
      return data ? JSON.parse(data) : DEFAULT_DONATIONS;
    }
    function saveDonations(arr) {
      localStorage.setItem('ecofeast_donations', JSON.stringify(arr));
    }
    function getRequests() {
      const data = localStorage.getItem('ecofeast_requests');
      return data ? JSON.parse(data) : DEFAULT_REQUESTS;
    }
    function saveRequests(arr) {
      localStorage.setItem('ecofeast_requests', JSON.stringify(arr));
    }

    // Theme Toggle
    function toggleTheme() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('ecofeast_theme', isDark ? 'dark' : 'light');
      document.getElementById('themeIcon').textContent = isDark ? '☀️' : '🌙';
    }

    // Init Theme
    (function initTheme() {
      const saved = localStorage.getItem('ecofeast_theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.getElementById('themeIcon').textContent = '☀️';
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('themeIcon').textContent = '🌙';
      }
    })();

    // Show Toast
    function showToast(msg, isSuccess = true) {
      const toast = document.getElementById('toast');
      toast.textContent = msg;
      toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-semibold pointer-events-none transition-all duration-300 ' + 
        (isSuccess ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white');
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
      setTimeout(() => {
        toast.style.transform = 'translateY(24px)';
        toast.style.opacity = '0';
      }, 3500);
    }

    function showZoneAlert(msg) {
      showToast('📍 ' + msg, true);
    }

    // Update Counters
    function updateStats() {
      const donations = getDonations();
      const requests = getRequests();
      const totalDonations = donations.length;
      const totalRequests = requests.length;
      const foodKg = donations.reduce((sum, d) => sum + (Number(d.quantity) || 0), 0);
      const co2Kg = Math.round(foodKg * 2.5);

      animateCounter('statTotalDonations', totalDonations);
      animateCounter('statTotalRequests', totalRequests);
      animateCounter('statFoodSaved', foodKg);
      animateCounter('statCo2Saved', co2Kg);

      document.getElementById('countDonations').textContent = totalDonations;
      document.getElementById('countRequests').textContent = totalRequests;
    }

    function animateCounter(id, target) {
      const el = document.getElementById(id);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 25));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(interval);
        } else {
          el.textContent = current;
        }
      }, 25);
    }

    // Render Dashboard
    function renderDashboard(query = '') {
      const q = query.toLowerCase().trim();
      const donations = getDonations();
      const requests = getRequests();

      // Render Donations
      const donationsContainer = document.getElementById('donationsList');
      const filteredDonations = donations.filter(d => 
        !q || d.foodName.toLowerCase().includes(q) || d.donorName.toLowerCase().includes(q) || d.location.toLowerCase().includes(q)
      );

      if (filteredDonations.length === 0) {
        donationsContainer.innerHTML = '<div class="col-span-full py-12 text-center text-slate-400">No donations match your query.</div>';
      } else {
        donationsContainer.innerHTML = filteredDonations.map(d => \`
          <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition">
            <div class="flex items-start justify-between gap-2 mb-3">
              <span class="text-xs px-2.5 py-1 rounded-full font-bold \${
                d.status === 'Available' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                d.status === 'Assigned' ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' :
                'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
              }">\${d.status}</span>
              <span class="text-xs text-slate-400">\${d.id}</span>
            </div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white mb-1">\${d.foodName}</h4>
            <div class="text-xs text-slate-500 dark:text-slate-400 mb-3">Donor: <strong class="text-slate-800 dark:text-slate-200">\${d.donorName}</strong> (\${d.donorType})</div>
            <div class="grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl mb-3">
              <div><span class="text-slate-400">Quantity:</span> <strong class="text-slate-900 dark:text-white">\${d.quantity} kg</strong></div>
              <div><span class="text-slate-400">Servings:</span> <strong class="text-slate-900 dark:text-white">\${d.servings} meals</strong></div>
              <div><span class="text-slate-400">Storage:</span> \${d.temperature}</div>
              <div><span class="text-slate-400">Type:</span> \${d.foodType}</div>
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 mb-4">📍 \${d.location} • 📞 \${d.contactNumber}</div>
            <div class="flex items-center gap-2">
              \${d.status === 'Available' ? \`
                <button onclick="claimDonation('\${d.id}')" class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition">Accept / Pickup Food</button>
              \` : \`
                <span class="text-xs text-slate-400 font-medium">✓ Picked up or in transit</span>
              \`}
            </div>
          </div>
        \`).join('');
      }

      // Render Requests
      const requestsContainer = document.getElementById('requestsList');
      const filteredRequests = requests.filter(r => 
        !q || r.requesterName.toLowerCase().includes(q) || r.foodNeeded.toLowerCase().includes(q) || r.location.toLowerCase().includes(q)
      );

      if (filteredRequests.length === 0) {
        requestsContainer.innerHTML = '<div class="col-span-full py-12 text-center text-slate-400">No requests match your query.</div>';
      } else {
        requestsContainer.innerHTML = filteredRequests.map(r => \`
          <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition">
            <div class="flex items-start justify-between gap-2 mb-3">
              <span class="text-xs px-2.5 py-1 rounded-full font-bold \${
                r.urgency.includes('Urgent') ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' :
                'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
              }">\${r.urgency}</span>
              <span class="text-xs text-slate-400">\${r.id}</span>
            </div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white mb-1">\${r.requesterName}</h4>
            <div class="text-xs text-slate-500 dark:text-slate-400 mb-2">Demand: <strong class="text-slate-800 dark:text-slate-200">\${r.foodNeeded}</strong></div>
            <div class="grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl mb-3">
              <div><span class="text-slate-400">Needed:</span> <strong class="text-slate-900 dark:text-white">\${r.quantityNeededKg} kg</strong></div>
              <div><span class="text-slate-400">Beneficiaries:</span> \${r.servingsNeeded}</div>
              <div><span class="text-slate-400">Status:</span> \${r.status}</div>
              <div><span class="text-slate-400">Contact:</span> \${r.contactPerson}</div>
            </div>
            <div class="text-xs text-slate-600 dark:text-slate-300 mb-4">📍 \${r.location} • 📞 \${r.contactNumber}</div>
            <button onclick="fulfillRequest('\${r.id}')" class="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition">Fulfill / Connect Surplus</button>
          </div>
        \`).join('');
      }
    }

    function switchDashboardTab(tab) {
      const donList = document.getElementById('donationsList');
      const reqList = document.getElementById('requestsList');
      const donBtn = document.getElementById('tabDonationsBtn');
      const reqBtn = document.getElementById('tabRequestsBtn');

      if (tab === 'donations') {
        donList.classList.remove('hidden');
        reqList.classList.add('hidden');
        donBtn.className = 'pb-3 px-4 font-bold text-sm border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400';
        reqBtn.className = 'pb-3 px-4 font-bold text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400';
      } else {
        donList.classList.add('hidden');
        reqList.classList.remove('hidden');
        reqBtn.className = 'pb-3 px-4 font-bold text-sm border-b-2 border-teal-600 text-teal-600 dark:text-teal-400';
        donBtn.className = 'pb-3 px-4 font-bold text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400';
      }
    }

    function handleSearch() {
      const q = document.getElementById('dashboardSearch').value;
      renderDashboard(q);
    }

    function handleDonationSubmit(e) {
      e.preventDefault();
      const newDonation = {
        id: 'DON-' + Math.floor(100 + Math.random() * 900),
        donorName: document.getElementById('donorName').value,
        donorType: document.getElementById('donorType').value,
        foodType: document.getElementById('foodType').value,
        foodName: document.getElementById('foodName').value,
        quantity: Number(document.getElementById('quantity').value),
        servings: Number(document.getElementById('servings').value),
        location: document.getElementById('location').value,
        contactNumber: document.getElementById('contactNumber').value,
        temperature: document.getElementById('temperature').value,
        status: 'Available',
        createdAt: 'Just now'
      };

      const donations = getDonations();
      donations.unshift(newDonation);
      saveDonations(donations);

      document.getElementById('donationForm').reset();
      showToast('🎉 Food donation #' + newDonation.id + ' published successfully!');
      updateStats();
      renderDashboard();
    }

    function handleRequestSubmit(e) {
      e.preventDefault();
      const newRequest = {
        id: 'REQ-' + Math.floor(200 + Math.random() * 800),
        requesterName: document.getElementById('requesterName').value,
        requesterType: document.getElementById('requesterType').value,
        foodNeeded: document.getElementById('foodNeeded').value,
        quantityNeededKg: Number(document.getElementById('reqQuantity').value),
        servingsNeeded: Number(document.getElementById('reqServings').value),
        urgency: document.getElementById('urgency').value,
        location: document.getElementById('reqLocation').value,
        contactPerson: document.getElementById('contactPerson').value,
        contactNumber: document.getElementById('reqContactNumber').value,
        status: 'Open'
      };

      const requests = getRequests();
      requests.unshift(newRequest);
      saveRequests(requests);

      document.getElementById('requestForm').reset();
      showToast('📢 Food request #' + newRequest.id + ' submitted to network!');
      updateStats();
      renderDashboard();
    }

    function claimDonation(id) {
      const donations = getDonations().map(d => d.id === id ? { ...d, status: 'Assigned' } : d);
      saveDonations(donations);
      showToast('✅ Donation #' + id + ' claimed! NGO pickup notification sent.');
      renderDashboard();
    }

    function fulfillRequest(id) {
      const requests = getRequests().map(r => r.id === id ? { ...r, status: 'Fulfilled' } : r);
      saveRequests(requests);
      showToast('🤝 Request #' + id + ' marked as fulfilled!');
      renderDashboard();
    }

    function resetData() {
      if (confirm('Reset database to initial campus sample data?')) {
        saveDonations(DEFAULT_DONATIONS);
        saveRequests(DEFAULT_REQUESTS);
        updateStats();
        renderDashboard();
        showToast('↺ Database reset to default sample records.');
      }
    }

    // Initialize on load
    window.addEventListener('DOMContentLoaded', () => {
      updateStats();
      renderDashboard();
    });
  </script>
</body>
</html>`;
}

export function downloadStandaloneHtmlFile() {
  const htmlContent = generateSingleFileHtml();
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `food_waste_management_vaishnavi_rai.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
