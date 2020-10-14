import React from 'react';
import { Image, Transformation } from "cloudinary-react";

const Faces = () => {
  return (
    <div>
      <Image cloudName="raquel-gonzo" className="front-face" publicId="memory-react/skull1.png">
        <Transformation width="150" crop="scale" />
      </Image>

      <Image cloudName="raquel-gonzo" className="front-face" publicId="memory-react/skull2.png">
        <Transformation width="150" crop="scale" />
      </Image>

      <Image cloudName="raquel-gonzo" className="front-face" publicId="memory-react/skull3.png">
        <Transformation width="150" crop="scale" />
      </Image>

      <Image cloudName="raquel-gonzo" className="front-face" publicId="memory-react/skull4.png">
        <Transformation width="150" crop="scale" />
      </Image>

      <Image cloudName="raquel-gonzo" className="front-face" publicId="memory-react/skull5.png">
        <Transformation width="150" crop="scale" />
      </Image>

      <Image cloudName="raquel-gonzo" className="front-face" publicId="memory-react/skull6.png">
        <Transformation width="150" crop="scale" />
      </Image>

      <Image cloudName="raquel-gonzo" className="back-face" publicId="memory-react/cards-icon.png">
        <Transformation width="150" crop="scale" />
      </Image>
    </div>
  );
};

export default Faces;
