import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginButton = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');

    // Lista de administradores permitidos
    const admins = ['admin1', 'admin2', 'admin3'];

    const handleLogin = () => {
        // Verificamos si el usuario está en la lista de administradores
        if (admins.includes(username)) {
            const userInfo = { username, isAdmin: true };
            login(userInfo);
        } else {
            const userInfo = { username, isAdmin: false };
            login(userInfo);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button onClick={handleLogin}>Login as Admin</button>
        </div>
    );
};

export default LoginButton;
