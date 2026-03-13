import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

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
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',  // horizontal
        alignItems: 'center',      // vertical (needs height on parent)
        height: '200px'            // or whatever height you need
      }}>
      <div className='playerName' style={{ fontSize: '3rem', fontWeight: 'bold'}}>{props.userName}</div>
    
      <Button
          size = "lg"
          variant="dark"
          onClick={() => navigate(`/character`)}
        >
          PLAY!
      </Button>
      <br></br>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>

      <Button
          size = "sm"
          variant="dark"
          onClick={() => navigate(`/weather`)}
        > Weather?</Button>
    
    </div>
  );
}
