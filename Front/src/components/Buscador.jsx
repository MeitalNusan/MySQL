import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "./Spinner";
import "./buscador.css"
 
export const Buscador = ({ apiUrl, placeholder, queryKey }) => {
    const [txtBuscador, setTxtBuscador] = useState('');
    const navigate = useNavigate();

    const fetchImages = async () => {
        try {
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch images');
        }
    };

    const { isLoading, error, data } = useQuery(queryKey, fetchImages);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (txtBuscador.trim() !== '') {
            navigate(`/?search=${encodeURIComponent(txtBuscador)}`);
        }
    };

    if (isLoading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

    let filteredData = data; // Por defecto, todos los datos

    // Filtrar datos si hay un término de búsqueda
    if (txtBuscador.trim() !== '') {
        filteredData = data.filter(item => item.name.toLowerCase().includes(txtBuscador.toLowerCase()));
    }

    return (
        <div>
            <form className="containerBuscador" onSubmit={handleSubmit}>
                <div className="cajaBuscador">
                    <input
                        placeholder={placeholder}
                        value={txtBuscador}
                        onChange={(e) => setTxtBuscador(e.target.value)}
                        type="text"
                        className="inputBuscador"
                    />
                    <button type="submit" className="botonBuscador">
                        <FaSearch />
                    </button>
                </div>
            </form>

            <div className="containerResultados">
                {filteredData.length === 0 && (
                    <p>No se encontraron resultados con ese nombre.</p>
                )}
                {filteredData.map((item) => (
                    <div key={item.id} className="itemBusqueda">
                        <p>{item.name}</p>
                        <img                           
                         src={URL.createObjectURL(new Blob([Uint8Array.from(item.data.data)]), { type: item.type })}
                            />
                    </div>
                ))}
            </div>
        </div>
    );
};
 

// const API_URL = "http://localhost:8000/img/";

// export const Buscador = () => {
//     const [txtBuscador, setTxtBuscador] = useState("");
//     const navigate = useNavigate();

//     const fetchImages = async () => {
//         try {
//             const response = await axios.get(API_URL);
//             return response.data;
//         } catch (error) {
//             throw new Error('Failed to fetch images');
//         }
//     };

//     const { isLoading, error, data } = useQuery('images', fetchImages);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (txtBuscador.trim() !== "") {
//             navigate(`/?search=${encodeURIComponent(txtBuscador)}`);
//         }
//     };

//     if (isLoading) return <Spinner />;
//     if (error) return <div>Error: {error.message}</div>;

//     let filteredImages = data; // Por defecto, todas las imágenes

//     // Filtrar imágenes si hay un término de búsqueda
//     if (txtBuscador.trim() !== "") {
//         filteredImages = data.filter(img => img.name.toLowerCase().includes(txtBuscador.toLowerCase()));
//     }

//     return (
//         <div>
//             <form className="containerBuscador" onSubmit={handleSubmit}>
//                 <div className="cajaBuscador">
//                     <input
//                         placeholder="Buscar por nombre"
//                         value={txtBuscador}
//                         onChange={(e) => setTxtBuscador(e.target.value)}
//                         type="text"
//                         className="inputBuscador"
//                     />
//                     <button type="submit" className="botonBuscador">
//                         <FaSearch />
//                     </button>
//                 </div>
//             </form>

//             <div className="containerImagenes">
//                 {filteredImages.length === 0 && (
//                     <p>No se encontraron imágenes con ese nombre.</p>
//                 )}
//                 {filteredImages.map((img) => (
//                     <div key={img.id} className="imagenItem">
//                         <img
//                             src={URL.createObjectURL(new Blob([Uint8Array.from(img.data.data)]), { type: img.type })}

//                             className="imagen"
//                         />
//                         <p>{img.nombre}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


 