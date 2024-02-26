import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance and life insurances",
      amount: 4533,
      date: new Date(2021, 6, 28)
    },
    {
      title: "Shopping Clothes and some footwears",
      amount: 6663,
      date: new Date(2021, 5, 8) // Corrected the date here
    },
    {
      title: "General Store Material",
      amount: 9333,
      date: new Date(2021, 6, 28)
    }
  ];

  return (
    <div>
      <h2>Expense Track Application</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
