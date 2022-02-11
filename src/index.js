// CREDITS/SOURCES:
//ALL ASSETS/IMAGES WHERE OBTAINED FROM CRAFTPIX.COME
//ALL MUSIC WERE OPTAINED FROM MIKIT.CO

import MovingObject from "./scripts/moving_object";
import Enemy from "./scripts/enemy";
import Game from "./scripts/game";
import GameView from "./scripts/game_view"
import Ship from "./scripts/ship"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas")
    canvas.height = 600;
    canvas.width = 1200;
    const ctx = canvas.getContext("2d");
    let game = new Game(ctx);
    let gameView = new GameView(game, ctx)
    let playing = false;
    let notMuted = false;
    const mainMenumusic = new Audio("./src/sound/main_m.mp3")
    // mainMenumusic.play();


    const backgroundMusic = new Audio("./src/sound/bgmusic.mp3")
    
    // document.addEventListener("click", (e) =>{
    //     if (!playing){
    //     mainMenumusic.play();
    //     }else{
    //         mainMenumusic.pause()
    //     }
    // })

    document.addEventListener("keydown", (e) =>{
        if(e.code ==="KeyQ"){
            playing = true
            document.getElementById("start").style.display ="none"
            game = new Game(ctx);
            // mainMenumusic.pause()
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
            gameView = new GameView(game, ctx)
            gameView.start()
         }
        else if (e.code === "KeyP") {
            game.togglePaused()
            // console.log("p pressed")
        }
        else if(e.code === "KeyM"){ 
                if(!notMuted){
                 backgroundMusic.pause();
                 notMuted = true
                }else if(notMuted){
                    backgroundMusic.play();
                    notMuted = false
                }
        }
    })
});

