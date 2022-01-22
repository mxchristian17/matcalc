import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#">MatCalc</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cálculo de perímetro
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><NavLink className="dropdown-item" to="/perimetro/circular">Circular</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/perimetro/rectangular">Rectangular</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/perimetro/poligonal">Poligonal regular</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cálculo de área
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><NavLink className="dropdown-item" to="/area/circular">Sección circular</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/area/cuadrada">Sección rectangular</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/area/poligonal">Sección poligonal</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cálculo de volúmen
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/#">Barra cilindrica</a></li>
                        <li><a className="dropdown-item" href="/#">Barra cuadrada</a></li>
                        <li><a className="dropdown-item" href="/#">Barra hexagonal</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cálculo de peso
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/#">Barra cilindrica</a></li>
                        <li><a className="dropdown-item" href="/#">Barra cuadrada</a></li>
                        <li><a className="dropdown-item" href="/#">Barra hexagonal</a></li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;