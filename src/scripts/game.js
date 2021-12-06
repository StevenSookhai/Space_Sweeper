import Bullet from "./bullet"
import Enemy from "./enemy"
import EnemyBullet from "./enemy_bullet"
import Level from "./level"
import Ship  from "./ship"
import Backgroud from "./background"
// import Level from "./level"
class Game {
    constructor(ctx) {
    this.ctx = ctx
    // console.log("IN GAME CONSTRUCTOR")
    this.enemies = []
    this.items = []
    this.ships = []
    this.bullets = [] 
    this.enemyBullets = []
    this.currentEnemies = [] //only spawn the current enemies 
    this.level = Level.level1
    console.log(this.level)
    this.score = 0
    // this.addEnemies();
    this.spawnEnemies();
    // this.enemyShoots();
    this.maxEnemy = 2 
    this.background = new Image()
    this.x = 0
    this.x2 = 1080 // Used for repeating background
    this.gameSpeed = 10;

    // this.addShip();
    // console.log(this.enemies)
    // this.ctx = ctx
    // console.log(this.ctx)
    }

    // addEnemies(){
    //     // console.log(this.ctx)
    //     // console.log("Adding Enemies")
    //     for(let i = 0; i < 5; i++){
    //         let enemy = new Enemy({ game: this })
    //         this.enemies.push(enemy)
    //     }
    //     console.log(this.enemies)
    //     this.currentEnemies.push(this.enemies.pop())
    //     this.currentEnemies.push(this.enemies.pop())
    //     console.log(this.currentEnemies)
        // console.log("Current Enemies added")
    // }

    spawnEnemies(){
        setInterval(() => {
            const enemy = new Enemy({ game: this })
            this.enemies.push(enemy)
        }, 1000);
    //    this.enemyShoots();
    }

    enemyShoots(){
        setInterval(() => {
            this.enemies.forEach(enemy => {
                enemy.enemyShootBullet();
            })
        
        }, 3000);

    }

    addShip(){
        // console.log("In game addShip")
        const ship = new Ship({game: this})
        // console.log(ship)
        ship.draw(this.ctx)//REMEMBER TO COMMENT THIS BACK IN
        // console.log(ship)
        this.ships.push(ship)
        // console.log(this.ships)
        return ship
    }

    addBullet(bullet){
        this.bullets.push(bullet)
        // console.log(this.bullets)
    }
    // addEnemyBullet(bullet){
    //     this.enemyBullets.push(bullet)
    // }

    randomPos() {
        const x = Game.WIDTH + 100
        const y = Math.random() * (Game.HEIGHT)
        return [x, y]
    }
    
    handleBackground(ctx){
    let background = new Image();
    background.src = this.level.background_src
    // const backgroundMove = new Backgroud(background, this, 0.5, ctx)
    
    // backgroundMove.update()
    // backgroundMove.draw();
        // // console.log(background)
        // // console.log(this.background)
        ctx.drawImage(background, this.x, 0, Game.WIDTH, Game.HEIGHT)
        ctx.drawImage(background, this.x2, 0, Game.WIDTH, Game.HEIGHT)

        if(this.x < -1080 ){
            this.x = 1080 + this.x2 - this.gameSpeed
        }else{
            this.x -= this.gameSpeed
        }
        if (this.x2 < -1080) {
            this.x2 = 1080 + this.x - this.gameSpeed
        } else {
            this.x2 -= this.gameSpeed
        }


        // console.log(this.x)
        // this.x--;
        // let background2 = new Image()
        // background2.src = "./src/images/Stars_Small_2.png"
        // ctx.drawImage(background2, 0, 0, Game.WIDTH, Game.HEIGHT)
        // let background3 = new Image()
        // background3.src = "./src/images/Stars_Small_1.png"
        // ctx.drawImage(background3, 0, 0, Game.WIDTH, Game.HEIGHT)
    }

    // drawShipImage(){

    // }

    draw(ctx){
        // console.log(this.enemies)
        this.enemies.forEach(enemy =>{
            // enemy.draw(ctx)
            enemy.drawEnemy(ctx)
        })
        // console.log(this.enemies)
        // this.currentEnemies.forEach(enemy => {
        //     console.log(this.currentEnemies)
        //     console.log(enemy)
        //     enemy.draw(ctx)
        // })
        // let count = 0
        // setInterval(this.enemies[count], 1000)

        this.ships.forEach(ship => {
            // ship.draw(ctx)
            ship.drawShip(ctx)
        })
        this.bullets.forEach(bullet => {
            bullet.drawBullet(ctx)
        })

        this.enemyBullets.forEach(bullet => {
            bullet.drawBullet(ctx)
        })
        
        
    }
    moveObjects(time){
        // let enemyCount = 0
        //     if(this.maxEnemy > enemyCount){
                this.enemies.forEach(enemy => {
                     enemy.move(time)
                })
        // })

        // this.ships.forEach(ship => {
        //     ship.move(time)
        // })
        // console.log(this.bullets)
        this.bullets.forEach(bullet => {
            bullet.move(time)
        })
    }
    getAllObjects(){ // grab all current objects 
        return [].concat(this.enemies, this.ships, this.bullets)
    }
    checkCollisions(){
       const allObjects = this.getAllObjects();
        for (let i = 0; i < allObjects.length; i++) {
            for (let j = 0; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];

                if (obj1.isCollided(obj2)) {
                    const collision = obj1.collideWith(obj2);
                    if (collision) return;
                }
            }
        }
    }

    outOfRange(pos, object){
        // console.log(pos)
        if (object instanceof Bullet){
            return (pos[0] < 0) || (pos[1] < 0) ||
            (pos[0] > Game.WIDTH) || (pos[1] > Game.HEIGHT);
        }else if(object instanceof Enemy){
            return (pos[0] < 0) || (pos[1] < 0) || (pos[1] > Game.HEIGHT);
            // console.log("This is an enemy")
        }
    }
    remove(object){
        // console.log(object)
        // console.log(object)
        // console.log("In game Remove")
        if(object instanceof Enemy){
            // console.log("deleting Enemy")
            this.enemies.splice(this.enemies.indexOf(object), 1)
        }
        else if (object instanceof Bullet) {
            // console.log("removing bullet")
            // console.log(this.bullets)
            this.bullets.splice(this.bullets.indexOf(object), 1)
        }
        else if (object instanceof EnemyBullet) {
            // console.log("removing Enemy bullet")
            // console.log(this.bullets)
            this.enemyBullets.splice(this.enemyBullets.indexOf(object), 1)
        }

    }
    // enemyCreator(){
    //     const enemy = new Enemy({ game: this })
    //     this.enemies.push(enemy)
    //     return enemy.spawnEnemies.bind(enemy, this)
    // }

    step(delta){
        // if(this.currentEnemies.length === 0 && this.enemies.length > 2 ){
        //     // console.log("infirst ")
        //     while(this.maxEnemy > 0 ){
        //         this.currentEnemies.push(this.enemies.pop())
        //         this.maxEnemy--
        //     }
        // }
        // else if (this.currentEnemies.length === 1){
        //     this.currentEnemies.push(this.enemies.pop())
        //     this.maxEnemy = 2
        // }else{
        //     this.maxEnemy = 2
        // }
        // console.log(this.bullets)
        // console.log(this.enemies)
        // console.log(this.currentEnemies)
        if(this.score === 10){
            this.currentEnemies = []
            this.level = Level.level2
        }
        this.moveObjects(delta);
        this.checkCollisions()
    }
}
Game.HEIGHT = 600;
Game.WIDTH = 1200

export default Game;