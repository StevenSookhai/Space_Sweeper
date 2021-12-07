import MovingObject from "./moving_object";

class Bullet extends MovingObject{
    constructor(options){
        options.radius = Bullet.RADIUS
        super(options)
        this.damage = options.damage || 10;
        this.SpriteImage = new Image()
        this.SpriteImage.src = "./src/images/laser1.png"
    }

    drawBullet(ctx){
        ctx.drawImage(this.SpriteImage, this.pos[0] - 1, this.pos[1] -4, 30, 5)
    }
    collideWith() {

    }

}

Bullet.RADIUS = 1;
Bullet.SPEED = 10; 

export default Bullet;