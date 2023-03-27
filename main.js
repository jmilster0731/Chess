class GameBoardSlot {
    constructor(tColor, tRow, tColumn, tOwnership, tPiece) {
        this.tilecolor = tColor;
        this.row = tRow;
        this.column = tColumn;
        this.ownership = tOwnership || null;
        this.ownershipType = tPiece || null;
    }
}

// cached game information

const domGameBoard = document.querySelector(".chessboard")
let none = 0;
let possibleMoves = [];
let activeTile = [];

// Initial Layout Object State Information

// Row 8
tileA8 = new GameBoardSlot('white', 8, 1, 'black', 'rook');
tileB8 = new GameBoardSlot('black', 8, 2, 'black', 'knight');
tileC8 = new GameBoardSlot('white', 8, 3, 'black', 'bishop');
tileD8 = new GameBoardSlot('black', 8, 4, 'black', 'queen');
tileE8 = new GameBoardSlot('white', 8, 5, 'black', 'king');
tileF8 = new GameBoardSlot('black', 8, 6, 'black', 'bishop');
tileG8 = new GameBoardSlot('white', 8, 7, 'black', 'knight');
tileH8 = new GameBoardSlot('black', 8, 8, 'black', 'rook');


// row 7
tileA7 = new GameBoardSlot('black', 7, 1, 'black', 'pawn');
tileB7 = new GameBoardSlot('white', 7, 2, 'black', 'pawn');
tileC7 = new GameBoardSlot('black', 7, 3, 'black', 'pawn');
tileD7 = new GameBoardSlot('white', 7, 4, 'black', 'pawn');
tileE7 = new GameBoardSlot('black', 7, 5, 'black', 'pawn');
tileF7 = new GameBoardSlot('white', 7, 6, 'black', 'pawn');
tileG7 = new GameBoardSlot('black', 7, 7, 'black', 'pawn');
tileH7 = new GameBoardSlot('white', 7, 8, 'black', 'pawn');

// row 6
tileA6 = new GameBoardSlot('white', 6, 1);
tileB6 = new GameBoardSlot('black', 6, 2);
tileC6 = new GameBoardSlot('white', 6, 3);
tileD6 = new GameBoardSlot('black', 6, 4);
tileE6 = new GameBoardSlot('white', 6, 5);
tileF6 = new GameBoardSlot('black', 6, 6);
tileG6 = new GameBoardSlot('white', 6, 7);
tileH6 = new GameBoardSlot('black', 6, 8);

// row 5
tileA5 = new GameBoardSlot('black', 5, 1);
tileB5 = new GameBoardSlot('white', 5, 2);
tileC5 = new GameBoardSlot('black', 5, 3);
tileD5 = new GameBoardSlot('white', 5, 4);
tileE5 = new GameBoardSlot('black', 5, 5);
tileF5 = new GameBoardSlot('white', 5, 6);
tileG5 = new GameBoardSlot('black', 5, 7);
tileH5 = new GameBoardSlot('white', 5, 8);

// row 4
tileA4 = new GameBoardSlot('white', 4, 1);
tileB4 = new GameBoardSlot('black', 4, 2);
tileC4 = new GameBoardSlot('white', 4, 3);
tileD4 = new GameBoardSlot('black', 4, 4);
tileE4 = new GameBoardSlot('white', 4, 5);
tileF4 = new GameBoardSlot('black', 4, 6);
tileG4 = new GameBoardSlot('white', 4, 7);
tileH4 = new GameBoardSlot('black', 4, 8);

// row 3
tileA3 = new GameBoardSlot('black', 3, 1);
tileB3 = new GameBoardSlot('white', 3, 2);
tileC3 = new GameBoardSlot('black', 3, 3);
tileD3 = new GameBoardSlot('white', 3, 4);
tileE3 = new GameBoardSlot('black', 3, 5);
tileF3 = new GameBoardSlot('white', 3, 6);
tileG3 = new GameBoardSlot('black', 3, 7);
tileH3 = new GameBoardSlot('white', 3, 8);

// row 2
tileA2 = new GameBoardSlot('white', 2, 1, 'white', 'pawn');
tileB2 = new GameBoardSlot('black', 2, 2, 'white', 'pawn');
tileC2 = new GameBoardSlot('white', 2, 3, 'white', 'pawn');
tileD2 = new GameBoardSlot('black', 2, 4, 'white', 'pawn');
tileE2 = new GameBoardSlot('white', 2, 5, 'white', 'pawn');
tileF2 = new GameBoardSlot('black', 2, 6, 'white', 'pawn');
tileG2 = new GameBoardSlot('white', 2, 7, 'white', 'pawn');
tileH2 = new GameBoardSlot('black', 2, 8, 'white', 'pawn');

// row 1
tileA1 = new GameBoardSlot('black', 1, 1, 'white', 'rook');
tileB1 = new GameBoardSlot('white', 1, 2, 'white', 'knight');
tileC1 = new GameBoardSlot('black', 1, 3, 'white', 'bishop');
tileD1 = new GameBoardSlot('white', 1, 4, 'white', 'queen');
tileE1 = new GameBoardSlot('black', 1, 5, 'white', 'king');
tileF1 = new GameBoardSlot('white', 1, 6, 'white', 'bishop');
tileG1 = new GameBoardSlot('black', 1, 7, 'white', 'knight');
tileH1 = new GameBoardSlot('white', 1, 8, 'white', 'rook');

// event listener onload

window.addEventListener("load", (event) => {
    renderGameBoard();
  });

// gameboard array

const gameBoardArray = [
    tileA8, tileB8, tileC8, tileD8, tileE8, tileF8, tileG8, tileH8,
    tileA7, tileB7, tileC7, tileD7, tileE7, tileF7, tileG7, tileH7,
    tileA6, tileB6, tileC6, tileD6, tileE6, tileF6, tileG6, tileH6,
    tileA5, tileB5, tileC5, tileD5, tileE5, tileF5, tileG5, tileH5,
    tileA4, tileB4, tileC4, tileD4, tileE4, tileF4, tileG4, tileH4,
    tileA3, tileB3, tileC3, tileD3, tileE3, tileF3, tileG3, tileH3,
    tileA2, tileB2, tileC2, tileD2, tileE2, tileF2, tileG2, tileH2,
    tileA1, tileB1, tileC1, tileD1, tileE1, tileF1, tileG1, tileH1
]

function renderGameBoard() {

    document.querySelector(".chessboard").innerHTML = '';

    gameBoardArray.forEach(function (information) {
        let renderedTilePiece = document.createElement('div');
        let pieceType = information.ownershipType;
        // check tile color
        if (information.tilecolor === 'black') {
            renderedTilePiece.className = 'rendered-black-tile-piece';
        } else {
            renderedTilePiece.className = 'rendered-white-tile-piece';
        }

        // check ownership of tile
        if (information.ownership === 'black') {
            renderedTilePiece.innerHTML = `<bold> I'm a black space with a ${pieceType}</bold>`
        } else if (information.ownership === 'white') {
            renderedTilePiece.innerHTML = `<bold> I'm a white space with a ${pieceType}</bold>`
        } else {
            renderedTilePiece.innerHTML = `<bold> I'm unclaimed </bold>`
        }

        if (information.ownershipType != null) {
            if (information.ownershipType === 'pawn') {
                renderedTilePiece.onclick = function () {
                    movePAWN(information);
                }
            } else if (information.ownershipType === 'knight') {
                renderedTilePiece.onclick = function () {
                    moveKNIGHT(information);
                }
            } else if (information.ownershipType === 'king') {
                renderedTilePiece.onclick = function () {
                    moveKING(information);
                }
            } else if (information.ownershipType === 'queen') {
                renderedTilePiece.onclick = function () {
                    moveQUEEN(information);
                }
            } else if (information.ownershipType === 'bishop') {
                renderedTilePiece.onclick = function () {
                    moveBISHOP(information);
                }
            } else if (information.ownershipType === 'rook') {
                renderedTilePiece.onclick = function () {
                    moveROOK(information);
                }
            }
        }

        document.querySelector(".chessboard").appendChild(renderedTilePiece);
    });
}

// Movement Board Render

function renderGameMovementBoard() {

    document.querySelector(".chessboard").innerHTML = '';

    gameBoardArray.forEach(function (information, idx) {
        let renderedTilePiece = document.createElement('div');
        let pieceType = information.ownershipType;
        // check tile color
        if (information.tilecolor === 'black') {
            renderedTilePiece.className = 'rendered-black-tile-piece';
        } else {
            renderedTilePiece.className = 'rendered-white-tile-piece';
        }

        // check ownership of tile
        if (information.ownership === 'black') {
            renderedTilePiece.innerHTML = `<bold> I'm a black space with a ${pieceType}</bold>`
        } else if (information.ownership === 'white') {
            renderedTilePiece.innerHTML = `<bold> I'm a white space with a ${pieceType}</bold>`
        } else {
            renderedTilePiece.innerHTML = `<bold> I'm unclaimed </bold>`
        }

        if (activeTile.includes(idx)) {
            renderedTilePiece.className = 'highlighted-piece';
            renderedTilePiece.onclick = function () {
                renderGameBoard();
            }
        } else if (possibleMoves.includes(idx)) {
            renderedTilePiece.className = 'highlighted-move-option';
            renderedTilePiece.onclick = function () {
                declareMoveToTile(idx);
            }
        }

        document.querySelector(".chessboard").appendChild(renderedTilePiece);
    })
};
// Movement Functions based on Piece Type

function movePAWN(tileInfo) {
    let piecetype = tileInfo.ownershipType
    let pawnColor = tileInfo.ownership
    let currentX = tileInfo.column
    let currentY = tileInfo.row

    declareActiveTile(currentX, currentY);

    possibleMoves = [];

    console.log(pawnColor, piecetype, currentX, currentY)

    // general movement

    if ((pawnColor === 'white') && (currentY !== 2)) {
        if (checkForMoveCollision(currentX, (currentY + 1)) === false) {
            let possibleMove = getWhichTile(currentX, (currentY + 1))
            possibleMoves.push(possibleMove);
        };

    } else if ((pawnColor === 'white') && (currentY === 2)) {
        if (checkForMoveCollision(currentX, (currentY + 1)) === false) {
            let possibleMove = getWhichTile(currentX, (currentY + 1))
            possibleMoves.push(possibleMove);
        };
        if (checkForMoveCollision(currentX, (currentY + 2)) === false) {
            let possibleMove = getWhichTile(currentX, (currentY + 2))
            possibleMoves.push(possibleMove);
        };
    } else if ((pawnColor === 'black') && (currentY !== 7)) {
        if (checkForMoveCollision(currentX, (currentY - 1)) === false) {
            let possibleMove = getWhichTile(currentX, (currentY - 1))
            possibleMoves.push(possibleMove);
        };
    } else if ((pawnColor === 'black') && (currentY === 7)) {
        if (checkForMoveCollision(currentX, (currentY - 1)) === false) {
            let possibleMove = getWhichTile(currentX, (currentY - 1))
            possibleMoves.push(possibleMove);
        };
        if (checkForMoveCollision(currentX, (currentY - 2)) === false) {
            let possibleMove = getWhichTile(currentX, (currentY - 2))
            possibleMoves.push(possibleMove);
        };
    }

    // angle attack availability
    if((pawnColor === 'white') && (checkForMoveCollision((currentX - 1), (currentY + 1))) && (gameBoardArray[getWhichTile((currentX - 1), (currentY + 1))].ownership === 'black')) {
        let possibleMove = getWhichTile((currentX - 1), (currentY + 1))
        possibleMoves.push(possibleMove)
    } 
    
    if((pawnColor === 'white') && (checkForMoveCollision((currentX + 1), (currentY + 1))) && (gameBoardArray[getWhichTile((currentX + 1), (currentY + 1))].ownership === 'black')) {
        let possibleMove = getWhichTile((currentX + 1), (currentY + 1))
        possibleMoves.push(possibleMove)
    }

    if((pawnColor === 'black') && (checkForMoveCollision((currentX - 1), (currentY - 1))) && (gameBoardArray[getWhichTile((currentX - 1), (currentY - 1))].ownership === 'white')) {
        let possibleMove = getWhichTile((currentX - 1), (currentY - 1))
        possibleMoves.push(possibleMove)
    }

    if((pawnColor === 'black') && (checkForMoveCollision((currentX + 1), (currentY - 1))) && (gameBoardArray[getWhichTile((currentX + 1), (currentY - 1))].ownership === 'white')) {
        let possibleMove = getWhichTile((currentX + 1), (currentY - 1))
        possibleMoves.push(possibleMove)
    }
    renderGameMovementBoard()
};


function moveKNIGHT(tileInfo) {
    let piecetype = tileInfo.ownershipType
    let knightColor = tileInfo.ownership
    let currentX = tileInfo.column
    let currentY = tileInfo.row
    console.log(knightColor, piecetype, currentX, currentY)

    declareActiveTile(currentX, currentY);

    possibleMoves = [];

    // left 1 up 2
    if((checkForMoveCollision((currentX - 1), (currentY + 2))) && ((gameBoardArray[getWhichTile((currentX - 1), (currentY + 2))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX - 1), (currentY + 2))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX - 1), (currentY + 2))) === false) {
        let possibleMove = getWhichTile((currentX - 1), (currentY + 2))
        possibleMoves.push(possibleMove)
    }
    // left 2 up 1
    if((checkForMoveCollision((currentX - 2), (currentY + 1))) && ((gameBoardArray[getWhichTile((currentX - 2), (currentY + 1))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX - 2), (currentY + 1))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX - 2), (currentY + 1))) === false) {
        let possibleMove = getWhichTile((currentX - 2), (currentY + 1))
        possibleMoves.push(possibleMove)
    }
    // left 2 down 1
    if((checkForMoveCollision((currentX - 2), (currentY - 1))) && ((gameBoardArray[getWhichTile((currentX - 2), (currentY - 1))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX - 2), (currentY - 1))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX - 2), (currentY - 1))) === false) {
        let possibleMove = getWhichTile((currentX - 2), (currentY - 1))
        possibleMoves.push(possibleMove)
    }
    // left 1 down 2
    if((checkForMoveCollision((currentX - 1), (currentY - 2))) && ((gameBoardArray[getWhichTile((currentX - 1), (currentY - 2))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX - 1), (currentY - 2))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX - 1), (currentY - 2))) === false) {
        let possibleMove = getWhichTile((currentX - 1), (currentY - 2))
        possibleMoves.push(possibleMove)
    }
    // right 1 up 2
    if((checkForMoveCollision((currentX + 1), (currentY + 2))) && ((gameBoardArray[getWhichTile((currentX + 1), (currentY + 2))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX + 1), (currentY + 2))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX + 1), (currentY + 2))) === false) {
        let possibleMove = getWhichTile((currentX + 1), (currentY + 2))
        possibleMoves.push(possibleMove)
    }
    // right 2 up 1
    if((checkForMoveCollision((currentX + 2), (currentY + 1))) && ((gameBoardArray[getWhichTile((currentX + 2), (currentY + 1))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX + 2), (currentY + 1))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX + 2), (currentY + 1))) === false) {
        let possibleMove = getWhichTile((currentX + 2), (currentY + 1))
        possibleMoves.push(possibleMove)
    }
    // right 2 down 1
    if((checkForMoveCollision((currentX + 2), (currentY - 1))) && ((gameBoardArray[getWhichTile((currentX + 2), (currentY - 1))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX + 2), (currentY - 1))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX + 2), (currentY - 1))) === false) {
        let possibleMove = getWhichTile((currentX + 2), (currentY - 1))
        possibleMoves.push(possibleMove)
    }
    // right 1 down 2
    if((checkForMoveCollision((currentX + 1), (currentY - 2))) && ((gameBoardArray[getWhichTile((currentX + 1), (currentY - 2))].ownership) != knightColor)) {
        let possibleMove = getWhichTile((currentX + 1), (currentY - 2))
        possibleMoves.push(possibleMove)
    } else if ((checkForMoveCollision((currentX + 1), (currentY - 2))) === false) {
        let possibleMove = getWhichTile((currentX + 1), (currentY - 2))
        possibleMoves.push(possibleMove)
    }


    renderGameMovementBoard()
}

function moveKING(tileInfo) {
    let piecetype = tileInfo.ownershipType
    let pawnColor = tileInfo.ownership
    let currentX = tileInfo.column
    let currentY = tileInfo.row
    console.log(pawnColor, piecetype, currentX, currentY)
}

function moveQUEEN(tileInfo) {
    let piecetype = tileInfo.ownershipType
    let pawnColor = tileInfo.ownership
    let currentX = tileInfo.column
    let currentY = tileInfo.row
    console.log(pawnColor, piecetype, currentX, currentY)
}

function moveBISHOP(tileInfo) {
    let piecetype = tileInfo.ownershipType
    let bishopColor = tileInfo.ownership
    let currentX = tileInfo.column
    let currentY = tileInfo.row
    console.log(bishopColor, piecetype, currentX, currentY)

    possibleMoves = [];

    declareActiveTile(currentX, currentY);
    
    let distN = 8 - currentY;
    let distS = 0 + currentY;
    let distW = 0 + currentX;
    let distE = 8 - currentX;

    // North East Quadrant Movement
    let i = 1

    while(distN > i || distE > i) {
        if((checkForMoveCollision((currentX + i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY + i))].ownership) != bishopColor)) {
            let possibleMove = getWhichTile((currentX + i), (currentY + i))
            possibleMoves.push(possibleMove)
        } else if ((checkForMoveCollision((currentX + i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY + i))].ownership) === bishopColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX + i), (currentY + i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    // North West Quadrant
    i = 1

    while(distN > i || distW > i) {
        if((checkForMoveCollision((currentX - i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY + i))].ownership) !== bishopColor)) {
            let possibleMove = getWhichTile((currentX - i), (currentY + i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX - i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY + i))].ownership) === bishopColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX - i), (currentY + i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    // South East Quadrant

    i = 1

    while(distS > i || distE > i) {
        if((checkForMoveCollision((currentX + i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY - i))].ownership) !== bishopColor)) {
            let possibleMove = getWhichTile((currentX + i), (currentY - i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX + i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY - i))].ownership) === bishopColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX + i), (currentY - i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    // South West Quadrant

    i = 1

    while(distS > i || distW > i) {
        if((checkForMoveCollision((currentX - i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY - i))].ownership) !== bishopColor)) {
            let possibleMove = getWhichTile((currentX - i), (currentY - i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX - i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY - i))].ownership) === bishopColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX - i), (currentY - i))
            possibleMoves.push(possibleMove)
        }
        i++
    }
    
    renderGameMovementBoard()
}

function moveROOK(tileInfo) {
    let piecetype = tileInfo.ownershipType
    let rookColor = tileInfo.ownership
    let currentX = tileInfo.column
    let currentY = tileInfo.row
    console.log(rookColor, piecetype, currentX, currentY)

    possibleMoves = [];

    declareActiveTile(currentX, currentY);

    let distN = 8 - currentY;
    let distS = 0 + currentY;
    let distW = 0 + currentX;
    let distE = 8 - currentX;

    let i = 1
    
    //northern movement

    while(distN >= i) {
        if((checkForMoveCollision(currentX, (currentY + i))) && ((gameBoardArray[getWhichTile(currentX, (currentY + i))].ownership) !== rookColor)) {
            let possibleMove = getWhichTile(currentX, (currentY + i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision(currentX, (currentY + i))) && ((gameBoardArray[getWhichTile(currentX, (currentY + i))].ownership) === rookColor)) {
            break;
        } else {
            let possibleMove = getWhichTile(currentX, (currentY + i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    //southern movement
    i = 1
    while(distS >= i) {
        if((checkForMoveCollision(currentX, (currentY - i))) && ((gameBoardArray[getWhichTile(currentX, (currentY - i))].ownership) !== rookColor)) {
            let possibleMove = getWhichTile(currentX, (currentY + i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision(currentX, (currentY - i))) && ((gameBoardArray[getWhichTile(currentX, (currentY - i))].ownership) === rookColor)) {
            break;
        } else {
            let possibleMove = getWhichTile(currentX, (currentY - i))
            possibleMoves.push(possibleMove)
        }
        i++
    }
    
    //eastern movement
    i = 1
    while(distE >= i) {
        if((checkForMoveCollision((currentX + i), currentY) && ((gameBoardArray[getWhichTile((currentX + i), currentY)].ownership) !== rookColor))) {
            let possibleMove = getWhichTile((currentX + i), currentY)
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX + i), currentY) && ((gameBoardArray[getWhichTile((currentX + i), currentY)].ownership) === rookColor))) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX + i), currentY)
            possibleMoves.push(possibleMove)
        }
        i++
    }
    
    // western movement
    i = 1
    while(distW >= i) {
        if((checkForMoveCollision((currentX - i), currentY) && ((gameBoardArray[getWhichTile((currentX - i), currentY)].ownership) !== rookColor))) {
            let possibleMove = getWhichTile(currentX, (currentY + i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX - i), currentY) && ((gameBoardArray[getWhichTile((currentX - i), currentY)].ownership) === rookColor))) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX - i), currentY)
            possibleMoves.push(possibleMove)
        }
        i++
    }

    renderGameMovementBoard()
}

function checkForMoveCollision(thisX, thisY) {
    let checkForCollision = false

    gameBoardArray.forEach(element => {
        let currentX = element.column;
        let currentY = element.row;

        let ownership = element.ownership;

        if ((currentX === thisX) && (currentY === thisY)) {
            if ((ownership === 'white') || (ownership === 'black')) {
                checkForCollision = true
            }
        }
    });

    return checkForCollision
}

function getWhichTile(thisX, thisY) {

    gameBoardArray.forEach((element, idx) => {
        if ((element.column === thisX) && (element.row === thisY)) {
            thisTile = idx;
        }
    });

    return thisTile
}

function declareActiveTile(thisX, thisY) {

    activeTile = [];

    gameBoardArray.forEach((element, idx) => {
        if ((element.column === thisX) && (element.row === thisY)) {
            thisTile = idx;
        }
    });

    activeTile.push(thisTile)

}

function declareMoveToTile(idx) {

    activeTile = activeTile[0];

    let targetOwnership = '';

    let cachedOwnership = gameBoardArray[activeTile].ownership;
    let cachedOwnershipType = gameBoardArray[activeTile].ownershipType;

    let cachedClaimedOwnership = gameBoardArray[idx].ownership
    let cachedClaimedOwnershipType = gameBoardArray[idx].ownershipType

    gameBoardArray[activeTile].ownership = null;
    gameBoardArray[activeTile].ownershipType = null;

    if((gameBoardArray[idx].ownership === null) && (gameBoardArray[idx].ownershipType === null)) {
        targetOwnership = 'unclaimed tile.'
    } else {
        targetOwnership = `${cachedClaimedOwnership} ${cachedClaimedOwnershipType}!`
    }

    gameBoardArray[idx].ownership = cachedOwnership;
    gameBoardArray[idx].ownershipType = cachedOwnershipType;


    window.alert(`The ${cachedOwnership} ${cachedOwnershipType} has claimed the ${targetOwnership}`)

    renderGameBoard();
}


