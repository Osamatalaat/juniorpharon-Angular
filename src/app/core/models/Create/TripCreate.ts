// trip-create.model.ts

import { TripContentCreate } from "./TripContentCreate";
import { TripImageCreate } from "./TripImageCreate";



export interface TripCreate {
  location: string;
  createdByUserId?: string;

  city: string;
  price: number;
  durationInDays: number;

  tripContents: TripContentCreate[];

  tripImages?: TripImageCreate[];
}
