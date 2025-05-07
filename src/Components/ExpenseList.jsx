import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Lista de Gastos</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount} ({expense.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;