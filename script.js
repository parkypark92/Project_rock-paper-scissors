//randomly generate 'rock' 'paper' or 'scissors' as the computers choice

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let currentChoice = choices[Math.floor(Math.random() * choices.length)];
    return currentChoice;
}
//play one round using computer choice and user choice
    //determine who is the winner
    //return winner of round
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


    
//loop through 5 rounds, displaying winner each time and keeping score
function playGame() {

let playerCount = 0;
let computerCount = 0;

    //play rounds until someone gets 5 wins
    for(let i = 0; i < 5; i++) {
        //only allow loop to increment if one score is higher than the other
        while(playerCount <= i && computerCount <= i) {

        //allow user to input 'rock' 'paper' or 'scissors' (case insensitive)
        let playerChoice = prompt("Input 'Rock', 'Paper' or 'Scissors'");
        playerChoice = playerChoice.toLowerCase();
            playerChoice = playerChoice.replace(playerChoice[0], playerChoice[0].toUpperCase());

        //generate computers choice
        let computerChoice = getComputerChoice();

        //play a round, display winner, keep score
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

    } //exit for loop

    //display winner
    if(playerCount === 5){
        console.log("Player wins the game!!!");
    } else if(computerCount === 5) {
        console.log("Computer wins the game!!!");
    }
}
playGame();

//first to 5 is overall winner


