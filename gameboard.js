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
}