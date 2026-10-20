import { DonationItem, RequestItem, NgoPartner, SystemStats } from '../types';

export function downloadProjectReport(
  stats: SystemStats,
  donations: DonationItem[],
  requests: RequestItem[],
  ngos: NgoPartner[]
) {
  const content = `================================================================================
          ECOFEAST FOOD RESCUE ALLIANCE - COMMUNITY & IMPACT AUDIT REPORT
================================================================================
Organization: EcoFeast Zero-Waste Initiative & Food Rescue Network
Target Alignment: UN SDG #2 (Zero Hunger) & UN SDG #12 (Responsible Consumption)
Generated On: ${new Date().toLocaleString()}
Network Status: Active Operational Network
================================================================================

1. EXECUTIVE SUMMARY & IMPACT METRICS
--------------------------------------------------------------------------------
- Total Food Donations Logged:   ${stats.totalDonationsCount} entries
- Total Community Requests:      ${stats.totalRequestsCount} entries
- Total Food Weight Rescued:     ${stats.foodSavedKg} kg
- Estimated Meals Provided:      ${stats.mealsProvided} nutritious servings
- Estimated CO2e Averted:        ${stats.co2EmissionsSavedKg} kg CO2e
- Estimated Fresh Water Saved:   ${stats.waterSavedLiters.toLocaleString()} Liters

2. REGISTERED NGO PARTNERS (${ngos.length})
--------------------------------------------------------------------------------
${ngos
  .map(
    (n, idx) =>
      `${idx + 1}. ${n.name} [Reg: ${n.regId}]
   Contact: ${n.contactPerson} (${n.phone})
   Area: ${n.operatingArea} | Capacity: ${n.dailyCapacityMeals} meals/day
   Refrigerated Storage: ${n.hasRefrigeration ? 'Yes' : 'No'} | Transport: ${n.hasVehicle ? 'Available' : 'None'}
`
  )
  .join('\n')}

3. RECENT FOOD DONATIONS LOG (${donations.length})
--------------------------------------------------------------------------------
${donations
  .map(
    (d, idx) =>
      `[${d.id}] ${d.foodName} (${d.quantity} kg / ~${d.servings} meals)
   Donor: ${d.donorName} (${d.donorType}) | Phone: ${d.contactNumber}
   Location: ${d.location}, ${d.city}
   Storage: ${d.temperature} | Status: ${d.status}${d.assignedTo ? ` (Assigned to: ${d.assignedTo})` : ''}
   Timestamp: ${d.createdAt}
`
  )
  .join('\n')}

4. RECENT COMMUNITY FOOD REQUESTS (${requests.length})
--------------------------------------------------------------------------------
${requests
  .map(
    (r, idx) =>
      `[${r.id}] ${r.requesterName} (${r.requesterType})
   Demand: ${r.foodNeeded} (${r.quantityNeededKg} kg / ~${r.servingsNeeded} servings)
   Urgency: ${r.urgency} | Status: ${r.status}
   Location: ${r.location}, ${r.city} | Contact: ${r.contactPerson} (${r.contactNumber})
`
  )
  .join('\n')}

5. SYSTEM ARCHITECTURE & STUDENT CREDITS
--------------------------------------------------------------------------------
Frontend Technologies: HTML5, CSS3, Tailwind CSS, TypeScript, React 19, Lucide Icons
Data Infrastructure: Real-time dynamic state synchronization
Verification Protocols:
  * Strict Good Samaritan Law and food safety compliance
  * Real-time CO2e & Blue Water footprint environmental verification
  * Interactive city zone availability map and volunteer routing
  * Transparent matching between surplus donor batches and open shelter requests

EcoFeast Food Rescue Network · Zero Hunger, Zero Waste Initiative
Contact: contact@ecofeast.org | Toll-Free: 1800-FOOD-HELP
================================================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `EcoFeast_Impact_Audit_Report_${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
