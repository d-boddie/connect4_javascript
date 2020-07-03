//We used some of Randy's start up code and we were coached by Tim La and Missi.



const boardModel = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

let currentPlayer = 1 // 1 is equal to yellow 2 equals red
let player;

const displayMessage = function (message) {
    document.getElementById("message").innerHTML = message

}
const displayTieMessage = function () {
    displayMessage("Tie game!")
}
const displayWinMessage = function (playerNum) {
    displayMessage("Winner is player:" + playerNum)
}

const displayCurrentPlayer = function (playerNum) {
    displayMessage("Current player: " + playerNum)
}

// displayPlayer.innerHTML = ("It is player" + currentPlayer + "turns") 

//let mode = "inhand";
let selectedDisc;

function displayBoard(boardModel) {

}


//This picks up the disc and puts it down and switches players
function dropDisc() {
    let columnNode = event.currentTarget;
    console.log(columnNode.id)
    selectedDisc = document.createElement("div")
    let columnNum = Number(columnNode.id.slice(-1))
    if (columnNode.childElementCount < 6) {

        if (currentPlayer === 1) {
            //everytime we drop a disk we also want to update the boardModel 
            //boardModel[x][y]
            selectedDisc.className = "discYellow"
            columnNode.appendChild(selectedDisc);
            console.log(currentPlayer)
            boardUpdate();
            if (winnerVertical(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("WooHoo")
                }, 2000);
            } else if (winnerHorizontal(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("Red")
                }, 2000);
            } else if (winnerDiagonalRight(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("Blue")
                }, 2000);
            } else if (winnerDiagonalLeft(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("Green")
                }, 2000);
        
            } else {
                draw(boardModel)
            }
            currentPlayer = 2

        } else {
            selectedDisc.className = "discRed"
            columnNode.appendChild(selectedDisc);
            boardUpdate();
            if (winnerVertical(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("Yellow")
                }, 2000);
            } else if (winnerHorizontal(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("Pink")
                }, 2000);
            } else if (winnerDiagonalRight(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("Purple")
                }, 2000);
            } else if (winnerDiagonalLeft(boardModel)) {
                displayWinMessage(currentPlayer)
                setTimeout(function () {
                    document.location.href = "";
                    console.log("BLACK!")
                }, 2000);
        
            } else {
                draw(boardModel)
            }
            console.log(currentPlayer)
            currentPlayer = 1

        }
    }

    function boardUpdate() {

        for (let row = boardModel.length - 1; row >= 0; row--) {
            if (boardModel[row][columnNum] === 0) {
                boardModel[row][columnNum] = currentPlayer;
                break;
            }

        }

    }

  





}

const winnerVertical = function (model) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum] &&
                model[rowNum][colNum] !== 0) {
                console.log("vertical")
                return true

            }
        }
    }
   return false

}

const winnerHorizontal = function (model) {
    for (let rowNum = 0; rowNum < 6; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum][colNum + 1] &&
                model[rowNum][colNum] === model[rowNum][colNum + 2] &&
                model[rowNum][colNum] === model[rowNum][colNum + 3] &&
                model[rowNum][colNum] !== 0) {
                console.log("horizontal")
                return true

            }
        }
    }
    return false

}

const winnerDiagonalRight = function (model) {

    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum + 1] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum + 2] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum + 3] &&
                model[rowNum][colNum] !== 0) {
                console.log("Diagonal Down")
                return true

            }

        }


    }
    return false
}

const winnerDiagonalLeft = function (model) {

    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 3; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum - 1] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum - 2] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum - 3] &&
                model[rowNum][colNum] !== 0) {
                console.log("Diagonal Right")
                return true

            }

        }

    }
    return false
}

const draw = function (model) {
    let boardIsFull = 0
    for (let rowNum = 0; rowNum < 6; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] !== 0) {
                boardIsFull++
            }
        }

    }
    console.log(boardIsFull)
    if(boardIsFull === 42){
        displayTieMessage()
        // setTimeout(function () {
        //     document.location.href = "";
        // }, 2000);
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

