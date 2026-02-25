import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>🔑</span>

        <br />

        <Button
          size = "sm"
          variant="light"
          onClick={() => createUser()} disabled={!userName || !password}>  
          Create User
        </Button>

        <Button
          size = "sm"
          variant="dark"
          onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
