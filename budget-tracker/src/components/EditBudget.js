import { useState } from "react";

const EditBudget = (budget, handleSaveClick) => {
  const [value, setValue] = useState(budget);
  return (
    <div>
      <input
        required="required"
        type="number"
        class="form-control mr-3"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};

export default EditBudget;
