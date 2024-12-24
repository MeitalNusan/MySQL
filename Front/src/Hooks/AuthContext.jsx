import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor de contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Usamos useEffect para cargar el usuario desde localStorage cuando la página se recarga
    useEffect(() => {
        const storedUser = localStorage.getItem('user'); // Recuperamos los datos del usuario almacenados
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Si hay datos, los convertimos y actualizamos el estado
        }
    }, []);

    // Función para hacer login
    const login = (userInfo) => {
        setUser(userInfo);  // Guardamos los datos del usuario
        localStorage.setItem('user', JSON.stringify(userInfo));  // Guardamos en localStorage
    };

    // Función para hacer logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');  // Limpiar localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
