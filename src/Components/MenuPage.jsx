import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const MenuPage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Cerrar sesión
    navigate('/'); // Redirigir al inicio de sesión
  };

  return (
    <div className="container">
      <h1>Menú Principal</h1>
      <div className="menu-options">
        <button onClick={() => navigate('/add-expense')}>Agregar Gasto</button>
        <button onClick={() => navigate('/delete-expense')}>Eliminar Gasto</button>
        <button onClick={() => navigate('/view-history')}>Ver Historial de Gastos</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default MenuPage;