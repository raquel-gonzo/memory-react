import React from "react";
import "./App.css";
import GameBoard from './components/game-board';

function App() {
  var attempts = 0;

  return (
    <div className="App">
      <h1>match the sugar skulls!</h1>

      <h2>attempts: {attempts}</h2>

      <button>new game</button>

      < GameBoard />

    </div>
  );
}

export default App;
