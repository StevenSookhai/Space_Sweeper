class GameView{
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        // this.game.draw(this.ctx) // please dont forget to remove else you will be staring at your screen for like an hour questioning life
        this.ship = this.game.addShip();
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
    start(){
    this.handleKeyEvents();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
    const timeDelta = time - this.lastTime;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.game.step(timeDelta);
    this.game.handleBackground(this.ctx);
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
}
}
GameView.MOVES = {
    w: [0,-50],
    a: [-50,0],
    s: [0,50],
    d: [50,0]
};

export default GameView;