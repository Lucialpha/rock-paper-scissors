let choiceArray = ['rock', 'paper', 'scissors'];

function computerPlayer() {
    for (let i = 0; i < Infinity; i++) {
        let randNumb = ((Math.random() * 10)).toFixed();
        if (randNumb == 0 || randNumb == 1 || randNumb == 2) {
            let computerChoice = choiceArray[randNumb];
            return computerChoice;
            break;
        }
    }
}


function playGame(playerSelection, auto) {
        playerSelection.toLowerCase();
    if (playerSelection == 'paper'||playerSelection == 'scissors'||playerSelection == 'rock'){
                let auto = computerPlayer() 
            if (playerSelection == auto) {
                return (`There is a tie! ${playerSelection} , ${auto}`);
            } else if ((playerSelection == "rock") && (auto == 'scissors') || (playerSelection == "scissors") && (auto == 'paper')|| (playerSelection == "paper") && (auto == 'rock')) {
                return (`You won! ${playerSelection} beats ${auto}`);
            } else {
                return (`You lose! ${auto} beats ${playerSelection}`);
            }
        }
    }

    let yourScore = 0;
      let computerScore = 0;
      let tieScore = 0;
  function game(playerSelection){
      
      
          let j = playGame(playerSelection).split(' ');
          if ( j.includes('won!')){
              yourScore++;
          }else if(j.includes('lose!')) {
              computerScore++;
          }else{
                tieScore++;
          }
      


      if (yourScore > computerScore){
          console.log(' You are leading!');

      }else if(yourScore < computerScore){
          console.log('You are loosing');
      }else {
          console.log('there is a draw')
      }
  }
    // for (let i = 1; i < 6; i++){
    //     let choice = prompt('choose rock, paper, or scissors');
    //     console.log(`Game ${i} `);
    //     game(choice);
    //     console.log('Your score is: ' + yourScore);
    //     console.log('computer\'s score is: ' + computerScore);
    //     console.log('There was a tie score of: ' + tieScore);
        

    //     if( i == 5){
    //         if (yourScore > computerScore){
    //             console.log(' You won!');
      
    //         }else if(yourScore < computerScore){
    //             console.log('You lost');
    //         }else {
    //             console.log('Game draw!')
    //         }
    //     }
    // }
