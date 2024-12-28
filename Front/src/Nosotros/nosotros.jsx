import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Nosotros/nosotros.module.css"

export const Nosotros = () => { 
     
    return(
        <div>
            <br /><br /><br /><br />
            <h1 className={styles.quienes}>QUIENES SOMOS?</h1>
            <p className={styles.nosotros}>Somos una pequeña empresa familiar desde hace 33 años, dedicada a ofrecer ropa de deportes de alta calidad, pensada para quienes buscan comodidad, estilo y rendimiento en sus entrenamientos y actividades deportivas. Ubicados en Barranqueras, provincia del Chaco, una pequeña ciudad del interior del país. Nuestra misión es proporcionar productos que acompañen a nuestros clientes en su día a día, desde los entrenamientos más exigentes hasta los momentos de descanso.

Desde nuestros inicios, hemos trabajado con el compromiso de ofrecer lo mejor de nosotros mismos en cada prenda, con materiales que garantizan durabilidad, diseño moderno y un ajuste perfecto. Al ser una empresa familiar, nos esforzamos por mantener un trato cercano y personalizado con cada cliente, creando una comunidad que valora el esfuerzo y el trabajo en equipo.

Nos enorgullece ser parte de esta pequeña ciudad, donde nuestra pasión por el deporte y el bienestar se refleja en cada detalle de lo que hacemos. A través de nuestros productos, buscamos inspirar a más personas a llevar un estilo de vida activo y saludable, apoyando a deportistas de todos los niveles y edades.
 </p>
        </div>
        
    )
    

}