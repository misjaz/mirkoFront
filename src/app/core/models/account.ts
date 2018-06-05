import { IAuthority } from '../models/authority';
import { Company } from '../../company/company.model';

export interface IAccount {
  authorities: IAuthority[];
  username: string;
  company: Company;
  firstname: string;
  lastname: string;
  email: string;
  enabled: boolean;
  phone: string;
}
