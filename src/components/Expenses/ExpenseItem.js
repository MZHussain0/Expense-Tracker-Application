import Card from "../UI/Card.css";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function Expenseitem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default Expenseitem;
