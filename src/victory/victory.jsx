import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";


export function Victory() {
 const navigate = useNavigate();
 const location = useLocation();

const { userName, timeToWinMs } = location.state || {};


async function saveScore() {
  await fetch("/api/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      timeToWinMs: finalTime,
    }),
  });
}


  return (
    <main className="container-fluid bg-secondary text-center">

      <div style={{ fontSize: '8rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold', color: '6px 6px 0 #0c5223ff', textShadow: '6px 6px 0 #706c6bff', }}>
        VICTORY!
      </div>
      <p style={{ fontSize: '4rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold', color: '6px 6px 0 #0c5223ff', textShadow: '6px 6px 0 #706c6bff', }}>Time to win: {(timeToWinMs / 1000).toFixed(1)} seconds</p>


      <div style={{ fontSize: '3rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold'}}>
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