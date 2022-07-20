import React, { useState } from "react";
import { City } from "country-state-city";
import "./search.css";

export default function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState("");
  console.log("cities",City.getAllCities());
  // const cities = [
    
  // ]

  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="Search">
      <label className="Search__label">
        <input
          className="Search__input"
          placeholder="Search....."
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </label>
    </div>
  );
}