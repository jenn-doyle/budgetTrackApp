import React from "react";

const ViewBudget = (budget, handleEditClick) => {
  return (
    <div>
      <span>Budget: £{budget}</span>
      <button type="button" class="btn btn-primary" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
