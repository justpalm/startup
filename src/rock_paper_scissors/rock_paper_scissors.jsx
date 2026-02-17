import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import c1 from "../character/characters/character_1.png";
import c2 from "../character/characters/character_2.png";
import c3 from "../character/characters/character_3.png";

export function Rock_Paper_Scissors() {
  return (
    <main>
      <h4>World: Inert messages that comes from the websocket or game</h4>
      
      <h1>Rock Paper Scissors</h1>
      <br />
      <input type="text" id="count" value="Time - 4:32" readOnly />  {}
      
      
      
      <img 
        id="Minotaur" 
        src="the_minotuar.png"
        width="200" 
        alt="Minotaur" />  

      <p> Character from Database appears here </p>

      <img 
        id="character-img"
        src = {c1}
        width="200" 
        alt="Character" /> 

      {/* Fight area */}
      <Button 
      variant= "light"
      onClick={() => {}}>✂️</Button>
      <Button 
      variant = "light"
      onClick={() => {}}>🪨</Button>
      <Button 
      variant = "light"
      onClick={() => {}}>📄</Button>

      <Button 
      variant="success"
      onClick={() => navigate("/victory")}
      >
      Victory
      </Button>

      <Button 
      variant="danger" 
      onClick={() => navigate("/maze")}
      >
      Defeat
      </Button>


      <Button
          variant="outline-warning"
          onClick={() => navigate("/")}
          size = "lg">
          Go Back
      </Button>





    </main>
  );
}
