

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (3));
    return computerChoice == 0 ? "Rock"
        : computerChoice == 1 ? "Paper"
        : computerChoice == 2 ? "Scisors"
        : "Error";
}

function getHumanChoice(){
    return console.log(prompt());
}

function playRound(){
    
}

getHumanChoice();