/**
 * Main Keyboard interface (schema)
 */
import { Board } from "./board";

export interface Keyboard {
    name: string
    description: string
    uSize: {
        value: number
        units: 'mm' | 'inch'
    }
    boards: Board[]
}
