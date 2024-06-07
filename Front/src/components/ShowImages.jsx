import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2"
import "./Showcss.css"
 import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";



 

const API = "http://localhost:8000/img"
 
export const ShowImages = () => {
    const [imgs, setImgs] = useState([])
    const [cargando, setCargando] = useState(true)

 
    const getAllImgs= async() =>{
        const res= await axios.get(API)
        setImgs(res.data)
     }

    const deleteImg = async(id)=>{
        await axios.delete(`${API}/${id}`)
        getAllImgs()
    }

    const confirmarDelete = (id) =>{
        Swal.fire({
            title: "Estas seguro?",
            text: "No se podrá revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteImg(id)
              Swal.fire({
                title: "Eliminado!",
                text: "Tu documento ha sido eliminado",
                icon: "success",
              });
            }
          });
        } 
    

    useEffect(()=>{
        setCargando(true)
        getAllImgs()
        setCargando(false)
    },[])

    // if(cargando){
    //     return <Spinner/>
    // }
    return(
       <div className="container">
        <div className="row">
        {/* <Buscador/> */}
        <small>Create Img </small>
            <div className="col">     
                <Link to="/create" className="btn btn-primary mt-2">
                  <i className="btn bt-primary"><IoAdd /></i>     
                </Link>
                
                    <div>
                        {imgs.map((img=>(
                            <div key={img.id}>
                                <p>{img.name}</p>
                                  <p>
                                    <Link to={`edit/${img.id}`} className="btn btn-primary">
                                         <MdOutlineEdit />
                                     </Link>
                                    <button className="btn btn-danger" onClick={() => confirmarDelete(img.id)}>
                                          <MdDelete />
                                    </button>
                                </p>
                            </div>
                        )))}
                    </div>
             </div>
        </div>
       </div>
    ) 
    
}


