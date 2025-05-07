import React, { useState } from 'react';
import ExpenseList from './ExpenseList';

const AddExpensePage = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !date) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newExpense = { description, amount, date };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Agregar Gasto</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
      <div className="list-container">
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default AddExpensePage;