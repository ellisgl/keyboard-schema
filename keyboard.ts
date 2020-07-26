/**
 * Main Keyboard interface (schema)
 */
import {Key} from "./key";

export interface Keyboard {
    name: string
    description: string
    keys: Key[]
}

