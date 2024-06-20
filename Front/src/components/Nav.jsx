import { Link } from "react-router-dom"
import { Buscador } from "./Buscador"
import "./cssNav.css"

const API_URL = `http://localhost:8000/`;
export const Nav = () =>{
    return(
        <div className="nav-container">
            <div className="botones">
                <Link  className="garage" to="/show"> <h1 className="title1">Always</h1> </Link>  
                <Link  className="garage" to="/img"><h1 className="title2">Postear</h1> </Link>  
                <Link  className="garage" to="/"><h1 className="title2">Imagenes</h1> </Link>  
            </div>
            
             
         </div>
    )
}