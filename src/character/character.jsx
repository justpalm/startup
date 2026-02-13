import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import c1 from "./characters/character_1.png";
import c2 from "./characters/character_2.png";
import c3 from "./characters/character_3.png";



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

      <h4>World: Messages that come from the websocket</h4>

      <Button
          variant="secondary"
          onClick={() => navigate("/")}
        >
          Go Back
      </Button>

      <nav>
        <h1>Choose your Character</h1>
      </nav>

      {/* Character Image */}
      <img
        id="character-img"
        // src={images[index]}
        src = {images[index]}
        width="300"
        alt="Character"
      />

      {/* Image Controls */}
      <div>
        <button onClick={prevImage}>{"<<<"}</button>
        <button onClick={nextImage}>{">>>"}</button>
      </div>

      <br />

      {/* Character Name Placeholder */}
      <input
        type="text"
        id="count"
        value="Hero's Name"
        readOnly
      />

      {/* Fight Button */}
      <nav>
        <span>⚔️</span>
        <Button
          variant="secondary"
          onClick={() => navigate("/maze")}
        >
          FIGHT
        </Button>
        <span>⚔️</span>
      </nav>
    </main>
  );
}