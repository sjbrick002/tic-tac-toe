const gameboard = (function() {
    let gameboardArr = [null, null, null, null, null, null, null, null, null]
    const alterBoard = (mark, index) => {
        if (gameboardArr[index] === null) {
            gameboardArr.splice(index, 1, mark)
            gameModerator.endTurn()
        }
    } 
    const getGameboard = () => {return gameboardArr}
    return {getGameboard, alterBoard}
})()

const gameModerator = (function() {
    let gameOver = false
    let oddTurn = true
    let turnCount = 0
    const makeMove = slot => {
        if (!gameOver) {
            gameboard.alterBoard((oddTurn) ? player1.getMark() : player2.getMark(), slot)
            console.log(gameboard.getGameboard())
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
        if (gameboard.getGameboard()[0] === "X" && gameboard.getGameboard()[1] === "X" && gameboard.getGameboard()[2] === "X" ||
        gameboard.getGameboard()[3] === "X" && gameboard.getGameboard()[4] === "X" && gameboard.getGameboard()[5] === "X" ||
        gameboard.getGameboard()[6] === "X" && gameboard.getGameboard()[7] === "X" && gameboard.getGameboard()[8] === "X" ||
        gameboard.getGameboard()[0] === "X" && gameboard.getGameboard()[3] === "X" && gameboard.getGameboard()[6] === "X" ||
        gameboard.getGameboard()[1] === "X" && gameboard.getGameboard()[4] === "X" && gameboard.getGameboard()[7] === "X" ||
        gameboard.getGameboard()[2] === "X" && gameboard.getGameboard()[5] === "X" && gameboard.getGameboard()[8] === "X" ||
        gameboard.getGameboard()[0] === "X" && gameboard.getGameboard()[4] === "X" && gameboard.getGameboard()[8] === "X" ||
        gameboard.getGameboard()[2] === "X" && gameboard.getGameboard()[4] === "X" && gameboard.getGameboard()[6] === "X") {
            console.log(`${player1.getName()} Wins!!!`)
            gameOver = true
        } else if (gameboard.getGameboard()[0] === "O" && gameboard.getGameboard()[1] === "O" && gameboard.getGameboard()[2] === "O" ||
        gameboard.getGameboard()[3] === "O" && gameboard.getGameboard()[4] === "O" && gameboard.getGameboard()[5] === "O" ||
        gameboard.getGameboard()[6] === "O" && gameboard.getGameboard()[7] === "O" && gameboard.getGameboard()[8] === "O" ||
        gameboard.getGameboard()[0] === "O" && gameboard.getGameboard()[3] === "O" && gameboard.getGameboard()[6] === "O" ||
        gameboard.getGameboard()[1] === "O" && gameboard.getGameboard()[4] === "O" && gameboard.getGameboard()[7] === "O" ||
        gameboard.getGameboard()[2] === "O" && gameboard.getGameboard()[5] === "O" && gameboard.getGameboard()[8] === "O" ||
        gameboard.getGameboard()[0] === "O" && gameboard.getGameboard()[4] === "O" && gameboard.getGameboard()[8] === "O" ||
        gameboard.getGameboard()[2] === "O" && gameboard.getGameboard()[4] === "O" && gameboard.getGameboard()[6] === "O") {
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

const player1 = player("Samuel", "X")
const player2 = player("Andrew", "O")






//players must be able to place their markers in the slot of their choice if it is free
//must have way to control which player gets to place a marker down for a turn
//gameModerator.makeMove(0)
//gameModerator.makeMove(6)
//gameModerator.makeMove(1)
//gameModerator.makeMove(7)
//gameModerator.makeMove(3)
//gameModerator.makeMove(8)