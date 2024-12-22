import { Outlet } from "react-router-dom";
import { Nav } from "./Nav/Nav";
import { Footer } from "./footer/footer";
 


export const Layout = () => {
    return(
        <div>
            <Nav />
          
            <Outlet/>
            <Footer/>
            
        </div>
    )
}