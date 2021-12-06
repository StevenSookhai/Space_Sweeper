console.log("Webpack is working!")
import MovingObject from "./scripts/moving_object";
import Enemy from "./scripts/enemy";
import Game from "./scripts/game";
import GameView from "./scripts/game_view"
import Ship from "./scripts/ship"

document.addEventListener("DOMContentLoaded", () => {
    // const body = document.querySelector("body")
    // const ctx = document.querySelector("body")
    const canvas = document.getElementById("canvas")
    canvas.height = 600;
    canvas.width = 1200;
    const ctx = canvas.getContext("2d");
    const game = new Game(ctx);
    new GameView(game, ctx).start()   
    // const testObject = new MovingObject({ pos: [canvas.width / 2, canvas.height / 2], radius: 5, color: "red", vel:[3,3]});
    // const testObject2 = new MovingObject({ pos: [canvas.width / 2 + 100, canvas.height / 2], radius: 5, color: "blue", vel: [3, 3] });
    // const testEnemy = new Enemy({game: game});
    // const ship = new Ship()
    // ship.draw(ctx)
    // game.draw(ctx)
    // console.log(testEnemy)
    // for(let i = 0; i< game.enemies.length; i++){
    //     game.enemies[i].draw(ctx)
    // }
    // testEnemy.draw(ctx)
    // testObject.draw(ctx)
    // testObject2.draw(ctx)
    // const testObjectBind = testObject.move.bind(testObject, ctx, canvas.width, canvas.height)
    // const testEnemyBind = testObject.move.bind(testEnemy, ctx, canvas.width, canvas.height)
    // MovingObject.animate(ctx, canvas.width, canvas.height);
    // setInterval(testObjectBind, 100);
    // setInterval(testEnemyBind, 100);

    // function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // testEnemy.draw(ctx)
    // testObject.draw(ctx)
    // testObject2.draw(ctx)
    // requestAnimationFrame(animate)
    // }
    // animate();
});

