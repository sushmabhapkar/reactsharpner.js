import ExpenseItem from "./component/Expense/ExpenseItem";

const App=()=> {
  const expenses = [
    { 
      id:1,
      title: "Car Insurance and life insurances",
      amount: 4533,
      date: new Date(2021, 6, 28)
    },
    {
      id:2,
      title: "Shopping Clothes and some footwears",
      amount: 6663,
      date: new Date(2021, 5, 8) // Corrected the date here
    },
    {
      id:3,
      title: "General Store Material",
      amount: 9333,
      date: new Date(2021, 6, 28)
    }
  ];

  return (
    <div>
      <h1>......Expense Track Application.........</h1>
      <ExpenseItem 
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
