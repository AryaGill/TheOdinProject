const choices = ["Rock", "Paper", "Scissor"];
let cpuScore = 0;
let myScore = 0;

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
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    )  {
        cpuScore++;
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    } else {
        myScore++;
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
    }
}

function capitalize(str){
    return (str[0].toUpperCase() + str.slice(1));
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Your choice", "Rock , Paper, Scissor").toLowerCase();
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor") {
            alert("Option not recognized! Make sure the answer is either Rock, Paper, or Scissor")
            playerSelection = prompt("Enter Your choice", "Rock , Paper, Scissor").toLowerCase();
        } else {
            console.log(playRound(playerSelection, getComputerChoice()));
        }
    }
    if (myScore > cpuScore) {
        console.log("You Won!");
        alert("You Won!");
    } else if (myScore < cpuScore){
        console.log("Mission failed we'll get em next time");
        alert("Mission failed we'll get em next time");
    } else {
        console.log("FINAL: Tie!");
        alert("Tie!")
    }
}
