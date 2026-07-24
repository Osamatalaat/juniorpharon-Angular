// trip-image-create.model.ts

export interface TripImageCreate {
  image: File;
  isCover: boolean;
  preview?: string;
}
