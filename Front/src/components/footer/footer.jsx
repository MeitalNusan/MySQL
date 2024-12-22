import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../footer/cssFooter.module.css"



export const Footer = () => { 
     
    return(
         <footer className={styles.footer}>
            <div className={styles.politicas}>
                <Link className={styles.politica} to="/nosotros">Nosotros |</Link>
                <Link className={styles.politica}to="/nosotros">Compras y Cambios |</Link>
                <Link className={styles.politica} to="/nosotros">Contactanos</Link>
            </div>
            

           <div className={styles.redes}>
                <a className={styles.i} href="https://www.instagram.com/"><i class='bx bxl-instagram-alt' ></i></a>
                <a className={styles.w} href="https://www.whatsapp.com/"><i class='bx bxl-whatsapp'></i></a>
                <a className={styles.t} href="https://www.twitter.com/"><i class='bx bxl-twitter'></i></a>
           </div>
        </footer>
        
    )
    

}


  
  