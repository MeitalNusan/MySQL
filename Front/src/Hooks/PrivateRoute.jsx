import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Ruta privada solo para administradores
const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user || !user.isAdmin) {
        return <Navigate to="/login" />;  // Si no es admin, redirige a login
    }

    return children;  // Si es admin, renderiza el contenido
};

export default PrivateRoute;
