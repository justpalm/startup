import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./victory.css"

export function Victory() {

 const navigate = useNavigate();

  return (
    <main className="container-fluid bg-secondary text-center">

      <h3>VICTORY!!!!!</h3>
      <Button
        variant="outline-warning"
        onClick={() => navigate("/")}
        size = "lg">
        Go Back
      </Button>


    </main>
  );
}