let computerChoice;
let playerChoice;
let playerScore;
let computerScore;

function getComputerChoice(){
    number = Math.random();
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

function playRound(){
    getComputerChoice();
    getPlayerChoice();

    if(playerChoice == "exit") return;

    console.log(`Computer chose: ${computerChoice}`)
    console.log(`You chose: ${playerChoice}`)

    if(playerChoice == computerChoice)
        console.log("Its a tie!");
    
    else if((playerChoice == "rock" && computerChoice == "paper") 
            || (playerChoice == "paper" && computerChoice == "scissors") 
            || (playerChoice == "scissors" && computerChoice == "rock")){
        computerScore += 1;
        console.log("Sorry, you lose this round!");   
    }
    else {
        playerScore += 1;
        console.log("You win this round!");    
    }
      
}

function playGame(){
    playerScore = 0;
    computerScore = 0;
    console.log("First to 3! Game on!")
    while (playerScore < 3 && computerScore < 3){
        console.log("Next Round: ")
        playRound();
        console.log(`The current score is Player: ${playerScore} | Computer: ${computerScore}`);
    }

    if(computerScore == 3)
        console.log("Computer Wins!")
    else
        console.log("Player Wins!")
}

playGame();