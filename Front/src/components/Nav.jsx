import { Link } from "react-router-dom";
import "./cssNav.css";

export const Nav = () => {
    return (
        <div className="nav-container">
            <nav className="nav1">
                <div className="item2">
                    <Link className="tituloHome" to="/">
                        <h1>ALWAYS</h1>
                    </Link>
                </div>

                <div className="item1">
                    <div className="dropdown">
                        <button className="btn btn-dropdown-toggle" type="button" id="dropdownMenuMujeres" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mujeres
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuMujeres">
                            <Link className="dropdown-item" to="/Adidas">Ropa deportiva</Link>
                            <Link className="dropdown-item" to="/Adidas">Zapatillas</Link>
                            <Link className="dropdown-item" to="/Adidas">Bikinis</Link>
                            <Link className="dropdown-item" to="/Adidas">Ropa interior</Link>
                            <Link className="dropdown-item" to="/Adidas">Botines</Link>
                            <Link className="dropdown-item" to="/Adidas">Sandalias</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-dropdown-toggle" type="button" id="dropdownMenuHombres" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hombres
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuHombres">
                            <Link className="dropdown-item" to="/Adidas">Zapatillas</Link>
                            <Link className="dropdown-item" to="/Adidas">Ropa deportiva</Link>
                            <Link className="dropdown-item" to="/Adidas">Mallas</Link>
                            <Link className="dropdown-item" to="/Adidas">Botines</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-dropdown-toggle" type="button" id="dropdownMenuMarcas" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Marcas
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuMarcas">
                            <Link className="dropdown-item" to="/Adidas">Adidas</Link>
                            <Link className="dropdown-item" to="/Adidas">Diadora</Link>
                            <Link className="dropdown-item" to="/Adidas">Olympikus</Link>
                            <Link className="dropdown-item" to="/Adidas">New Balance</Link>
                            <Link className="dropdown-item" to="/Athix">Athix</Link>
                            <Link className="dropdown-item" to="/Adidas">Fila</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-dropdown-toggle" type="button" id="dropdownMenuCrear" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Crear
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuCrear">
                            <Link className="dropdown-item" to="/createHome">Crear Gemelos</Link>
                            <Link className="dropdown-item" to="/createHome2">Crear Novedad</Link>
                            <Link className="dropdown-item" to="/createHome3">Crear 3 Novedades</Link>
                            <Link className="dropdown-item" to="/createHome4">Crear Carousel</Link>
                            <Link className="dropdown-item" to="/createAdidas">Crear Adidas</Link>
                            <Link className="dropdown-item" to="/createAthix">Crear Athix</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
