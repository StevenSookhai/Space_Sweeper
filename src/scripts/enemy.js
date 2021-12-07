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

    collideWith(otherObject) {
        // console.log(otherObject)
        if (otherObject instanceof Bullet) {
            let shotImage = new Image();
            shotImage.src = "./src/images/enemy2.png"
            this.game.ctx.drawImage(shotImage,otherObject.pos[0], otherObject.pos[1], 20,20)
            if(this.game.level === Level.level2){
                
                if(this.health > 0){
                    this.health -= otherObject.damage;
                    otherObject.remove()
                    return true;
                }else{
                    console.log(this.health)
                    console.log("en bull collid 1st")
                    this.game.score += 1
                    console.log(this.game.score)
                    this.remove()
                    otherObject.remove()
                    return true
                }
            } else if (this.game.level !== Level.level2){
            this.game.score += 1 
            console.log(this.game.score)
            this.remove()
            otherObject.remove()
            return true
            }
        }
        // }else if (otherObject instanceof Enemy){
        //     return false
        // }
        else if (otherObject instanceof Ship){
            this.remove()
            return true
        }
        return false
    }

    enemyShootBullet() {
        const relVel = Util.scale(
            Util.dir([3]),
            EnemyBullet.SPEED
        );

        const bulletVel = [
            relVel[0] + 3, relVel[1] + this.vel[1]
        ];
        
        const pos = [this.pos[0] - 20, this.pos[1] - 25]
        const bullet = new EnemyBullet ({
            pos: pos,
            vel: bulletVel,
            color: this.color,
            game: this.game
        });

        const pos2 = [this.pos[0] - 20, this.pos[1] + 25]
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

    

}

Enemy.COLOR = "green";
Enemy.RADIUS = 40;
export default Enemy;