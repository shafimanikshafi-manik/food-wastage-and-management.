import { DonationItem, RequestItem, NgoPartner } from '../types';

export const INITIAL_DONATIONS: DonationItem[] = [
  {
    id: 'DON-101',
    donorName: 'Campus North Hostel Mess',
    donorType: 'Hostel Mess',
    foodType: 'Cooked Meals',
    foodName: 'Rice, Dal Makhani & Mixed Veg Curry',
    quantity: 35,
    servings: 85,
    location: 'Block C, University Campus, Ring Road',
    landmark: 'Near Engineering Auditorium',
    city: 'Metro City',
    contactNumber: '+91 98765 43210',
    email: 'hostelc.mess@university.edu',
    preparedTime: '1:00 PM Today',
    expiryWindow: 'Safe until 8:30 PM (Stored hot)',
    temperature: 'Hot',
    status: 'Available',
    notes: 'Packed in clean stainless-steel containers. Ready for immediate pickup.',
    createdAt: '2026-10-19T02:15:00.000Z',
    coordinates: { lat: 28.545, lng: 77.192 }
  },
  {
    id: 'DON-102',
    donorName: 'Golden Crust Artisan Bakery',
    donorType: 'Restaurant',
    foodType: 'Bakery & Bread',
    foodName: 'Whole Wheat Breads, Buns & Tea Cakes',
    quantity: 20,
    servings: 50,
    location: 'Shop 14, Commercial Complex, Sector 18',
    landmark: 'Opposite Metro Station Gate 2',
    city: 'Metro City',
    contactNumber: '+91 98111 22334',
    email: 'orders@goldencrust.com',
    preparedTime: 'Morning Batch (6:00 AM)',
    expiryWindow: 'Best before 36 hours',
    temperature: 'Room Temp',
    status: 'Assigned',
    assignedTo: 'Asha Community Shelter',
    notes: 'Freshly baked surplus unsold stock. Hygienically sealed in paper boxes.',
    createdAt: '2026-10-19T01:40:00.000Z',
    coordinates: { lat: 28.570, lng: 77.315 }
  },
  {
    id: 'DON-103',
    donorName: 'Grand Royal Banquet Hall',
    donorType: 'Event/Wedding',
    foodType: 'Cooked Meals',
    foodName: 'Paneer Butter Masala, Pulao & Naan',
    quantity: 75,
    servings: 180,
    location: 'Grand Royal Lawn, Bypass Expressway',
    landmark: 'Next to Star Plaza',
    city: 'Metro City',
    contactNumber: '+91 99887 76655',
    email: 'events@grandroyalbanquets.com',
    preparedTime: 'Yesterday 10:30 PM (Quick-chilled at 4°C)',
    expiryWindow: 'Safe until 4:00 PM today',
    temperature: 'Refrigerated',
    status: 'Completed',
    assignedTo: 'Feeding Hands NGO',
    notes: 'Surplus wedding catering. Chilled immediately in walk-in cold room.',
    createdAt: '2026-10-18T18:20:00.000Z',
    coordinates: { lat: 28.510, lng: 77.240 }
  },
  {
    id: 'DON-104',
    donorName: 'Green Basket Organic Mart',
    donorType: 'Supermarket',
    foodType: 'Fresh Fruits & Veggies',
    foodName: 'Surplus Apples, Oranges, Spinach & Carrots',
    quantity: 45,
    servings: 90,
    location: 'Lane 4, Green Park Market',
    landmark: 'Behind Community Center',
    city: 'Metro City',
    contactNumber: '+91 97654 32109',
    email: 'manager@greenbasket.in',
    preparedTime: 'Harvested yesterday',
    expiryWindow: 'Good for next 3-4 days',
    temperature: 'Room Temp',
    status: 'Available',
    notes: 'Cosmetically imperfect but 100% nutritious fresh organic produce.',
    createdAt: '2026-10-19T03:00:00.000Z',
    coordinates: { lat: 28.560, lng: 77.205 }
  },
  {
    id: 'DON-105',
    donorName: 'College Central Canteen',
    donorType: 'College Canteen',
    foodType: 'Cooked Meals',
    foodName: 'Vegetable Biryani & Cucumber Raita',
    quantity: 30,
    servings: 60,
    location: 'Student Activity Center, Ground Floor',
    landmark: 'Near Library Steps',
    city: 'Metro City',
    contactNumber: '+91 98223 34455',
    email: 'canteen.incharge@collegemail.org',
    preparedTime: '12:30 PM Today',
    expiryWindow: 'Safe until 7:00 PM today',
    temperature: 'Hot',
    status: 'Available',
    notes: 'Freshly prepared afternoon surplus. Packed in food-grade takeaway foils.',
    createdAt: '2026-10-19T03:45:00.000Z',
    coordinates: { lat: 28.538, lng: 77.198 }
  }
];

export const INITIAL_REQUESTS: RequestItem[] = [
  {
    id: 'REQ-201',
    requesterName: 'Asha Children Home & Orphanage',
    requesterType: 'Orphanage',
    foodNeeded: 'Nutritious dinner meals or fruits for 45 children',
    quantityNeededKg: 25,
    servingsNeeded: 50,
    urgency: 'Urgent (Within 2 hrs)',
    location: '12-B, Shanti Niketan Road, Civil Lines',
    city: 'Metro City',
    contactPerson: 'Sister Mary / Rajesh Sharma',
    contactNumber: '+91 98334 45566',
    status: 'Open',
    notes: 'Mildly spiced cooked food preferred for school children aged 6-14.',
    createdAt: '2026-10-19T03:10:00.000Z'
  },
  {
    id: 'REQ-202',
    requesterName: 'Robin Hood Youth Feeding Guild',
    requesterType: 'Community Kitchen',
    foodNeeded: 'Grains, rice, bread or bulk cooked meals for slum distribution',
    quantityNeededKg: 60,
    servingsNeeded: 120,
    urgency: 'Moderate (Today)',
    location: 'Community Center, Yamuna Riverbank Slum Cluster',
    city: 'Metro City',
    contactPerson: 'Arunav Sengupta',
    contactNumber: '+91 98450 12345',
    status: 'In Progress',
    notes: 'Our volunteer vans are on standby for immediate pickup.',
    createdAt: '2026-10-19T02:00:00.000Z'
  },
  {
    id: 'REQ-203',
    requesterName: 'St. Jude Homeless Night Shelter',
    requesterType: 'Shelter Home',
    foodNeeded: 'Hot cooked dinner or healthy snacks for 70 night residents',
    quantityNeededKg: 35,
    servingsNeeded: 70,
    urgency: 'Moderate (Today)',
    location: 'Near Old Railway Station Yard, Platform 1 Exit',
    city: 'Metro City',
    contactPerson: 'Mohan Lal Verma',
    contactNumber: '+91 97112 23344',
    status: 'Open',
    notes: 'Night shelter opens at 6:30 PM. Needs dinner before 9:00 PM.',
    createdAt: '2026-10-19T01:15:00.000Z'
  },
  {
    id: 'REQ-204',
    requesterName: 'Anand Dham Senior Care Living',
    requesterType: 'NGO',
    foodNeeded: 'Soft fruits, vegetable soups, or soft cooked porridge',
    quantityNeededKg: 15,
    servingsNeeded: 35,
    urgency: 'Planned (Tomorrow)',
    location: 'Sector 22, Green Enclave Road',
    city: 'Metro City',
    contactPerson: 'Dr. Sunita Rao',
    contactNumber: '+91 98199 88776',
    status: 'Fulfilled',
    notes: 'Easily digestible food for elderly residents.',
    createdAt: '2026-10-18T16:00:00.000Z'
  }
];

export const INITIAL_NGOS: NgoPartner[] = [
  {
    id: 'NGO-001',
    name: 'Feeding Hands Foundation',
    regId: 'MH/2021/NGO/84920',
    contactPerson: 'Pooja Deshmukh',
    phone: '+91 98200 11223',
    email: 'info@feedinghands.org',
    operatingArea: 'Central & South Metro Region',
    dailyCapacityMeals: 400,
    hasRefrigeration: true,
    hasVehicle: true,
    activeVolunteers: 38,
    verified: true,
    joinedDate: 'Jan 2025'
  },
  {
    id: 'NGO-002',
    name: 'Asha Community Shelter Trust',
    regId: 'DL/2019/IV/10492',
    contactPerson: 'Karan Mehra',
    phone: '+91 98112 33445',
    email: 'asha.trust@ashashelter.org',
    operatingArea: 'North Campus & Civil Lines',
    dailyCapacityMeals: 250,
    hasRefrigeration: true,
    hasVehicle: true,
    activeVolunteers: 22,
    verified: true,
    joinedDate: 'Mar 2025'
  },
  {
    id: 'NGO-003',
    name: 'Roti Bank & Food Rescue Corps',
    regId: 'UP/2022/NPO/33211',
    contactPerson: 'Vikramaditya Sahay',
    phone: '+91 99345 67890',
    email: 'rescue@rotibankcorps.in',
    operatingArea: 'Industrial Area & Slum Clusters',
    dailyCapacityMeals: 600,
    hasRefrigeration: false,
    hasVehicle: true,
    activeVolunteers: 54,
    verified: true,
    joinedDate: 'Nov 2024'
  }
];

export const MAP_ZONES = [
  {
    id: 'ZONE-1',
    name: 'North University Campus Hub',
    description: 'High surplus from 4 college mess halls & 6 student cafes',
    activeDonations: 2,
    foodKgAvailable: 65,
    latPercent: 28,
    lngPercent: 32,
    status: 'Active Surplus',
    color: 'emerald'
  },
  {
    id: 'ZONE-2',
    name: 'Central Commercial Plaza',
    description: 'Bakeries, supermarkets & casual dining hubs',
    activeDonations: 1,
    foodKgAvailable: 20,
    latPercent: 48,
    lngPercent: 54,
    status: 'Active Surplus',
    color: 'emerald'
  },
  {
    id: 'ZONE-3',
    name: 'South Expressway Banquet Strip',
    description: 'Surplus wedding dinners & weekend banquet halls',
    activeDonations: 1,
    foodKgAvailable: 75,
    latPercent: 74,
    lngPercent: 62,
    status: 'High Volume',
    color: 'amber'
  },
  {
    id: 'ZONE-4',
    name: 'Old City Station Shelter Ring',
    description: 'High demand area: 3 night shelters & orphanages',
    activeDonations: 0,
    foodKgAvailable: 0,
    latPercent: 36,
    lngPercent: 78,
    status: 'Urgent Demand',
    color: 'rose'
  },
  {
    id: 'ZONE-5',
    name: 'Green Park Residential Colony',
    description: 'Organic markets, residential surplus & community fridge',
    activeDonations: 1,
    foodKgAvailable: 45,
    latPercent: 62,
    lngPercent: 24,
    status: 'Active Surplus',
    color: 'emerald'
  }
];

export const AWARENESS_FACTS = [
  {
    icon: 'AlertTriangle',
    title: '1.3 Billion Metric Tons',
    stat: '1/3 of All Food Produced',
    description: 'Globally, one-third of all food produced for human consumption—approximately 1.3 billion tons—is wasted each year.'
  },
  {
    icon: 'CloudRain',
    title: '250 Trillion Liters of Water',
    stat: 'Wasted Blue Water',
    description: 'The agricultural water footprint of wasted food equals 3 times the volume of Lake Geneva or enough to meet worldwide household needs.'
  },
  {
    icon: 'Flame',
    title: '8-10% Global Emissions',
    stat: 'Methane in Landfills',
    description: 'If food waste were a country, it would be the 3rd largest greenhouse gas emitter in the world, right after China and the United States.'
  },
  {
    icon: 'HeartHandshake',
    title: '828 Million People Hungry',
    stat: 'Massive Distribution Gap',
    description: 'Just 25% of the food wasted in the US and Europe alone could feed all chronically undernourished people worldwide.'
  }
];

export const COMPOSTING_STEPS = [
  {
    step: '01',
    title: 'Select a Compost Bin',
    content: 'Choose a ventilated bin, wooden pallet crate, or a 20-liter breathable bucket for balconies/dorm rooms.'
  },
  {
    step: '02',
    title: 'Balance Browns & Greens (2:1)',
    content: 'Mix 2 parts carbon-rich dry leaves/shredded cardboard (Browns) with 1 part nitrogen-rich raw vegetable peelings & coffee grounds (Greens).'
  },
  {
    step: '03',
    title: 'Maintain Moisture & Aeration',
    content: 'Keep damp like a wrung-out sponge. Turn once a week with a garden fork to allow oxygen-breathing aerobic microbes to thrive.'
  },
  {
    step: '04',
    title: 'Harvest Black Gold (6-8 Weeks)',
    content: 'Yields rich, dark, earthy organic fertilizer to replenish soil health and nourish campus trees and home gardens without chemical fertilizers!'
  }
];

export const REDUCE_TIPS = [
  {
    title: 'Audit Your Fridge Weekly (FIFO Rule)',
    description: 'Practice First-In, First-Out. Move older milk, cooked curry, and greens to the front shelf before stocking newly purchased grocery items.',
    category: 'Storage'
  },
  {
    title: 'Understand Date Labels vs Expiry',
    description: '“Best Before” refers to optimal food flavor and texture, NOT safety! Use your senses (smell, sight, taste) for dry and canned goods before binning.',
    category: 'Knowledge'
  },
  {
    title: 'Repurpose Vegetable Scraps',
    description: 'Store carrot tops, onion skins, celery stems in a freezer ziplock bag; simmer for 30 minutes to make nutrient-dense homemade vegetable broth.',
    category: 'Cooking'
  },
  {
    title: 'Embrace Imperfect & Curved Produce',
    description: 'Apples with blemishes or slightly curved carrots taste identical. Supermarkets reject 20% of crops purely for cosmetic standards.',
    category: 'Shopping'
  },
  {
    title: 'Portion Control in Campus Messes',
    description: 'Take smaller first servings in buffets and university dining halls. You can always go back for seconds without dumping half a tray into trash bins.',
    category: 'Habits'
  },
  {
    title: 'Safe Freezing is a Pause Button',
    description: 'Leftover cooked rice, bread slices, soups, and ripe bananas can all be frozen for up to 3 months without nutritional degradation.',
    category: 'Storage'
  }
];

export const FAQS = [
  {
    question: 'How do we ensure donated food is safe and hygienic?',
    answer: 'Donors must confirm the preparation time, storage condition (refrigerated vs hot), and temperature. Cooked meals must be transferred within 4-5 hours of preparation or kept chilled below 4°C. Our verified NGOs follow strict olfactory and temperature probe guidelines before serving.'
  },
  {
    question: 'Are food donors protected legally under the Good Samaritan law?',
    answer: 'Yes! In India, FSSAI regulations and the Food Safety and Standards (Recovery of Surplus Food) Regulations 2019 protect bona-fide donors who donate surplus food in good faith from civil or criminal liability.'
  },
  {
    question: 'What types of food can be donated through EcoFeast?',
    answer: 'We accept cooked banquet and mess meals, bakery goods, packaged unopened foods, fresh fruits, vegetables, grains, and unopened dairy. We do not accept spoiled food, expired infant formula, or uncovered items exposed to outdoor dust.'
  },
  {
    question: 'How quickly does an NGO pick up available donations?',
    answer: 'Within our local pilot zones, notification alerts reach partner NGOs instantly. Hot cooked meals are picked up on an average within 45 to 75 minutes of donation submission.'
  },
  {
    question: 'Can commercial caterers, hotels, and universities partner with EcoFeast?',
    answer: 'Yes! We actively onboard corporate dining halls, event caterers, hotels, and university campus messes through our verified donor network. We provide volunteer logistics, cold-chain handling protocols, and transparent ESG impact reporting.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'EcoFeast bridged the gap between our 4 campus dining halls and the Asha Community Shelter just 3 km away. We have rescued over 800 kg of edible meals from going to the city landfill this semester!',
    author: 'Dr. S. R. Kulkarni',
    role: 'Director of Campus Sustainability & Operations'
  },
  {
    quote: 'During wedding season, banquets routinely throw away food for 100+ guests. EcoFeast lets us post a 1-minute alert, and verified volunteers arrive with insulated food carriers within an hour.',
    author: 'Rajiv Malhotra',
    role: 'General Manager, Grand Royal Banquet Hall'
  },
  {
    quote: 'The real-time urgency tags allow our shelter van to prioritize high-risk perishable meals first. EcoFeast has completely modernized our daily hunger relief operations across the city.',
    author: 'Pooja Deshmukh',
    role: 'Executive Director, Feeding Hands Foundation'
  }
];
