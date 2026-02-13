import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [heroName, setHeroName] = useState("");
  const navigate = useNavigate();

  return (
    <main>
      <h1>Welcome to Adventure!</h1>

      <div className="wrapper">
        <img
          src="the_minotuar.png"
          className="blend"
          alt="Minotaur"
          height="600"
        />
      </div>

      <h2>Leaderboard:</h2>

      <nav>
        <menu>
          <table>
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

      <div>
        <span>⚔️</span>
        <input
          type="text"
          placeholder="Hero's Name"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />

        <br />

        <span>🔑</span>
        <input
          type="password"
          placeholder="Hero's Password"
        />

        <br />

        <Button
          variant="primary"
          onClick={() => navigate(`/character?name=${heroName}`)}
        >
          Create User
        </Button>

        <br />

        <Button
          variant="primary"
          onClick={() => navigate(`/character?name=${heroName}`)}
        >
          PLAY!!!!!!!
        </Button>

        <br />

        <Button
          variant="secondary"
          onClick={() => navigate("/weather")}
        >
          Weather?
        </Button>
      </div>
    </main>
  );
}