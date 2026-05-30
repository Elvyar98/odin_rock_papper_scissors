let humanScore = 0;
let computerScore = 0;
let draw = 0;

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
            draw++;
            return `Draw, you both picked ${humanChoice}`;
        }
    }

     if (humanChoice == "Papper"){
        if (computerChoice == "Scissors"){
            computerScore++;
           return `You lose ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice == "Rock") {
            humanScore++;
            return `You win ${humanChoice} beats ${computerChoice}`;
        } else{
            draw++;
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
            draw++;
           return `Draw, you both picked ${humanChoice}`;
        }
    }

}



const rock = document.createElement("button");
const scissors = document.createElement("button");
const papper = document.createElement("button");
const div = document.querySelector(".container");

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

const results = document.querySelector(".results");
const human = document.querySelector("#humanScore");
const computer = document.querySelector("#computerScore");
const draws = document.querySelector("#draw");

const gameMessage = document.createElement("p");
results.appendChild(gameMessage);


buttons.forEach(button => {
    button.addEventListener("click", () => {
        gameMessage.textContent = "";

        const message = playRound(button.textContent, getComputerChoice());
        declaration.textContent = `${message}`; 
        human.textContent = `Your score: ${humanScore}`;
        computer.textContent = `Computers score: ${computerScore}`;
        draws.textContent = `Draws: ${draw}`;

        
        let total = draw + computerScore + humanScore;

        if (total >= 5){
            
            if( draw > humanScore && draw > computerScore){
                gameMessage.textContent = "Wooow, you drew with a clanker"
            }
            else if(humanScore < computerScore) {
                gameMessage.textContent = "Nooooo, you lost :(";
            }
            else if(computerScore < humanScore) {
                gameMessage.textContent = "You won, look at you with that big dick energy"

            }

            
            humanScore = computerScore = draw = 0;
            declaration.textContent = "Play a new game"
        }
    });
});






