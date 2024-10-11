// first.js

// Get the choice buttons, score elements, and message element
const choices = document.querySelectorAll('.choice');
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const messageElement = document.getElementById('msg');

// Initialize scores
let userScore = 0;
let compScore = 0;

// Function to generate the computer's move
function getComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
}

// Function to determine the winner
function determineWinner(userMove, compMove) {
  if (userMove === compMove) {
    return 'tie';
  }

  switch (userMove) {
    case 'rock':
      return compMove === 'scissors' ? 'user' : 'comp';
    case 'paper':
      return compMove === 'rock' ? 'user' : 'comp';
    case 'scissors':
      return compMove === 'paper' ? 'user' : 'comp';
  }
}

// Add event listeners to the choice buttons
choices.forEach((choice, index) => {
  choice.addEventListener('click', () => {
    const userMove = ['rock', 'paper', 'scissors'][index];
    const compMove = getComputerMove();

    const winner = determineWinner(userMove, compMove);

    switch (winner) {
      case 'user':
        userScore++;
        userScoreElement.textContent = userScore;
        messageElement.textContent = `You win! ${userMove} beats ${compMove}.`;
        break;
      case 'comp':
        compScore++;
        compScoreElement.textContent = compScore;
        messageElement.textContent = `Computer wins! ${compMove} beats ${userMove}.`;
        break;
      case 'tie':
        messageElement.textContent = `It's a tie! Both chose ${userMove}.`;
        break;
    }
  });
});