import axios from "axios";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useQuery, useQueryClient } from "react-query";


 
export const DeleteImgHome = ({ apiUrl, queryKey }) => {
   
    const queryClient = useQueryClient();
    const deleteItem = async (id) => {
        try {
            await axios.delete(`${apiUrl}${id}`);
            queryClient.invalidateQueries(queryKey); 
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



    return(

        <p>
        <Link to={`/editImg/${item.id}`} className="btn btn-primary">
            <MdOutlineEdit />
        </Link>
        <button className="btn btn-danger" onClick={() => confirmarDelete(item.id)}>
            <MdDelete />
        </button>
    </p>
    )
    }




 