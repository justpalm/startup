import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import c1 from "../character/characters/character_1.png";
import c2 from "../character/characters/character_2.png";
import c3 from "../character/characters/character_3.png";
import minotaur from "./the_minotuar.png"; 

export function Rock_Paper_Scissors({userName, character}) {

  const navigate = useNavigate();



  function fight(userInput) {
    


  }

  
  return (
    <main>
      <div style={{ fontSize: '1rem', fontWeight: 'bold'}}>
      {userName}
      </div>
      {/* <input 
      type="text" 
      id="count" 
      value="Time - 4:32" readOnly />  {} */}
      
      
      
      <img 
        id="Minotaur" 
        src={minotaur}
        width="400" 
        alt="Minotaur" />  


      <img 
        id="character-img"
        src = {character}
        width="400" 
        alt="Character" /> 

      {/* Fight area */}
      {/* <p> Character from Database appears here */}
      <br></br>
      <div>
      <Button 
      variant= "light"
      onClick={() => {}}>✂️</Button>
      <Button 
      variant = "light"
      onClick={() => {}}>🪨</Button>
      <Button 
      variant = "light"
      onClick={() => {}}>📄</Button>
      </div>
      <br></br>

      <Button 
      variant="success"
      onClick={() => navigate("/victory")}
      >
      Victory
      </Button>

      <Button 
      variant="danger" 
      onClick={() => navigate("/defeat")}
      >
      Defeat
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
