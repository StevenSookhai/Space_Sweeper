import MovingObject from "./moving_object";

class BossMissiles extends MovingObject {
    constructor(options) {
        options.radius = BossMissiles.RADIUS
        options.vel = [-4, 0]
        super(options)
        // this.SpriteImage = new Image()
        this.missileArray = []
        this.addMissile();
        this.i = 0
        // this.SpriteImage.src = "./src/images/laser1.png"
    }

    draw(ctx) {
        // 
        if(this.i !== 6){
        ctx.drawImage(this.missileArray[this.i], this.pos[0] - 1, this.pos[1] - 4, 100, 100)
        }else{
            this.i = 0
            ctx.drawImage(this.missileArray[this.i], this.pos[0] - 1, this.pos[1] - 4, 100, 100)
        }
    }
    collideWith() {

    }
    update() {

    }

    addMissile() {
        let spriteImage1 = new Image()
        let spriteImage2 = new Image()
        let spriteImage3 = new Image()
        let spriteImage4 = new Image()
        let spriteImage5 = new Image()
        let spriteImage6 = new Image()


        spriteImage1.src = "./src/images/boss_animations/Missile_000.png"
        spriteImage2.src = "./src/images/boss_animations/Missile_001.png"
        spriteImage3.src = "./src/images/boss_animations/Missile_002.png"
        spriteImage4.src = "./src/images/boss_animations/Missile_003.png"
        spriteImage5.src = "./src/images/boss_animations/Missile_004.png"
        spriteImage6.src = "./src/images/boss_animations/Missile_005.png"

        this.missileArray.push(spriteImage1)
        this.missileArray.push(spriteImage2)
        this.missileArray.push(spriteImage3)
        this.missileArray.push(spriteImage4)
        this.missileArray.push(spriteImage5)
        this.missileArray.push(spriteImage6)

    }

}
BossMissiles.RADIUS = 1;
BossMissiles.SPEED = 50;
export default BossMissiles;