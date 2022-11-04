//randomly generate 'rock' 'paper' or 'scissors' as the computers choice
function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let currentChoice = choices[Math.floor(Math.random() * choices.length)];
    return currentChoice;
}

//play one round, determine who is the winner, return winner of round
function playRound(playerSelection, computerSelection) {
let result = "";

switch(true) {
    case playerSelection === "Rock" && computerSelection === "Paper":
    case playerSelection === "Paper" && computerSelection === "Scissors" :
    case playerSelection === "Scissors" && computerSelection === "Rock":
        result = "computerWin";
      break;

    case playerSelection === "Rock" && computerSelection === "Scissors": 
    case playerSelection === "Paper" && computerSelection === "Rock" :
    case playerSelection === "Scissors" && computerSelection === "Paper":
        result = "playerWin"; 
      break;

    case playerSelection === "Rock" && computerSelection === "Rock":
    case playerSelection === "Paper" && computerSelection === "Paper" :
    case playerSelection === "Scissors" && computerSelection === "Scissors":
        result = "tie";
      break;
    }
    
    return result;
}


function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//loop through 5 rounds, displaying winner each time and keeping score
function playGame() {
let playerScore = 0;
let computerScore = 0;

    //play rounds until someone reaches 5
    while(playerScore < 5 && computerScore < 5) {

    let playerChoice = prompt("Input 'Rock', 'Paper' or 'Scissors'");
    playerChoice = capitalizeFirstLetter(playerChoice);

    let computerChoice = getComputerChoice();

    if(playRound(playerChoice, computerChoice) === "computerWin") {
    console.log(`${computerChoice} beats ${playerChoice}, Computer wins!`);
    computerScore++;

    } else if(playRound(playerChoice, computerChoice) === "playerWin") {
        console.log(`${playerChoice} beats ${computerChoice}, Player wins!`);
        playerScore++;

    } else if(playRound(playerChoice, computerChoice) === "tie") {
        console.log(`${playerChoice} and ${computerChoice}, it's a tie!`);

    } else {
        console.log("Please enter Rock, Paper or Scissors!");
    }

    console.log(`Player: ${playerScore}    Computer: ${computerScore}`);
    } //exit while loop


    if(playerScore === 5){
        console.log("Player wins the game!!!");
    } else if(computerScore === 5) {
        console.log("Computer wins the game!!!");
    }
}
playGame();

//first to 5 is overall winner


