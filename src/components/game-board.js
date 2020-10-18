import React, { useState } from "react";
import Card from "./card";
import Cards from "../cards.json";

const GameBoard = () => {
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      // first click
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
    // second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }

  function checkForMatch() {
    // do cards match?
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
    } else {
      unflipCards();
    }
  }

  function disableCards() {
    // match detected
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  }

  function unflipCards() {
    // no match
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  return (
    <div id="game-board" >
      {Cards.map((card, i) => {
        return (
          <Card
            key={i}
            className={card.className}
            publicId={card.publicId}
            alt={card.alt}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
