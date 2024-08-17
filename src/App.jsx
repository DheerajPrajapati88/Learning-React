import React from "react";
import TodoList from "./TodoList";
import './App.css'
import StopWatch from "./StopWatch";
function App() {
  return (
    <div className="app">
      <h1 className="h1" style={{color:'#000'}}>Projet 1</h1>

      <TodoList/>
      <h1 className="h1" style={{color:'#000'}}>Projet 2</h1>
      <StopWatch/>
    </div>
  );
}

export default App;
