import { Key } from "./key";
import { Accessory } from "./accessory";

export interface Board {
    name: string
    keys: Key[]
    accessories: Accessory[]
}
