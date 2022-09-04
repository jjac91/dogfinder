import React from "react";
import { Redirect } from "react-router-dom";

function DogDetails({ dog }) {
  if (!dog) return <Redirect to="/dogs" />;

  return (
    <div>
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <h3>{dog.age} years old</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
