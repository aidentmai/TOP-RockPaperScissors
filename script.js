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
    return computerScore;
    //return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return playerScore;
    //return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return playerScore;
    //return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return computerScore;
    // return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return computerScore;
    // return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return playerScore;
    // return "You win! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a tie!";
  }
}

function playGame() {
  const btnContainer = document.querySelector(".buttons-container");
  const rock = document.createElement("button");
  const paper = document.createElement("button");
  const scissors = document.createElement("button");
  let flag = 0;
  const announcementContainer = document.querySelector(".announcement");
  const announcement = document.createElement("p");

  rock.textContent = "Rock";
  rock.classList.toggle("buttons");
  paper.textContent = "Paper";
  paper.classList.toggle("buttons");
  scissors.textContent = "Scissors";
  scissors.classList.toggle("buttons");

  rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    if (playerScore < 5 && computerScore < 5) {
      playRound("rock", computerSelection);

      switch (computerSelection) {
        case "rock":
          announcement.textContent = "It's a tie!";
          announcementContainer.appendChild(announcement);
          break;
        case "paper":
          announcement.textContent = "You lose! Paper beats rock";
          announcementContainer.appendChild(announcement);
          break;
        case "scissors":
          announcement.textContent = "You win! Rock beats scissors";
          announcementContainer.appendChild(announcement);
          break;
      }

      pScore.textContent = playerScore;
      cScore.textContent = computerScore;
      player.appendChild(pScore);
      computer.appendChild(cScore);
    }
    const resultContainer = document.querySelector(".result-container");
    const result = document.createElement("h1");

    if (playerScore === 5 && flag === 0) {
      flag = 1;
      result.classList.toggle("results");
      result.textContent = "You win!";
      resultContainer.appendChild(result);
      const reset = document.querySelector(".result-container");
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      resetBtn.classList.toggle("reset");
      reset.appendChild(resetBtn);
      resetBtn.addEventListener("click", () => {
        flag = 0;
        playerScore = 0;
        computerScore = 0;
        resultContainer.innerHTML = "";
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
      });
    } else if (computerScore === 5 && flag === 0) {
      flag = 1;
      result.classList.toggle("results");
      result.textContent = "You lose!";
      resultContainer.appendChild(result);
      const reset = document.querySelector(".result-container");
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      resetBtn.classList.toggle("reset");
      reset.appendChild(resetBtn);
      resetBtn.addEventListener("click", () => {
        flag = 0;
        playerScore = 0;
        computerScore = 0;
        resultContainer.innerHTML = "";
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
      });
    }
  });

  paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    if (playerScore < 5 && computerScore < 5) {
      playRound("paper", computerSelection);

      switch (computerSelection) {
        case "rock":
          announcement.textContent = "You win! Paper beats rock";
          announcementContainer.appendChild(announcement);
          break;
        case "paper":
          announcement.textContent = "It's a tie!";
          announcementContainer.appendChild(announcement);
          break;
        case "scissors":
          announcement.textContent = "You lose! Scissors beats paper";
          announcementContainer.appendChild(announcement);
          break;
      }

      pScore.textContent = playerScore;
      cScore.textContent = computerScore;
      player.appendChild(pScore);
      computer.appendChild(cScore);
    }
    const resultContainer = document.querySelector(".result-container");
    const result = document.createElement("h1");

    if (playerScore === 5 && flag === 0) {
      flag = 1;
      result.classList.toggle("results");
      result.textContent = "You win!";
      resultContainer.appendChild(result);
      const reset = document.querySelector(".result-container");
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      resetBtn.classList.toggle("reset");
      reset.appendChild(resetBtn);
      resetBtn.addEventListener("click", () => {
        flag = 0;
        playerScore = 0;
        computerScore = 0;
        resultContainer.innerHTML = "";
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
      });
    } else if (computerScore === 5 && flag === 0) {
      flag = 1;
      result.classList.toggle("results");
      result.textContent = "You lose!";
      resultContainer.appendChild(result);
      const reset = document.querySelector(".result-container");
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      resetBtn.classList.toggle("reset");
      reset.appendChild(resetBtn);
      resetBtn.addEventListener("click", () => {
        flag = 0;
        playerScore = 0;
        computerScore = 0;
        resultContainer.innerHTML = "";
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
      });
    }
  });

  scissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    if (playerScore < 5 && computerScore < 5) {
      playRound("scissors", computerSelection);

      switch (computerSelection) {
        case "rock":
          announcement.textContent = "You lose! Rock beats scissors";
          announcementContainer.appendChild(announcement);
          break;
        case "paper":
          announcement.textContent = "You win! Scissors beats paper";
          announcementContainer.appendChild(announcement);
          break;
        case "scissors":
          announcement.textContent = "It's a tie!";
          announcementContainer.appendChild(announcement);
          break;
      }

      pScore.textContent = playerScore;
      cScore.textContent = computerScore;
      player.appendChild(pScore);
      computer.appendChild(cScore);
    }
    const resultContainer = document.querySelector(".result-container");
    const result = document.createElement("h1");

    if (playerScore === 5 && flag === 0) {
      flag = 1;
      result.classList.toggle("results");
      result.textContent = "You win!";
      resultContainer.appendChild(result);
      const reset = document.querySelector(".result-container");
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      resetBtn.classList.toggle("reset");
      reset.appendChild(resetBtn);
      resetBtn.addEventListener("click", () => {
        flag = 0;
        playerScore = 0;
        computerScore = 0;
        resultContainer.innerHTML = "";
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
      });
    } else if (computerScore === 5 && flag === 0) {
      flag = 1;
      result.classList.toggle("results");
      result.textContent = "You lose!";
      resultContainer.appendChild(result);
      const reset = document.querySelector(".result-container");
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      resetBtn.classList.toggle("reset");
      reset.appendChild(resetBtn);
      resetBtn.addEventListener("click", () => {
        flag = 1;
        playerScore = 0;
        computerScore = 0;
        resultContainer.innerHTML = "";
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
      });
    }
  });

  btnContainer.appendChild(rock);
  btnContainer.appendChild(paper);
  btnContainer.appendChild(scissors);

  const score = document.querySelector(".scoreboard");
  const player = document.createElement("div");
  const pScore = document.createElement("p");
  player.textContent = "Player: ";
  player.classList.toggle("score");
  pScore.textContent = playerScore;

  const computer = document.createElement("div");
  const cScore = document.createElement("p");
  computer.textContent = "Computer: ";
  computer.classList.toggle("score");
  cScore.textContent = computerScore;

  score.appendChild(player);
  score.appendChild(computer);
  player.appendChild(pScore);
  computer.appendChild(cScore);
}

playGame();
