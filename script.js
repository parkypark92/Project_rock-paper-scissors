//randomly generate 'rock' 'paper' or 'scissors' as the computers choice
function getComputerChoice() 
{
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]; 
}

//play one round, determine who is the winner, return winner of round
function playRound(playerSelection, computerSelection) 
{
let result = "";
    switch(true) 
    {
    case playerSelection === "Rock" && computerSelection === "Paper":
    case playerSelection === "Paper" && computerSelection === "Scissors" :
    case playerSelection === "Scissors" && computerSelection === "Rock":
        result = "computerWin";
        console.log(`${computerSelection} beats ${playerSelection}, Computer wins!`);
    break;

    case playerSelection === "Rock" && computerSelection === "Scissors": 
    case playerSelection === "Paper" && computerSelection === "Rock" :
    case playerSelection === "Scissors" && computerSelection === "Paper":
        result = "playerWin"; 
        console.log(`${playerSelection} beats ${computerSelection}, Player wins!`);
    break;

    case playerSelection === computerSelection:
        console.log(`${playerSelection} and ${computerSelection}, it's a tie!`);
    break;

    default: console.log("Please enter Rock, Paper or Scissors!");
    break;
    }
return result;
}

function capitalizeFirstLetter(word) 
{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//loop through rounds, keeping score, first to 5 wins
function playGame() 
{
let playerScore = 0;
let computerScore = 0;
    while(playerScore < 5 && computerScore < 5) 
    {
    let playerChoice = capitalizeFirstLetter(prompt("Input 'Rock', 'Paper' or 'Scissors'"));
    let computerChoice = getComputerChoice();
    let roundResult = playRound(playerChoice, computerChoice);

        if(roundResult === "computerWin") 
        {
            computerScore++;
        } 
        else if(roundResult === "playerWin") 
        {
            playerScore++;
        }
    console.log(`Player: ${playerScore}    Computer: ${computerScore}`);
    } //exit while loop

    if(playerScore === 5)
    {
        console.log("Player wins the game!!!");
    } 
    else if(computerScore === 5) 
    {
        console.log("Computer wins the game!!!");
    }
}
playGame();



