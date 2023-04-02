//get random choice from computer
function getComputerChoice(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

//compare player and computer selections for different scenarios 
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

//give values to previous function's parameters and get the result for each turn
//and return the final result
function game() {
   let result = ""
   let ctrWin = 0;
   let ctrLose = 0;
   for(let i=0; i<5; i++) {
   playerSelection = prompt("your answer");
   computerSelection = getComputerChoice(["rock", "paper", "scissor"]);
   result = playRound(playerSelection, computerSelection);
    
      console.log(result);
 
   if(result.includes("you win!")) {
        ctrWin++;
      } else if(result.includes("you lose!")) {
        ctrLose++;
      }
   }
     return `The score is you:${ctrWin} computer:${ctrLose}`
 }
