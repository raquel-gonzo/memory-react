import React, { useState } from "react";
import { Image, Transformation } from "cloudinary-react";

const Card = (props) => {
  // each card should have a front-face and a back-face.

  // isFlipped
  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = () => {
    setIsFlipped(true);
  }

  return (
    <div className="card">
      {isFlipped ? (
        // front
        <Image
          cloudName="raquel-gonzo"
          className={props.className}
          publicId={props.publicId}
        >
          <Transformation width="150" height="210" crop="scale" />
        </Image>
      ) : (
        // back
        <Image
          cloudName="raquel-gonzo"
          publicId="memory-react/cards-icon.png"
          className="back-face"
          onClick={onClick}
        >
          <Transformation width="150" height="210" crop="scale" />
        </Image>
      )}
    </div>
  );
};

export default Card;
