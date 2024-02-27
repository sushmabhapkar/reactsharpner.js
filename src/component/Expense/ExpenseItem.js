import React,{ useState } from 'react';
import ExpenseDate from "../Expense/ExpenseDate";
import "../Expense/ExpenseItem.css";
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  // const deleteExpenseHandler = () => {
  //   // You can access the DOM element and remove it directly
  //   const expenseItem = document.getElementById(`expenses-${props.id}`);
  //   if (expenseItem) {
  //     expenseItem.remove();
  //   }
  // };
 const[title,setTitle]= useState(props.title);
console.log("expenseitem evaluated by react");

  const updateExpenseHandler=()=>
  {
     setTitle("updated!!")
     console.log(title);

  };

  return (
    <div>
      <div className="expense_item_date" id={`expenses-${props.id}`}>

        <Card className="expense_item_date">
          <ExpenseDate date={props.date} />
          <div className="expense_item_description">
            <h2>{title}</h2>

            <div className="expense_item_price">
              <h2>${props.amount}</h2>
            </div>
            {/* <button onClick={deleteExpenseHandler}>Delete Expense</button> */}
            <button onClick={updateExpenseHandler}>Update Expense</button>
          </div>

        </Card>
      </div>
    </div>
  );
}

export default ExpenseItem;
