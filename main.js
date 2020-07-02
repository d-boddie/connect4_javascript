//We used some of Randy's start up code and we were coached by Tim La and Missi.



const boardModel = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

let currentPlayer = 1
let player;

const displayMessage = function (message) {
    messageDiv = document.getElementById("message")  //we had innerHTML here
    messageDiv.textContent = `Current player is ${currentPlayer}`
    document.body.appendChild(messageDiv)
}

const displayCurrentPlayer = function (playerNum) {
    displayMessage("Current player: " + playerNum)
}

// displayPlayer.innerHTML = ("It is player" + currentPlayer + "turns") 

let mode = "inhand";
let selectedDisc;

function displayBoard(boardModel) {

}

//This picks up the disc and puts it down and switches players
function dropDisc (colNum) {
    const columnNode = event.currentTarget;
    selectedDisc = document.createElement("div")
    if(columnNode.childElementCount < 6){

        if (currentPlayer === 1) {
            selectedDisc.className = "discYellow"
            columnNode.appendChild(selectedDisc);
            currentPlayer = 2
        }else {
            selectedDisc.className = "discRed"
            columnNode.appendChild(selectedDisc);
            currentPlayer = 1
        }
      
    }
 
}


function initializeGame() {
    displayBoard(boardModel)
    createColEvtLstnr()
    displayCurrentPlayer(currentPlayer)
}
initializeGame();


function createColEvtLstnr() {
    document.getElementById("col0").addEventListener("click", dropDisc);
    document.getElementById("col1").addEventListener("click", dropDisc);
    document.getElementById("col2").addEventListener("click", dropDisc);
    document.getElementById("col3").addEventListener("click", dropDisc);
    document.getElementById("col4").addEventListener("click", dropDisc);
    document.getElementById("col5").addEventListener("click", dropDisc);
    document.getElementById("col6").addEventListener("click", dropDisc);
}
