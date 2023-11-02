import Ship from "./ship";

const carrier = new Ship(5)
const battleShip = new Ship(4)
const cruiser = new Ship(3)
const submarine = new Ship(3)
const destroyer = new Ship (2)

export const ships = [carrier, battleShip, cruiser, submarine, destroyer]