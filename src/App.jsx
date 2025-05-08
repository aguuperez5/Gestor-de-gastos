import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AddExpensePage from './Components/AddExpensePage';
import MenuPage from './Components/MenuPage';
import './App.css'; // Asegúrate de tener un archivo CSS para estilos

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/add-expense" element={<AddExpensePage />} />
          {/* Rutas para las nuevas funcionalidades */}
          <Route path="/delete-expense" element={<div>Eliminar Gasto (En construcción)</div>} />
          <Route path="/view-history" element={<div>Ver Historial de Gastos (En construcción)</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;