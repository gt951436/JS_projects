let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let guessCnt = 1;

let playGame = true;
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
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number greater than 1');
  } else if (guess > 100) {
    alert('please enter a valid number less than 100');
  } else {
    prevGuess.push(guess);
    if (guessCnt > 10) {
      displayGuess(guess);
      displayMessage(`Game over,the number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`guessed it correctly!`);
  } else if (guess < randomNumber) {
    displayMessage(`guessed number is too low!`);
  } else {
    displayMessage(`guessed number is too high!`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  guessCnt++;
  remaining.innerHTML = `${11 - guessCnt}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('Disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    guessCnt = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - guessCnt}`;
    userInput.removeAttribute('Disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
