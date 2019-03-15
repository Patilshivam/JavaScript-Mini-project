var document;
var scores, roundScores, activePlayer,gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        // 1. Ramdom Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display the result
        //var diceDOM = document.querySelector('.dice');
        // diceDOM.style.display = 'block';
        //diceDOM.src = 'dice-' + dice + '.png';
    
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';    
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';   
        
        // 3. Update the round Score if the rolled number was not 1
        
        /*  only for challenge-2
        if(dice === 6 && lastDice === 6){
           //player losses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }else if(dice !== 1){
            //Add Score
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else{
            //Next Player
            nextPlayer();
        } 
        lastDice = dice;
        */
        
        //for challenge-3
        if(dice1 !== 1 && dice2 !== 1){
            //Add Score
            roundScores += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else{
            //Next Player
            nextPlayer();
        }   
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying){
        
         // 1. add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScores;
     
        // 2. update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        //Undefined, 0, null, "" are COERCED to false
        //Anything else COERCED to true
        if(input){
           winningScore = input;
        } else {
           winningScore = 30;
        }
        // 3. check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none'; 
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
        
            gamePlaying = false;
        } else {
            // 4. NextPlayer
            nextPlayer();    
        }      
    }
});

function nextPlayer(){
    
    if(activePlayer === 0){
        activePlayer = 1;   
    } else {
        activePlayer = 0;
    }
        
    roundScores = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    //document.querySelector('.player-0-panel').classList.add('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
        
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',function(){                       
    init();
});

function init(){
    
    scores = [0,0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    //Hide Image
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
