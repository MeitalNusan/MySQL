import React, { ReactNode } from 'react';
import styles from "./combo.module.css"
 


type Props ={
    children: ReactNode;
}

export const Combo = ({children} : Props) =>{
    return(
        <div className={styles.conteiner}>
            {children}           
        </div>
    )
}