let computerChoice;
let playerChoice;

function getComputerChoice(){
    number = Math.random;
    if(number < 0.33) {
        computerChoice = "rock";
    } else if (number < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

function getPlayerChoice(){
    playerChoice = null;
    while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
    playerChoice = prompt("Enter your choice (rock, paper, or scissors) or 'exit' to quit: ").toString().toLowerCase();
}
}

function play(){
    getComputerChoice();
    getPlayerChoice();

    if(playerChoice == "exit") return;

    console.log(`Console chose: ${computerChoice}`)
    console.log(`You chose: ${playerChoice}`)

    if(playerChoice == computerChoice)
        console.log("Its a tie!");
    
    else if((playerChoice == "rock" && computerChoice == "paper") 
            || (playerChoice == "paper" && computerChoice == "scissors") 
            || (playerChoice == "scissors" && computerChoice == "rock"))
        console.log("Sorry, you lose!");
    else 
        console.log("You win!");    
      
    
}
play();
