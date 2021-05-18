import { InterfacePadrao } from "src/app/share/interface-padrao"

export interface ICategory extends InterfacePadrao {

  _id?: string,
  category: string,
  description: string

}
