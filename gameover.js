const Ship = require('./ship')

const carrier = new Ship(5)
const battleShip = new Ship(4)
const cruiser = new Ship(3)
const submarine = new Ship(3)
const destroyer = new Ship(2)



function gameOver(){
    let ship = [carrier, battleShip, cruiser, submarine, destroyer]
    const alive = ship.every(element => element.isSunk() == true)
    if(alive){
        return true
    }
    return false
}