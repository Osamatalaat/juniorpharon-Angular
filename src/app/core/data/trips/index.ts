import { Trip } from '../../models/trip.model';
import { NILE_CRUISES_TRIPS } from './nile-cruises-trips';
import { HOT_AIR_BALLOON_TRIPS } from './hot-air-balloon-trips';
import { CAMEL_RIDING_TRIPS } from './camel-riding-trips';
import { DESERT_SAFARI_TRIPS } from './desert-safari-trips';
import { SNORKELING_TRIPS } from './snorkeling-trips';
import { SCUBA_DIVING_TRIPS } from './scuba-diving-trips';
import { DINNER_CRUISE_TRIPS } from './dinner-cruise-trips';
import { SOUND_LIGHT_SHOW_TRIPS } from './sound-light-show-trips';


// =====================================================
// ALL TRIPS COMBINED
// =====================================================
export const TRIPS: Trip[] = [
  ...NILE_CRUISES_TRIPS,      // نطاق الـ IDs: 1001 - 1010
  ...HOT_AIR_BALLOON_TRIPS,  // نطاق الـ IDs: 2001 - 2010
  ...CAMEL_RIDING_TRIPS,      // نطاق الـ IDs: 3001 - 3010
  ...DESERT_SAFARI_TRIPS,    // نطاق الـ IDs: 4001 - 4010
  ...SNORKELING_TRIPS,        // نطاق الـ IDs: 5001 - 5010
  ...SCUBA_DIVING_TRIPS,      // نطاق الـ IDs: 6001 - 6010
  ...DINNER_CRUISE_TRIPS,    // نطاق الـ IDs: 7001 - 7010
  ...SOUND_LIGHT_SHOW_TRIPS   // نطاق الـ IDs: 8001 - 8010
];

// =====================================================
// DIRECT MAPPING BY CATEGORY / SLUG (O(1) Access)
// =====================================================
export const TRIPS_BY_CATEGORY: Record<string, Trip[]> = {
  'nile-cruises': NILE_CRUISES_TRIPS,
  'hot-air-balloon': HOT_AIR_BALLOON_TRIPS,
  'camel-riding': CAMEL_RIDING_TRIPS,
  'desert-safari': DESERT_SAFARI_TRIPS,
  'snorkeling': SNORKELING_TRIPS,
  'scuba-diving': SCUBA_DIVING_TRIPS,
  'dinner-cruise': DINNER_CRUISE_TRIPS,
  'sound-light-show': SOUND_LIGHT_SHOW_TRIPS
};

// =====================================================
// EXPORTS FOR DIRECT FILE ACCESS
// =====================================================
export * from './nile-cruises-trips';
export * from './hot-air-balloon-trips';
export * from './camel-riding-trips';
export * from './desert-safari-trips';
export * from './snorkeling-trips';
export * from './scuba-diving-trips';
export * from './dinner-cruise-trips';
export * from './sound-light-show-trips';
