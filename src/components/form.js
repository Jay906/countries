import React from "react";

function Form({ filter, handleFilter }) {
  return (
    <form>
      <label htmlFor="filter">find countries: </label>
      <input
        type="text"
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
        id="filter"
      />
    </form>
  );
}

export default Form;
