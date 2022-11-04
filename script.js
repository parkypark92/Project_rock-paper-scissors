//randomly generate 'rock' 'paper' or 'scissors' as the computers choice
function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let currentChoice = choices[Math.floor(Math.random() * choices.length)];
    return currentChoice;
}

//play one round, determine who is the winner, return winner of round
function playRound(playerSelection, computerSelection) {
let result = ""

    if(playerSelection === "Rock" && computerSelection === "Paper" ||
    playerSelection === "Paper" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "computerWin";

    } else if(playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "playerWin";    

    } else if(playerSelection === "Rock" && computerSelection === "Rock" ||
    playerSelection === "Paper" && computerSelection === "Paper" ||
    playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = "tie";
    } 
    return result;
}


function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//loop through 5 rounds, displaying winner each time and keeping score
function playGame() {
let playerCount = 0;
let computerCount = 0;

    //play rounds until someone reaches 5
    while(playerCount < 5 && computerCount < 5) {

    let playerChoice = prompt("Input 'Rock', 'Paper' or 'Scissors'");
    playerChoice = capitalizeFirstLetter(playerChoice);

    let computerChoice = getComputerChoice();

    if(playRound(playerChoice, computerChoice) === "computerWin") {
    console.log(`${computerChoice} beats ${playerChoice}, Computer wins!`);
    computerCount++;

    } else if(playRound(playerChoice, computerChoice) === "playerWin") {
        console.log(`${playerChoice} beats ${computerChoice}, Player wins!`);
        playerCount++;

    } else if(playRound(playerChoice, computerChoice) === "tie") {
        console.log(`${playerChoice} and ${computerChoice}, it's a tie!`);

    } else {
        console.log("Please enter Rock, Paper or Scissors!");
    }

    console.log(`Player: ${playerCount}    Computer: ${computerCount}`);
    } //exit while loop


    if(playerCount === 5){
        console.log("Player wins the game!!!");
    } else if(computerCount === 5) {
        console.log("Computer wins the game!!!");
    }
}
playGame();

//first to 5 is overall winner


