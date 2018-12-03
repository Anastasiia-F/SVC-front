import { Credit } from './credit';

export interface User {
  email: string;
  name: string;
  phone: string;
  creditCard: string;
  credits: Credit[];
}
