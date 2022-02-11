import Bullet from "./bullet"
import Enemy from "./enemy"
import EnemyBullet from "./enemy_bullet"
import Level from "./level"
import Ship  from "./ship"
import Backgroud from "./background"
import Item from "./item"
import Boss  from "./boss"
import Util from "./util";
import BossMissiles from "./boss_missiles"


class Game {
    constructor(ctx) {
    this.ctx = ctx
    this.enemies = []
    this.items = []
    this.ships = []
    this.bullets = []
    this.bossMissles = [] 
    this.enemyBullets = []
    this.currentEnemies = [] //only spawn the current enemies 
    this.level = Level.level1
    this.score = 0
    this.enemiesTimer = this.spawnEnemies();
    this.spawnItemsTimer = this.spawnItems();
    this.enemiesShootTimer = this.enemyShoots();
    this.maxEnemy = 2 
    this.background = new Image()
    this.x = 0
    this.x2 = 1080 // Used for repeating background
    this.gameSpeed = 10;
    this.currency = 0
    this.bossSpawned = false;
    this.bossArr = []
    this.currentFrames = 0
    this.framesDrawn = 0
    this.deltaTime = 0
    this.explosionArr = []
    this.addExplosions();
    this.enemyDead = false;
    this.bossTimeToAttack = 0;
    this.bossUseUlt = false
    this.isPaused = false
    this.gameOver = false
    }

    togglePaused(){
        if (this.isPaused){
            this.isPaused = false
            this.spawnItemsTimer = this.spawnItems()
            this.enemyShootsTimer = this.enemyShoots();
            this.enemiesTimer = this.spawnEnemies();
        }else{
            this.isPaused = true
            clearInterval(this.spawnItemsTimer)
            clearInterval(this.enemiesTimer)
            clearInterval(this.enemiesShootTimer)
        }
    }

    gameOver() {
        if (this.gameOver) {
            this.gameOver = false
            this.spawnItemsTimer = this.spawnItems()
            this.enemyShootsTimer = this.enemyShoots();
            this.enemiesTimer = this.spawnEnemies();
        } else {
            this.gameOver = true
            clearInterval(this.spawnItemsTimer)
            clearInterval(this.enemiesTimer)
            clearInterval(this.enemiesShootTimer)
        }
    }
    spawnEnemies(){
        const timerID = setInterval(() => {
            const enemy = new Enemy({ game: this})
            this.enemies.push(enemy)
        }, 1000);
        return timerID
    }
    
    spawnBoss(){
        const boss = new Boss({game: this})
        this.bossArr.push(boss)
        this.bossUltTimer()
    }
    bossUltTimer(){
        setInterval( () => {
            this.bossTimeToAttack++
        }, 1000)
    }

    spawnItems() {
        const timerID = setInterval(() => {
            const item = new Item({ game: this })
            this.items.push(item)
        }, 3000);
        return timerID
    }

    enemyShoots(){
        const timerID = setInterval(() => {
            this.enemies.forEach(enemy => {
                enemy.enemyShootBullet();
            })
        
        }, 3000);
        return timerID
    }

    bossShoots() {
        setInterval(() => {
            this.bossArr.forEach(enemy => {
                enemy.attack();
            })

        }, 3000);

    }
    addShip(){
        const ship = new Ship({game: this})
        ship.draw(this.ctx)//REMEMBER TO COMMENT THIS BACK IN
        this.ships.push(ship)
        return ship
    }

    addBullet(bullet){
        this.bullets.push(bullet)
    }
    addEnemyBullet(bullet){
        this.enemyBullets.push(bullet)
    }
    addBossBullet(bullet){
        this.bossMissles.push(bullet)
    }

    randomPos() {
        const x = Game.WIDTH + 100
        const y = (Math.random() * (Game.HEIGHT + 100) + 50 ) 
        return [x, y]
    }

    itemRandomPos() {
        const x = Math.random() * (Game.WIDTH - 200)
        const y = Math.random() * (Game.HEIGHT - 200)
        return [x, y]
    }

    bossSpawnLocation() {
        const x = Game.WIDTH + 200
        const y = (Game.HEIGHT / 2) - 30
        return [x, y]
    }
    
    handleBackground(ctx){
    let background = new Image();
    background.src = this.level.background_src
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
    }

    playExplosion(pos, num) {
        let i = 0
        num / 2
        i = num % this.explosionArr.length
        if (i < 6) {
            this.ctx.drawImage(this.explosionArr[i], pos[0], pos[1], 100, 100)

            i++
        } else {
            i = 0
        }
    }

    // handleEnemiesProjecties(){
    //     for (let i = 0; i < this.enemyBullets.length; i++) {
    //         console.log(this.enemyBullets[i])
    //         this.enemyBullets[i].update();
    //         this.enemyBullets[i].draw(this.ctx);
    // }
    // }

    draw(ctx, animateID){
        // if (func){
        //     func()
        //     return
        // }

       
        
       
        this.enemies.forEach(enemy =>{
            // console.log(this.enemyDead)
            enemy.drawEnemy(this.ctx)
            // enemy.dead(this.currentFrames % 16)
            // if(this.enemyDead){
            //     // enemy.dead(this.currentFrames % 16){
            //         this.ctx.drawImage(this.playExplosion(), enemy.pos[0], enemy.pos[1], 50,50)
            //         this.enemyDead = false
            //     }
            // }
        })
        // if(this.bossUseUlt){
        //     this.bossArr[0].ultimate()
        // }
        // if(this.animations.length > 0){
        //     this.animations.forEach(fn => {
        //         fn.call(this.deltaTime)
        //     })
        // }

        this.items.forEach(item => {

            item.drawCoin(this.ctx, this.currentFrames % 16)
        })
        this.ships.forEach(ship => {
            // ship.draw(this.ctx)
            ship.drawShip(this.ctx)
        })
        this.bullets.forEach(bullet => {
            bullet.drawBullet(this.ctx)
        })
        this.bossMissles.forEach(bullet => {
            bullet.draw(this.ctx)
        })

        this.enemyBullets.forEach(bullet => {
            // if(this.currentFrames % 30 ===0){
                 bullet.draw(ctx)
            // }
            // if(this.bossSpawned){
            //     this.bossArr[0].drawBoss(this.ctx)
            // }
        })
        this.bossArr.forEach(boss => {
            boss.drawBoss(this.ctx)// add draw to boss
        })

        if (!this.gameOver) {
            ctx.font = "24px Arial";
            ctx.fillStyle = "gold";
            ctx.textAlign = "center";
            ctx.fillText(`Score: ${this.score}`, 50, 25);
            ctx.fillText(`Coins: ${this.currency}`, 50, 50);
            ctx.fillText(`Health: ${this.ships[0].health }`, Game.WIDTH - 75, 25);
            // console.log(this.level)
            ctx.fillText(`Level: ${this.level.level}`, Game.WIDTH - 75, 50);
        }
        if (this.isPaused) {
            ctx.rect(0, 0, Game.WIDTH, Game.HEIGHT)
            ctx.fillStyle = "rgba(0,0,0,0.5)"
            ctx.fill();

            ctx.font = "30px sans-serif";
            ctx.fillStyle = "gold"
            ctx.textAlign = "center";
            ctx.fillText("Paused", Game.WIDTH / 2, Game.HEIGHT / 2)
        }
        if (this.gameOver && this.ships[0].health === 0) {
            ctx.rect(0, 0, Game.WIDTH, Game.HEIGHT)
            ctx.fillStyle = "rgba(0,0,0,1)"
            ctx.fill();

            ctx.font = "30px sans-serif";
            ctx.fillStyle = "gold"
            ctx.textAlign = "center";
            ctx.fillText("Game Over, You Lose!, Press Q to Restart", Game.WIDTH / 2, Game.HEIGHT / 2)
            // cancelAnimationFrame(animateID % 16)
        }

        if (this.gameOver && this.ships[0].health !== 0) {
            ctx.rect(0, 0, Game.WIDTH, Game.HEIGHT)
            ctx.fillStyle = "rgba(0,0,0,1)"
            ctx.fill();

            ctx.font = "30px sans-serif";
            ctx.fillStyle = "gold"
            ctx.textAlign = "center";
            ctx.fillText("Game Over, You Won!, Press Q to Play Again!", Game.WIDTH / 2, Game.HEIGHT / 2)
            // cancelAnimationFrame(animateID % 16)
        }
        
        
    }
    moveObjects(time){
                this.enemies.forEach(enemy => {
                     enemy.move(time)
                })
        // })


        this.bullets.forEach(bullet => {
            bullet.move(time)
        })

        this.enemyBullets.forEach(bullet => {
            bullet.move(time)
        })
        this.bossMissles.forEach(bullet => {
            bullet.move(time)
        })
        
        this.bossArr.forEach(boss => {
          if(this.bossArr[0].pos[0] > 1000){
            boss.move(time)
          }
        })
    }
    getAllObjects(){ // grab all current objects 
        return [].concat(this.enemies, this.ships, this.bullets, this.items, this.bossArr, this.enemyBullets, this.bossMissles)
    }
    checkCollisions(){
       const allObjects = this.getAllObjects();
        for (let i = 0; i < allObjects.length; i++) {
            for (let j = 0; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];

                if (obj1.isCollided(obj2)) {
                    // if ((obj1 instanceof Bullet && obj2 instanceof Enemy) || (obj1 instanceof Enemy && obj2 instanceof Bullet)){
                    //     let shotImage = new Image();
                    //     shotImage.src = "./src/images/hit.png"
                    //     this.ctx.drawImage(shotImage,obj1.pos[0] - 30, obj1.pos[1] - 30, 100, 100)
                    // }
                    const collision = obj1.collideWith(obj2);
                    if (collision) return;
                }
            }
        }
    }

    removeAnimation(){
        setTimeout(() => {
            this.animations.slice(1)
        }, 0)
    }
    outOfRange(pos, object){
        if (object instanceof Bullet){
            return (pos[0] < 0) || (pos[1] < 0) ||
            (pos[0] > Game.WIDTH) || (pos[1] > Game.HEIGHT);
        }else if(object instanceof Enemy || object instanceof EnemyBullet){
            return (pos[0] < 0) || (pos[1] < 0) || (pos[1] > Game.HEIGHT);
        }else if(object instanceof Ship){
            return (pos[0] < 50) || (pos[1] < 50) ||
                (pos[0] > Game.WIDTH - 50 ) || (pos[1] > Game.HEIGHT - 50);
        }
    }
    wrap(pos){
        return[
            Util.wrap(pos[0], Game.WIDTH), Util.wrap(pos[1], Game.HEIGHT)
        ]
    }
    addExplosions() {
        const explosion1 = new Image()
        const explosion2 = new Image()
        const explosion3 = new Image()
        const explosion4 = new Image()
        const explosion5 = new Image()
        const explosion6 = new Image()

        explosion1.src = "./src/images/enemy_animations/exp1.png"
        explosion2.src = "./src/images/enemy_animations/exp2.png"
        explosion3.src = "./src/images/enemy_animations/exp3.png"
        explosion4.src = "./src/images/enemy_animations/exp4.png"
        explosion5.src = "./src/images/enemy_animations/exp5.png"
        explosion6.src = "./src/images/enemy_animations/exp6.png"

        this.explosionArr.push(explosion1)
        this.explosionArr.push(explosion2)
        this.explosionArr.push(explosion3)
        this.explosionArr.push(explosion4)
        this.explosionArr.push(explosion5)
        this.explosionArr.push(explosion6)

    }
    remove(object){

        if (object instanceof Enemy) {
            
            // object.dead(this.currentFrames % 16);
            this.playExplosion(object.pos, this.currentFrames % 16)
            setTimeout(() => {
                this.enemies.splice(this.enemies.indexOf(object), 1)
            }, 0)
        }
        else if (object instanceof Bullet) {
            setTimeout(() => {
                this.bullets.splice(this.bullets.indexOf(object), 1)
            }, 0)
        }
        else if (object instanceof EnemyBullet) {
            setTimeout(() => {
                this.enemyBullets.splice(this.enemyBullets.indexOf(object), 1)
            }, 0)
        }
        else if (object instanceof BossMissiles) {
            setTimeout(() => {
                this.bossMissles.splice(this.bossMissles.indexOf(object), 1)
            }, 0)
        }
        else if (object instanceof Item) {
            setTimeout(() => {
                this.items.splice(this.items.indexOf(object), 1)
            }, 0)
        }
        else if (object instanceof Boss) {
            setTimeout(() => {
                this.bossArr.splice(this.bossArr.indexOf(object), 1)
            }, 0)
        }
    }

    
    update(func = false){
        if (func){
            return func
        }
    }
    step(delta){
        
        this.deltaTime = delta
        if(this.isPaused) return
        // if(this.bossSpawned){
        //     clearInterval(this.enemiesTimer)
        //         console.log("In here step")
        //         this.bossArr[0].update()
        //     // }
        // }
        // if(this.bossTimeToAttack === 5){
        //     // this.bossArr[0].update
        //     this.bossArr[0].stopUlt()
        //     this.bossUseUlt = true
        //     this.bossTimeToAttack = 0;
        // }
        if(this.ships[0].health === 0){
            this.gameOver = true
        }

        if(this.score === 10){
            this.enemies = []
            this.score +=1
            this.level = Level.level2
        }

        if(this.level === Level.level2 && this.score === 25){
            this.level === Level.level2
            this.bossSpawned = true
            this.spawnBoss()
            this.bossShoots()
            this.score += 1
        }

        if(this.currency === 15){
            this.currency += 1
            this.ships[0].type = 2
            this.ships[0].health = 200
            // this.ships[0].i = 2
            this.ships[0].addSprites();
        }

        if(this.currency === 26){
            this.currency += 1
            this.ships[0].type = 3
            this.ships[0].health = 300
            // this.ships[0].i = 2
            this.ships[0].addSprites();
        }
    
        this.framesDrawn++
        if(this.framesDrawn >= 16){
            this.currentFrames++;
            this.framesDrawn = 0
        }

        this.moveObjects(delta);
        this.checkCollisions()
    }
}
Game.HEIGHT = 600;
Game.WIDTH = 1200

export default Game;