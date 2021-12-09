import MovingObject from "./moving_object";
class Item extends MovingObject{
    constructor(options){
        options = options || {}
        options.radius = Item.RADIUS
        options.color = Item.COLOR
        // options.game = options.game;
        options.pos = options.pos || options.game.itemRandomPos();
        super(options)
        this.spriteImage = new Image()
        this.spriteImage.src = "./src/images/coins/Coinspritesheet-2.png"
        this.spriteImagesArray = []
        this.addSprites();
        this.itemFrame = 0;
        this.spriteWidth  = 567;
        this.spriteHeight = 567;
        this.frame = 0;
        this.maxFrame = 8;
        this.timeSinceSpin = 0
        this.spindInterval = 50
        this.collectSound = new Audio("./src/sound/coinsound.wav")
    }

    // drawItem(ctx, num){
    // //   console.log(num)
    //     // num -  16
    //   this.itemFrame = num % this.spriteImagesArray.length
    // //    this.spriteImage.src = "./src/images/coins/Gold_21.png"
    //     if (this.itemFrame !== 9) {
    //         ctx.drawImage(this.spriteImagesArray[this.itemFrame], this.pos[0] - 20, this.pos[1] - 20, 40, 40)
    //         this.itemFrame++
    //     } else {
    //         this.itemFrame = 0
    //         ctx.drawImage(this.spriteImagesArray[this.itemFrame], this.pos[0] - 20, this.pos[1] - 20, 40, 40)
    //         this.itemFrame++
    //     }
    // }

    drawCoin(ctx, delta){
        this.timeSinceSpin += delta
        if(this.timeSinceSpin > this.spindInterval){
            if(this.frame > this.maxFrame) this.frame = 0
            else this.frame++
            this.timeSinceSpin = 0;
        }
        ctx.drawImage(this.spriteImagesArray[this.frame], this.pos[0] - 20, this.pos[1] - 20, 40, 40)
        // ctx.drawImage(this.spriteImage,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight, this.pos[0] - 20, this.pos[1] - 20, 40, 40)
    }
    collideWith() {

    }

    addSprites() {
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

        spriteImage1.src = "./src/images/coins/Gold_21.png"
        spriteImage2.src = "./src/images/coins/Gold_22.png"
        spriteImage3.src = "./src/images/coins/Gold_23.png"
        spriteImage4.src = "./src/images/coins/Gold_24.png"
        spriteImage5.src = "./src/images/coins/Gold_25.png"
        spriteImage6.src = "./src/images/coins/Gold_26.png"
        spriteImage7.src = "./src/images/coins/Gold_27.png"
        spriteImage8.src = "./src/images/coins/Gold_28.png"
        spriteImage9.src = "./src/images/coins/Gold_29.png"
        spriteImage10.src = "./src/images/coins/Gold_30.png"


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

        // for (let i = 0; i < 7; i++) {
        //     let spriteImage = new Image()
        //     spriteImage.src = "`./src/images/ship/ship_1_${i}.png`"
        //     this.spriteImagesArray.push(spriteImage.src)
        // }
    }
}
Item.COLOR = "pink"
Item.RADIUS = 15
export default Item;