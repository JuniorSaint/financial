import { IPadrao } from "src/app/share/interface-padrao"
export interface IEntry extends IPadrao {
  _id?: string,
  name: string,
  description: string,
  typeEntry: string,
  amount: number,
  dateLaunch:  string,
  paid: boolean,
  category: string
}
