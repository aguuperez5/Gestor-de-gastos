import React, { useState, useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [step, setStep] = useState(1); // Paso 1: Verificar usuario, Paso 2: Ingresar contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUsernameSubmit = (e) => {
    e.preventDefault();

    // Recuperar usuarios de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setStep(2); // Avanzar al paso 2 si el usuario existe
      setError('');
    } else {
      setError('El usuario no existe. ¿Quieres registrarte?');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (login(username, password)) {
      navigate('/menu'); // Redirigir si las credenciales son correctas
    } else {
      setError('Contraseña incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      {step === 1 && (
        <form onSubmit={handleUsernameSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Siguiente</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      )}
      {error && <p className="error">{error}</p>}
      {step === 1 && (
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      )}
    </div>
  );
};

export default LoginPage;