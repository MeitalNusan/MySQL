import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cssNav.css";

export const Nav = () => {
    // Estado para controlar la visibilidad de los menús desplegables
    const [mujeresOpen, setMujeresOpen] = useState(false);
    const [hombresOpen, setHombresOpen] = useState(false);
    const [marcasOpen, setMarcasOpen] = useState(false);
    const [crearOpen, setCrearOpen] = useState(false);

    // Funciones para manejar la apertura/cierre de los menús desplegables
    const toggleMujeres = () => setMujeresOpen(!mujeresOpen);
    const toggleHombres = () => setHombresOpen(!hombresOpen);
    const toggleMarcas = () => setMarcasOpen(!marcasOpen);
    const toggleCrear = () => setCrearOpen(!crearOpen);

    return (
        <div className="nav">
            <div className="item2">
                <Link className="tituloHome" to="/show">
                    <h1>ALWAYS</h1>
                </Link>
            </div>

            <div className="dropdown"> 
                        <div className={`dropdown-menu ${crearOpen ? "show" : ""}`}>
                           <Link to="/home"> Home
                            </Link>  
                            
                        </div>
                    </div>

            <div className="item1">
                <div className="dropdown">
                    <button
                        className="btn btn-dropdown-toggle"
                        type="button"
                        onClick={toggleMujeres}
                        aria-expanded={mujeresOpen ? "true" : "false"}
                    >
                        Mujeres
                    </button>
                    <div className={`dropdown-menu ${mujeresOpen ? "show" : ""}`}>
                        <Link className="dropdown-item" to="/Adidas">
                            Ropa deportiva
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Zapatillas
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Bikinis
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Ropa interior
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Botines
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Sandalias
                        </Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button
                        className="btn btn-dropdown-toggle"
                        type="button"
                        onClick={toggleHombres}
                        aria-expanded={hombresOpen ? "true" : "false"}
                    >
                        Hombres
                    </button>
                    <div className={`dropdown-menu ${hombresOpen ? "show" : ""}`}>
                        <Link className="dropdown-item" to="/Adidas">
                            Zapatillas
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Ropa deportiva
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Mallas
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Botines
                        </Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button
                        className="btn btn-dropdown-toggle"
                        type="button"
                        onClick={toggleMarcas}
                        aria-expanded={marcasOpen ? "true" : "false"}
                    >
                        Marcas
                    </button>
                    <div className={`dropdown-menu ${marcasOpen ? "show" : ""}`}>
                        <Link className="dropdown-item" to="/Adidas">
                            Adidas
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Diadora
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Olympikus
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            New Balance
                        </Link>
                        <Link className="dropdown-item" to="/Athix">
                            Athix
                        </Link>
                        <Link className="dropdown-item" to="/Adidas">
                            Fila
                        </Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button
                        className="btn btn-dropdown-toggle"
                        type="button"
                        onClick={toggleCrear}
                        aria-expanded={crearOpen ? "true" : "false"}
                    >
                        Crear
                    </button>
                    <div className={`dropdown-menu ${crearOpen ? "show" : ""}`}>
                        <Link className="dropdown-item" to="/create">
                            Crear Gemelos
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
