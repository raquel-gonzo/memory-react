import React from "react";
import { Image, Transformation } from "cloudinary-react";

const Card = ({ id, className, publicId, alt, flipped, handleClick, disabled, solved}) => {
  // each card should have a front-face and a back-face.
  return (
    <div className={`flip-container ${flipped ? "flipped" : ""}`}>
        <Image
          cloudName="raquel-gonzo"
          className={flipped ? className : "card back-face"}
          publicId={flipped || solved ? publicId : "memory-react/cards-icon.png"}
          onClick={() => disabled ? null : handleClick(id)}
          alt={alt}
        >
          <Transformation width="150" height="210" crop="scale" />
        </Image>
    </div>
  );
};

export default Card;
