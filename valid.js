export function ifLegal(lat, long, ship, board){
    let i = lat

    while (i < lat + ship.length){
        if(board[i] === undefined || board[i][long].ship !== false){
            return false
        }
        i++
    }
    return true
}