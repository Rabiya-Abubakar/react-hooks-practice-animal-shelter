import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "./db.json"; // Local data for testing; remove if using an API

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (newType) => {
    setFilters({ ...filters, type: newType });
  };

  const onFindPetsClick = () => {
    let filteredPets = data.pets; // Assuming `data.pets` is the correct structure

    if (filters.type !== "all") {
      filteredPets = filteredPets.filter((pet) => pet.type === filters.type);
    }

    

    setPets(filteredPets);
  };

  const onAdoptPet = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: true } : pet

    
      )
    );
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui grid">
        <div className="four wide column">
          <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
        </div>
        <div className="twelve wide column">
          <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
        </div>
      </div>
    </div>
  );
}

export default App;
