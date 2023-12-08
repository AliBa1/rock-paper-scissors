function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        // console.log("Rock");
        return "Rock";
    }

    if (randomNumber == 1) {
        // console.log("Paper");
        return "Paper";
    }

    if (randomNumber == 2) {
        // console.log("Scissors");
        return "Scissors";
    }

    if (randomNumber < 0 || randomNumber > 2 || randomNumber == undefined) {
        console.error("Computer did not return a choice");
    }
}

function playRound(playerSelection, computerSelection){
    // Return string for win, lose, or tie
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection != "rock" && computerSelection != "paper" && computerSelection != "scissors") {
        console.error("Computer selection is invalid!");
    }
    
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.error("Player selection is invalid!");
    }

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "tie";
            // results.textContent = "Tie";
        } else if (computerSelection == "paper") {
            return "lose";
            results.textContent = "You lose";
        } else if (computerSelection == "scissors") {
            return "win";
            // results.textContent = "You win!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "win";
            // results.textContent = "You win!";
        } else if (computerSelection == "paper") {
            return "tie";
            // results.textContent = "Tie";
        } else if (computerSelection == "scissors") {
            return "lose";
            // results.textContent = "You lose";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "lose";
            // results.textContent = "You lose";
        } else if (computerSelection == "paper") {
            return "win";
            // results.textContent = "You win!";
        } else if (computerSelection == "scissors") {
            return "tie";
            // results.textContent = "Tie";
        }
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let w = 0;
    let l = 0;
    let t = 0;
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors: ").toLowerCase();
        let computerSelection = getComputerChoice();
        
        let singleGame = playRound(playerSelection, computerSelection);
        singleGame = singleGame.toLowerCase();
        if (singleGame == "win") {
            console.log(playerSelection + " beats " + computerSelection);
            w++;
            console.log("Record: " + w + "-" + t + "-" + l);
        } else if  (singleGame == "lose"){
            console.log(computerSelection + " beats " + playerSelection);
            l++;
            console.log("Record: " + w + "-" + t + "-" + l);
        } else if (singleGame == "tie") {
            console.log(playerSelection + " ties " + computerSelection);
            t++;
            console.log("Record: " + w + "-" + t + "-" + l);
        } else {
            console.error("Game returned invalid result!");
        }
    }

    if (w>l && w>t) {
        console.log("You won!");
    } else if (l>w && l>t){
        console.log("You lost!");
    } else {
        console.log("It was a tie!");
    }
}

// game(); 

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");
const results = document.querySelector(".results");

const result = document.createElement("p");
const score = document.createElement('p');
const seriesResult = document.createElement('p');
results.appendChild(result);
results.appendChild(score);
results.appendChild(seriesResult);

let wins = 0;
let loses = 0;



rockButton.addEventListener('click', () => {
    if ((wins+loses) == 5) {
        wins = 0;
        loses = 0;
        seriesResult.textContent = "";
    }
    gameResult(playRound("Rock", getComputerChoice()), wins, loses);
    if (result.textContent == "You win that battle!") {
        wins++;
    } else if (result.textContent == "You lost that battle!") {
        loses++;
    }
});

paperButton.addEventListener('click', () => {
    if ((wins+loses) == 5) {
        wins = 0;
        loses = 0;
        seriesResult.textContent = "";
    }
    gameResult(playRound("Paper", getComputerChoice()), wins, loses);
    if (result.textContent == "You win that battle!") {
        wins++;
    } else if (result.textContent == "You lost that battle!") {
        loses++;
    }
});

scissorsButton.addEventListener('click', () => {
    if ((wins+loses) == 5) {
        wins = 0;
        loses = 0;
        seriesResult.textContent = "";
    }
    gameResult(playRound("Scissors", getComputerChoice()), wins, loses);
    if (result.textContent == "You win that battle!") {
        wins++;
    } else if (result.textContent == "You lost that battle!") {
        loses++;
    }
});

function gameResult(playerResult, wins, loses) {
    playerResult.toLowerCase();
    switch (playerResult) {
        case 'win':
            wins++;
            result.textContent = "You win that battle!";
            break;
        case 'lose':
            loses++;
            result.textContent = "You lost that battle!";
            break;
        case 'tie':
            result.textContent = "You tied!";
            break;
        default:
            console.error("Wrong game result!");
    }

    score.textContent = "Record: " + 
    wins + '-' + 
    loses;

    if ((wins+loses) == 5) {
        if (wins>loses) {
            seriesResult.textContent = "You won the series";
        } else {
            seriesResult.textContent = "You lost the series";
        }
    }
}


