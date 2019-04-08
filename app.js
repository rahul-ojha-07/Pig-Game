/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying;

init();


/*******************************************
 * Rolling the dice
 */

document.querySelector('.btn-roll').addEventListener('click', function () {
    //random dice value
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        //changing the image
        var imageChange = document.querySelector('.dice');
        imageChange.style.display = 'block';
        imageChange.src = "dice-" + dice + '.png';
        //chaning current score
        if (dice === 1) {

            roundScore = 0;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            nextPlayer();
            document.querySelector('.dice').style.display = 'none';


        } else {
            roundScore += dice;
        }

        document.querySelector("#current-" + activePlayer).textContent = roundScore;

    }





});

/********************************************
 * Holding the Score
 */
document.querySelector('.btn-hold').addEventListener('click', function () {

    //Changing the player score
    score[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];



    //changing the current score
    roundScore = 0;

    document.querySelector("#current-" + activePlayer).textContent = roundScore;


    //winner Check

    if (score[activePlayer] >= 100) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner!"
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    }
    else {
        //Change player
        nextPlayer();
    }


});

/******************************************
 * New Game
 */

document.querySelector('.btn-new').addEventListener('click', function () {

    //reset Everything
    init();


    document.querySelector('.dice').style.display = 'none';


});
/**********************************************
 * reset round Score
 */
function reset() {

    activePlayer = activePlayer ? 0 : 1;
}


/**
 * next Player
 */

function nextPlayer() {
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer = activePlayer ? 0 : 1;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

function init() {

    roundScore = 0;
    score = [0, 0];
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector("#score-0").textContent = score[0];
    document.querySelector("#current-0").textContent = roundScore;
    document.querySelector("#score-1").textContent = score[1];
    document.querySelector("#current-1").textContent = roundScore;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}

/**********************************************
 * Reset for New Game
 */

