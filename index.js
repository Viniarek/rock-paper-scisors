const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerIcon = document.getElementById("computer-icon")
const result = document.getElementById("result");


let humanPts = 0;
let computerPts = 0;

const computerPtsSpan = document.getElementById("computer-pts");
const humanPtsSpan = document.getElementById("human-pts");



rock.addEventListener("click", (e)=>{
    playRound(humanChoice=e.currentTarget.id);
});

paper.addEventListener("click", (e)=>{
    playRound(humanChoice=e.currentTarget.id);
});

scissors.addEventListener("click", (e)=>{
    playRound(humanChoice=e.currentTarget.id);
});





function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (3));
    return computerChoice == 0 ? "rock"
        : computerChoice == 1 ? "paper"
        : computerChoice == 2 ? "scissors"
        : "error";
}

function restartGame(){
    humanPts = 0;
    computerPts = 0;
    humanPtsSpan.innerHTML = humanPts;
    computerPtsSpan.innerHTML = computerPts;
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    if(computerChoice == "rock"){
        computerIcon.innerHTML=`<i class="fa-solid fa-hand-fist"></i>`;
    } else if(computerChoice == "paper"){
        computerIcon.innerHTML=`<i class="fa-solid fa-hand"></i>`;
    } else if(computerChoice == "scissors"){
        computerIcon.innerHTML=`<i class="fa-solid fa-hand-scissors"></i>`;
    }
    if((humanChoice=="rock" && computerChoice == "paper") || (humanChoice=="paper" && computerChoice == "scissors") || (humanChoice=="scissors" && computerChoice == "rock")){
        result.style.color = "red";
        result.innerHTML = "Computer win!";
        computerPts++;
        computerPtsSpan.innerHTML = computerPts;
    } else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice =="rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        result.style.color = "green";
        result.innerHTML = "You win!";
        humanPts++;
        humanPtsSpan.innerHTML = humanPts;
    } else if(humanChoice == computerChoice){
        result.style.color = "yellow";
        result.innerHTML = "Draw!";
    }

    if(humanPts == 5){
        result.innerHTML = "You won whole game! Click any option to start new game.";
        restartGame();
    } else if(computerPts == 5){
        result.innerHTML = "You lose whole game! Click any option to start new game."
        restartGame();
    }
}








