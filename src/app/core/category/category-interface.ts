import { InterfacePadrao } from "src/app/share/interface-padrao"

export interface CategoryInterface extends InterfacePadrao {

  _id?: string,
  category: string,
  description: string

}
