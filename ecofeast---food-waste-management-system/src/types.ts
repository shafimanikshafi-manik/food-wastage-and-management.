export type FoodType = 
  | 'Cooked Meals' 
  | 'Raw Grains & Rice' 
  | 'Fresh Fruits & Veggies' 
  | 'Bakery & Bread' 
  | 'Packaged Foods' 
  | 'Dairy Products' 
  | 'Beverages';

export type DonationStatus = 'Available' | 'Assigned' | 'Picked Up' | 'Completed';

export type RequestUrgency = 'Urgent (Within 2 hrs)' | 'Moderate (Today)' | 'Planned (Tomorrow)';

export type RequestStatus = 'Open' | 'In Progress' | 'Fulfilled' | 'Cancelled';

export interface DonationItem {
  id: string;
  donorName: string;
  donorType: 'Restaurant' | 'College Canteen' | 'Hostel Mess' | 'Supermarket' | 'Individual' | 'Event/Wedding';
  foodType: FoodType;
  foodName: string;
  quantity: number; // in kg or equivalent
  servings: number; // approximate meals
  location: string;
  landmark?: string;
  city: string;
  contactNumber: string;
  email?: string;
  preparedTime: string; // e.g. "2 hours ago" or timestamp
  expiryWindow: string; // e.g. "Safe until 10:00 PM"
  temperature: 'Hot' | 'Room Temp' | 'Refrigerated';
  status: DonationStatus;
  assignedTo?: string; // NGO name if assigned
  notes?: string;
  createdAt: string;
  coordinates?: { lat: number; lng: number };
}

export interface RequestItem {
  id: string;
  requesterName: string; // NGO, Shelter, Orphanage, Community Kitchen, Person
  requesterType: 'NGO' | 'Shelter Home' | 'Orphanage' | 'Community Kitchen' | 'Individual';
  foodNeeded: string;
  quantityNeededKg: number;
  servingsNeeded: number;
  urgency: RequestUrgency;
  location: string;
  city: string;
  contactPerson: string;
  contactNumber: string;
  status: RequestStatus;
  matchedDonationId?: string;
  notes?: string;
  createdAt: string;
}

export interface NgoPartner {
  id: string;
  name: string;
  regId: string;
  contactPerson: string;
  phone: string;
  email: string;
  operatingArea: string;
  dailyCapacityMeals: number;
  hasRefrigeration: boolean;
  hasVehicle: boolean;
  activeVolunteers: number;
  verified: boolean;
  joinedDate: string;
}

export interface SystemStats {
  totalDonationsCount: number;
  totalRequestsCount: number;
  foodSavedKg: number;
  mealsProvided: number;
  co2EmissionsSavedKg: number;
  waterSavedLiters: number;
}
