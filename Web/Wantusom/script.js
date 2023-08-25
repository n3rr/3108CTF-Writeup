let winCount = 0;

function playGame(playerChoice) {
  let computerChoice = getComputerChoice();

  updateComputerChoice(computerChoice);
  updatePlayerChoice(playerChoice);
  determineOutcome(playerChoice, computerChoice);

  if (winCount === 10) {
    fetch("getFlag.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `winCount=${winCount}`,
    })
      .then((response) => response.json())
      .then((data) => {
        showMessage(data.message);
      })
      .catch((err) => {
        showMessage("Error communicating with the server.");
      });
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getUnbeatableChoice(playerChoice) {
  switch (playerChoice) {
    case "rock":
      return "paper";
    case "paper":
      return "scissors";
    case "scissors":
      return "rock";
  }
}

function determineOutcome(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    showMessage("Seri!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    winCount++;
    showMessage("Menang satu kali!");
  } else {
    showMessage("Kalah? Lemah!");
  }

  document.getElementById("winCount").textContent = winCount;
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}
function updatePlayerChoice(playerChoice) {
  const playerChoiceImg = document.getElementById("playerChoiceImg");
  playerChoiceImg.src = `${playerChoice}.png`;
}

function updateComputerChoice(computerChoice) {
  const computerChoiceImg = document.getElementById("computerChoiceImg");
  computerChoiceImg.src = `${computerChoice}.png`;
}
