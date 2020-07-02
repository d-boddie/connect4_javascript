
Randy's start up code and notes

/*

1. Initialize the game
    - players
    - board display
    - board model
    - current player tracker
    - click handlers for each column
2. Take player input
    - know which player is dropping a disc
    - which column are we dropping into?
    - is that column already full?
    - drop the disc into the top of the column
3. Check for game end conditions
    - tie
    - win
    - announce that the game is over

*/

const boardModel = [
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ]
]
let currentPlayer = 1 // 1 or 2
let numberOfDiscsDropped = 0

const displayMessage = function (message) {
    // Clear out the message div
    // Add new message to div
}

const displayCurrentPlayer = function (playerNum) {
    displayMessage("Current player: " + playerNum)
}


const switchToNextPlayer = function () {
    //     TODO: Toggle currentPlayer variable 1<-->2
}


const isColumnFull = function (colNum) {
    // TODO: Look at the boardModel to determine if col is full
    return false // or true
}

const dropDisc = function (colNum) {
    // TODO: Add a disc to the DOM for the current player
    // <div class="disc red"></div>
    
    // TODO: Add a disc to the boardModel
    numberOfDiscsDropped++
}

const isGameOver = function (model) {
    // Check for a win
    // Check for a tie (numberofDiscsDropped === 42)
    return false // false, "tie", "win"
}

const displayTieMessage = function () {
    displayMessage("Tie game!")
}

const displayWinMessage = function () {
    displayMessage("Winner is _____") 
   
}


const columnClickHandler = function (eventObj) {
    const selectedCol = eventObj.currentTarget
    const columnNum = Number(selectedCol.id.slice(-1))
    if (isColumnFull(columnNum)) {
        // display a message saying they can't drop there
    } else {
        dropDisc(columnNum)

        const gameStatus = isGameOver(boardModel)
        if (gameStatus === "tie") {
            displayTieMessage()
        } else if (gameStatus === "win") {
            displayWinMessage()
        } else {
            switchToNextPlayer()
        }
    }
}

const setUpEventListeners = function () {
    document.querySelector('#col0').addEventListener('click', columnClickHandler)
    document.querySelector('#col1').addEventListener('click', columnClickHandler)
    document.querySelector('#col2').addEventListener('click', columnClickHandler)
    document.querySelector('#col3').addEventListener('click', columnClickHandler)
    document.querySelector('#col4').addEventListener('click', columnClickHandler)
    document.querySelector('#col5').addEventListener('click', columnClickHandler)
    document.querySelector('#col6').addEventListener('click', columnClickHandler)
}

const initializeGame = function () {
    setUpEventListeners()
    displayCurrentPlayer(currentPlayer)
}

initializeGame()




//1. Create a disc (as a div)
//2. Assign the disc to a class (ex. disc red)
//3. Append to the tower




if (mode === "inhand") {
    }

//disc
        // if (columnNode.hasChildNodes()) {
        //     //selectedDisc = columnNode.lastElementChild;
        //     columnNode.appendChild(selectedDisc);
        //     mode = "notinhand"
        // }

        Extra Variables
        //let displayPlayer = document.getElementById("currentPlayerMsg")
        //let player1 = discYellow
let player2 = discRed



function checkBoard() {
    let discRed = "discRed";
    let discYellow = "discYellow";
    for (let i = 0; i < boardModel.length; i++) {
        for (let selectedDisc = 0; selectedDisc <= boardModel.length; selectedDisc++) {
                if (discRed === 4){
                    alert("red win")
                } else if(discYellow === 4){
                    alert("Yellow Wins")
                }

            }
        }
    }


  let columnIndex = Number(columnNode.id.slice(-1))
    //This function will match the Connect Four board's coordinates to the array's when a disc is dropped
    function updateGameboard() {
      //Backwards 
        //1.Instead of putting an item on the top of the array, it will put an item on the bottom of the array
        //2.The gameModel will be filled with discs until 0,0
        //3.Once a row is filled, the row above it will be next because the array is starting at 5 (5,4,3,2,1,0)
      for (let row = boardModel.length - 1; row >= 0; row--) {
        //If there is no item in an array, then add the item 1 or 2 corresponding the player's turn
        if (boardModel[row][columnIndex] === 0) {
          boardModel[row][columnIndex] = currentPlayer;
          break;
        }
      }
    }
    updateGameboard();