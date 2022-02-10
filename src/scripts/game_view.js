class GameView{
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        // this.game.draw(this.ctx) // please dont forget to remove else you will be staring at your screen for like an hour questioning life
        this.ship = this.game.addShip();
        this.isPaused = false;
        this.currentAnimationFrameID = 0
        // console.log(this.game.addShip)
        // this.handleKeyEvents();
    }
    handleKeyEvents(){
        const ship = this.ship;
        Object.keys(GameView.MOVES).forEach(k =>{
            const move = GameView.MOVES[k];
            // console.log(move)
            key(k, () => {ship.moveShip(move)})
            key("space", () => {ship.shootBullet()})
        })
        
    }

    // pause(){
    //     if(!this.isPaused){
    //     cancelAnimationFrame(this.currentAnimationFrameID)
    //         this.isPaused = true
    //      }
    //      else{
    //          this.isPaused = false
    //         requestAnimationFrame(this.animate.bind(this), this.currentAnimationFrameID)
    //         this.animate()
    //     }
    // }
    handlePause(){
        document.addEventListener("keydown", (e) => {
            if (e.code === "KeyP") {
                // gameView.pause()
                this.game.togglePaused()
                console.log("p pressed")
            }
        })
    }
    gameOver(){
        if (this.game.gameOver){
            this.ctx.rect(0, 0, 1200, 900)
            this.ctx.fillStyle = "rgba(0,0,0,0.5)"
            this.ctx.fill();

            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "gold"
            this.ctx.textAlign = "center";
            this.ctx.fillText("Gameover", 1200, 900)
            this.start()
            // this.game.gameOver = false;
            // cancelAnimationFrame(this.currentAnimationFrameID)
        }
    }
    start(){
    this.handleKeyEvents();
    this.game.gameOver = false
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
    const timeDelta = time - this.lastTime;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.game.step(timeDelta);
    this.game.handleBackground(this.ctx);
    if (!this.isPaused) this.game.draw(this.ctx, this.currentAnimationFrameID);
    else this.isPaused = false
    this.lastTime = time;
    // this.gameOver();
    // this.handlePause()
    // console.log(this.currentAnimationFrameID);
    if(!this.game.gameOver){
        // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.currentAnimationFrameID = requestAnimationFrame(this.animate.bind(this));
    }
    // requestAnimationFrame(this.animate.bind(this))
}
}
GameView.MOVES = {
    w: [0,-50],
    a: [-50,0],
    s: [0,50],
    d: [50,0]
};

export default GameView;