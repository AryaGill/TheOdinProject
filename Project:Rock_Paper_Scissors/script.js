const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*choices.length);
    return(choices[randomIndex]);
}

