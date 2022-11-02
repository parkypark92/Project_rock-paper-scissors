//randomly generate 'rock' 'paper' or 'scissors' as the computers choice

function computerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let currentChoice = choices[Math.floor(Math.random() * choices.length)];
    return currentChoice;
}

//play one round using computer choice and user choice, display winner

    //allow user to input 'rock' 'paper' or 'scissors' (case insensitive)

let userChoice = prompt("Input 'Rock', 'Paper' or 'Scissors'");

    //determine who is the winner

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());

    if(playerSelection === "Rock" && computerSelection === "Paper" ||
    playerSelection === "Paper" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`${computerSelection} beats ${playerSelection}, Computer wins!`);

    } else if(playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`${playerSelection} beats ${computerSelection}, Player wins!`);

    } else if(playerSelection === "Rock" && computerSelection === "Rock" ||
    playerSelection === "Paper" && computerSelection === "Paper" ||
    playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log(`${playerSelection} and ${computerSelection}, it's a tie!`)

    } else {
        console.log("Please enter Rock, Paper or Scissors!");
    }
    
}

    playRound(userChoice, computerChoice());
    


    
    //display winner of round

//loop through 5 rounds, displaying winner each time and keeping score

//first to 5 is overall winner


