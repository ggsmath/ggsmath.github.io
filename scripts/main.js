// Define the things discussed

// Movies

const oneBattle = {
  name: "One Battle After Another",
  group: "movie",
  year: "2025",
  director: "Paul Thomas Anderson",
};

// Games

const aceAttorney = {
  name: "Ace Attorney",
  group: "series of games",
  year: "2001 - Present",
};

// Music

const heardSome = {
  name: "Heard Somebody Cry",
  group: "song",
  performer: "Oingo Boingo",
  year: "1985",
  album: "Dead Man's party",
};

// Make lists of every type of thing

let moviesArray = [oneBattle];
let gamesArray = [aceAttorney];
let musicArray = [heardSome];
let categoryArray = [moviesArray, gamesArray, musicArray];

// Declare the variables used to print the objects

let randomCategory;
let randomNumber;
let nameThing;
let categoryThing;
let displayText;

// Give the effect to the button

const button = document.querySelector("#random_button");

function displayThing() {
  
  randomCategory = Math.floor(Math.random() * 3);
  randomNumber = Math.floor(Math.random() * categoryArray[randomCategory].length);
  nameThing = categoryArray[randomCategory][randomNumber].name;
  categoryThing = categoryArray[randomCategory][randomNumber].group;
  displayText = document.querySelector(".liked_thing");
  displayText.textContent = `I really enjoyed the ${categoryThing} ${nameThing}.`;
  console.log(displayText);

}

button.onclick = () => {
  displayThing();
}