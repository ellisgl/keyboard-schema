/**
 * Other inputs that are not just key switches.
 */

export interface Accessory {
    name: string
    type: 'mouse nub' | 'trackpad' | 'trackball' | 'joystick' | 'knob'
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
        w: number
        h: number
    }
}
