let playerSelection = "";
let playerScore;
let computerScore;

const body = document.querySelector('body');
const roundWinner = document.createElement('p');
body.appendChild(roundWinner);
const currentScore = document.createElement('pre');
body.appendChild(currentScore);
const selection = document.querySelectorAll('button');
selection.forEach((button) => {
    button.addEventListener('click', playRound)
});


function startGame()
{
    roundWinner.textContent = "Press a button to begin...";
    currentScore.textContent = "Player: 0     Computer: 0";
    playerScore = 0;
    computerScore = 0;
    selection.forEach((button) => {
        button.disabled = false;
})
}
startGame();


function getComputerChoice() 
{
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]; 
}


function playRound() 
{
    playerSelection = this.id;
    let computerSelection = getComputerChoice();
let result = "";
    switch(true) 
    {
    case playerSelection === "Rock" && computerSelection === "Paper":
    case playerSelection === "Paper" && computerSelection === "Scissors" :
    case playerSelection === "Scissors" && computerSelection === "Rock":
        result = "computerWin";
        roundWinner.textContent = `${computerSelection} beats ${playerSelection}, Computer wins!`;
    break;

    case playerSelection === "Rock" && computerSelection === "Scissors": 
    case playerSelection === "Paper" && computerSelection === "Rock" :
    case playerSelection === "Scissors" && computerSelection === "Paper":
        result = "playerWin"; 
        roundWinner.textContent = `${playerSelection} beats ${computerSelection}, Player wins!`;
    break;

    case playerSelection === computerSelection:
        roundWinner.textContent = `${playerSelection} and ${computerSelection}, it's a tie!`;
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
currentScore.textContent = `Player: ${playerScore}     Computer: ${computerScore}`;
if(playerScore === 5 || computerScore === 5)
{
    checkWin();
}
}


function checkWin()
{
    let winner;
    if(playerScore === 5)
    {
        winner = 'PLAYER';
    } 
    else if(computerScore === 5) 
    {
        winner = "COMPUTER";
    }
    endGame(winner);
}


function endGame(winner)
{
    roundWinner.textContent = `${winner} WINS THE GAME!!!`;
    selection.forEach((button) => {
        button.disabled = true;
    });

    const restart = document.createElement("button");
    restart.textContent = "Play Again";
    body.appendChild(restart);
    restart.addEventListener('click', (e) => {
        body.removeChild(e.target);
        startGame(); 
    });    
}



    
   
    
