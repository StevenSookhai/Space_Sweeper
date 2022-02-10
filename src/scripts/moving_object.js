import Util from "./util";

class MovingObject {
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
        this.isWrappable = options.isWrappable

    }

    draw(ctx){
        // console.log(ctx)
        // console.log(this)
        ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.rect(this.pos[0], this.pos[1] , 50, 50)
        // ctx.fill();
        // ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();

    }

    isCollided(otherObject){
        // console.log(otherObject)
        // console.log(this)
        // debugger
        const disBetween = Util.dist(this.pos, otherObject.pos);
        return disBetween < (this.radius + otherObject.radius);
    }
    
    move(timeDelta){
        //ctx.clearRect(this.pos[0], this.pos[1], cw, ch);
        // this.draw(ctx);
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        // console.log(this.game.outOfRange(this.pos))
        // console.log(this)
        if (this.game.outOfRange(this.pos, this)){
            if (this.isWrappable) {
                this.pos = this.game.wrap(this.pos);
            } else {
                this.remove();
            }
        }
    }

    remove(){
        // console.log("reeeeeeeeeeeeeeeeeee") 
        // console.log(this)
        this.game.remove(this)
    }

    
}
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
export default MovingObject;