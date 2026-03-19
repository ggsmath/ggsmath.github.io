// Define the things discussed

// Movies

const oneBattle = {
  name: "One Battle After Another",
  group: "movies",
  year: "2025",
  director: "Paul Thomas Anderson",
};

// Games

const aceAttorney = {
  name: "Ace Attorney series",
  group: "games",
  year: "2001 - Present",
};

// Music

const heardSome = {
  name: "Heard Somebody Cry",
  group: "music",
  performer: "Oingo Boingo",
  year: "1985",
  album: "Dead Man's party",
};

// Make lists of every type of thing

let moviesArray = [oneBattle];
let gamesArray = [aceAttorney];
let musicArray = [heardSome];
let categoryArray = [moviesArray, gamesArray, musicArray];

// Give the effect to the button

const button = document.querySelector("#random_button");

function displayThing() {
  let randomCategory = Math.floor(Math.random() * 2)
  let randomNumber = Math.floor(Math.random() * categoryArray[randomCategory].length());
  const nameThing = moviesArray[randomNumber].name;
  const displayText = document.querySelector("#random_thing");
  displayText.textContent = `I really enjoyed ${nameThing}`;
  console.log(displayText);
}

button.addEventListener("click", displayThing());
