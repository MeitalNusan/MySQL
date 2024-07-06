import axios from "axios"
import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"



const API = "http://localhost:8000/post/"

export const Create = ()=>{
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")

    const navigate = useNavigate()

    const create = async (e) =>{
        e.preventDefault()
        await axios.post(API, {
            title: titulo,
            content: contenido,
        })
        
        navigate("/show")
    }


    return(
       <div>
        <h1>Crear Post</h1>
            <form onSubmit={create}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input 
                    type="text"
                    value={titulo} 
                    onChange={(e)=>setTitulo(e.target.value)} 
                    className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <input 
                    type="text"
                    value={contenido} 
                    onChange={(e)=>setContenido(e.target.value)} 
                    className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">CREAR</button>
            </form>
       </div>
    )
    
}

