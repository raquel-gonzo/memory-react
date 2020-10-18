import React from "react";
import { Image, Transformation } from "cloudinary-react";

const Card = (props) => {
  // each card should have a front-face and a back-face.
  return (
    <div className="card">
      {/* front */}
      <Image
        cloudName="raquel-gonzo"
        className={props.className}
        publicId={props.publicId}
      >
        <Transformation width="150" height="210" crop="scale" />
      </Image>

      {/* back */}
      <Image 
        cloudName="raquel-gonzo"
        publicId="memory-react/cards-icon.png"
        className="back-face"
        >
        <Transformation width="150" height="210" crop="scale" />
      </Image>
    </div>
  );
};

export default Card;
