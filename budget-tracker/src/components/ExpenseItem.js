import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span
          style={{
            backgroundColor: "#d3e8cc",
            color: "black",
            padding: "10px",
            paddingTop: "4px",
            paddingBottom: "4px",
            borderRadius: "32px",
            marginRight: "20px",
          }}
        >
          £{cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
