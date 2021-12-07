// import Enemy  from "./enemy";
import MovingObject from "./moving_object";
import Bullet from "./bullet";

class Boss extends MovingObject{
    constructor(options){
        options = options || {}
        options.color = Boss.COLOR
        options.radius = Boss.RADIUS
        options.pos = options.pos || options.game.bossSpawnLocation();
        options.vel = [-3, 0]
        super(options)
        // options.game.score 
        this.health = 1000
        this.spriteImage = new Image()
        this.spriteImage.src = "./src/images/boss.png"

    }

    drawBoss(ctx) {
        // console.log("In draw En")
        ctx.drawImage(this.spriteImage, this.pos[0] - 130, this.pos[1] - 150, 300, 300)
    }

    collideWith(otherObject) {
        // console.log(otherObject)
        if (otherObject instanceof Bullet) {
            // let shotImage = new Image();
            // shotImage.src = "./src/images/enemy2.png"
            // this.game.ctx.drawImage(shotImage, otherObject.pos[0], otherObject.pos[1], 20, 20)
            // if (this.game.level === Level.level2) {
                if (this.health > 0) {
                    console.log(this.health)
                    console.log("Hitting Boss")
                    this.health -= otherObject.damage;
                    otherObject.remove()
                    return true;
                } else {
                    // console.log(this.health)
                    // console.log("en bull collid 1st")
                    console.log("in boss else")
                    this.game.score += 1
                    // console.log(this.game.score)
                    this.remove()
                    otherObject.remove()
                    return true
                }
            // } else if (this.game.level !== Level.level2) {
            //     this.game.score += 1
            //     console.log(this.game.score)
            //     this.remove()
            //     otherObject.remove()
            //     return true
            // }
        }
    return false
    }
}

Boss.COLOR = "orange"
Boss.RADIUS = 120;

export default Boss;