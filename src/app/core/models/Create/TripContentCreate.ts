// trip-content-create.model.ts

import { LanguageCode } from "../Enums/LanguageCode.enum";



export interface TripContentCreate {
  name: string;
  description: string;
  languageCode: LanguageCode;
}
