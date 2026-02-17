import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


export function Defeat() {

 const navigate = useNavigate();

  return (
    <main className="container-fluid bg-secondary text-center">

      <div style={{ fontSize: '8rem', fontWeight: 'bold', color: "red", textShadow: '6px 6px 0 #706c6bff' }}>
        DEFEAT
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