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
        } else if (computerSelection == "paper") {
            return "lose";
        } else if (computerSelection == "scissors") {
            return "win";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "win";
        } else if (computerSelection == "paper") {
            return "tie";
        } else if (computerSelection == "scissors") {
            return "lose";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "lose";
        } else if (computerSelection == "paper") {
            return "win";
        } else if (computerSelection == "scissors") {
            return "tie";
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

game(); 