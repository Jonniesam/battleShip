class Ship{
    constructor(length){
        this.length = length
        this.life = length
    }
    attack(){
        if(this.life > 1){
            this.life--
            return 'Hit'
        }
        this.life--
        return 'Sunk'
    }
    isSunk(){
        if(this.life <= 0){
            return true
        }
        return false
    }
}

module.exports = Ship