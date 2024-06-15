import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "./Spinner";

export const Buscador = () => {
    const fetchImages = async () => {
        try {
            const response = await axios.get("http://localhost:8000/img/");
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch images');
        }
    };

    const [txtBuscador, setTxtBuscador] = useState("");
    const { isLoading, error, data } = useQuery('images', fetchImages);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/?search=${txtBuscador}`);
    };

    if (isLoading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        data && data.length > 0 && (
            <form className="containerBuscador" onSubmit={handleSubmit}>
                <div className="cajaBuscador">
                    <input
                        placeholder="Search for name"
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
        )
    );
};

 
