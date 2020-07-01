
const boardModel = [
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ]
]

let discYellow = document.getElementById("discYellow")
let discRed = document.getElementById("discRed")
let displayPlayer = document.getElementById("currentPlayerMsg")
let currentPlayer = 1
let nextplayer = 2
let player1 = discYellow
let player2 = discRed
let player;

const displayMessage = function (message) {
    messageDiv = document.getElementById("message").innerHTML
    messageDiv.textContent = `Current player is ${currentPlayer}`
    document.body.appendChild(messageDiv)
}

const displayCurrentPlayer = function (playerNum) {
    displayMessage("Current player: " + playerNum)
}

function switchPlayers() {
    if (currentPlayer === 1) {
        player = player1
        nextPlayer = 2;
    } else if (currentPlayer === 2) {
        player = player2
        nextPlayer = 1;
    }
    currentPlayer = nextPlayer;
}

// displayPlayer.innerHTML = ("It is player" + currentPlayer + "turns") 

function createColEvtLstnr() {
    document.getElementById("col0").addEventListener("click", dropDisc);
    document.getElementById("col1").addEventListener("click", dropDisc);
    document.getElementById("col2").addEventListener("click", dropDisc);
    document.getElementById("col3").addEventListener("click", dropDisc);
    document.getElementById("col4").addEventListener("click", dropDisc);
    document.getElementById("col5").addEventListener("click", dropDisc);
    document.getElementById("col6").addEventListener("click", dropDisc);
}


let mode = "inhand";
let selectedDisc = null;

function displayBoard(boardModel) {

}

function initializeGame() {
    displayBoard(boardModel)
    createColEvtLstnr()
    displayCurrentPlayer(currentPlayer)
}




//This picks up the disc and puts it down
function dropDisc(dropEvent) {
    console.log();
    const columnNode = dropEvent.currentTarget;
    if (mode === "inhand") {//disc
        if (columnNode.hasChildNodes()) {
            selectedDisc = columnNode.lastElementChild;
            columnNode.appendChild(selectedDisc);
            mode = "notinhand"
        }
    }
}

const colNum = function () {
    if (colNum !== 6) {
        return null
    }
}