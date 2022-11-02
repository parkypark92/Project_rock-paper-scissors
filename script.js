//randomly generate 'rock' 'paper' or 'scissors' as the computers choice
function computerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let currentChoice = choices[Math.floor(Math.random() * choices.length)];
    return currentChoice;
}
console.log(computerChoice());
//allow user to input 'rock' 'paper' or 'scissors' (case insensitive)

//play one round using computer choice and user choice, display winner

//loop through 5 rounds, displaying winner each time and keeping score

//first to 5 is overall winner


