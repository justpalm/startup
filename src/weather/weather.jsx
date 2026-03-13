import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import provo from "./provo.png"; 


 useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Step 1: Get Provo points
        const pointsRes = await fetch(
          "https://api.weather.gov/points/40.2338,-111.6585",
          { headers: { "User-Agent": "WeatherApp/1.0" } }
        );
        const points = await pointsRes.json();
        
        // Step 2: Get current observation
        const obsRes = await fetch(points.properties.observationStations[0] + "/observations/latest", {
          headers: { "User-Agent": "WeatherApp/1.0" }
        });
        const obs = await obsRes.json();
        
        // Convert Kelvin to Fahrenheit
        const tempK = obs.properties.temperature?.value;
        setTempF(tempK ? ((tempK - 273.15) * 9/5 + 32).toFixed(0) + "°" : "N/A");
        setPrecip("N/A"); // NWS precip is probabilistic, needs forecast endpoint
        setLoading(false);
      } catch (error) {
        setTempF("Error");
        setPrecip("Error");
        setLoading(false);
        console.error("Weather fetch failed:", error);
      }
    };

    fetchWeather();
  }, []);




export function Weather() {

  const navigate = useNavigate();
  const [tempF, setTempF] = useState("Loading...")
  const [precip, setPrecip] = useState("Loading...")
  
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
        <input type="text" id="count" value= {tempF} readonly />
        <br />
        <label for="count">🌧️% of Rain </label>
        <input type="text" id="count" value= {precip} readonly />
      </div>

    </main>
  );
}