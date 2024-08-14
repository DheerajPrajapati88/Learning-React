import React, { useState } from "react";

function MyCopm() {
  const [food, setFoods] = useState([
    "Apple",
    "Banana",
    "Grapes",
    "Cherry",
    "Orange",
  ]);

  function handleAddFood() {
   
    const newFood=document.getElementById('foodInput').value;
    document.getElementById('foodInput').value='';

    setFoods(f=>[...f,newFood])
  }

  function HandleRemoveFood(index) {

    setFoods(food.filter((_,i)=>{
      return i!==index
    }))
  }

  return (
    <div>
      <h1>List of Foof</h1>
      <ul>
        {food.map((e, index) => (
          <li key={index} onClick={()=>HandleRemoveFood(index)}>{e}</li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Add food..." />

      <button onClick={handleAddFood}>add</button>
    </div>
  );
}

export default MyCopm;
