var cities = [ 
    "london",
    "delhi",
    "tokyo",
    "amsterdam",
    "paris",
    "shanghai",
    "chicago",
    "guangzhou",
    "bangkok",
    "dubai"
]

let answer = ' ';
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null; 

function randomWord() {
    answer = cities[Math.floor(Math.random() * cities.length)];

}

function generateButtons() {
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `
        <button 
            class = "btn btn-lg btn-primary m-2" 
            id ='` + letter + `
            onClick="handleGuess('` + letter + `')"
         >  
          ` + letter + `
         </button>
        `);
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

randomWord();
generateButtons();