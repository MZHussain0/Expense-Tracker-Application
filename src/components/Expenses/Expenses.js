import React, { useState } from "react";

import Card from "../UI/Card";
import Expenseitem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Expenseitem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></Expenseitem>
    </Card>
  );
}

export default Expenses;
