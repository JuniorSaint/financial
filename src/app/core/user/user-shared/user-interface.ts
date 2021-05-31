import { IPadrao } from "src/app/share/interface-padrao"
export interface IPhone{ 
  _id?: string,
  phoneType: string, 
  phoneNumber: string, 
  social: string }
export interface IUser extends IPadrao{
  _id?: string,
  name: string,
  phone: IPhone[],
  email: string,
  login: string,
  password: string,
  repPassword : string,
  active: boolean,
  userKind: string,
  token?: string;
}
