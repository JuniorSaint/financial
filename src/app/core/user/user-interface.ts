import { InterfacePadrao } from "src/app/share/interface-padrao"

export interface Phone{ 
  _id?: string,
  phoneType: string, 
  phoneNumber: number, 
  social: string }

export interface UserInterface extends InterfacePadrao{


  _id?: string,
  name: string,
  phone: Phone[],
  email: string,
  login: string,
  password: string,
  repPassword : string,
  active: boolean,
  userKind: string,

}
