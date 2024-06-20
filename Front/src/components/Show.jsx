import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2"
import "./Showcss.css"
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import {Buscador} from "./Buscador"
import { Spinner } from "./Spinner";


const API= "http://localhost:8000/post/";

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
            console.error("Error fetching images:", error);
        } finally {
            setCargando(false);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`${API}${id}`);
            getAllPosts();
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
                deletePost(id);
                Swal.fire({
                    title: "Eliminado!",
                    text: "Tu imagen ha sido eliminada",
                    icon: "success"
                });
            }
        });
    };

    useEffect(() => {
        getAllPosts();
    }, [search]);

    if (cargando) {
        return <Spinner />;
    }

    return (
        <div className="container">
            <Buscador apiUrl={API}  placeholder={"Buscador"} queryKey={"posts"} />
        </div>
    );
};