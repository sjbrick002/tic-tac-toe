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
    const getGameStatus = () => {return gameOver}
    return {makeMove, getTurn, endTurn, getGameStatus}
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

const player1 = player("Samuel", "X")
const player2 = player("Andrew", "O")




const gameView = (function() {
    const body = document.querySelector("body")
    const gameMenu = document.createElement("div")
    gameMenu.classList.add("game-menu")
    body.appendChild(gameMenu)




    const startBtn = document.createElement("button")
    startBtn.textContent = "START GAME"
    gameMenu.appendChild(startBtn)

    const gameModeDisplay = document.createElement("div")
    gameModeDisplay.classList.add("game-mode-display")
    gameModeDisplay.textContent = "Game Selection:"
    gameMenu.appendChild(gameModeDisplay)

    const practiceModeBtn = document.createElement("button")
    practiceModeBtn.textContent = "PRACTICE"
    gameModeDisplay.appendChild(practiceModeBtn)

    const multiplayerModeBtn = document.createElement("button")
    multiplayerModeBtn.textContent = "VS PLAYER"
    gameModeDisplay.appendChild(multiplayerModeBtn)

    const computerModeBtn = document.createElement("button")
    computerModeBtn.textContent = "VS COMPUTER"
    gameModeDisplay.appendChild(computerModeBtn)

    const announcementDisplay = document.createElement("div")
    announcementDisplay.classList.add("announcement-display")
    announcementDisplay.textContent = "Select game mode and press START to play"
    gameMenu.appendChild(announcementDisplay)






    const gameBoardDisplay = document.createElement("div")
    gameBoardDisplay.classList.add("game-board")
    body.appendChild(gameBoardDisplay)

    const topLeft = document.createElement("div")
    topLeft.classList.add("top-left", "white-grid")
    topLeft.addEventListener("click", () => {placeMark(topLeft, 0)})
    gameBoardDisplay.appendChild(topLeft)

    const topCenter = document.createElement("div")
    topCenter.classList.add("top-center", "white-grid")
    topCenter.addEventListener("click", () => {placeMark(topCenter, 1)})
    gameBoardDisplay.appendChild(topCenter)

    const topRight = document.createElement("div")
    topRight.classList.add("top-right", "white-grid")
    topRight.addEventListener("click", () => {placeMark(topRight, 2)})
    gameBoardDisplay.appendChild(topRight)

    const centerLeft = document.createElement("div")
    centerLeft.classList.add("center-left", "white-grid")
    centerLeft.addEventListener("click", () => {placeMark(centerLeft, 3)})
    gameBoardDisplay.appendChild(centerLeft)

    const centerCenter = document.createElement("div")
    centerCenter.classList.add("center", "white-grid")
    centerCenter.addEventListener("click", () => {placeMark(centerCenter, 4)})
    gameBoardDisplay.appendChild(centerCenter)

    const centerRight = document.createElement("div")
    centerRight.classList.add("center-right", "white-grid")
    centerRight.addEventListener("click", () => {placeMark(centerRight, 5)})
    gameBoardDisplay.appendChild(centerRight)

    const bottomLeft = document.createElement("div")
    bottomLeft.classList.add("bottom-left", "white-grid")
    bottomLeft.addEventListener("click", () => {placeMark(bottomLeft, 6)})
    gameBoardDisplay.appendChild(bottomLeft)

    const bottomCenter = document.createElement("div")
    bottomCenter.classList.add("bottom-center", "white-grid")
    bottomCenter.addEventListener("click", () => {placeMark(bottomCenter, 7)})
    gameBoardDisplay.appendChild(bottomCenter)

    const bottomRight = document.createElement("div")
    bottomRight.classList.add("bottom-right", "white-grid")
    bottomRight.addEventListener("click", () => {placeMark(bottomRight, 8)})
    gameBoardDisplay.appendChild(bottomRight)

    const placeMark = (element, index) => {
        if (!gameModerator.getGameStatus()) {
            gameModerator.makeMove(index)
            console.log(gameBoard.getGameBoard()[index])
            element.textContent = `${gameBoard.getGameBoard()[index]}`
        }
    }
    return {placeMark}
})()












//players must be able to place their markers in the slot of their choice if it is free
//must have way to control which player gets to place a marker down for a turn
//gameModerator.makeMove(0)
//gameModerator.makeMove(6)
//gameModerator.makeMove(1)
//gameModerator.makeMove(7)
//gameModerator.makeMove(3)
//gameModerator.makeMove(8)