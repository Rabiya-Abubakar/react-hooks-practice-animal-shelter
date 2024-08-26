import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  const handleSelectChange = (event) => {
    onChangeType(event.target.value); // Trigger the callback with the selected value
  };

  const handleButtonClick = () => {
    onFindPetsClick(); // Trigger the callback when the button is clicked
  };

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <label htmlFor="type">Select Animal Type</label> {/* Added label for accessibility */}
        <select
          name="type"
          id="type"
          aria-label="Animal type"
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button
          className="ui secondary button"
          onClick={handleButtonClick}
        >
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;
