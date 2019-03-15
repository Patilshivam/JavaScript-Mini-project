var document;
var scores, roundScores, activePlayer,gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        // 1. Ramdom Number
        var dice = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
        // 3. Update the round Score if the rolled number was not 1
        if(dice !== 1){
            //Add Score
            roundScores += dice;
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
    
        // 3. check if player won the game
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
        
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
        
//        document.querySelector('.player-0-panel').classList.add('active');
//        document.querySelector('.player-0-panel').classList.remove('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';

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




//-----------------------------------Quick Notes----------------------------------------

//setter();--set data to web page
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//getter();--gets data from web page
//var read = document.querySelector('#score-0').textContent;
//console.log(read);