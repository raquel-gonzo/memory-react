import React, { useState, useEffect } from "react";
import Card from "./card";
import Cards from "../cards.json";

const GameBoard = () => {

  const [shuffledCards, setShuffledCards] = useState([])
  const [flipped, setFlipped ] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setShuffledCards(shuffle(Cards))
  }, [])

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0){
      setFlipped([id])
      setDisabled(false)
      return
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([ ...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = Cards.find((card) => card.id === id)
    const flippedCard = Cards.find((card) => flipped[0] === card.id)
    return flippedCard.publicId === clickedCard.publicId
  }

  function shuffle(array) {
    const _array = array.slice(0)
    for (let i=0; i< array.length -1 ; i++){
      let randomIndex = Math.floor(Math.random() * (i+1))
      let temp = _array[i]
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp
    }
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
            handleClick={handleClick}
            disabled={disabled || solved.includes(card.id)}
            solved={solved.includes(card.id)}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
