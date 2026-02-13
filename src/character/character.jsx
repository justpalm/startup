import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


export function Character() {
  const images = [
    "characters/character_1.png",
    "characters/character_2.png",
    "characters/character_3.png"
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
      <header>
        <h1>
          The Minotaur<sup>&reg;</sup>
        </h1>
      </header>

      <h4>World: Insert messages that come from the websocket or game</h4>

      <Button
          variant="secondary"
          onClick={() => navigate("/login")}
        >
          Go Back
      </Button>

      <nav>
        <h1>Choose your Character</h1>
        
      </nav>

      {/* Character Image */}
      <img
        id="character-img"
        src={images[index]}
        width="200"
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
        value="Store the name in the database"
        readOnly
      />

      {/* Fight Button */}
      <nav>
        <span>⚔️</span>
        <button onClick={() => (window.location.href = "maze.html")}>
          FIGHT
        </button>
        <span>⚔️</span>
      </nav>
    </main>
  );
}