import { InterfacePadrao } from "src/app/share/interface-padrao"

export interface IPhone{ 
  _id?: string,
  phoneType: string, 
  phoneNumber: string, 
  social: string }

export interface IUser extends InterfacePadrao{

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
