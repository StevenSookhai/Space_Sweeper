import Bullet  from "./bullet";
import Enemy from "./enemy";
import MovingObject from "./moving_object";

class EnemyBullet extends MovingObject{
    constructor(options) {
        options.radius = EnemyBullet.RADIUS
        options.vel = [-4,0]
        super(options)
        this.SpriteImage = new Image()
        this.SpriteImage.src = "./src/images/laser1.png"
    }

    draw(ctx) {
        console.log("drawing")
        ctx.drawImage(this.SpriteImage, this.pos[0] - 1, this.pos[1] - 4, 30, 5)
    }
    collideWith() {

    }
    update(){

    }

}
EnemyBullet.RADIUS = 1;
EnemyBullet.SPEED = 50;
export default EnemyBullet;