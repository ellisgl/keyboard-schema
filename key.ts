import {Legend} from "./legend";
import {Switch} from "./switch";

export interface Key {
    legends: {
        top: {
            left: Legend
            center: Legend
            right: Legend
        }
        middle: {
            left: Legend
            center: Legend
            right: Legend
        }
        bottom: {
            left: Legend
            center: Legend
            right: Legend
        }
        position: {
            // These should be a multiple 0.0005 ?
            x: number
            y: number
            x2: number
            y2: number
            rotation: null | {
                // These should be a multiple of 0.01 ?
                x: number
                y: number
                angle: number
            }
        }
        size: {
            // These should be a multiple of 0.125? This in U.
            height: number
            width: number,
            height2: number
            width2: number
        }
        keyCap: {
            profile:
                'Cherry'
                | 'DCS'
                | 'DOM'
                | 'DSA'
                | 'DSS'
                | 'G20'
                | 'HSA'
                | 'MG'
                | 'MT3'
                | 'OEM'
                | 'SA'
                | 'SS'
                | 'Tai-Hao Cubic'
                | 'TEX'
                | 'XDA'
            color: string
            rowProfile:
                'R1'
                | 'R2'
                | 'R3'
                | 'R4'
                | 'R5'
                | 'SPACE'
            hasNub: boolean
            isStepped: boolean
            isTransparent: boolean
            isGhost: boolean
            isDecal: boolean
            material: null | string
        }
        electrical: {
            switch: Switch
            mount: 'wired' | 'pcb' | 'pcb hot-swap' | 'Kiailh mx hot-swap'
            row: number
            column: number
        }
        notes: string
        hasStabilizer: boolean
    }
}
