import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


export function Weather() {

  const navigate = useNavigate();
  
  return (
    <main className="container-fluid bg-secondary text-center">

      <div style={{ fontSize: '4rem', fontWeight: 'bold' }}>
      Provo Weather
      </div>

      <img
          src="provo.png"
          className="blend"
          alt="Minotaur"
          height="600"
        />

      <nav>

        <menu>
        <Button
          variant="secondary"
          onClick={() => navigate("/weather")}
        >
          Refresh 
        </Button>


        <Button
          variant="secondary"
          onClick={() => navigate(`/login`)}
        >
          Go Back
        </Button>



          {/* <button type="button" onclick="location.href='weather.html'">Refresh</button>
          <button type="button" onclick="location.href='index.html'">Go Back</button> */}
        </menu>

      </nav>
  
      

        <br />

      

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