import MovingObject from "./moving_object";
import Game from "./game";
import Bullet from "./bullet";
import Ship from "./ship";
import Util from "./util";
import EnemyBullet from "./enemy_bullet";
import Level from "./level";
class Enemy extends MovingObject{
    constructor(options) {
        // this.ctx = options.ctx
        options = options || {}
        options.color = Enemy.COLOR
        options.radius = Enemy.RADIUS
        options.pos = options.pos || options.game.randomPos();
        options.vel = [-3,0]
        super(options)
        this.health = 100
        this.spriteImage = new Image ()
        this.spriteImage.src = this.game.level.enemy_type
        this.explosionArr = []
        this.addExplosions();
        this.i = 0
        this.notDead = false
        this.deadSound = new Audio("./src/sound/expsound.wav")
        this.shootSound = new Audio("./src/sound/lasershot.wav")
        // this.canvasWidth = canvasWidth
        // this.canvasHeight = canvasHeight
        // this.y = Math.random() * h;
        //  console.log(w)
        // this.pos = [this.x, this.y];
        // super({ pos: this.pos, vel: [-5,0], radius: 5, color: "green" });
        // this.pos = options.pos;
        // this.vel = options.vel;
        // this.radius = options.radius;
        // this.color = options.color;
    }
    drawEnemy(ctx) {
        // console.log("In draw En")
        ctx.drawImage(this.spriteImage, this.pos[0] - 50, this.pos[1] - 50 , 100, 100)
    }
    update(){
        if(this.notDead){
            this.dead()
        }

    }
    collideWith(otherObject) {
        // this.shootSound.play();
        // console.log(otherObject)
        if (otherObject instanceof Bullet) {
            // let shotImage = new Image();
            // shotImage.src = "./src/images/enemy2.png"
            // this.game.ctx.drawImage(shotImage,otherObject.pos[0], otherObject.pos[1], 20,20)
            if(this.game.level === Level.level2){
                
                if(this.health > 0){
                    this.health -= otherObject.damage;
                    otherObject.remove()
                    return true;
                }else{
                    this.deadSound.play()
                    // console.log(this.health)
                    // console.log("en bull collid 1st")
                    this.game.score += 1
                    // console.log(this.game.score)
                    // this.game.animations.push(this.dead())
                //     this.game.enemyDead = true
                // this.notDead = true
                    this.dead(this.game.currentFrames % 16)
                    this.remove()
                    otherObject.remove()
                    return true
                }
            } else if (this.game.level !== Level.level2){
            this.game.score += 1 
            this.dead(this.game.currentFrames % 16);
            // console.log(this.game.score)
                this.deadSound.play()
            this.remove()
            otherObject.remove()
            return true
            }
        }
        // }else if (otherObject instanceof Enemy){
        //     return false
        // }
        // else if (otherObject instanceof Ship){
        //     otherObject.health -= 10
        //     return true
        // }
        return false
    }

    enemyShootBullet() {
        
        const relVel = Util.scale(
            Util.dir(this.vel),
            EnemyBullet.SPEED
        );

        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];
        
        const pos = [this.pos[0] - 20, this.pos[1] - 40]
        const bullet = new EnemyBullet ({
            pos: pos,
            vel: bulletVel,
            color: this.color,
            game: this.game
        });

        const pos2 = [this.pos[0] - 20, this.pos[1] + 40]
        const bullet2 = new EnemyBullet({
            pos: pos2,
            vel: bulletVel,
            color: this.color,
            game: this.game
        });

        // console.log(bullet)
        this.game.addEnemyBullet(bullet);
        this.game.addEnemyBullet(bullet2)

    }

    dead(num){
        console.log("In enem dead")
        // this.explosionArr.forEach(img => {
        //     this.game.ctx.drawImage(img, this.pos[0] - 50,this.pos[1] - 50, 100, 100)
        // })
            // this.game.ctx.drawImage(this.explosionArr[0], this.pos[0],this.pos[1], 100, 100)
            num /2
            this.i = num % this.explosionArr.length
            if( this.i < 6){
                

                    console.log(this.i)
                    this.game.ctx.drawImage(this.explosionArr[this.i], this.pos[0], this.pos[1], 100, 100)
                
            this.i++}else{
                this.i = 0
            }
    }

    addExplosions(){
        const explosion1 = new Image()
        const explosion2 = new Image()
        const explosion3 = new Image()
        const explosion4 = new Image()
        const explosion5 = new Image()
        const explosion6 = new Image()

        explosion1.src = "./src/images/enemy_animations/exp1.png"
        explosion2.src = "./src/images/enemy_animations/exp2.png"
        explosion3.src = "./src/images/enemy_animations/exp3.png"
        explosion4.src = "./src/images/enemy_animations/exp4.png"
        explosion5.src = "./src/images/enemy_animations/exp5.png"
        explosion6.src = "./src/images/enemy_animations/exp6.png"

        this.explosionArr.push(explosion1)
        this.explosionArr.push(explosion2)
        this.explosionArr.push(explosion3)
        this.explosionArr.push(explosion4)
        this.explosionArr.push(explosion5)
        this.explosionArr.push(explosion6)

    }   
    

}

EnemyBullet.SPEED = 15
Enemy.COLOR = "green";
Enemy.RADIUS = 40;
export default Enemy;