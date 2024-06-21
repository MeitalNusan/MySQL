import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "../Images/showImgcss.css";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Spinner } from "../Spinner";
import { Buscador } from "../Buscador";

const API= "http://localhost:8000/img/";

export const ShowImages = () => {
    const [imgs, setImgs] = useState([]);
    const [cargando, setCargando] = useState(true);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");

    const getAllImgs = async () => {
        try {
            const searchURL = search ? `${API}?search=${search}` : API ;
            const res = await axios.get(searchURL);
            setImgs(res.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setCargando(false);
        }
    };

//   const deleteImg = async (id) => {
//         try {
//             await axios.delete(`${API}${id}`);
//             getAllImgs(); // Actualizar imágenes después de eliminar
//         } catch (error) {
//             console.error("Error deleting image:", error);
//         }
//     };


    // const confirmarDelete = (id) => {
    //     Swal.fire({
    //         title: "¿Estás seguro?",
    //         text: "No podrás revertir esto",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Sí, eliminarlo!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             deleteImg(id);
    //             Swal.fire({
    //                 title: "Eliminado!",
    //                 text: "Tu imagen ha sido eliminada",
    //                 icon: "success"
    //             });
    //         }
    //     });
    // };

    useEffect(() => {
        getAllImgs();
    }, [search]);

    if (cargando) {
        return <Spinner />;
    }

    return (
        <div className="container">
            <Buscador apiUrl={API}  placeholder={"Buscador"} queryKey={"images"} />
            {/* <section className="table">
                {imgs.map((img) => (
                    <div key={img.id}>
                        <p>
                            <Link to={`/editImg/${img.id}`} className="btn btn-primary">
                                <MdOutlineEdit />
                            </Link>
                            <button className="btn btn-danger" onClick={() => confirmarDelete(img.id)}>
                                <MdDelete />
                            </button>
                        </p>
                    </div>
                ))}
            </section> */}
        </div>
    );
};