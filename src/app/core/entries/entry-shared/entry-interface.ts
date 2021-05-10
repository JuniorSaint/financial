import { InterfacePadrao } from "src/app/share/interface-padrao"

export interface EntryInterface extends InterfacePadrao {

  _id?: string,
  name: string,
  description: string,
  typeEntry: string,
  amount: number,
  dateLaunch:  string,
  paid: boolean,
  category: string

}
