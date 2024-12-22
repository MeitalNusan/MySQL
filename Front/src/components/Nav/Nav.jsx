import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cssNav.css";

export const Nav = () => {
    const [marcasOpen, setMarcasOpen] = useState(false);
    const [crearOpen, setCrearOpen] = useState(false);

    const toggleMarcas = () => setMarcasOpen(!marcasOpen);
    const toggleCrear = () => setCrearOpen(!crearOpen);

    return (
        <div className="nav">
            <div className="item2">
                <Link className="tituloHome" to="/">
                    <h1>ALWAYS</h1>
                </Link>
            </div>

          

            <div className="item1">
                 <div className="dropdown">
                        <button
                            className="btn btn-dropdown-toggle"
                            type="button"
                            onClick={toggleCrear}
                            aria-expanded={crearOpen ? "true" : "false"}
                        >
                            Crear
                        </button>
                        <div style={{ color: 'white' }} className={`dropdown-menu ${crearOpen ? "show" : ""}`}>
                            <Link className="dropdown-item" to="/create">
                                Crear General
                            </Link>
                            <Link className="dropdown-item" to="/createMellis">
                                Crear Mellis
                            </Link>
                        
                            <Link className="dropdown-item" to="/createAdidas">
                                Crear Adidas
                            </Link>
                            <Link className="dropdown-item" to="/createFila">
                                Crear Fila
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
                        <Link className="dropdown-item" to="/Di">
                            Diadora
                        </Link>
                        <Link className="dropdown-item" to="/Olympikus">
                            Olympikus
                        </Link>
                        <Link className="dropdown-item" to="/NewBalance">
                            New Balance
                        </Link>
                        <Link className="dropdown-item" to="/Athix">
                            Athix
                        </Link>
                        <Link className="dropdown-item" to="/Fila">
                            Fila
                        </Link>
                    </div>
                </div>


                
                <div className="dropdown">
                    <button
                        className="btn btn-dropdown-toggle"
                        type="button"
                    >
                        <Link className="dropdown-item" to="/nosotros">Nosotros</Link>
                    </button>
                    
                </div>               
            </div>
        </div>
    );
};
