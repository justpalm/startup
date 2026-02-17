import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import c1 from "./characters/character_1.png";
import c2 from "./characters/character_2.png";
import c3 from "./characters/character_3.png";
import "./character.css";

export function Character() {
  const images = [
    c1,
    c2,
    c3
  ];

  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((i) => (i + 1) % images.length);
  }

  function prevImage() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <main>

      <h1>Choose your Character</h1>

      <h4>World: Messages that come from the websocket</h4>

      {/* Character Image */}
      <img
        id="character-img"
        // src={images[index]}
        src = {images[index]}
        width="400"
        height = "420"
        alt="Character"
      />

      


      {/* Image Controls */}
      <div>
      <Button
      variant = "secondary" 
      onClick={prevImage}>{"<<<"}
      </Button>
      <Button 
      variant = "secondary"   
      onClick={nextImage}>{">>>"}
      </Button>
      </div>

  
      <input
      type="text"
      id="count"
      value="hero's Name"
      readOnly
      />

         


      {/* Fight Button */}
      
        <span></span>
      <Button
          size = "lg"
          variant="outline-danger"
          onClick={() => navigate("/maze")}
        >
        ⚔️ FIGHT ⚔️
      </Button>
        <span></span>

      <Button
          variant="outline-warning"
          onClick={() => navigate("/")}
          size = "lg">
          Go Back
      </Button>

    </main>
  );
}