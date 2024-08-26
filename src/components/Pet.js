import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, name, type, age, weight, gender, isAdopted } = pet;
  const genderSymbol = gender === "male" ? "♂" : gender === "female" ? "♀" : "";

  const handleAdoptClick = () => {
    if (!isAdopted) {
      onAdoptPet(id); // Call the adopt handler if the pet is not already adopted
    }
  };

  return (
    <div className="card" data-testid="pet"> {/* Added data-testid */}
      <div className="content">
        <div className="header">
          {name} {genderSymbol}
        </div>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight} lbs</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
