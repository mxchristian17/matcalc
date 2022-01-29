export const circularArea = (input, inUnit = 0.01, outUnit = 0.01) => {
    if (typeof(input.diameter) === "undefined") return 0
    return ((input.diameter/2)**2 * Math.PI * inUnit**2 / outUnit**2)
}
export const circularPerimeter = (input, inUnit = 0.01, outUnit = 0.01) => {
    if (typeof(input.diameter) === "undefined") return 0
    return ((input.diameter/2) * 2 * Math.PI * inUnit / outUnit)
}
export const rectangularArea = (input, inUnit = 0.01, outUnit = 0.01) => {
    if (typeof(input.sideA) === "undefined" || typeof(input.sideB) === "undefined") return 0
    return (input.sideA * input.sideB * inUnit**2 / outUnit**2)
}
export const rectangularPerimeter = (input, inUnit = 0.01, outUnit = 0.01) => {
    if (typeof(input.sideA) === "undefined" || typeof(input.sideB) === "undefined") return 0
    return ((2 * input.sideA + 2 * input.sideB) * inUnit / outUnit)
}
export const poligonalArea = (input, inUnit = 0.01, outUnit = 0.01) => {
    if (typeof(input.sideA) === "undefined" || typeof(input.sides) === "undefined" || input.sides < 3) return {area: 0, apotema: 0}
    const apotema = (input.sideA/(2*Math.tan(Math.PI/input.sides)))
    return ({area: (poligonalPerimeter(input, inUnit, inUnit)*apotema/2) * inUnit**2 / outUnit**2, apotema: apotema})
}
export const poligonalPerimeter = (input, inUnit = 0.01, outUnit = 0.01) => {
    if (typeof(input.sideA) === "undefined" || typeof(input.sides) === "undefined") return 0
    return ((input.sides * input.sideA) * inUnit / outUnit)
}