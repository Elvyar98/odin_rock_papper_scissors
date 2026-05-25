let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const value = Math.random();

    if (value >= 0 && value < 0.3){
        return "Papper";
    } else if (value > 0.3 && value < 0.7) {
        return "Rock";
    } else {
        return "Scissors";
    }

}

function capitalize(word) {
    let firstLetter = word[0].toUpperCase();
    let rest = word.substring(1).toLowerCase();
    return firstLetter + rest;
}


function getHumanChoice() {
    return prompt("Pick Rock, Papper or Scissors");
}

function playRound(humanChoice, computerChoice) {
    let caseHumanChoice = capitalize(humanChoice);

    if (humanChoice == "Rock"){
        if (computerChoice == "Papper"){
            computerScore++;
            return `You lose ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice == "Scissors") {
            humanScore++;
            return `You win ${humanChoice} beats ${computerChoice}`;
        } else{
            return `Draw, you both picked ${humanChoice}`;
        }
    }

     if (humanChoice == "Papper"){
        if (computerChoice == "Scissor"){
            computerScore++;
           return `You lose ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice == "Rock") {
            humanScore++;
            return `You win ${humanChoice} beats ${computerChoice}`;
        } else{
           return `Draw, you both picked ${humanChoice}`;
        }
    }

     if (humanChoice == "Scissors"){
        if (computerChoice == "Rock"){
            computerScore++;
            return `You lose ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice == "Papper") {
            humanScore++;
            return `You win ${humanChoice} beats ${computerChoice}`;
        } else{
           return `Draw, you both picked ${humanChoice}`;
        }
    }

}


function playGame() {

    let rounds = 0;

    while(rounds < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let message = playRound(humanChoice, computerChoice);

        console.log(message);
        rounds++
    }

    console.log(`Score\nYou: ${humanScore}\nComputer: ${computerScore}`);

}

const rock = document.createElement("button");
const scissors = document.createElement("button");
const papper = document.createElement("button");

rock.textContent("Rock");
scissors.textContent("Scissors");
papper.textContent("Papper");



playGame();