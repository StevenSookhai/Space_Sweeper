import Enemy from "./enemy";
import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";

class Ship extends MovingObject {
    constructor(options){
        options = options || {}
        options.pos =  options.pos || [300, 300];  
        options.radius = Ship.RADIUS
        options.vel = options.vel || [3,0];
        options.color = Ship.COLOR
        super(options)
        this.spriteImage = new Image()
        // this.handleShipImage()
    }

    collideWith(otherObject){
    //     if(otherObject instanceof Enemy){
    //         otherObject.remove()
    //         return true
    //     }
    // return false    
    }
    
    handleShipImage(ctx){
        this.spriteImage = new Image()
        this.spriteImage.src = "./src/images/ship_lv1.png"
        ctx.drawImage(this.spriteImage, this.pos[0] - 45, this.pos[1] - 50, 100, 100)
    }

    shootBullet(){
        const relVel = Util.scale(
            Util.dir(this.vel),
            Bullet.SPEED
        );

        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];
        const pos = [this.pos[0] + 20, this.pos[1] - 25]
        const bullet = new Bullet({
            pos: pos,
            vel: bulletVel,
            color: this.color,
            game: this.game
        });

        const pos2= [this.pos[0] + 20, this.pos[1] + 25]
        const bullet2 = new Bullet({
            pos: pos2,
            vel: bulletVel,
            color: this.color,
            game: this.game
        });
        
        // console.log(bullet)
        this.game.addBullet(bullet);
        this.game.addBullet(bullet2)
        
    }

    moveShip(vel){
        
        console.log("uhhh")
        this.pos[0] += vel[0];
        this.pos[1] += vel[1];
    }

    // collideWith(){

    // }
}


export default Ship;
Ship.RADIUS = 50;
Ship.COLOR = "gold";