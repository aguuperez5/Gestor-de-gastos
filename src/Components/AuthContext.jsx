import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Recuperar usuarios de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si las credenciales son correctas
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};