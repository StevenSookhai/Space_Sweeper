// import Enemy  from "./enemy";
import MovingObject from "./moving_object";
import Bullet from "./bullet";
import EnemyBullet from "./enemy_bullet";
import Util from "./util";
import BossMissiles from "./boss_missiles";
class Boss extends MovingObject{
    constructor(options){
        options = options || {}
        options.color = Boss.COLOR
        options.radius = Boss.RADIUS
        options.pos = options.pos || options.game.bossSpawnLocation();
        options.vel = [-3, 0]
        super(options)
        // options.game.score 
        this.health = 100000
        this.spriteImage = new Image()
        this.spriteImage.src = "./src/images/boss.png"
        this.spriteImagesArray = []
        this.missileArray = []
        this.addSpritesImages();
        this.addMissile();
        this.states = ["Attacking", "Idle","Ultimate","Ded"]
        this.state = this.states[1]
        this.ultTimer = 0
        this.timeToAttack = 0
        this.shieldUpTimer = 0
        this.i = 0
    }

    drawBoss(ctx) {
        // console.log("In draw En")
        ctx.drawImage(this.spriteImage, this.pos[0] - 130, this.pos[1] - 150, 300, 300)

        if(this.state === this.states[1]){
            if(this.i !==6){
                    ctx.drawImage(this.missileArray[this.i], this.pos[0] - 130, this.pos[1] - 150, 100, 80)
                    this.i++
            }else{
                this.i = 0
                    ctx.drawImage(this.missileArray[this.i], this.pos[0] - 130, this.pos[1] + 150, 100, 80)
            }
            
        }
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

    attack(){
        const relVel = Util.scale(
            Util.dir(this.vel),
            BossMissiles.SPEED
        );

        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];

        const pos = [this.pos[0] - 20, this.pos[1] - 25]
        const bullet = new BossMissiles({
            pos: pos,
            vel: bulletVel,
            color: this.color,
            game: this.game
        });

        const pos2 = [this.pos[0] - 20, this.pos[1] + 25]
        const bullet2 = new BossMissiles({
            pos: pos2,
            vel: bulletVel,
            color: this.color,
            game: this.game
        });

        // console.log(bullet)
        this.game.addEnemyBullet(bullet);
        this.game.addEnemyBullet(bullet2)
    }

    ultimate(){

    }

    idle(){

    }

    dead(){

    }

    update(num){
        this.ultTimer += this.ultTimer % num
            if(this.ultTime === 30 ){
                this.state = this.states[3];
            }
        if(this.state === this.states[1]){
            setInterval(this.attack(), 2000)
        }else if (this.state === this.states[0] ){
            setInterval(this.attack(), 2000)
        }else if(this.states === this.states[2]){
            this.ultimate
        }else{
            this.state = this.states[3]
            dead()
        }
    }

    draw(arr,ctx){
        let i = 0
        ctx.drawImage(arr[i], this.pos[0],this.pos[1], 100, 100)
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

Boss.COLOR = "orange"
Boss.RADIUS = 120;

export default Boss;