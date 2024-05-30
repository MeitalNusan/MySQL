import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2"
import "./Showcss.css"
 import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";



 

const API = "http://localhost:8000/post/"
 
export const Show = () => {
    const [posts, setPosts] = useState([])
    const [cargando, setCargando] = useState(true)

 
    const getAllPost= async() =>{
        const res= await axios.get(API)
        setPosts(res.data)
    }

    const deletePost = async(id)=>{
        await axios.delete(`${API}${id}`)
        getAllPost()
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
                deletePost(id)
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
        getAllPost()
        setCargando(false)
    },[])

    // if(cargando){
    //     return <Spinner/>
    // }
    return(
       <div className="container">
        <div className="row">
        {/* <Buscador/> */}
        <small>Create Post </small>
            <div className="col">     
                <Link to="/create" className="btn btn-primary mt-2">
                  <i className="btn bt-primary"><IoAdd /></i>     
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th> 
                            <th>Content</th> 
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post=>(
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>
                                    <Link to={`edit/${post.id}`} className="btn btn-primary">
                                         <MdOutlineEdit />
                                     </Link>
                                    <button className="btn btn-danger" onClick={() => confirmarDelete(post.id)}>
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


