export class RegisterUser {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  date_of_birth?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  user_type: number;
  parent_id?: string;
  organization : string;
  interests: string[];
}
