import { DonationItem, RequestItem, NgoPartner, SystemStats, DonationStatus, RequestStatus } from '../types';
import { INITIAL_DONATIONS, INITIAL_REQUESTS, INITIAL_NGOS } from '../data/initialData';

const DONATIONS_KEY = 'ecofeast_donations_v1';
const REQUESTS_KEY = 'ecofeast_requests_v1';
const NGOS_KEY = 'ecofeast_ngos_v1';

export const storageService = {
  getDonations(): DonationItem[] {
    try {
      const data = localStorage.getItem(DONATIONS_KEY);
      if (!data) {
        localStorage.setItem(DONATIONS_KEY, JSON.stringify(INITIAL_DONATIONS));
        return INITIAL_DONATIONS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_DONATIONS;
    }
  },

  saveDonation(newDonation: Omit<DonationItem, 'id' | 'createdAt' | 'status'> & { id?: string }): DonationItem {
    const donations = this.getDonations();
    const item: DonationItem = {
      ...newDonation,
      id: newDonation.id || `DON-${Math.floor(100 + Math.random() * 900)}`,
      createdAt: new Date().toISOString(),
      status: 'Available'
    };
    const updated = [item, ...donations];
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(updated));
    return item;
  },

  updateDonationStatus(id: string, status: DonationStatus, assignedTo?: string): DonationItem[] {
    const donations = this.getDonations();
    const updated = donations.map(d => {
      if (d.id === id) {
        return {
          ...d,
          status,
          assignedTo: assignedTo !== undefined ? assignedTo : d.assignedTo
        };
      }
      return d;
    });
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(updated));
    return updated;
  },

  deleteDonation(id: string): DonationItem[] {
    const donations = this.getDonations();
    const updated = donations.filter(d => d.id !== id);
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(updated));
    return updated;
  },

  getRequests(): RequestItem[] {
    try {
      const data = localStorage.getItem(REQUESTS_KEY);
      if (!data) {
        localStorage.setItem(REQUESTS_KEY, JSON.stringify(INITIAL_REQUESTS));
        return INITIAL_REQUESTS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_REQUESTS;
    }
  },

  saveRequest(newRequest: Omit<RequestItem, 'id' | 'createdAt' | 'status'> & { id?: string }): RequestItem {
    const requests = this.getRequests();
    const item: RequestItem = {
      ...newRequest,
      id: newRequest.id || `REQ-${Math.floor(200 + Math.random() * 800)}`,
      createdAt: new Date().toISOString(),
      status: 'Open'
    };
    const updated = [item, ...requests];
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
    return item;
  },

  updateRequestStatus(id: string, status: RequestStatus): RequestItem[] {
    const requests = this.getRequests();
    const updated = requests.map(r => {
      if (r.id === id) {
        return { ...r, status };
      }
      return r;
    });
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
    return updated;
  },

  deleteRequest(id: string): RequestItem[] {
    const requests = this.getRequests();
    const updated = requests.filter(r => r.id !== id);
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
    return updated;
  },

  getNgos(): NgoPartner[] {
    try {
      const data = localStorage.getItem(NGOS_KEY);
      if (!data) {
        localStorage.setItem(NGOS_KEY, JSON.stringify(INITIAL_NGOS));
        return INITIAL_NGOS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_NGOS;
    }
  },

  saveNgo(ngoData: Omit<NgoPartner, 'id' | 'joinedDate' | 'verified'>): NgoPartner {
    const ngos = this.getNgos();
    const newNgo: NgoPartner = {
      ...ngoData,
      id: `NGO-${Math.floor(10 + Math.random() * 90)}`,
      joinedDate: 'Oct 2026',
      verified: true
    };
    const updated = [newNgo, ...ngos];
    localStorage.setItem(NGOS_KEY, JSON.stringify(updated));
    return newNgo;
  },

  resetToInitialData(): { donations: DonationItem[]; requests: RequestItem[]; ngos: NgoPartner[] } {
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(INITIAL_DONATIONS));
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(INITIAL_REQUESTS));
    localStorage.setItem(NGOS_KEY, JSON.stringify(INITIAL_NGOS));
    return {
      donations: INITIAL_DONATIONS,
      requests: INITIAL_REQUESTS,
      ngos: INITIAL_NGOS
    };
  },

  calculateStats(donations: DonationItem[], requests: RequestItem[]): SystemStats {
    // Total donations and requests
    const totalDonationsCount = donations.length;
    const totalRequestsCount = requests.length;

    // Calculate food saved from donations (completed + assigned + available)
    const totalFoodKg = donations.reduce((sum, d) => sum + (Number(d.quantity) || 0), 0);
    const totalMeals = donations.reduce((sum, d) => sum + (Number(d.servings) || 0), 0);

    // Each 1 kg of saved food prevents roughly 2.5 kg of CO2 equivalent emissions in landfills
    const co2EmissionsSavedKg = Math.round(totalFoodKg * 2.5);

    // Each 1 kg of food saves an average of ~850 liters of agricultural fresh water footprint
    const waterSavedLiters = Math.round(totalFoodKg * 850);

    return {
      totalDonationsCount,
      totalRequestsCount,
      foodSavedKg: totalFoodKg,
      mealsProvided: totalMeals,
      co2EmissionsSavedKg,
      waterSavedLiters
    };
  }
};
