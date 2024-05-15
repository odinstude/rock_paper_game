function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // Depending on the random number, return rock, paper, or scissors
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  // Test the function
  console.log(getComputerChoice());

  
  function getHumanChoice() {
    // Prompt the user for their choice
    const choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  
    // Check if the choice is valid
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      // If the choice is not valid, prompt again
      alert("Invalid choice. Please enter rock, paper, or scissors.");
      return getHumanChoice(); // Recursive call to prompt again
    }
  }
  
  // Test the function
  console.log(getHumanChoice());

  
  // Declare and initialize variables for player scores
let humanScore = 0;
let computerScore = 0;

// Now these variables can be accessed and updated throughout the game.


function playRound(humanChoice, computerChoice) {
    // Make the humanChoice parameter case-insensitive
    humanChoice = humanChoice.toLowerCase();
  
    // Define the rules of the game
    const rules = {
      rock: { beats: "scissors" },
      paper: { beats: "rock" },
      scissors: { beats: "paper" }
    };
  
    // Check if it's a tie
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return; // Exit the function
    }
  
    // Check if the human wins
    if (rules[humanChoice].beats === computerChoice) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++; // Increment humanScore
    } else {
      // If not a tie and human didn't win, then computer wins
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++; // Increment computerScore
    }
  }
  
  // Test the function
  playRound("rock", "scissors"); // Example usage

  


  function playGame() {
    // Declare and initialize variables for player scores
    let humanScore = 0;
    let computerScore = 0;
  
    // Define the function to play a single round
    function playRound(humanChoice, computerChoice) {
      // Make the humanChoice parameter case-insensitive
      humanChoice = humanChoice.toLowerCase();
  
      // Define the rules of the game
      const rules = {
        rock: { beats: "scissors" },
        paper: { beats: "rock" },
        scissors: { beats: "paper" }
      };
  
      // Check if it's a tie
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie"; // Return "tie" for tie rounds
      }
  
      // Check if the human wins
      if (rules[humanChoice].beats === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human"; // Return "human" for human wins
      } else {
        // If not a tie and human didn't win, then computer wins
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer"; // Return "computer" for computer wins
      }
    }
  
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
      // Get choices for each round
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      
      // Determine the winner of the round
      const roundWinner = playRound(humanChoice, computerChoice);
  
      // Update scores based on the round winner
      if (roundWinner === "human") {
        humanScore++;
      } else if (roundWinner === "computer") {
        computerScore++;
      }
    }
  
    // Declare the winner of the game
    if (humanScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
      console.log("Sorry, you lose the game.");
    } else {
      console.log("It's a tie game!");
    }
  
    // Display final scores
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
  
  // Test the function by calling playGame
  playGame();
  