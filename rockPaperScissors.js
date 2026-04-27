console.log("Hello World");

function getComputerChoice () {
    randRange = Math.random();
    if (randRange <= 1/3)
        return 'Rock';
    else if (randRange <= 2/3) 
        return 'Paper';
    else
        return 'Scissors';

}

function getHumanChoice() {
    return prompt('Enter Rock, Paper, or Scissors.');
}




function playGame() {
    let humanChoice;
    let computerChoice;
    
    let humanScore = 0;
    let computerScore = 0;


    for (i=1;i<=5;i++)  {
        console.log ("Round #" + i);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log ((humanScore > computerScore) ? "You are the winner.": ((humanScore === computerScore) ? "A tie!": "You are the loser."))
    console.log ("You won " + humanScore + " times out of 5 rounds.");


    function playRound(humanChoice, computerChoice) {
        let humanWinRound = false;
        let computerWinRound = false;
        
        let humanChoiceLower = humanChoice.toLowerCase();
        let computerChoiceLower = computerChoice.toLowerCase();

        if (humanChoiceLower === 'rock') {
            if (computerChoiceLower === 'scissors')
                humanWinRound = true;
            else if (computerChoiceLower === 'paper')
                computerWinRound = true;
        }
        else if (humanChoiceLower === 'paper') {
            if (computerChoiceLower === 'rock')
                humanWinRound = true;
            else if (computerChoiceLower === 'scissors')
                computerWinRound = true;
        }
        else if (humanChoiceLower === 'scissors') {
            if (computerChoiceLower === 'paper')
                humanWinRound = true;
            else if (computerChoiceLower === 'rock')
                computerWinRound = true;
        }

        console.log ("You: " + humanChoice);
        console.log ("Computer: " + computerChoice);


        if (humanWinRound) {
            humanScore += 1;
            console.log("You win! " + humanChoice + " beats " + computerChoice +".");
        }
        else if (computerWinRound) {
            computerScore +=1;
            console.log("You lose! " + computerChoice + " beats " + humanChoice +".");
        }
        else 
            console.log("It's a tie.");          
    }
}