import Ship from "./ship"
import { validate } from "./valid"

class GameBoard{
    constructor(){
        this.boardSize = 10
        this.board = this.createBoard()
    }

    createBoard(){
        const board = new Array(this.boardSize)
        for (let i = 0; i < this.boardSize; i++){
            board[i] = new Array(this.boardSize)
            for (let j = 0; j < this.boardSize; j++){
                board[i][j] ={
                    ship: false,
                    hit: false
                }
            }
        }
        return board
    }

    placePiece(lat, long, ship){ 
        if(!validate(lat, long, ship, this.board)){
            return 'Make a valid selection'
        }
        for(let i = lat; i < lat+ship.length; i++){
            if(this.board[i][long].ship === false){
            this.board[i][long].ship = ship
        }
    }
        return this.board
        
    }

    receiveAttack(lat, long){
        const missle = this.board[lat][long]
        if(missle.ship){
            missle.hit = true
            return missle.ship.attack()
        }
        missle.hit = 'miss'
        return 'Miss'
    }
}

