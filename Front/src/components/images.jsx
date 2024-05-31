import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2"
import "./Showcss.css"
 import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import "./imagescss.css"




 

const API2 = "http://localhost:8000/img/"
 
export const Images = () => {
    const [imgs, setImgs] = useState([])
    const [cargando, setCargando] = useState(true)

 
    const getAllImg= async() =>{
        const res= await axios.get(API2)
        setImgs(res.data)
    }

    const deleteImg = async(id)=>{
        await axios.delete(`${API2}${id}`)
        getAllImg()
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
        getAllImg()
        setCargando(false)
    },[])

    if(cargando){
        return <div>Cargando...</div>
    }
    return(
       <div className="images">
        <div className="row">
        {/* <Buscador/> */}
        <small>Create Image </small>
            <div className="col">     
                <Link to="/create" className="btn btn-primary mt-2">
                  <i className="btn bt-primary"><IoAdd /></i>     
                </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {imgs.map((img=>(
                            <tr key={img.id}>
                                <td>{img.titulo}</td>
                                
                                <td>
                                    <Link to={`edit/${img.id}`} className="btn btn-primary">
                                         <MdOutlineEdit />
                                     </Link>
                                    <button className="btn btn-danger" onClick={() => confirmarDelete(img.id)}>
                                          <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </div>
       </div>
    ) 
    
}


