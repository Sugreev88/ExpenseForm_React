import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import ExpenseForm from "./ExpenseForm";
import "../App.css";

const expenses = [
  { title: "car insurance", amount: "$400", time: new Date(2023, 2, 25) },
  { title: "bike insurance", amount: "$480", time: new Date(2023, 3, 26) },
  { title: "phone insurance", amount: "$100", time: new Date() },
];

export default function Expense() {
  const [initialExpenses, setExpenses] = useState(expenses);

  const inputExpenseHandler = function (expense) {
    setExpenses([expense, ...expenses]);
    console.log("in expense js", initialExpenses);
  };
  return (
    <div>
      <div className="container">
        <ExpenseForm onExpenseData={inputExpenseHandler}></ExpenseForm>
      </div>
      {initialExpenses.map((expenses) => (
        <ExpenseItems
          title={expenses.title}
          amount={expenses.amount}
          time={expenses.time}
        ></ExpenseItems>
      ))}
    </div>
  );
}
