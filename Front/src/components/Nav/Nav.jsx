import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cssNav.css";
import { useAuth } from "../../Hooks/AuthContext";

export const Nav = () => {
    const [marcasOpen, setMarcasOpen] = useState(false);
    const [crearOpen, setCrearOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú en pantallas pequeñas
    const { user } = useAuth();

    const toggleMarcas = () => setMarcasOpen(!marcasOpen);
    const toggleCrear = () => setCrearOpen(!crearOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);  // Función para alternar el menú

    // Cerrar los menús al hacer clic fuera de ellos
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si el clic es fuera del menú Marcas, cerrarlo
            if (!event.target.closest(".dropdown-marcas")) {
                setMarcasOpen(false);
            }
            // Si el clic es fuera del menú Crear, cerrarlo
            if (!event.target.closest(".dropdown-crear")) {
                setCrearOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="nav">
            <div className="item2">
                <Link className="tituloHome" to="/">
                    ALWAYS
                </Link>
            </div>

            {/* Botón de menú hamburguesa */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                &#9776; {/* Icono de menú hamburguesa */}
            </div>

            {/* Menú de navegación */}
            <div className={`item1 menu ${menuOpen ? "show" : "hide"}`}>
                {/* Si el usuario no está autenticado, muestra el botón Login */}
                {!user && (
                    <div>
                        <Link className="btn btn-dropdown-toggle" to="/login">
                            Login
                        </Link>
                    </div>
                )}

                {/* Menú Crear solo para admins */}
                {user && user.isAdmin && (
                    <div className="dropdown dropdown-crear">
                        <button
                            className="btn btn-dropdown-toggle"
                            type="button"
                            onClick={toggleCrear}
                            aria-expanded={crearOpen ? "true" : "false"}
                        >
                            Crear
                        </button>
                        <div style={{ color: "white" }} className={`dropdown-menu ${crearOpen ? "show" : ""}`}>
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
                            <Link className="dropdown-item" to="/CreateCarrousel">
                                Crear Carrousel
                            </Link>
                            <Link className="dropdown-item" to="/createAthix">
                                Crear Athix
                            </Link>
                            <Link className="dropdown-item" to="/createDiadora">
                                Crear Diadora
                            </Link>
                            <Link className="dropdown-item" to="/createNB">
                                Crear NewBalance
                            </Link>
                            <Link className="dropdown-item" to="/createOlymp">
                                Crear Olympikus
                            </Link>
                        </div>
                    </div>
                )}

                {/* Menú de Marcas para todos los usuarios */}
                <div className="dropdown dropdown-marcas">
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
                        <Link className="dropdown-item" to="/Diadora">
                            Diadora
                        </Link>
                        <Link className="dropdown-item" to="/Olympikus">
                            Olympikus
                        </Link>
                        <Link className="dropdown-item" to="/Newb">
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

                {/* Menú Nosotros */}
                <div className="dropdown">
                    <button className="btn btn-dropdown-toggle">
                        <Link className="dropdown-item" to="/nosotros">
                            Nosotros
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
