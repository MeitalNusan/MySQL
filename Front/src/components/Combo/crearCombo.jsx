import axios from "axios"
import { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2"
// import "./Showcss.css"
 import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import "../Images/imagescss.css"
// import { Buscador } from "../Buscador";

 
 
export const CrearCombo = () => {
    const [combo, setCombo] = useState(null)
    
    const selectedHandler = (e) => {
        setCombo(e.target.files[0])

    }

    const sendHandler = () => {
        if(!combo){
            alert("You must upload a file")
            return
        }
        const formdata =new FormData()
        formdata.append("image", combo) 

        fetch('http://localhost:8000/homeImg',{
            method:"POST",
            body:formdata
        })
        .then(res =>res.text())
        .then(res => console.log(res))
        .catch(err => {
            console.error(err)
        })

        document.getElementById('fileinput').value = null

        setCombo(null)
    }
    
    return(
    <div className="container mt-5">
        <div className="card p-3">
            <div className="row">
             <div className="col-10">
                <input id="fileinput" onChange={selectedHandler}  className="form-control" type="file" name="image" />
             </div>
             <div className="col-2">
                <button onClick={sendHandler}  type="button" className="btn btn-danger">Upload</button>
             </div>
             {/* <div>
             {file.map((img=>(
                            <p key={img.id}>
                                 <p>{img.name}</p>
                                
                            </p>
                        )))}
             </div> */}
          </div>
        </div>
    </div>
   ) 
    
}


 