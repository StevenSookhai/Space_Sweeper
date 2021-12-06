import Bullet  from "./bullet";
import Enemy from "./enemy";

class EnemyBullet extends Bullet{
    constructor(options) {
        options.radius = Bullet.RADIUS
        super(options)
        this.SpriteImage = new Image()
        this.SpriteImage.src = "./src/images/laser1.png"
    }

    drawBullet(ctx) {
        ctx.drawImage(this.SpriteImage, this.pos[0] - 1, this.pos[1] - 4, 30, 5)
    }
    collideWith() {

    }

}
EnemyBullet.RADIUS = 1;
EnemyBullet.SPEED = 10;
export default EnemyBullet;