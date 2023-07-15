let userScore = 0;
let computerScore = 0;

const getUserChoice = userInput => {

if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
} else {
    console.log("Error! Invalid user input.");
}
};

function getComputerChoice() {
const randomNumber = Math.floor(Math.random() * 3);

switch (randomNumber) {
    case 0:
        return 'rock';
        break;
    case 1:
        return 'paper';
        break;
    case 2:
        return 'scissors';
        break;
}
};

function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
		document.getElementById("playerScore").innerHTML = "Player Score: " + userScore;
		document.getElementById("outcomeText").innerHTML = "The Player selected " + userChoice + ", The Computer selected " + computerChoice + ", The game is a tie.";
    }

    if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
        userScore += 1;
        document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
		document.getElementById("playerScore").innerHTML = "Player Score: " + userScore;
		document.getElementById("outcomeText").innerHTML = "The Player selected " + userChoice + ", The Computer selected " + computerChoice + ", User wins.";
    }
    if (computerChoice === 'scissors') {
        computerScore++;
        document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
		document.getElementById("playerScore").innerHTML = "Player Score: " + userScore;
		document.getElementById("outcomeText").innerHTML = "The Player selected " + userChoice + ", The Computer selected " + computerChoice + ", Computer wins.";          
    }
    }

    if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
        userScore++;
        document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
		document.getElementById("playerScore").innerHTML = "Player Score: " + userScore;
		document.getElementById("outcomeText").innerHTML = "The Player selected " + userChoice + ", The Computer selected " + computerChoice + ", User wins.";           
    }
    if (computerChoice === 'paper') {
        computerScore++;
        document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
		document.getElementById("playerScore").innerHTML = "Player Score: " + userScore;
		document.getElementById("outcomeText").innerHTML = "The Player selected " + userChoice + ", The Computer selected " + computerChoice + ", Computer wins.";           
    }
    }

    if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
        userScore++;
        document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
		document.getElementById("playerScore").innerHTML = "Player Score: " + userScore;
		document.getElementById("outcomeText").innerHTML = "The Player selected " + userChoice + ", The Computer selected " + computerChoice + ", User wins.";           
    }
    if (computerChoice === 'rock') {
        computerScore++;
        document.getElementById("compScore").innerHTML = "Computer Score: " + computerScore;
		document.getElementById("playerScore").innerHTML = "Player Score: " + userScore;
		document.getElementById("outcomeText").innerHTML = "The Player selected " + userChoice + ", The Computer selected " + computerChoice + ", Computer wins.";         
    }
    }

    
};

function playRound(userChoice) {
computerChoice = getComputerChoice();

let outcomeText = document.createElement('div');
outcomeText.setAttribute('id', 'outcomeText');
outcomeText.textContent = '';

displayOutcome.appendChild(outcomeText);
determineWinner(userChoice, computerChoice);
};

function game(userChoice) {

    playRound(userChoice);

    if (userScore === 5) {
        userScore = 0;
        computerScore = 0;
        document.getElementById("outcomeText").innerHTML = "A pitiful victory.";
    } 
    
    if (computerScore === 5) {
        userScore = 0;
        computerScore = 0;
        document.getElementById("outcomeText").innerHTML = "I won, human!";
    }

    
}

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
	game('rock');
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
	game('paper');
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
	game('scissors');
});
