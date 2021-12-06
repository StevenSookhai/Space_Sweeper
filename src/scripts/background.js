import Game from "./game";
class background {
    constructor(image,game, speedMod, ctx){
        this.ctx = ctx
        this.game = game
        this.image = image
        this.x = 0;
        this.y = 0;
        this.width = 1080;
        this.x2 = this.width;
        this.speedMod = speedMod
        this.speed = this.game.gameSpeed * this.speedMod
    }

    update(){
        // this.speed = this.game.gameSpeed * this.speedMod
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed
        } else {
            this.x -= this.game.gameSpeed
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed
        } else {
            this.x2 -= this.game.gameSpeed
         }
        // this.x = Math.floor(this.x - this.speed)
        // this.x2 = Math.floor(this.x - this.speed)
    }

    draw(){
        // console.log(this.width)
        this.ctx.drawImage(this.image, this.x, this.y, Game.WIDTH,Game.HEIGHT)
        this.ctx.drawImage(this.image, this.x2, this.y, Game.WIDTH,Game.HEIGHT)
    }
}

export default background;