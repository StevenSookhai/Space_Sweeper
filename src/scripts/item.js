
class Item {
    constructor(options){
        options = options || {}
        this.game = options.game;
        this.pos = options.pos || this.game.itemRandomPos();
        this.spriteImage = new Image()
    }

    

    draw(ctx){
    //    console.log("drawing item")
       this.spriteImage.src = "./src/images/Missile_1_Flying_000.png"
       ctx.drawImage(this.spriteImage, this.pos[0], this.pos[1], 50, 50)
    }
}
export default Item;