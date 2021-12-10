# SpaceSweeper
# Background
[Space Sweeper!](https://stevensookhai.github.io/Space_Sweeper/) is a space themed game where you are flying in space fighting your way through against enemies sent to eliminate you.

# Functionality & MVPs
In Space Sweeper, users will be able to:
- fly a spaceship through space using using the wasd keys
- shoot enemies using the space key
- play through different levels
- collect items that will add extra modification to their ship and upgrade ship
- be able to start/pause game

In addition, this project will include:
- An About modal describing the background and rules of the game
- A production README
 
 
# Wireframes
<img width="1029" alt="Screen Shot 2021-12-02 at 10 43 18 PM" src="https://user-images.githubusercontent.com/90236328/144544145-47abe7d9-41af-4b93-bd3a-0305d56b1175.png">

## Code
```javascript
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
```
One of the core features of the game is to simulate the feel as you are flying through space. This code allows us to help create that simulation by drawing two images, one on and off the canvas. The code checks whether either of the images are off the screen and then redraws in behind the one currently being displayed on the canvas. 

# Technologies, Libraries, APIs
This project will be implemented with the following technologies:
- The Canvas API to render the game board
- Webpack bundle and transpile the source JavaScript code
- npm to manage project dependencies
- HTML & CSS
 
# Implementation Timeline
- Friday Afternoon: Setup project, including getting webpack up and running. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. 
- Weekend: Implement game logic for enemies, ship and level.
- Monday: Dedicate this day toward implementing the ship upgrade feature, have everything rendered to the canvas and have game core features working. 
- Tuesday & Wednesday: Style with css and add animations
- Thursday Morning: Deploy to GitHub pages. Rewrite this proposal as a production README.
 
# Bonus features
- Add different animations for different ships
- Add different animations for different enemies.
- Enemies may take multiple hits to die
- Add more levels to the game.
