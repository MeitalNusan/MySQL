import { Link } from "react-router-dom"
import { Buscador } from "./Buscador"

export const Nav = () =>{
    return(
        <div className="buscador">
            <Link  className="btn btn-primary" to="/">Inicio</Link> 
            <Buscador/>
         </div>
    )
}