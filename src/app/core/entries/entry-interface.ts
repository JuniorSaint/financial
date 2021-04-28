import { InterfacePadrao } from "src/app/share/interface-padrao"

export interface EntryInterface extends InterfacePadrao {

  _id?: string,
  name: string,
  description: string,
  type: string,
  amount: number,
  dateLaunch:  Date,
  paid: boolean,
  category: string

}
