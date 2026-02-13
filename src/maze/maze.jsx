import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import deadEnd from "./maze_images/dead_end.png";
import turnRight from "./maze_images/turn_right.png";
import turnLeft from "./maze_images/turn_left.png";
import bothOptions from "./maze_images/both_options.png";

export function Maze() {

  const navigate = useNavigate();

  const images = [
    deadEnd,
    turnRight,
    turnLeft,
    bothOptions
  ];

  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((i) => (i + 1) % images.length);
  }

  function prevImage() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <main className="container-fluid bg-secondary text-center">

      <h1>The Maze</h1>

      <Button
        variant="secondary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>

      {/* Maze Image Controls */}
      <button onClick={prevImage}>{"<<<"}</button>

      <img
        id="maze-img"
        src={images[index]}
        width="500"
        height="500"
        alt="Maze"
      />

      <button onClick={nextImage}>{">>>"}</button>

      {/* 
        Here is where I am going to implement the maze more. 
        My idea is that I will have a random tree forest node be generated 
        everytime in the data base. I will
        then traverse through it as if we are doing a DFS. 
        If we hit a sink without finding the minotaur, 
        it'll bring them back to the last splitting node.
        They can then traverse through a different branch if they will.
        
        I will have the images generate depending on what the node is. 
        When they find the minotaur, it'll stop and switch
        to rock paper scissors mode!
      */}

      {/*  
        If there are two options, display the two forks
        
        If it's a dead end, show the dead end.

        If there's one option, display the one option.

        All in all, we need three photos.
      */}

      {/* For now I will keep the character */}

      <br />

      <input
        type="text"
        id="count"
        value="Can't go left! Etc."
        readOnly
      />

      {/* Here I'll throw up messages if there's a bad input that are broek */}

      <span>⚔️</span>
      <Button
        size="sm"
        variant="info"
        onClick={() => navigate("/rock_paper_scissors")}
      >
        Weather?
      </Button>
      <span>⚔️</span>

      {/* 
        IF THE MINOTAUR IS ENCOUNTERED, this will get triggered,
        for now this navigates 
      */}

    </main>
  );
}