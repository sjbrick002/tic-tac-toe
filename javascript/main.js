const gameBoard = (function() {
    let gameBoardArr = [null, null, null, null, null, null, null, null, null]
    const alterBoard = (mark, index) => {
        if (gameBoardArr[index] === null) {
            gameBoardArr.splice(index, 1, mark)
            gameModerator.endTurn()
        }
    } 
    const getGameBoard = () => {return gameBoardArr}
    return {getGameBoard, alterBoard}
})()

const gameModerator = (function() {
    let gameOver = false
    let oddTurn = true
    let turnCount = 0
    const makeMove = slot => {
        if (!gameOver) {
            gameBoard.alterBoard((oddTurn) ? player1.getMark() : player2.getMark(), slot)
            console.log(gameBoard.getGameBoard())
            console.log(turnCount)
            checkWinner()
        }
    }
    const endTurn = () => {
        turnCount++
        oddTurn = (oddTurn) ? false : true
    }
    const getTurn = () => {return oddTurn}
    const checkWinner = () => {
        if (gameBoard.getGameBoard()[0] === "X" && gameBoard.getGameBoard()[1] === "X" && gameBoard.getGameBoard()[2] === "X" ||
        gameBoard.getGameBoard()[3] === "X" && gameBoard.getGameBoard()[4] === "X" && gameBoard.getGameBoard()[5] === "X" ||
        gameBoard.getGameBoard()[6] === "X" && gameBoard.getGameBoard()[7] === "X" && gameBoard.getGameBoard()[8] === "X" ||
        gameBoard.getGameBoard()[0] === "X" && gameBoard.getGameBoard()[3] === "X" && gameBoard.getGameBoard()[6] === "X" ||
        gameBoard.getGameBoard()[1] === "X" && gameBoard.getGameBoard()[4] === "X" && gameBoard.getGameBoard()[7] === "X" ||
        gameBoard.getGameBoard()[2] === "X" && gameBoard.getGameBoard()[5] === "X" && gameBoard.getGameBoard()[8] === "X" ||
        gameBoard.getGameBoard()[0] === "X" && gameBoard.getGameBoard()[4] === "X" && gameBoard.getGameBoard()[8] === "X" ||
        gameBoard.getGameBoard()[2] === "X" && gameBoard.getGameBoard()[4] === "X" && gameBoard.getGameBoard()[6] === "X") {
            console.log(`${player1.getName()} Wins!!!`)
            gameOver = true
        } else if (gameBoard.getGameBoard()[0] === "O" && gameBoard.getGameBoard()[1] === "O" && gameBoard.getGameBoard()[2] === "O" ||
        gameBoard.getGameBoard()[3] === "O" && gameBoard.getGameBoard()[4] === "O" && gameBoard.getGameBoard()[5] === "O" ||
        gameBoard.getGameBoard()[6] === "O" && gameBoard.getGameBoard()[7] === "O" && gameBoard.getGameBoard()[8] === "O" ||
        gameBoard.getGameBoard()[0] === "O" && gameBoard.getGameBoard()[3] === "O" && gameBoard.getGameBoard()[6] === "O" ||
        gameBoard.getGameBoard()[1] === "O" && gameBoard.getGameBoard()[4] === "O" && gameBoard.getGameBoard()[7] === "O" ||
        gameBoard.getGameBoard()[2] === "O" && gameBoard.getGameBoard()[5] === "O" && gameBoard.getGameBoard()[8] === "O" ||
        gameBoard.getGameBoard()[0] === "O" && gameBoard.getGameBoard()[4] === "O" && gameBoard.getGameBoard()[8] === "O" ||
        gameBoard.getGameBoard()[2] === "O" && gameBoard.getGameBoard()[4] === "O" && gameBoard.getGameBoard()[6] === "O") {
            console.log(`${player2.getName()} Wins!!!`)
            gameOver = true
        } else if (turnCount === 9) {
            console.log(`Wow it's a tie!!!`)
            gameOver = true
        }
    }
    return {makeMove, getTurn, endTurn}
})()

// Funciton factory for players
function player(name, mark) {
    const getName = () => {
        return name
    }
    const getMark = () => {
        return mark
    }
    return {getName, getMark}
}





const gameView = (function() {
    const body = document.querySelector("body")
    const gameBoard = document.createElement("div")
    gameBoard.classList.add("game-board")
    body.appendChild(gameBoard)

    const topLeft = document.createElement("div")
    topLeft.classList.add("top-left")
    topLeft.textContent = "X"
    gameBoard.appendChild(topLeft)

    const topCenter = document.createElement("div")
    topCenter.classList.add("top-center")
    topCenter.textContent = "X"
    gameBoard.appendChild(topCenter)

    const topRight = document.createElement("div")
    topRight.classList.add("top-right")
    topRight.textContent = "X"
    gameBoard.appendChild(topRight)

    const centerLeft = document.createElement("div")
    centerLeft.classList.add("center-left")
    centerLeft.textContent = "X"
    gameBoard.appendChild(centerLeft)

    const centerCenter = document.createElement("div")
    centerCenter.classList.add("center")
    centerCenter.textContent = "X"
    gameBoard.appendChild(centerCenter)

    const centerRight = document.createElement("div")
    centerRight.classList.add("center-right")
    centerRight.textContent = "X"
    gameBoard.appendChild(centerRight)

    const bottomLeft = document.createElement("div")
    bottomLeft.classList.add("bottom-left")
    bottomLeft.textContent = "X"
    gameBoard.appendChild(bottomLeft)

    const bottomCenter = document.createElement("div")
    bottomCenter.classList.add("bottom-center")
    bottomCenter.textContent = "X"
    gameBoard.appendChild(bottomCenter)

    const bottomRight = document.createElement("div")
    bottomRight.classList.add("bottom-right")
    bottomRight.textContent = "X"
    gameBoard.appendChild(bottomRight)
})()





//const player1 = player("Samuel", "X")
//const player2 = player("Andrew", "O")






//players must be able to place their markers in the slot of their choice if it is free
//must have way to control which player gets to place a marker down for a turn
//gameModerator.makeMove(0)
//gameModerator.makeMove(6)
//gameModerator.makeMove(1)
//gameModerator.makeMove(7)
//gameModerator.makeMove(3)
//gameModerator.makeMove(8)