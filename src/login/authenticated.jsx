import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { GameEvent, GameNotifier } from '../gameNotifier';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  
  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });

    GameNotifier.broadcastEvent(userName, GameEvent.End, {})
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',     
        height: '200px'            
      }}>
      <div className='playerName' style={{ fontSize: '3rem', fontWeight: 'bold'}}>{props.userName}</div>
    
      <Button
          size = "lg"
          variant="dark"
          onClick={() => {
          navigate(`/character`);
          GameNotifier.broadcastEvent(props.userName, GameEvent.Start, {});
        }}
        >
          PLAY!
      </Button>
      
      <Button 
      size = "lg"
      variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
      <br></br>
      <Button
          size = "sm"
          variant= "info"
          onClick={() => navigate(`/weather`)}
        > Weather?</Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
