import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      <div>
        <h1>Here are the dogs we have:</h1>
      </div>
      <div>
        {dogs.map((dog) => (
          <div key={dog.name}>
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
            <img src={dog.src} alt={dog.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;