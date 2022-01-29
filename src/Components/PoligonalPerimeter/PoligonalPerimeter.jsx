import React, { useState, useContext, useEffect, useRef } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { poligonalPerimeter } from '../../Global/calcFunctions';
import { ngon, doubleArrow } from '../../Global/CanvasShapes';
import PrecisionSelector from '../PrecisionSelector/PrecisionSelector';

function PoligonalPerimeter(props) {

    const [resultVal, setResultVal] = useState(0)
    const { input, changeInput, inputUnit, changeInputUnits, precision, outputUnit, changeOutputUnits } = useContext(GlobalContext)

    const calcVal = (value, inUnit, outUnit) => {
        const perimeter = poligonalPerimeter(value, inUnit, outUnit)
        setResultVal(perimeter)
    }

    // Canvas set
    
    const { width = 200, height = 200, pixelRatio = window.devicePixelRatio } = props;
    const canvas = useRef(null);
    useEffect(() => {

        const context = canvas.current.getContext("2d");

        context.save();
        context.scale(pixelRatio, pixelRatio);
        context.clearRect(0, 0, width, height);
        context.restore();

        const text = typeof(input.sideA) !== "undefined" ? Math.round(input.sideA*precision)/precision : 0
        const sides = typeof(input.sides) !== "undefined" ? Math.round(input.sides) : 0
        const arrowPoints = ngon(context, width / 2, height / 2, sides)
        doubleArrow(context, 6, arrowPoints.startX, arrowPoints.startY, arrowPoints.endX, arrowPoints.endY, text, 10)
    });
    
    const dw = Math.floor(pixelRatio * width);
    const dh = Math.floor(pixelRatio * height);
    const style = { width, height };

    return (
        <div className="row justify-content-center">
            <div className="col col-md-9 col-lg-6">
                <h2 className="my-4">Cálculo de perímetro de poligono</h2>
                <canvas ref={canvas} width={dw} height={dh} style={style} />
                <form>
                    <div className="input-group my-3">
                        <span className="input-group-text">Largo por lado:</span>
                        <input type="number" step="any" className="form-control" onChange={(e) => changeInput("sideA", e.target.value, calcVal)} />
                        <select className="custom-select form-control bg-light" style={{maxWidth: "6em"}} value={ inputUnit } onChange={(e) => changeInputUnits(e.target.value, calcVal)}>
                            <option value="0.001">mm</option>
                            <option value="0.01">cm</option>
                            <option value="1">m</option>
                            <option value="0.0254">pulgadas</option>
                        </select>
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text">Numero de lados:</span>
                        <input type="number" step="1" min="3" className="form-control" onChange={(e) => changeInput("sides", e.target.value, calcVal)} />
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text">Área:</span>
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

export default PoligonalPerimeter;