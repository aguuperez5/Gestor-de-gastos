import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validar que el usuario no esté vacío
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Recuperar usuarios existentes de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario ya está registrado
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      setError('El usuario ya está registrado. Por favor, usa otro.');
      return;
    }

    // Agregar el nuevo usuario
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users)); // Guardar en localStorage

    alert('Usuario registrado correctamente');
    navigate('/'); // Redirigir a la página de inicio de sesión
  };

  return (
    <div className="container">
      <h1>Registrar Usuario</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RegisterPage;