const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*choices.length);
    return(choices[randomIndex]);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    )  {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    } else {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
    }
}

function capitalize(str){
    return (str[0].toUpperCase() + str.slice(1));
}
