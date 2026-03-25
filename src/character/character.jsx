import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import c1 from "./characters/character_1.png";
import c2 from "./characters/character_2.png";
import c3 from "./characters/character_3.png";
import "./character.css";
import{ Players } from "../players.jsx"

export function Character({ user, onCharacterChange }) {
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

  function chooseCharacter(character) {
    localStorage.setItem('character', character);
    onCharacterChange(character); 
  }
  return (

    <main>
      
      <Players userName={user} />
       <div className="playerName" 
       style={{ fontSize: '3rem', fontWeight: 'bold'}}>
      {user}
      </div>

      <div style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: '"Cinzel", serif',}}>
      Choose your Character

      </div>



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
      <br></br>

      {/* Fight Button */}
      <Button
      size="lg"
      variant="outline-danger"
      onClick={() => {
        chooseCharacter(images[index]);  // Save current character first
        navigate("/rock_paper_scissors");              // Then navigate
      }}
    >
      ⚔️ FIGHT ⚔️
    </Button>
        
      <br></br>
      <Button
          variant="outline-warning"
          onClick={() => navigate("/")}
          size = "lg">
          Go Back
      </Button>

    </main>
  );
}