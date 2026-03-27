export interface Login {
  UserNameOrEmail: string;
  Password: string;
  RemeberMe?: boolean;
  ReturnUrl?: string;
}
