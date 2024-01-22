

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
let playerChoice;
rockButton.addEventListener("click", choseRock);
paperButton.addEventListener("click", chosePaper);
scissorsButton.addEventListener("click", choseScissors);
console.log(playerChoice);

if (playerChoice == "Rock") {
    choseRock;
} else if (playerChoice == "Paper") {
    chosePaper;
} else if (playerChoice == "Scissors") {
    choseScissors;
}

function choseRock () {
    console.log("Rock");
}

function chosePaper () {
    console.log("Paper");
}

function choseScissors () {
    console.log("Scissors");
}