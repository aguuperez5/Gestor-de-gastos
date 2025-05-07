import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validar que el correo tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo válido.');
      return;
    }

    // Recuperar usuarios existentes de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el correo ya está registrado
    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      setError('El correo ya está registrado. Por favor, usa otro.');
      return;
    }

    // Agregar el nuevo usuario
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users)); // Guardar en localStorage

    alert('Usuario registrado correctamente');
    navigate('/'); // Redirigir a la página de inicio de sesión
  };

  return (
    <div className="container">
      <h1>Registrar Usuario</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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