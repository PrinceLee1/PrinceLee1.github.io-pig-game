/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls two 6 in a row, all his CURRENT score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach the point chosen on GLOBAL score wins the game.

*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

alert('GAME RULES:The game has 2 players, playing in rounds.In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.BUT, if the player rolls two 6 in a row, all his CURRENT score gets lost. After that, it\'s the next player\'s turn.The player can choose to HOLD, which means that his ROUND score gets added to his GLOBAL score.After that, it\'s the next player\'s turn.The first player to reach the point chosen on GLOBAL score wins the game.');
var scores , roundScore , activePlayer , gamePlaying;

init();
/*THIS BUTTON EVENT IS FOR ROLLING THE DICE.
WHEN THE "ROLL" BUTTON IS CLICKED,A RANDOM NUMER IS GENERATED AND RETURNED TO THE NEAREST WHOLE 
NUMBER WITH "Math.floor" METHOD.THEN THE DICE IS SHOWN BECAUSE INITIALLY IT WAS HIDDEN BEFORE THE GAME STARTS(Refer to the "init" function on line 79),ALSO IT WILL CHECK IF THE NUMBER IS EQUAL TO 1,IF EQUAL TO 1 NEXT PLAYER PLAYS eLse IT WILL UPDATE THE ROUND SCORE.
*****/ 
var lastDice;
document.querySelector('.btn-roll').addEventListener('click',function(){
if (gamePlaying){
     // 1.Random Number
   var dice1 = Math.floor(Math.random()*6) + 1;
    var dice2 = Math.floor(Math.random()*6) + 1;
    // 2.Display the Result
    document.getElementById('dice-1').style.display = 'block';
      document.getElementById('dice-2').style.display = 'block';
document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';  
    
// 3.Update the round score IF the rolled number was not a 1
    if(dice1 !== 1 && dice2 !==1){
    //Add Score
     roundScore += dice1 + dice2;
 document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
    //Next player plays
   nextPlayer();

        } 
//    if (lastDice === 6 && dice === 6){
//        //Player looses score
//        scores[activePlayer] = 0;
//        document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];
//    }else if(dice !== 1){
//    //Add Score
//     roundScore += dice;
////    document.querySelector('#score-' + activePlayer).textContent = 0;
//// document.querySelector('#current-' + activePlayer).textContent = roundScore;
//        }else{
//    //Next player plays
//   nextPlayer();
//
//        } 
//    lastDice = dice;
    }

    
});
/***
 * END OF ROLL BUTTON 
 */

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
          //Add CURRENT score to Global Score
scores[activePlayer] +=roundScore;
//Update the UI
document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
//Check if player won the game
if (scores[activePlayer] >= winningScore){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
   document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
}else{

//Next player
nextPlayer();
        }
  
    }

});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

   document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

 document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('#current-' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';
// var x = document.querySelector('#score-0').textContent;
// console.log(x);






