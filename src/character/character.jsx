import React from 'react';

export function Character() {
  return (
    <main>

  <header>
    <h1>The Minotaur<sup>&reg;</sup></h1>
  </header>

  {/* <!-- Here we will celebrate when other people beat the Minotaur!! --> */}

  <h4>
    World: Insert messages that come from the websocket or game
  </h4>

  <nav>
    <h1>Choose your Character</h1>
    <button onclick="location.href='index.html'">Go Back</button>
  </nav>

  {/* <!-- Character Image --> */}
  <img
    id="character-img"
    src="characters/character_1.png"
    width="200"
  />

  {/* <!-- Character Navigation Buttons --> */}
  <div>
    <button onclick="prevImage()"><<<</button>
    <button onclick="nextImage()">>>></button>
  </div>

  {/* <!-- Image Cycling Script --> */}
  <script>
    const images = [
      "characters/character_1.png",
      "characters/character_2.png",
      "characters/character_3.png"
    ];

    let index = 0;

    function showImage() {
      document.getElementById("character-img").src = images[index];
    }
    
    function nextImage() {
      index = (index + 1)
      showImage();
    }
    
    function prevImage() {
      index = (index - 1)
      showImage();
    }

  </script>

  {/* <!-- Character Name Placeholder --> */}
  <br />
  <input
    type="text"
    id="count"
    value="Store the name in the database"
    readonly
  />

  {/* <!-- Fight Button --> */}
  <nav>
    <span>⚔️</span>
    <button type="maze" onclick="location.href='maze.html'">FIGHT</button>
    <span>⚔️</span>
  </nav>

</main>

  );
}