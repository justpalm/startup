import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Character } from './character/character';
import { Defeat } from './defeat/defeat';

import { Maze } from './maze/maze';
import { Rock_Paper_Scissors } from './rock_paper_scissors/rock_paper_scissors';
import { Victory } from './victory/victory';
import { Weather } from './weather/weather';

import { AuthState } from './login/authState';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);


  return (
    <BrowserRouter>
    <div className="body bg-dark text-light">
    <h2 
    style={{
      fontSize: '10rem',
      fontWeight: '900',
      color: '#7c1d1dff',
      textShadow: '6px 6px 0 #706c6bff',
      fontFamily: '"Cinzel", serif',  // Imported Font
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      }}
    >
      The Minotaur
    </h2>

      <Routes>
        <Route path='/' element={<Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />} />

        <Route path='/weather' element={<Weather />} />
        <Route path='/character' element={<Character />} />
        <Route path='/defeat' element={<Defeat />} />
        <Route path='/maze' element={<Maze />} />
        <Route path='/rock_paper_scissors' element={<Rock_Paper_Scissors />} />
        <Route path='/victory' element={<Victory />} />
        <Route path='/login' element={<Login />} />

      </Routes>

    <footer>

      <br />
      <span className="text-reset">Author Name: Justin Palmer</span>
      <br />
      <a href="https://github.com/justpalm/startup.git">GitHub</a>
      <br></br>

    </footer>
    </div>
    </BrowserRouter>
  );
}


