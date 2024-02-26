import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card';


function ExpenseItem(props) {
  return (
    <div>
    <div className="expense_item_date">

    <Card className="expense_item_date">
      <ExpenseDate date={props.date} />
      <div className="expense_item_description">
        <h2>{props.title}</h2>
        
      <div className="expense_item_price">
        <h2>${props.amount}</h2>
     </div>
      </div>
      </Card>
    </div>
  </div>
    

  );
}

export default ExpenseItem;