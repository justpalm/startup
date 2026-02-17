import React from 'react';  // Fixed: "rom" → "from"

export function Rock_Paper_Scissors() {
  return (
    <main>
      <h4>World: Inert messages that comes from the websocket or game</h4>
      
      <br />
      <input type="text" id="count" value="Time - 4:32" readOnly />  {}
      
      <h1>Rock Paper Scissors</h1>
      
      <img 
        id="Minotaur" 
        src="the_minotuar.png"
        width="200" 
        alt="Minotaur" />  {/* Fixed: self-closing */}
      
      <p> Character from Database appears here </p>

      <img 
        id="character-img" 
        src="characters/character_1.png" 
        width="200" 
        alt="Character" />  {/* Fixed: self-closing */}

      {/* Fight area */}
      <button onClick={() => {}}>✂️</button>  {/* Fixed: Button → button, onclick → onClick */}
      <button onClick={() => {}}>🪨</button>
      <button onClick={() => {}}>📄</button>

      <button type="button" onClick={() => window.location.href='_victory_.html'}>Victory</button>  {/* Fixed: onclick → onClick */}
      <button type="button" onClick={() => window.location.href='defeat.html'}>Defeat</button>

    </main>
  );
}
