// CREDITS/SOURCES:
//ALL ASSETS/IMAGES WHERE OBTAINED FROM CRAFTPIX.COME
//ALL MUSIC WERE OPTAINED FROM MIKIT.CO

// console.log("Webpack is working!")
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
    let playing = false;
    // gameView.start() 
    const mainMenumusic = new Audio("./src/sound/main_m.mp3")
    const backgroundMusic = new Audio("./src/sound/bgmusic.mp3")
    document.addEventListener("click", (e) =>{
        if (!playing){
        mainMenumusic.play();
        }else{
            mainMenumusic.pause()
        }
    })
    document.addEventListener("keydown", (e) =>{
        if(e.code ==="KeyQ"){
            playing = true
            document.getElementById("start").style.display ="none"
            // console.log("Qpressed")
            game = new Game(ctx);
            backgroundMusic.play();
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

