//alert('Hello, World!');
var cities = [ //Array of cities; choice of words 
    "london",
    "delhi",
    "tokyo",
    "amsterdam",
    "paris",
    "shanghai",
    "chicago",
    "guangzhou",
    "bangkok",
    "dubai",
    "seoul",

]

let answer = ' ';
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null; 

//Pick a random word form the words arrray 
function randomWord() {
    answer = cities[Math.floor(Math.random() * cities.length)];

}

// Set up Array for Answers; this shows how many leters are in the world. 

var answerArray = [];
for (var i = 0; i < cities.length; i++) {
    answerArray[i] = "_";
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

randomWord();
generateButtons();