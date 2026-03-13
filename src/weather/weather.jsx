import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import provo from "./provo.png"; 


export function Weather() {

  const navigate = useNavigate();
  
  const [tempF, setTempF] = useState("Loading...");
  const [precip, setPrecip] = useState("N/A");
  const [loading, setLoading] = useState(true);



const fetchWeather = async () => {

try {
  setLoading(true);
  const response = await fetch('/api/weather', {
    method: 'GET',
    credentials: 'include', // Sends auth cookie to backend
  });
  
  if (!response.ok) throw new Error('Weather fetch failed');
  
  const data = await response.json();
  setTempF(data.temperatureF + "°");
  setPrecip(data.precip || "N/A");
} catch (error) {
  console.error('Weather error:', error);
  setTempF("Error");
  setPrecip("Error");
} finally {
  setLoading(false);
}
};

useEffect(() => {
fetchWeather();
  }, []);



  
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
          onClick={() => weather()}
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
        <input type="text" id="count" value= {tempF} readonly />
        <br />
        <label for="count">🌧️% of Rain </label>
        <input type="text" id="count" value= {precip} readonly />
      </div>

    </main>
  );
}