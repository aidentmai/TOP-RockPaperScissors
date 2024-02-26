function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a tie!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: ").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      "Score | Player: " + playerScore + " | Computer: " + computerScore
    );
  }

  if (playerScore > computerScore) {
    console.log("Player Wins!");
  } else {
    console.log("Computer Wins!");
  }
}

playGame();
