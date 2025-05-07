import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import LoginPage from './Components/LoginPage';
import AddExpensePage from './Components/AddExpensePage';
import RegisterPage from './Components/RegisterPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-expense" element={<AddExpensePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;