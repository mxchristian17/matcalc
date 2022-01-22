import React from 'react';
import { useParams } from 'react-router-dom';
import CircularArea from '../../Components/CircularArea/CircularArea';
import CircularPerimeter from '../../Components/CircularPerimeter/CircularPerimeter';
import PoligonalArea from '../../Components/PoligonalArea/PoligonalArea';
import PoligonalPerimeter from '../../Components/PoligonalPerimeter/PoligonalPerimeter';
import RectangularArea from '../../Components/RectangularArea/RectangularArea';
import RectangularPerimeter from '../../Components/RectangularPerimeter/RectangularPerimeter';

function ElementContainer(props) {

    const { catId, elId } = useParams();
    

    return (
        <div className="container">
            { catId === "perimetro" & elId === "circular" ? <CircularPerimeter /> : null }
            { catId === "perimetro" & elId === "rectangular" ? <RectangularPerimeter /> : null }
            { catId === "perimetro" & elId === "poligonal" ? <PoligonalPerimeter /> : null }
            { catId === "area" & elId === "circular" ? <CircularArea /> : null }
            { catId === "area" & elId === "cuadrada" ? <RectangularArea /> : null }
            { catId === "area" & elId === "poligonal" ? <PoligonalArea /> : null }
        </div>
    );
}

export default ElementContainer;