import React, { ReactNode } from 'react';
import styles from "./styles.module.css"
 


type Props ={
    children: ReactNode;
    title:string
}

export const Mellis = ({title, children} : Props) =>{
    return(
        <div className={styles.descubre}>
            {children}           
            <h1>{title}</h1>
        </div>
    )
}