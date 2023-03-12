// tic-tac-toe board squares
const topLeftSquare = document.getElementById("top-left-square");
const topSquare = document.getElementById("top-square");
const topRightSquare = document.getElementById("top-right-square");
const middleLeftSquare = document.getElementById("middle-left-square");
const middleSquare = document.getElementById("middle-square");
const middleRightSquare = document.getElementById("middle-right-square");
const bottomLeftSquare = document.getElementById("bottom-left-square");
const bottomSquare = document.getElementById("bottom-square");
const bottomRightSquare = document.getElementById("bottom-right-square");
const boardSquares = [topLeftSquare, topSquare, topRightSquare, middleLeftSquare,
    middleSquare, middleRightSquare, bottomLeftSquare, bottomSquare, bottomRightSquare];

// buttons
const clearBoardButton = document.getElementById("clear-board-button");

// default values
const squareAltEmpty = "Empty Square";
const squareSrcEmpty = "images/EmptyImg.png";
const squareAltX = "X";
const squareSrcX = "images/anX.png";
const squareAltO = "O";
const squareSrcO = "images/anO.png";

let firstPlayersTurn = true;
let wonState = false;


// tic-tac-toe board interaction functions
topLeftSquare.onclick = () => {
    let valid = checkValidSquare(topLeftSquare);
    if (valid) {
        // horizontal check
        checkWin(topLeftSquare, topSquare, topRightSquare);
        // vertical check
        checkWin(topLeftSquare, middleLeftSquare, bottomLeftSquare);
        // diagonal check
        checkWin(topLeftSquare, middleSquare, bottomRightSquare);
    }
    
};
topSquare.onclick = () => {
    let valid = checkValidSquare(topSquare);
    if (valid) {
        // horizontal check
        checkWin(topSquare, topLeftSquare, topRightSquare);
        // vertical check
        checkWin(topSquare, middleSquare, bottomSquare);
    }
};
topRightSquare.onclick = () => {
    let valid = checkValidSquare(topRightSquare);
    if (valid) {
        // horizontal check
        checkWin(topRightSquare, topLeftSquare, topSquare);
        // vertical check
        checkWin(topRightSquare, middleRightSquare, bottomRightSquare);
        // diagonal check
        checkWin(topRightSquare, middleSquare, bottomLeftSquare);
    }
};
middleLeftSquare.onclick = () => {
    let valid = checkValidSquare(middleLeftSquare);
    if (valid) {
        // horizontal check
        checkWin(middleLeftSquare, middleSquare, middleRightSquare);
        // vertical check
        checkWin(middleLeftSquare, topLeftSquare, bottomLeftSquare);
    }
};
middleSquare.onclick = () => {
    let valid = checkValidSquare(middleSquare);
    if (valid) {
        // horizontal check
        checkWin(middleSquare, middleLeftSquare, middleRightSquare);
        // vertical check
        checkWin(middleSquare, topSquare, bottomSquare);
        // diagonal check 1
        checkWin(middleSquare, topLeftSquare, bottomRightSquare);
        // diagonal check 2
        checkWin(middleSquare, topRightSquare, bottomLeftSquare);
    }
};
middleRightSquare.onclick = () => {
    let valid = checkValidSquare(middleRightSquare);
    if (valid) {
        // horizontal check
        checkWin(middleRightSquare, middleLeftSquare, middleSquare);
        // vertical check
        checkWin(middleRightSquare, topRightSquare, bottomRightSquare);
    }
};
bottomLeftSquare.onclick = () => {
    let valid = checkValidSquare(bottomLeftSquare);
    if (valid) {
        // horizontal check
        checkWin(bottomLeftSquare, bottomSquare, bottomRightSquare);
        // vertical check
        checkWin(bottomLeftSquare, topLeftSquare, middleLeftSquare);
        // diagonal check
        checkWin(bottomLeftSquare, middleSquare, topRightSquare);
    }
};
bottomSquare.onclick = () => {
    let valid = checkValidSquare(bottomSquare);
    if (valid) {
        // horizontal check
        checkWin(bottomSquare, bottomLeftSquare, bottomRightSquare);
        // vertical check
        checkWin(bottomSquare, topSquare, middleSquare);
    }
};
bottomRightSquare.onclick = () => {
    let valid = checkValidSquare(bottomRightSquare);
    if (valid) {
        // horizontal check
        checkWin(bottomRightSquare, bottomLeftSquare, bottomSquare);
        // vertical check
        checkWin(bottomRightSquare, topRightSquare, middleRightSquare);
        // diagonal check
        checkWin(bottomRightSquare, topLeftSquare, middleSquare);
    }
};

// returns true if a square was marked, false if location was invalid
function checkValidSquare(square) { 
    if (!wonState) 
    {
        let altText = square.getAttribute("alt");
        if (altText == squareAltEmpty) {
            if (firstPlayersTurn) {
                square.setAttribute("alt", squareAltX);
                square.setAttribute("src", squareSrcX)
            }
            else {
                square.setAttribute("alt", squareAltO);
                square.setAttribute("src", squareSrcO);
            }
            firstPlayersTurn = !firstPlayersTurn;
            return true;
        }
        else if (altText != squareAltEmpty) {
            console.log("Square wasn't empty."); // TODO: does there need to be feedback here
        }
    }
    return false;
}

// checkWin initiates a win state on the board if the three provided squares match
function checkWin (square1, square2, square3) {
    let playerMark = square1.getAttribute("alt");
    if (playerMark == square2.getAttribute("alt") &&
        playerMark == square3.getAttribute("alt")) {
        console.log("Player " + playerMark + " won!");
        wonState = true;
    }
}

// clear board button
clearBoardButton.onclick = () => {
    for (let i = 0; i < boardSquares.length; i++) {
        boardSquares[i].setAttribute("alt", squareAltEmpty);
        boardSquares[i].setAttribute("src", squareSrcEmpty);
    }
    wonState = false;
};