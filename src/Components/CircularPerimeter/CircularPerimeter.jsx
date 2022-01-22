import React, { useState, useContext, useEffect, useRef } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { circularPerimeter } from '../../Global/calcFunctions';
import { circle, doubleArrow } from '../../Global/CanvasShapes';
import PrecisionSelector from '../PrecisionSelector/PrecisionSelector';

function CircularPerimeter(props) {

    const [resultVal, setResultVal] = useState(0)
    const { input, changeInput, inputUnit, changeInputUnits, precision, outputUnit, changeOutputUnits } = useContext(GlobalContext)

    const calcVal = (value, inUnit, outUnit) => {
        const area = circularPerimeter(value, inUnit, outUnit)
        setResultVal(area)
    }

    // Canvas set
    
    const { width = 200, height = 200, pixelRatio = window.devicePixelRatio } = props;
    const canvas = useRef(null);
    useEffect(() => {

        const context = canvas.current.getContext("2d");
        const radius = 3 * width / 8

        context.save();
        context.scale(pixelRatio, pixelRatio);
        context.clearRect(0, 0, width, height);

        circle(context, width / 2, height / 2, radius)
        doubleArrow(context, 6, (width / 2 - 0.70710678 * radius), (height / 2 + 0.70710678 * radius), (width / 2 + 0.70710678 * radius), (height / 2 - 0.70710678 * radius))
        context.font = "20px Arial";
        context.fillText(typeof(input.diameter) !== "undefined" ? input.diameter : 0, width / 2 + 5, height / 2 + 15);
    });
    const dw = Math.floor(pixelRatio * width);
    const dh = Math.floor(pixelRatio * height);
    const style = { width, height };

    return (
        <div className="row justify-content-center">
            <div className="col col-md-9 col-lg-6">
                <h2 className="my-4">Cálculo de perímetro de circunferencia</h2>
                <canvas ref={canvas} width={dw} height={dh} style={style} />
                <form>
                    <div className="input-group my-3">
                        <span className="input-group-text">Diámetro:</span>
                        <input type="number" step="any" className="form-control" onChange={(e) => changeInput("diameter", e.target.value, calcVal)} />
                        <select className="custom-select form-control bg-light" style={{maxWidth: "6em"}} value={ inputUnit } onChange={(e) => changeInputUnits(e.target.value, calcVal)}>
                            <option value="0.001">mm</option>
                            <option value="0.01">cm</option>
                            <option value="1">m</option>
                            <option value="0.0254">pulgadas</option>
                        </select>
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text">Perímetro:</span>
                        <span className="form-control bg-white">{ Math.round(resultVal*precision)/precision }</span>
                        <select className="custom-select form-control bg-light" style={{maxWidth: "6em"}} value={ outputUnit } onChange={(e) => changeOutputUnits(e.target.value, calcVal)}>
                            <option value="0.001">mm</option>
                            <option value="0.01">cm</option>
                            <option value="1">m</option>
                            <option value="0.0254">pulgadas</option>
                        </select>
                    </div>
                    <PrecisionSelector />
                </form>
            </div>
        </div>
    );
}

export default CircularPerimeter;