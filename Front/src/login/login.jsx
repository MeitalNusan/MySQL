import React, { useState } from 'react';
import { useAuth } from '../Hooks/AuthContext';
import styles from "../login/csslogin.module.css";

export const Login = () => {
    const { login } = useAuth();  // Obtenemos la función 'login' del contexto
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');  // Estado para la contraseña
    const [error, setError] = useState('');  // Estado para el mensaje de error

    // Lista de administradores permitidos con sus contraseñas
    const admins = {
        admin1: 'password1',  // Usuario: Contraseña
        admin2: 'password2',
        admin3: 'password3',
    };

    // Función para manejar el login
    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            setError('Please enter both username and password');
            return;
        }

        // Verificar si el usuario es un administrador y si la contraseña es correcta
        if (admins[username] && admins[username] === password) {
            const userInfo = { username, isAdmin: true };
            login(userInfo);  // Llamamos al login con los datos del administrador
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <h2>Login as Admin</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"  // Campo para la contraseña
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <div className={styles.error-message}>{error}</div>} {/* Mostramos el mensaje de error si existe */}
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};
