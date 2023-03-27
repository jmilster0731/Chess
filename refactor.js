function moveQUEEN(tileInfo) {
    let piecetype = tileInfo.ownershipType
    let queenColor = tileInfo.ownership
    let currentX = tileInfo.column
    let currentY = tileInfo.row
    console.log(queenColor, piecetype, currentX, currentY)


    possibleMoves = [];

    declareActiveTile(currentX, currentY);

    let distN = 8 - currentY;
    let distS = 0 + currentY;
    let distW = 0 + currentX;
    let distE = 8 - currentX;

    // North East Quadrant Movement
    let i = 1

    while (distN > i || distE > i) {
        if ((checkForMoveCollision((currentX + i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY + i))].ownership) !== queenColor)) {
            let possibleMove = getWhichTile((currentX + i), (currentY + i))
            possibleMoves.push(possibleMove)
        } else if ((checkForMoveCollision((currentX + i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY + i))].ownership) === queenColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX + i), (currentY + i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    // North West Quadrant
    i = 1

    while (distN > i || distW > i) {
        if ((checkForMoveCollision((currentX - i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY + i))].ownership) !== queenColor)) {
            let possibleMove = getWhichTile((currentX - i), (currentY + i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX - i), (currentY + i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY + i))].ownership) === queenColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX - i), (currentY + i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    // South East Quadrant

    i = 1

    while (distS > i || distE > i) {
        if ((checkForMoveCollision((currentX + i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY - i))].ownership) !== queenColor)) {
            let possibleMove = getWhichTile((currentX + i), (currentY - i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX + i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX + i), (currentY - i))].ownership) === queenColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX + i), (currentY - i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    // South West Quadrant

    i = 1

    while (distS > i || distW > i) {
        if ((checkForMoveCollision((currentX - i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY - i))].ownership) !== queenColor)) {
            let possibleMove = getWhichTile((currentX - i), (currentY - i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX - i), (currentY - i))) && ((gameBoardArray[getWhichTile((currentX - i), (currentY - i))].ownership) === queenColor)) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX - i), (currentY - i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    //northern movement

    while (distN >= i) {
        if ((checkForMoveCollision(currentX, (currentY + i))) && ((gameBoardArray[getWhichTile(currentX, (currentY + i))].ownership) !== queenColor)) {
            let possibleMove = getWhichTile(currentX, (currentY + i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision(currentX, (currentY + i))) && ((gameBoardArray[getWhichTile(currentX, (currentY + i))].ownership) === queenColor)) {
            break;
        } else {
            let possibleMove = getWhichTile(currentX, (currentY + i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    //southern movement
    i = 1
    while (distS >= i) {
        if ((checkForMoveCollision(currentX, (currentY - i))) && ((gameBoardArray[getWhichTile(currentX, (currentY - i))].ownership) !== queenColor)) {
            let possibleMove = getWhichTile(currentX, (currentY + i))
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision(currentX, (currentY - i))) && ((gameBoardArray[getWhichTile(currentX, (currentY - i))].ownership) === queenColor)) {
            break;
        } else {
            let possibleMove = getWhichTile(currentX, (currentY - i))
            possibleMoves.push(possibleMove)
        }
        i++
    }

    //eastern movement
    i = 1
    while (distE >= i) {
        if ((checkForMoveCollision((currentX + i), currentY) && ((gameBoardArray[getWhichTile((currentX + i), currentY)].ownership) !== queenColor))) {
            let possibleMove = getWhichTile((currentX + i), currentY)
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX + i), currentY) && ((gameBoardArray[getWhichTile((currentX + i), currentY)].ownership) === queenColor))) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX + i), currentY)
            possibleMoves.push(possibleMove)
        }
        i++
    }

    // western movement
    i = 1
    while (distW >= i) {
        if ((checkForMoveCollision((currentX - i), currentY) && ((gameBoardArray[getWhichTile((currentX - i), currentY)].ownership) !== queenColor))) {
            let possibleMove = getWhichTile((currentX - i), currentY)
            possibleMoves.push(possibleMove)
            break;
        } else if ((checkForMoveCollision((currentX - i), currentY) && ((gameBoardArray[getWhichTile((currentX - i), currentY)].ownership) === queenColor))) {
            break;
        } else {
            let possibleMove = getWhichTile((currentX - i), currentY)
            possibleMoves.push(possibleMove)
        }
        i++
    }

    renderGameMovementBoard()
}