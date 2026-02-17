import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


export function Defeat() {

 const navigate = useNavigate();

  return (
    <main className="container-fluid bg-secondary text-center">

      <div style={{ fontSize: '8rem', fontWeight: 'bold', color: "red" }}>
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