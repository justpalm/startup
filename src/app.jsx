import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Character } from './character/character';
import { Defeat } from './defeat/defeat';
import { Login } from './login/login';
import { Maze } from './maze/maze';
import { Rock_Paper_Scissors } from './rock_paper_scissors/rock_paper_scissors';
import { Victory } from './victory/victory';
import { Weather } from './weather/weather';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
    <div className="body bg-dark text-light">
      <header>
      <h1>The Minotaur<sup>&reg;</sup></h1>
    </header>

      <main>App components go here</main>

    <footer>
      <hr />
      <span class="text-reset">Author Name:</span>
      <span class="text-reset">Justin Palmer </span>
      <br />
      <a href="https://github.com/justpalm/startup.git">GitHub</a>
    </footer>
    </div>
    </BrowserRouter>
  );
}


