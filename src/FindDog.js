import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

function FindDog({ dogs }) {
  const { name } = useParams();

  if (name) {
    const foundDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={foundDog} />;
  }
  return null;
}

export default FindDog;
