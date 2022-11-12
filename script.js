let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

const selection = document.querySelectorAll('button');
selection.forEach((button) => {
    button.addEventListener('click', playRound)})
    

function getComputerChoice() 
{
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]; 
}


function playRound(event) 
{
    playerSelection = event.target.id;
    let computerSelection = getComputerChoice();
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
  getScore(result);
}


function getScore(currentRound)
{
    if(currentRound === "computerWin") 
    {
        computerScore++;
    } 
    else if(currentRound === "playerWin") 
    {
        playerScore++;
    }
console.log(`Player: ${playerScore}    Computer: ${computerScore}`);
checkWin();
}


function checkWin()
{
    if(playerScore === 5)
    {
        console.log("Player wins the game!!!");
        endGame();
    } 
    else if(computerScore === 5) 
    {
        console.log("Computer wins the game!!!");
        endGame();
    }
}


function endGame()
{
    selection.forEach((button) => {
        button.disabled = true;
    })
}




    




