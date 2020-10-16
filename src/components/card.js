import React from "react";
import { Image, Transformation } from "cloudinary-react";

const Card = (props) => {
  return (
    <Image
      cloudName="raquel-gonzo"
      className={props.className}
      publicId={props.publicId}
    >
      <Transformation width="150" crop="scale" />
    </Image>
  );
};

export default Card;
