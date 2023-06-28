import React from "react";
import "../App.css";

export default function ExpenseItems(props) {
  const date = new Date(props.time);
  const formattedDate = date.toLocaleString();

  return (
    // <div className="add-expense-item">
    <div className="expense-item">
      <div className="info">{props.title}</div>
      <div className="info" id="amount-info">
        ${props.amount}
      </div>
      <div>
        <p>{formattedDate}</p>
      </div>
    </div>
    // </div>
  );
}
