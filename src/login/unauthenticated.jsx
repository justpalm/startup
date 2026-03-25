import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
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
