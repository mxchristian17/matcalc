import React, { useState } from 'react'

const GlobalContext = React.createContext()

export const GlobalContextProvider = ({ children }) => {

    const [input, setInput] = useState([])
    const [inputUnit, setInputUnit] = useState(0.001)
    const [outputUnit, setOutputUnit] = useState(0.001)
    const [precision, setPrecision] = useState(1000)

    const changeInput = (reference, val, calcVal) => {
        const objInput = {...input, [reference]: val }
        setInput(objInput)
        calcVal(objInput, inputUnit, outputUnit)
    }
    const changeInputUnits = (val, calcVal) => {
        setInputUnit(val)
        calcVal(input, val, outputUnit)
    }
    const changeOutputUnits = (val, calcVal) => {
        setOutputUnit(val)
        calcVal(input, inputUnit, val)
    }
    const changePrecision = (val) => {
        setPrecision(Math.pow(10, val))
    }

    return (
        <GlobalContext.Provider value={{input : input, setInput, changeInput, inputUnit : inputUnit, changeInputUnits, precision : precision, changePrecision, outputUnit : outputUnit, changeOutputUnits}} >
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext