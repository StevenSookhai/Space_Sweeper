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
        this.spriteImagesArray = []
        this.missileArray = []
        this.addSpritesImages();
        this.addMissile();
        this.states = ["Attacking", "Idle","Ultimate","Ded"]

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

    attack1(){

    }

    attack2(){

    }



    update(){

    }

    draw(){

    }

    addSpritesImages(){
        let spriteImage1 = new Image()
        let spriteImage2 = new Image()
        let spriteImage3 = new Image()
        let spriteImage4 = new Image()
        let spriteImage5 = new Image()
        let spriteImage6 = new Image()
        let spriteImage7 = new Image()
        let spriteImage8 = new Image()
        let spriteImage9 = new Image()
        let spriteImage10 = new Image()

        spriteImage1.src = "./src/images/boss_animations/Boss_1.png"
        spriteImage2.src = "./src/images/boss_animations/Boss_2.png"
        spriteImage3.src = "./src/images/boss_animations/Boss_3.png"
        spriteImage4.src = "./src/images/boss_animations/Boss_4.png"
        spriteImage5.src = "./src/images/boss_animations/Boss_5.png"
        spriteImage6.src = "./src/images/boss_animations/Boss_6.png"
        spriteImage7.src = "./src/images/boss_animations/Boss_7.png"
        spriteImage8.src = "./src/images/boss_animations/Boss_8.png"
        // spriteImage9.src = "./src/images/ship/ship2/ship_2_8.png"
        // spriteImage10.src = "./src/images/ship/ship2/ship_2_9.png"

        this.spriteImagesArray.push(spriteImage1)
        this.spriteImagesArray.push(spriteImage2)
        this.spriteImagesArray.push(spriteImage3)
        this.spriteImagesArray.push(spriteImage4)
        this.spriteImagesArray.push(spriteImage5)
        this.spriteImagesArray.push(spriteImage6)
        this.spriteImagesArray.push(spriteImage7)
        this.spriteImagesArray.push(spriteImage8)
        this.spriteImagesArray.push(spriteImage9)
        this.spriteImagesArray.push(spriteImage10)
    }

    addMissile(){
        let spriteImage1 = new Image()
        let spriteImage2 = new Image()
        let spriteImage3 = new Image()
        let spriteImage4 = new Image()
        let spriteImage5 = new Image()
        let spriteImage6 = new Image()


        spriteImage1.src = "./src/images/boss_animations/Missle_000.png"
        spriteImage2.src = "./src/images/boss_animations/Missle_001.png"
        spriteImage3.src = "./src/images/boss_animations/Missle_002.png"
        spriteImage4.src = "./src/images/boss_animations/Missle_003.png"
        spriteImage5.src = "./src/images/boss_animations/Missle_004.png"
        spriteImage6.src = "./src/images/boss_animations/Missle_005.png"

        this.missileArray.push(spriteImage1)
        this.missileArray.push(spriteImage2)
        this.missileArray.push(spriteImage3)
        this.missileArray.push(spriteImage4)
        this.missileArray.push(spriteImage5)
        this.missileArray.push(spriteImage6)

    }
}

Boss.COLOR = "orange"
Boss.RADIUS = 120;

export default Boss;