import { InterfacePadrao } from "src/app/share/interface-padrao"

export interface Phone{ 
  _id?: string,
  phoneType: string, 
  phoneNumber: string, 
  social: string }

export interface IUser extends InterfacePadrao{

  _id?: string,
  name: string,
  phone: Phone[],
  email: string,
  login: string,
  password: string,
  repPassword : string,
  active: boolean,
  userKind: string,
  token?: string;
}
