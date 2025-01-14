import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { Spinner } from "../spinner/Spinner";
import "./buscador.css";
import { Link } from "react-router-dom";


export const Buscador = ({ apiUrl, placeholder, queryKey }) => {
    const [txtBuscador, setTxtBuscador] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const queryClient = useQueryClient();

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
        navigate(`/?search=${encodeURIComponent(txtBuscador)}`);
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`${apiUrl}${id}`);
            queryClient.invalidateQueries(queryKey); // Invalidar consulta para actualizar datos
            Swal.fire({
                title: "Eliminado!",
                text: "Tu imagen ha sido eliminada",
                icon: "success"
            });
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    const confirmarDelete = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(id);
            }
        });
    };

    if (isLoading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

    let filteredData = data || []; 
    
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");

    if (search) {
        filteredData = data.filter(item => item.name && item.name.toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <main>
            <div className="cajaBuscador">
                 <form onSubmit={handleSubmit}> 
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
                
                </form>
            </div>
            <div className="containerResultados">
                {filteredData.length === 0 && (
                    <p>No se encontraron resultados con ese nombre.</p>
                )}
                {filteredData.map((item) => (
                    <div key={item.id} className="itemBusqueda">
                        <p>{item.name}</p>
                        <p>{item.title}</p>
                        <p>{item.content}</p>
                        <p>
                            {item.data && (
                                <img
                                    src={URL.createObjectURL(new Blob([Uint8Array.from(item.data.data)]), { type: item.type })}
                                    alt={item.name}
                                    className="fotos"
                                />
                            )}
                        </p>
                        <p>
                            <Link to={`/editImg/${item.id}`} className="btn btn-primary">
                                <MdOutlineEdit />
                            </Link>
                            <button className="btn btn-danger" onClick={() => confirmarDelete(item.id)}>
                                <MdDelete />
                            </button>
                        </p>
                    </div>
                ))}
            </div>
        
        </main>
    );
};
