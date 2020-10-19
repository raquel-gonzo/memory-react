import React, { useState } from "react";
import { Image, Transformation } from "cloudinary-react";

const Card = ({ id, className, publicId, alt, flipped }) => {
  // each card should have a front-face and a back-face.

  // isFlipped
  const [isFlipped, setIsFlipped] = useState(false);
  const [firstCard, setFirstCard] = useState("");
  const [secondCard, setSecondCard] = useState("");

  const flipCard = () => {
    console.log(id);

    if (firstCard === "") {
      setFirstCard(publicId);
      setIsFlipped(true);
      console.log(publicId);
    }

    if (firstCard !== "" && secondCard === "") {
      setSecondCard(publicId);
    }

    detectMatch();
  };

  const disableCards = () => {
    firstCard.removeEventListener("onClick", flipCard);
    secondCard.removeEventListener("onClick", flipCard);
  };

  const detectMatch = () => {
    if (firstCard === "" || secondCard === "") {
      return;
    }
    if (firstCard.publicId == secondCard.publicId) {
      disableCards();
      console.log("you got a match")
    }

  };

  return (
    <div className={`flip-container ${flipped ? "flipped" : ""}`}>
        <Image
          cloudName="raquel-gonzo"
          className={isFlipped ? className : "back-face"}
          publicId={isFlipped ? publicId : "memory-react/cards-icon.png"}
          onClick={flipCard}
        >
          <Transformation width="150" height="210" crop="scale" />
        </Image>
    </div>
  );
};

export default Card;
