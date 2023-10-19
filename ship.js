class Ship{
    constructor(length){
        this.length = length
        this.life = length
    }
    attack(){
        this.life--
        return 'Hit'
    }
    isSunk(){
        if(this.life > 0){
            return false
        }
        return true
    }
}

module.exports = Ship