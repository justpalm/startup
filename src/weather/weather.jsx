import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import provo from "./provo.png"; 


export function Weather() {

  const navigate = useNavigate();
  
  return (
    <main className="container-fluid bg-secondary text-center">

      <div style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: '"Cinzel", serif',}}>
      Provo Weather
      </div>

      <img
          src={provo}
          className="blend"
          alt="Provo Canyon"
          height="600"
        />

      <nav>

        <menu>
        <Button
          variant="outline"
          size = "lg"
          onClick={() => navigate("/weather")}
        >
          Refresh 
        </Button>


        <Button
          variant="outline-warning"
          size = "lg"
          onClick={() => navigate(`/login`)}
        >
          Go Back
        </Button>
        </menu>

      </nav>


      

      <div>
        <label for="count">☀️Farenheit</label>
        <input type="text" id="count" value="75°" readonly />
        <br />
        <label for="count">🌧️% of Rain </label>
        <input type="text" id="count" value="30%" readonly />
      </div>

    </main>
  );
}