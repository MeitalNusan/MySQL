import { Outlet } from "react-router-dom";
import { Nav } from "./Nav/Nav";
 


export const Layout = () => {
    return(
        <div>
            <Nav />
          
            <Outlet/>
            
        </div>
    )
}