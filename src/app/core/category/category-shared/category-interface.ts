import { IPadrao } from "src/app/share/interface-padrao"
export interface ICategory extends IPadrao {
  _id?: string,
  category: string,
  description: string
}
