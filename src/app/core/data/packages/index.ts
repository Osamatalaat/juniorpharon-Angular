
import { Package } from '../../models/package.model';

import { FAMILY_PACKAGES } from './family-packages';
import { HONEYMOON_PACKAGES } from './honeymoon-packages';
import { LUXURY_PACKAGES } from './luxury-packages';
import { SOLO_TRAVELER_PACKAGES } from './solo-traveler-packages';
import { CHRISTMAS_PACKAGES } from './christmas-new-year-packages';


export const PACKAGES: Package[] = [

  ...FAMILY_PACKAGES,

  ...HONEYMOON_PACKAGES,

  ...LUXURY_PACKAGES,

  ...SOLO_TRAVELER_PACKAGES,

  ...CHRISTMAS_PACKAGES

];
