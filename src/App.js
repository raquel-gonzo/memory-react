import React, { useState, useEffect } from "react";
import "./App.css";
import GameBoard from './components/game-board';

function App() {

  const [cards, setCards] = useState([]);



  return (
    <div className="App">
      <h1>match the sugar skulls!</h1>

      <button>new game</button>

      < GameBoard />

    </div>
  );
}

export default App;
