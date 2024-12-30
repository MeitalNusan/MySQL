import axios from "axios"
import { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
 
 
 
export const CreateAdidas = () => {
    const [file, setFile] = useState(null)
    const navigate = useNavigate(); 

    const selectedHandler = (e) => {
        setFile(e.target.files[0])

    }

    const sendHandler = () => {
        if(!file){
            alert("You must upload a file")
            return
        }
        const formdata =new FormData()
        formdata.append("image", file) 

        fetch(`${import.meta.env.VITE_BACKEND_URL}/adidas`,{
            method:"POST",
            body:formdata
        })
        .then((res) =>res.text())
        .then((res) => {
            console.log(res)
            navigate("/")
    })
        .catch((err) => {
            console.error(err)
        })

        document.getElementById('fileinput').value = null

        setFile(null)
    }
    
    return(
    <div className="conteiner2">
        <br /><br /><br /><br />
        <div className="card p-3">
            <div className="row">
             <div className="col-10">
                <input id="fileinput" onChange={selectedHandler}  className="form-control" type="file" name="image" />
             </div>
             <div className="col-2">
                <button onClick={sendHandler}  type="button" className="btn btn-danger">Upload</button>
             </div>
           
          </div>
        </div>
    </div>
   ) 
    
}


 