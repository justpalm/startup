# The Minotaur  

[My Notes](notes.md)

*The Minotaur* is a game where players traverse a randomly generated maze in order to find and fight a Minotaur! Players can chose their hero of choice from a list of 6 characters. Players who beat the Minotaur and are able to beat previous times will have their time put on a leaderboard. Friends can compete against each other to see who can have the best score in beating and finding the monster!

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

We always here about the Greek gods and goddesses; but what about the monsters? Where's their fame and glory? Well now YOU can *find* and **slay** your own ancient Greek monster anywhere, anytime. With the new game *The Minotaur*, you can traverse a randomly generated maze to find and beat the Minotaur in a fierce enounter of rock🪨, paper📃, scissors✂️. Find him the quickest, and beat your friends as they try also find and beat this monster of gargantuan proportion. While doing so, you can also check the weather in the best college town known to man, Provo, UT!

### Design

![Design image](Design.png)

Above is my idea for the possible screens within the game. We start off with the main play screen where we can view the leaderboard or change characters if desired. Don't forget being able to view Provo weather too! I then have an example of a game, and how to win. Each square is a new page or view that can be seen.

```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Replace this with your design
```

### Key features

- Ability to select different characters
- Time and username after each victory are saved permanently in the leaderboard.
- Map tracks the progress of the character
- Map can be retraversed if desired
- Randomized map every time with a new Minotaur location
- Can quite the application at any time in the UI
- Display the weather in Provo
  

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - I will mostly likely need 7 HTML pages: The beginning interface, the leaderboard, changing character page, display Provo weather page, play/maze traversing, fighting, and victory. While they are all somewhat similar, seperate pages I think will be appropiate to have a sense of difference in functionality. Hyperlinks will be used as needed to change pages when certain condition are met within the server, such as finding the Minotaur.
- **CSS** - I will use CSS to make all the respective pages fun, engaging, and staright forward. Certain styling will have to be done to insert the character and monster seamlessly into the page, as well as changing the color of certain buttons to hint at their functions. Font I intend to keep realitvely uniform throughout the game to keep with continuity.
- **React** - Provides the play/login, charater choice display, display weather button, chosing which path to follow during the maze, quitting, rock / paper / scissor selection, and inputting the name to be saved in the leaderboard.
- **Service** - Service endpoints will most likley contain the following:
    - Initiate play (This will login and register the user, assigning them randomly a number to then have be associated later with a name at the VICTORY screen to be saved in the Leaderboard part of the Database. character choice will also be registered with them for their instance of playing.)
    - Quit (Logout)
    - Randomize new map (Start alongside with play)
    - Change character
    - Retrieve the leaderboard
    - Move character right / left / go back
    - Fight the Minotaur with a user input
    - Retrieve weather info from Provo
- **DB/Login** - Stores users wins and registration on a database. Will also store user position on the map while game is being played, and character choice. Whenever users desire, they can retrieve and review that leaderboard from the initial page.
- **WebSocket** - Whenever a user beats the minotaur, their time and name will be broadcasted to other users once saved in the database.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - I added index, character, defeat, maze rock_paper_scisors, and weather HTML.
- [X] **Proper HTML element usage** - While I'm sure there's room for improvement, I have succesfully added as many functions as I could to make the pages legible and functional
- [X] **Links** - I do indeed have various links to the pages that navaige among them
- [X] **Text** - Have added and put a lot of text to a lot of different places!
- [X] **3rd party API placeholder** - Yup! This is on the weather.html to get the weather from Provo, Utah displayed
- [X] **Images** - You will find a plethora of unique images
- [X] **Login placeholder** - My login is not password dependent, but it does register users when they play the game by their username
- [X] **DB data placeholder** - Yup, I will have access to the database and services with the construction of the maze, and the getting of the minotaurs response during rock paper and scisors. A lot of the database will be that maze navigation and constructoin though!
- [X] **WebSocket placeholder** - Yup! Whenever a player finished the game, there will be a message broadcasted announcing the username and time of the player. At the top of gameplay I have where the messages will be broadcasted

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [C] **Header, footer, and main content body** - On some of the pages I have this styled and I am still workshoping how best to have them look
- [X] **Navigation elements** - Yup! I have some nav elements figured out
- [X] **Responsive to window resizing** - Felx should be enabled for most of the elements
- [X] **Application elements** - There are many elemnts included in the HTML.
- [X] **Application text content** - I have different text fonts and sizes
- [X] **Application images** - I have edited images and types.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - Vite runs and works on it great! I followed the instructions and downloaded all the necessary software for it.
- [X] **Components** - We have a ton of buttons, and navigates that allow this to work. I also took out all the only HTML elements and added some new elements to the .css . 
- [X] **Router** - It uses the Router instead of other HTML buttons from the app.css! Reformated and made all the necessary files for it.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.


There are some parts of both, but regretably neither are complete.

Personal Notes:

Arrow Functions can help very quickly with passing information and what not
```javascript
Arrow functions act as lambas and are very helpful:
function testAll(input, tester) {
  const result = input.every(tester);
  return result
}

const array = ["hello", "my", "sweet"]
const tester = str => str.length > 3

const result = testAll(array, tester);

console.log(result);
```

The different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.
`

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```


## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Node.js/Express HTTP service** - I do have the node and Express working, the Simon helped a ton with this
- [X] **Static middleware for frontend** - Yes, I once again was able to see this with Simon
- [ ] **Calls to third party endpoints** - There are attempted calls; unfortunately was not able to find out the intricacies of it
- [X] **Backend service endpoints** - There are endpoints in the backend that call and work
- [X] **Frontend calls service endpoints** - Yes, there are calls from the front end to the backend.
- [X] **Supports registration, login, logout, and restricted endpoint** - This function is does complete, it doesn't fuflifll all the functions I was wanting; but id does at least do this very well.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Stores data in MongoDB** - Yup! It does in fact store data there. It didn't seem that hard with help from the Simon code, but it is cool to see it pop up on the MongoDB.
- [X] **Stores credentials in MongoDB** - It does safely and securely save credentials of username and password!

There was a lot of this that I feel I didn't understand, but I thought it was cool to see the services and database communicated effecitevly. I know that in the future that will be an important skill to have solid.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.


I think the most important thing to rememebr from the Simon implementation is that i genuinely isn't that complicated, it just might take a little bit of poking around to see what data we can send to one another as things workout.

- The Websocket itself updgrades HTML connections
- If should allow for a live transfer and debugging what is sent through will be crucial
- Look to Simon to know how to catch and deal with things.

