const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerIcon = document.getElementById("computer-icon")

let humanPts = 0;
let computerPts = 0;

const humanPtsSpan = document.getElementById("human-pts");

humanPtsSpan.content = humanPts;

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
        : computerChoice == 2 ? "scisors"
        : "error";
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    if(computerChoice == "rock"){
        computerIcon.innerHTML=`<i class="fa-solid fa-hand-fist"></i>`;
    } else if(computerChoice == "paper"){
        computerIcon.innerHTML=`<i class="fa-solid fa-hand"></i>`;
    } else if(computerChoice == "scisors"){
        computerIcon.innerHTML=`<i class="fa-solid fa-hand-scissors"></i>`;
    }
    if(humanChoice=="rock" || computerChoice == "paper"){
        
    }

    console.log(computerChoice, humanChoice);
    
}








