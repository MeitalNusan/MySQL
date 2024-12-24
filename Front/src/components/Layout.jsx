import React from 'react';
import { useAuth } from '../Hooks/AuthContext';  // Importamos el hook de autenticación
import { useNavigate } from 'react-router-dom'; // Para redirigir al login
import { Nav } from './Nav/Nav';
import { Footer } from './footer/footer';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    const { user, logout } = useAuth();  // Accedemos al contexto de autenticación
    const navigate = useNavigate();  // Para redirigir

    // Función para manejar el logout
    const handleLogout = () => {
        logout();  // Llamamos a la función de logout del contexto
        navigate('/login');  // Redirigimos al login después de cerrar sesión
    };

    return (
        <div>
            <Nav />
            
            {/* Si hay un usuario logueado, mostramos el botón de logout */}
            {user && (
                <div>
                    <span>Welcome, {user.username}</span>  {/* Mostramos el nombre del usuario */}
                    <button onClick={handleLogout}>Logout</button>  {/* Botón de logout */}
                </div>
            )}
            
            {/* El Outlet se encarga de renderizar las rutas hijas */}
            <Outlet />
            
            <Footer />
        </div>
    );
};
