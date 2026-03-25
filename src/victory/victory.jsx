import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";


export function Victory() {
 const navigate = useNavigate();
 const location = useLocation();

  const { userName, character, timeToWinMs } = location.state || {};

  return (
    <main className="container-fluid bg-secondary text-center">

      <div style={{ fontSize: '8rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold', color: '6px 6px 0 #0c5223ff', textShadow: '6px 6px 0 #706c6bff', }}>
        VICTORY!
      </div>

      <p>Player: {userName}</p>
      <p>Character: {character}</p>
      <p>Time to win: {(timeToWinMs / 1000).toFixed(1)} seconds</p>


      <div style={{ fontSize: '2rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold'}}>
      {userName}
      </div>
      <Button
        variant="outline-warning"
        onClick={() => navigate("/")}
        size = "lg">
        Go Back
      </Button>


    </main>
  );
}