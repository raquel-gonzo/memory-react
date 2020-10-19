import React from "react";
import "./App.css";
import GameBoard from './components/game-board';

function App() {

  return (
    <div className="App">
      <h1>match the sugar skulls!</h1>

      <button>new game</button>

      < GameBoard />

    </div>
  );
}

export default App;
