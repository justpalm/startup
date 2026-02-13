import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import deadEnd from "./maze/dead_end.png";
import turnRight from "./maze/turn_right.png";
import turnLeft from "./maze/turn_left.png";
import bothOptions from "./maze/both_options.png";




export function Maze() {
  return (
    <main className="container-fluid bg-secondary text-center">

      <h1>The Maze</h1>
        <button onclick="location.href='index.html'">Go Back</button>
          
        
      <menu>

<button onclick="prevImage()"><<<</button>

<img id="maze-img" 
     src="maze/both_options.png" 
     width="500"
     height="500">

<button onclick="nextImage()">>>></button>

{/* <!-- Here is where I am going to implement the maze more. 
 My idea is that I will have a random tree forest node be generated 
 everytime in the data base. I will
 then traverse through it as if we are doing a DFS. 
 If we hit a sink without finding the minotaur, 
 it'll bring them back to the last splitting node.
 They can then traverse through a different branch if they will.
 
 I will have the images generate depending on what the node is. 
 When they find the minotaur, it'll stop and switch
 to rock paper scissors mode!-->


<!-- 
 
 If there are two options, display the two forks
 
 If it's a dead end, show the dead end.

 If there's one option, display the one option.

 All in all, we need three photos.


 --> */}





 {/* <!-- For now I will keep the character --> */}


<script>
  const images = [
    deadEnd,
    turnRight,
    turnLeft,
    bothOptions
  ];

  let index = 0;

  function showImage() {
    document.getElementById("maze-img").src = images[index];
  }

  function nextImage() {
    index = (index + 1) % images.length;
    showImage();
  }

  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
  }
</script>


<br>
 <input type="text" id="count" value= "Can't go left! Etc." readonly />
{/* <!-- Here I'll throw up messages if there's a bad input that are broek--> */}
    </menu>
      
        <span>⚔️</span>
        <Button
          size = "sm"
          variant="info"
          onClick={() => navigate("/rock_paper_scissors")}
        >
          Weather?
        </Button>
        <span>⚔️</span>

{/* <!-- IF THE MINOTAUR IS ENCOUNTERED, this will get triggered, for now this navigates --> */}

      
    </main>
  );
}