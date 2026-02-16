import React, { useState } from "react";
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
    <main className="container-fluidtext-center">
      <h1>The Maze</h1>

      <Button
        variant="secondary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>

      

      <img
        id="maze-img"
        src={images[index]}
        width="500"
        height="500"
        alt="Maze"
      />

      <div>
      <Button
      variant = "secondary" 
      onClick={prevImage}>{"<<<"}
      </Button>
      <Button 
      variant = "secondary"   
      onClick={nextImage}>{">>>"}
      </Button>
      </div>


      {/* comments here are fine */}

      <input
        type="text"
        id="count"
        value="Can't go left! Etc."
        readOnly
      />

      {/* This button will appear only when the Minotaur appears. 
      That function will be implemented later */}


      <span>⚔️</span>
      <Button
        size="sm"
        variant="outline - warning"
        onClick={() => navigate("/rock_paper_scissors")}
      >
        MINOTAUR!!
      </Button>
      <span>⚔️</span>
    </main>
  );
}
