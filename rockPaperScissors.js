
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
    let round = 0;

    const buttons = document.querySelectorAll("button");
    const displayResults = document.querySelector("#gameResult");

    function buttonAction(event) {
        if (round === 0) {
            humanScore = 0;
            computerScore = 0;
            displayResults.replaceChildren();
        };


        round += 1;
        let humanChoice = event.target.textContent;
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        const displayRoundResult = document.createElement("div");
        displayRoundResult.innerText = "\n"+`Round ${round}`+"\n" + result ;
        displayResults.appendChild(displayRoundResult);

        if (humanScore === 5 || computerScore === 5) {
            let finalResultStr = (humanScore > computerScore) ? "You are the winner.": ((humanScore === computerScore) ? "A tie!": "You are the loser.")
            const displayFinalResult =  document.createElement("div");
            displayFinalResult.innerText = "\nGame Over!\n"+ finalResultStr + "\n" + "You won " + humanScore + " times out of "+ round + " rounds."
            displayResults.appendChild(displayFinalResult);
            round = 0;
        };
    }

    
    buttons.forEach((button) => {
        button.addEventListener("click", buttonAction);
    });

    /*
    for (i=1;i<=5;i++)  {
        console.log ("Round #" + i);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log ((humanScore > computerScore) ? "You are the winner.": ((humanScore === computerScore) ? "A tie!": "You are the loser."))
    console.log ("You won " + humanScore + " times out of 5 rounds.");
    */    


    function playRound(humanChoice, computerChoice) {
        let humanWinRound = false;
        let computerWinRound = false;
        
        let humanChoiceLower = humanChoice.toLowerCase();
        let computerChoiceLower = computerChoice.toLowerCase();

        if (humanChoiceLower !== computerChoiceLower) {
            if (humanChoiceLower === 'rock' && computerChoiceLower === 'scissors')
                    humanWinRound = true;
            else if (humanChoiceLower === 'paper' && computerChoiceLower === 'rock')
                    humanWinRound = true;
            else if (humanChoiceLower === 'scissors' && computerChoiceLower === 'paper')
                    humanWinRound = true;
            else 
                computerWinRound = true;
        }
        
        console.log ("You: " + humanChoice);
        console.log ("Computer: " + computerChoice);
        let roundResult = (`You: ${humanChoice}, Computer: ${computerChoice}.`);

        if (humanWinRound) {
            humanScore += 1;
            console.log("You win! " + humanChoice + " beats " + computerChoice +".");
            roundResult += ` You win! ${humanChoice} beats ${computerChoice}.`;
        }
        else if (computerWinRound) {
            computerScore +=1;
            console.log("You lose! " + computerChoice + " beats " + humanChoice +".");
            roundResult += ` You lose! ${computerChoice} beats ${humanChoice}.`;
        }
        else {
            console.log("It's a tie.");     
            roundResult += " It's a tie.";     
        }
        return roundResult;


    }
}

playGame();