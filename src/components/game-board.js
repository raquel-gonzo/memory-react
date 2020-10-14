import React, {useState} from 'react';
// import Card from './card';
import Faces from './faces';

const GameBoard = () => {

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

    return(
        <div>
          <Faces faces={Faces()}/>
        </div>
    )
}

export default GameBoard;