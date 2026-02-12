import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
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
  );
}