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


function playRound(humanChoice, computerChoice) {

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



const rock = document.createElement("button");
const scissors = document.createElement("button");
const papper = document.createElement("button");
const div = document.querySelector("div");

rock.textContent = "Rock";
scissors.textContent = "Scissors";
papper.textContent = "Papper";

div.appendChild(rock);
div.appendChild(scissors);
div.appendChild(papper);

const buttons = document.querySelectorAll("button");

const declaration = document.createElement("p");
declaration.textContent = "Press a button"
div.appendChild(declaration);

buttons.forEach(button => {
    button.addEventListener("click", () => {
       const message = playRound(button.textContent, getComputerChoice());
       declaration.textContent = `${message}`;  
    });
});

