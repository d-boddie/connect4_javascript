
// toggling players and disc
// display message 

let discBlack = document.getElementById("discBlack")
let discRed = document.getElementById("discRed")
let displayPlayer = document.querySelector("#currentPlayerMsg")
let currentPlayer =1
let nextplayer = 2
let player1 =discBlack
let player2 = discRed
let player;

function switchPlayers(){
    if (currentPlayer === 1 ) { 
        player=player1 
        nextPlayer = 2;
    } else if (currentPlayer === 2){
        player=player2
        nextPlayer = 1;
    }
         currentPlayer = nextPlayer;
}

displayPlayer.innerHTML = ("It is player" + currentplayer + "turns") 