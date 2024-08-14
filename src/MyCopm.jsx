import React, { useState } from "react";

function MyCopm() {
  const [cars, setCars] = useState([]);
  const [carsYear, setCarYear] = useState(new Date().getFullYear());
  const [carsMake, setCarsMake] = useState("");
  const [carsModel, setCarsModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carsYear, make: carsMake, model: carsModel };

    setCars(c => [...c, newCar]);
    setCarYear(new Date().getFullYear())
    setCarsMake("")
    setCarsModel('')
  }
  function handleRemoveCar(index) {

   
    setCars(c => c.filter((_,i)=>{
      return i!==index
    }));

  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarsMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarsModel(event.target.value);
  }
  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car, index) => {
          return (
            <li onClick={()=>handleRemoveCar(index)} style={{fontSize:'20px'}} key={index}>
              {car.year} .
               {car.make} .
               {car.model} 
            </li>
          );
        })}
      </ul>
      <input type="number" value={carsYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carsMake}
        onChange={handleMakeChange}
        placeholder="Enter car Make"
      />
      <br />
      <input
        type="text"
        value={carsModel}
        onChange={handleModelChange}
        placeholder="Enter car Model"
      />

      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyCopm;
