import Enemy from "./enemy";
import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";
import Item from "./item";

class Ship extends MovingObject {
    constructor(options){
        options = options || {}
        options.pos =  options.pos || [300, 300];  
        options.radius = Ship.RADIUS
        options.vel = options.vel || [3,0];
        options.color = Ship.COLOR
        super(options)
        this.spriteImage = new Image()
        this.spriteImagesArray = []
        this.type = 1
        this.addSprites();
        // console.log(this.spriteImagesArray)
        console.log(this.spriteImagesArray)
        this.i = 0
        // this.handleShipImage()
    }

    collideWith(otherObject){
        if(otherObject instanceof Item){
            this.game.currency += 10
            console.log(this.game.currency)
            otherObject.remove()
            return true
        }
    return false    
    }
    
    drawShip(ctx){
    if (this.type === 1){
        if(this.i !== 6){
            ctx.drawImage(this.spriteImagesArray[this.i], this.pos[0] - 70,  this.pos[1] - 55, 130, 120)
            this.i++
        }else{
            this.i = 0
            ctx.drawImage(this.spriteImagesArray[this.i], this.pos[0]- 70, this.pos[1] - 55, 130, 120)
            this.i++
        }
    }else if(this.type === 2){
        // this.damage
        // this.i =0
        // this.i = 9
        if (this.i !== 9) {
            ctx.drawImage(this.spriteImagesArray[this.i], this.pos[0] - 70, this.pos[1] - 55, 130, 120)
            this.i++
        } else {
            this.i = 0
            ctx.drawImage(this.spriteImagesArray[this.i], this.pos[0] - 70, this.pos[1] - 55, 130, 120)
            this.i++
        }
    }
    
    }
    // handleShipImage(ctx){
        
    //     console.log(this.spriteImagesArray)
    //     this.spriteImage = new Image()
    //     this.spriteImage.src = "./src/images/ship_lv1.png"
    //     ctx.drawImage(this.spriteImage, this.pos[0] - 45, this.pos[1] - 50, 100, 100)
    // }

    shootBullet(){
        let pos = [this.pos[0] + 20, this.pos[1] - 25]
        let pos2 = [this.pos[0] + 20, this.pos[1] + 37]
        let dmg = 10
        if(this.type === 2 ){
            dmg = 50
             pos = [this.pos[0] , this.pos[1] - 43]
             pos2 = [this.pos[0] , this.pos[1] + 55]
        }
        const relVel = Util.scale(
            Util.dir(this.vel),
            Bullet.SPEED
        );

        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];
        
        const bullet = new Bullet({
            pos: pos,
            vel: bulletVel,
            color: this.color,
            game: this.game,
            damage: dmg
        });

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
    addSprites(){
       if(this.type === 1){
        let spriteImage1 = new Image()
        let spriteImage2 = new Image()
        let spriteImage3 = new Image()
        let spriteImage4 = new Image()
        let spriteImage5 = new Image()
        let spriteImage6 = new Image()
        let spriteImage7 = new Image()

        spriteImage1.src = "./src/images/ship/ship_1_0.png"
        spriteImage2.src = "./src/images/ship/ship_1_1.png"
        spriteImage3.src = "./src/images/ship/ship_1_2.png"
        spriteImage4.src = "./src/images/ship/ship_1_3.png"
        spriteImage5.src = "./src/images/ship/ship_1_4.png"
        spriteImage6.src = "./src/images/ship/ship_1_5.png"
        spriteImage7.src = "./src/images/ship/ship_1_6.png"

        this.spriteImagesArray.push(spriteImage1)
        this.spriteImagesArray.push(spriteImage2)
        this.spriteImagesArray.push(spriteImage3)
        this.spriteImagesArray.push(spriteImage4)
        this.spriteImagesArray.push(spriteImage5)
        this.spriteImagesArray.push(spriteImage6)
        this.spriteImagesArray.push(spriteImage7)
        console.log("here")
        
       }
       
       else if(this.type === 2){
           this.spriteImagesArray = []
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

           spriteImage1.src = "./src/images/ship/ship2/ship_2_0.png"
           spriteImage2.src = "./src/images/ship/ship2/ship_2_1.png"
           spriteImage3.src = "./src/images/ship/ship2/ship_2_2.png"
           spriteImage4.src = "./src/images/ship/ship2/ship_2_3.png"
           spriteImage5.src = "./src/images/ship/ship2/ship_2_4.png"
           spriteImage6.src = "./src/images/ship/ship2/ship_2_5.png"
           spriteImage7.src = "./src/images/ship/ship2/ship_2_6.png"
           spriteImage8.src = "./src/images/ship/ship2/ship_2_7.png"
           spriteImage9.src = "./src/images/ship/ship2/ship_2_8.png"
           spriteImage10.src = "./src/images/ship/ship2/ship_2_9.png"

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
           console.log(this.spriteImagesArray)
       }
 


        // for (let i = 0; i < 7; i++) {
        //     let spriteImage = new Image()
        //     spriteImage.src = "`./src/images/ship/ship_1_${i}.png`"
        //     this.spriteImagesArray.push(spriteImage.src)
        // }
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