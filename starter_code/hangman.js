let hangman;

function Hangman() {
  this.words = [
    'Sequoia', 'Asexual', 'Livid', 'Phylum', 'Minuscule', 'Mischievous', 'Hanukkah', 'Liaison', 'Jazzed'
  ];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

// Get a random word from words
Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

// Check if the char code belongs to a letter
Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode >= 65 && keyCode <= 122;
};

// Check if the letter was already picked or nor
Hangman.prototype.checkClickedLetters = function (key) {
  let res = true;
  this.letters.forEach(letter => {
    if (letter === key) {
      res = false;
    }
  });

  return res;
};

// Adds the letter on secretWord to our partial answer
// Poor test description!!!!!
// Pending checking if user wins! **********************************
Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

// Substract 1 from errorsLeft if wrong letter guessed
Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};

// Checks if game is over or not
Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0;
};

// Checks if user won
Hangman.prototype.checkWinner = function () {
  // spliting the words into an array, sorting them alphabetically, joining it back into strings
  let secretSorted = this.secretWord.split('').sort().join();
  let guessedSorted = this.guessedLetter.split('').sort().join();
  return secretSorted === guessedSorted;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
