import React, { useState } from "react";

export default function ExpenseForm(props) {
  const [initialTitle, setTitle] = useState();
  const [initialAmount, setAmount] = useState();
  const [initialDate, setDate] = useState();

  const titleHandler = function (event) {
    setTitle(event.target.value);
    // console.log("in title handler", initialTitle);
  };
  const amountHandler = function (event) {
    setAmount(event.target.value);
    // console.log("in title handler", initialTitle);
  };
  const dateHandler = function (event) {
    setDate(event.target.value);
    // console.log("in title handler", initialTitle, initialAmount, initialDate);
  };

  const submitHandler = function (event) {
    event.preventDefault();
    const expenseData = {
      title: initialTitle,
      amount: initialAmount,
      time: initialDate,
    };

    props.onExpenseData(expenseData);

    setAmount("");
    setDate("");
    setTitle("");
    // console.log(initialAmount, initialDate, initialTitle);
  };

  return (
    <div className="add-expense">
      <form onSubmit={submitHandler}>
        <div className="expense-field" id="title-field">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={initialTitle} />
        </div>
        <div className="expense-field" id="amount-field">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            max="100"
            onChange={amountHandler}
            value={initialAmount}
          />
        </div>
        <div className="expense-field" id="date-field">
          <label>Date</label>
          <input type="date" onChange={dateHandler} value={initialDate} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
