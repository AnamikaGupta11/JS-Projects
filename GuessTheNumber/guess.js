let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const prevGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let playGame = true;
let numGuess = 1;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number more than 1');
  } else if (guess > 100) {
    alert('Please enter a valid number less than 100');
  } else {
    previousGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      checkGuess(guess);
      displayMessage(`Game Over!! Number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed a right number');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('Your guess is too high');
  } else if (guess < randomNumber) {
    displayMessage('Your guess is too low');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  prevGuess.innerHTML += `${guess} `;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new game..</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const startNewGame = document.querySelector('#newGame');
  startNewGame.addEventListener('click', function (e) {
    //e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numGuess = 1;
    prevGuess.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild('p');
    playGame = true;
  });
}

