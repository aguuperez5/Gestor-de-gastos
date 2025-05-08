import React, { useState } from 'react';

const AddExpensePage = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !date) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newExpense = { description, amount, date };
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = [...savedExpenses, newExpense];
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

    setDescription('');
    setAmount('');
    setDate('');
    alert('Gasto agregado correctamente');
  };

  return (
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
  );
};

export default AddExpensePage;