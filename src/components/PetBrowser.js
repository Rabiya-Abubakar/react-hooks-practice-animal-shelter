import React from "react";
import PropTypes from "prop-types";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards">
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          pet={pet}
          onAdoptPet={onAdoptPet}
        />
      ))}
    </div>
  );
}

// Updated prop types for validation
PetBrowser.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Updated to string
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      isAdopted: PropTypes.bool.isRequired
    })
  ).isRequired,
  onAdoptPet: PropTypes.func.isRequired
};

export default PetBrowser;
