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
    let game = new Game(ctx);
    let gameView = new GameView(game, ctx)
    // gameView.start() 

    document.addEventListener("keydown", (e) =>{
        if(e.code ==="KeyQ"){
            console.log("Qpressed")
            game = new Game(ctx);
            gameView = new GameView(game, ctx)
            gameView.start()
         }
        else if (e.code === "KeyP") {
            // gameView.pause()
            game.togglePaused()
            console.log("p pressed")
        }
    })
    // document.addEventListener("keydown", (e) =>{
    //     if(e.code === "KeyP"){
    //         // gameView.pause()
    //         game.togglePaused()
    //         console.log("p pressed")
    //     }
    // })
});

