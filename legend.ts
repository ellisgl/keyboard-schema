/**
 * Legend for key caps.
 */
export interface Legend {
    string: string                           /** Charters on what ever **/
    fontName: string
    fontColor: null | string
    fontSize: number
    fontUnit: 'mm' | 'in' | 'pt'
    alignment: 'left' | 'center' | 'right'
}
