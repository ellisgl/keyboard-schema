export interface Switch {
    style: 'mx' | 'alps'
    pins: 2 | 3 | 5
    hasRGB: boolean      // Does this switch have holes for RGB led?
}
