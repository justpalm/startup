import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import minotaur from "./the_minotuar.png";

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';




export function Login({ userName, authState, onAuthChange }) {
  // const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  return (
    <main>

      <div style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: '"Cinzel", serif',}}>
      Welcome to Adventure!
      </div>
      <br></br>
      <div>
      <div className="wrapper">
        <img
          src={minotaur}
          className="blend"
          alt="Minotaur"
          height="550"
        />
      </div>

    
      <nav>
        <menu>
          <h2>Leaderboard:</h2>
          <table style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Sally</td><td>1:58</td></tr>
              <tr><td>2</td><td>John</td><td>3:04</td></tr>
              <tr><td>3</td><td>Thomas</td><td>4:04</td></tr>
              <tr><td>4</td><td>Danny</td><td>5:03</td></tr>
              <tr><td>5</td><td>Suszan</td><td>6:04</td></tr>
            </tbody>
          </table>
        </menu>
      </nav>
      </div>

      <div>
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>

      {/* <div>
        
        <input
          type="text"
          placeholder="Hero's Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <span>⚔️</span>

        <br />

        
        <input
          type="password"
          placeholder="Hero's Password"
        />
        <span>🔑</span>

        <br />

        <Button
          size = "sm"
          variant="light"
          onClick={() => navigate()}
        >
          Create User
        </Button>

        <Button
          size = "sm"
          variant="dark"
          onClick={() => navigate()}
        >
          Login
        </Button>
        <br />
        <br />

        <Button
          size = "lg"
          variant="dark"
          onClick={() => navigate(`/character`)}
        >
          PLAY!!!!!!!
        </Button>

        <br />
        <br />
       

        <Button
          size = "lg"
          variant="secondary"
          onClick={() => navigate("/weather")}
        >
          Weather?
        </Button>
      </div> */}
      <br></br>
    </main>
  );
}