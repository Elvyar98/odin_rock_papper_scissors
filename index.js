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

}
console.log(capitalize("aWESOMe"));
console.log(getComputerChoice());