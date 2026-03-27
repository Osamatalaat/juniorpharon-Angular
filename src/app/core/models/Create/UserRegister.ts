import { Gender } from "../Enums/Gender.enum";

export interface UserRegister {
  FirstName: string;
  LastName?: string;
  PhoneNumber: string;
  UserName: string;
  Nationality: string;

  ProfileImg?: string;
  ImageFile?: File;

  CurrentCountry?: string;
  City?: string;
  Age?: number;

  Gender: Gender;

  Email: string;

  Password: string;
  ConfirmPassword: string;

  Role: string;
}
