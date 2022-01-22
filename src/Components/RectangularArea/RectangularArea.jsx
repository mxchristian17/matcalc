import React, { useState, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { rectangularArea } from '../../Global/calcFunctions';
import PrecisionSelector from '../PrecisionSelector/PrecisionSelector';

function RectangularArea(props) {

    const [resultVal, setResultVal] = useState(0)
    const { changeInput, inputUnit, changeInputUnits, precision, outputUnit, changeOutputUnits } = useContext(GlobalContext)

    const calcVal = (value, inUnit, outUnit) => {
        const area = rectangularArea(value, inUnit, outUnit)
        setResultVal(area)
    }

    return (
        <div className="row justify-content-center">
            <div className="col col-md-9 col-lg-6">
                <h2 className="my-4">Cálculo de área de sección rectangular</h2>
                <form>
                    <div className="input-group my-3">
                        <span className="input-group-text">Lado A:</span>
                        <input type="number" step="any" className="form-control" onChange={(e) => changeInput("sideA", e.target.value, calcVal)} />
                        <select className="custom-select form-control bg-light" style={{maxWidth: "6em"}} value={ inputUnit } onChange={(e) => changeInputUnits(e.target.value, calcVal)}>
                            <option value="0.001">mm</option>
                            <option value="0.01">cm</option>
                            <option value="1">m</option>
                            <option value="0.0254">pulgadas</option>
                        </select>
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text">Lado B:</span>
                        <input type="number" step="any" className="form-control" onChange={(e) => changeInput("sideB", e.target.value, calcVal)} />
                        <select className="custom-select form-control bg-light" style={{maxWidth: "6em"}} value={ inputUnit } onChange={(e) => changeInputUnits(e.target.value, calcVal)}>
                            <option value="0.001">mm</option>
                            <option value="0.01">cm</option>
                            <option value="1">m</option>
                            <option value="0.0254">pulgadas</option>
                        </select>
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text">Área:</span>
                        <span className="form-control bg-white">{ Math.round(resultVal*precision)/precision }</span>
                        <select className="custom-select form-control bg-light" style={{maxWidth: "6em"}} value={ outputUnit } onChange={(e) => changeOutputUnits(e.target.value, calcVal)}>
                            <option value="0.001">mm²</option>
                            <option value="0.01">cm²</option>
                            <option value="1">m²</option>
                            <option value="0.0254">pulgadas²</option>
                        </select>
                    </div>
                    <PrecisionSelector />
                </form>
            </div>
        </div>
    );
}

export default RectangularArea;