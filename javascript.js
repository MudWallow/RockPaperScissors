

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const gameText = document.querySelector('.gameText');
let playerChoice;
let compChoice;
rockButton.addEventListener("click", choseRock);
paperButton.addEventListener("click", chosePaper);
scissorsButton.addEventListener("click", choseScissors);
console.log(playerChoice);

function compare () {
    if (playerChoice === compChoice) {
        gameText.textContent = ("You both chose " + playerChoice + "! It's a draw.")
    } else if (playerChoice === "Paper" && compChoice === "Rock") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + compChoice + "! You win!")
    } else if (playerChoice === "Paper" && compChoice === "Scissors") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + compChoice + "! You lost!")
    } else if (playerChoice == "Scissors" && compChoice === "Paper") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + compChoice + "! You win!")
    } else if (playerChoice == "Scissors" && compChoice === "Rock") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + compChoice + "! You lose!")
    }
}

function makePcChoice () {
    compChoice = "Rock"
    compare();
}

function choseRock () {
    playerChoice = "Rock";
    makePcChoice();

}

function chosePaper () {
    playerChoice = "Paper";
    makePcChoice();
}

function choseScissors () {
    playerChoice = "Scissors";
    makePcChoice();
}