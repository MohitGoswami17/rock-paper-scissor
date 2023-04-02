function getComputerChoice(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
  
   if(playerSelection.toLowerCase() === computerSelection) {
     return `its a draw`;
   
   } else if(playerSelection.match(/rock/gi) && computerSelection === "paper") {
      return `you lose! ${computerSelection} beats ${playerSelection}`;
   
   } else if(playerSelection.match(/rock/gi) && computerSelection === "scissor") {
      return `you win! ${playerSelection} beats ${computerSelection}`
   
   } else if(playerSelection.match(/[paper]/gi) && computerSelection === "rock") {
     return `you win! ${playerSelection} beats ${computerSelection}`
   
   } else if(playerSelection.match(/[paper]/gi) && computerSelection === "scissor") {
     return `you lose! ${computerSelection} beats ${playerSelection}`
   
   } else if(playerSelection.match(/[scissor]/gi) && computerSelection === "paper") {
     return `you win! ${playerSelection} beats ${computerSelection}`
   
   } else if(playerSelection.match(/[scissor]/gi) && computerSelection === "rock") {
     return `you lose! ${computerSelection} beats ${playerSelection}`
   }
}

