import Swal from "sweetalert2";
import axios from "axios";

export const deleteImgHome = async (apiUrl, id, callback) => {
  try {
    // Mostrar el modal de confirmación
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo",
    });

    if (result.isConfirmed) {
      // Si el usuario confirma, realiza la eliminación
      await axios.delete(`${apiUrl}${id}`);
      Swal.fire("Eliminado!", "El elemento ha sido eliminado correctamente.", "success");
      
      // Llamar al callback (por ejemplo, para actualizar la lista de elementos después de la eliminación)
      if (callback) callback();
    }
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
    Swal.fire("Error", "Hubo un problema al eliminar el elemento.", "error");
  }
};
