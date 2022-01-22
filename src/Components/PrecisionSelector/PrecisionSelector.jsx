import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

function PrecisionSelector(props) {

    const { precision, changePrecision } = useContext(GlobalContext)

    const getDefVal = () => {
        return Math.round(Math.log(precision)/Math.log(10))
    }

    return (
        <div className="input-group my-3">
            <span className="input-group-text">Precisión:</span>
            <select className="custom-select form-control" defaultValue={ getDefVal() } onChange={(e) => changePrecision(e.target.value)}>
                <option value="0">0</option>
                <option value="1">0.0</option>
                <option value="2">0.00</option>
                <option value="3">0.000</option>
                <option value="4">0.0000</option>
                <option value="5">0.00000</option>
                <option value="6">0.000000</option>
                <option value="7">0.0000000</option>
                <option value="8">0.00000000</option>
                <option value="9">0.000000000</option>
                <option value="10">0.000000000</option>
                <option value="11">0.0000000000</option>
                <option value="12">0.00000000000</option>
            </select>
        </div>
    );
}

export default PrecisionSelector;