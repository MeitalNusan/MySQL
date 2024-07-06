import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Buscador } from "./Buscador";
import { Spinner } from "./Spinner";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const API = "http://localhost:8000/post/";

export const Show = () => {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  const getAllPosts = async () => {
    try {
      const searchURL = search ? `${API}?search=${search}` : API;
      const res = await axios.get(searchURL);
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setCargando(false);
    }
  };

//   const deletePost = async (id) => {
//     try {
//       await axios.delete(`${API}${id}`);
//       getAllPosts();
//       Swal.fire({
//         title: "Eliminado!",
//         text: "Tu publicación ha sido eliminada",
//         icon: "success"
//       });
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   const confirmarDelete = (id) => {
//     Swal.fire({
//       title: "¿Estás seguro?",
//       text: "No podrás revertir esto",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Sí, eliminarlo!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deletePost(id);
//       }
//     });
//   };

  useEffect(() => {
    getAllPosts();
  }, [search]);

  if (cargando) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <Buscador apiUrl={API} placeholder={"Buscar publicaciones"} queryKey={"posts"} />
       
    </div>
  );
};
{/* <div className="containerResultados">
        {posts.length === 0 && (
          <p>No se encontraron publicaciones con ese término de búsqueda.</p>
        )}
        {posts.map((post) => (
          <div key={post.id} className="itemPublicacion">
            <p>{post.title}</p>
            <p>{post.content}</p>
            {/* <p>
              {post.data && (
                <img
                  src={URL.createObjectURL(new Blob([Uint8Array.from(post.data.data)]), { type: post.type })}
                  alt={post.title}
                  className="imagenPublicacion"
                />
              )}
            </p> */}
        //     <p>
        //       <Link to={`/edit/${post.id}`} className="btn btn-primary">
        //         <MdOutlineEdit />
        //       </Link>
        //       <button className="btn btn-danger" onClick={() => confirmarDelete(post.id)}>
        //         <MdDelete />
        //       </button>
        //     </p>
        //   </div>
    //     ))}
    //   </div> */}