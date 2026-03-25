import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import provo from "./provo.png"; 


export function Weather() {

  const navigate = useNavigate();


// I tried to get the third part service, but it did not work



React.useEffect(() => {
    fetch('https://api.weather.gov/points/40.2338,-111.6585')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
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
          onClick={() => Weather()}
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
        <label>☀️Farenheit</label>
        {/* <input value= {tempF} readOnly /> */}
        <br />
        <label>🌧️% of Rain </label>
        {/* <input value= {precip} readOnly /> */}
      </div>

    </main>
  );
}