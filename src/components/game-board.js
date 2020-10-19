import React, { useState, useEffect } from "react";
import Card from "./card";
import Cards from "../cards.json";

const GameBoard = () => {

  const [shuffledCards, setShuffledCards] = useState([])

  useEffect(() => {
    setShuffledCards(shuffle(Cards))
  }, [])

  const [flipped, setFlipped ] = useState([]);

  const handleClick = (id) => {
    setFlipped([...flipped, id])
  }

  //shuffle (youtube demo)
  function shuffle(array) {
    const _array = array.slice(0)
    for (let i=0; i< array.length -1 ; i++){
      let randomIndex = Math.floor(Math.random() * (i+1))
      let temp = _array[i]
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp
    }
    console.log(_array)
    return _array
  }

  return (
    <div id="game-board" >
      {shuffledCards.map((card, i) => {
        return (
          <Card
            key={i}
            id={card.id}
            className={card.className}
            publicId={card.publicId}
            alt={card.alt}
            flipped={flipped.includes(card.id)}
            handleClick={()=> handleClick(card.id)}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
