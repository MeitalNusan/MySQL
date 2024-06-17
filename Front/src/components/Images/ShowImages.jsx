import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import Swal from "sweetalert2"
import "../Images/showImgcss.css"
 import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
 import { Spinner } from "../Spinner";
import Modal from "react-modal"
  


 

const API = "http://localhost:8000/img/"
 
export const ShowImages = () => {
    const [imgs, setImgs] = useState([])
    const [cargando, setCargando] = useState(true)
    // const [modalIsOpen, setmodalIsOpen] = useState(false)
    // const [currentImage, setCurrentImage] = useState(null)  

 

    // Modal.setAppElement('body')


    const location = useLocation();
    
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search");


    const useQuery = () =>{
        const location = useLocation()
        return new URLSearchParams(useLocation.search)
    }

    const query = useQuery()
    const search = query.get("search")
    
    const getAllImgs= async() =>{
        const searchURL = search ? `http://localhost:8000/img/${search}` : 'http://localhost:8000/img';
       
        const res= await axios.get(searchURL)
        setImgs(res.data)
     }

    const deleteImg = async(id)=>{
        await axios.delete(`${API}${id}`)
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

    if(cargando){
        return <Spinner/>
    }


    const modalHandler = (isOpen,image) => {
        setmodalIsOpen(isOpen)
        setCurrentImage(image)
    }


    return(

        <div className="conteiner">  
                {/* <div className="titulos">
                    <h1 className="title1">Always</h1> 
                    <h1 className="title2">El garage</h1> 
                </div> */}
                 <section className="table">
                        {imgs.map((img => (
                        <div  key={img.id}>
                         
                         <Link to={`/card/${img.id}`} className="name">
                                    
                              <img
                                className="img"
                                src={URL.createObjectURL(new Blob([Uint8Array.from(img.data.data)]), { type: img.type })}
                                alt={img.name}
                            />  
                            </Link> 
                               <p>{img.name}</p>
                               
                            <p>
                                <Link to={`/editImg/${img.id}`} className="btn btn-primary">
                                    <MdOutlineEdit />
                                </Link>
                                <button className="btn btn-danger" onClick={() => confirmarDelete(img.id)}>
                                    <MdDelete />
                                </button>
                                {/* <button onClick={() => modalHandler(true, img.data.data)} className="btn btn-dark">Click to view</button> */}

                            </p>
                            {/* <Modal isOpen={modalIsOpen} onRequestClose={() => modalHandler(false, null)}>
                                <div className="card">
                                <img src={URL.createObjectURL(new Blob([Uint8Array.from(img.data.data)]), { type: img.type })} />
                                <div className="card-body">
                                    <button className="btn btn-dark">
                                    delete 
                                    </button>
                                </div>
                                </div>
                           </Modal> */}
                        </div>
                        
                    )))}
                   </section>

                   

            </div>
     
    ) 
        
}


