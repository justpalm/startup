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


  //Simulates the fighting of the Minotaur
  function fight(userInput) {
    const enemy = Math.floor(Math.random() * 3) + 1;

    //1 is rock
    //2 is paper
    //3 is scissors

    //1 beats 3
    //2 beats 1
    //3 beats 2

    if (userInput === 3 && enemy === 2) {
      navigate("/victory")
    }

    if (userInput === 1 && enemy === 3) {
      navigate("/victory")
    }

    if (userInput === 2 && enemy === 1) {
      navigate("/victory")
    }


    if (enemy === 3 && userInput === 2) {
      navigate("/defeat")
    }

    if (enemy === 1 && userInput === 3) {
      navigate("/defeat")
    }

    if (enemy === 2 && userInput === 1) {
      navigate("/defeat")
    }


    if (userInput.value === enemy) {
      //return TRY AGAIN message!!
    }






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
      variant = "light"
      onClick={() => fight(1)}>🪨</Button>  
      <Button 
      variant= "light"
      onClick={() => fight(2)}>✂️</Button>
      <Button 
      variant = "light"
      onClick={() => fight(3)}>📄</Button>
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
