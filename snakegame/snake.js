let canvas = document.getElementById("snakeCanvas");
let ctx = canvas.getContext("2d");

let xList = [];
let yList = [];

let canvasHeight = canvas.height;
let canvasWidth = canvas.width;

let startingX = canvasHeight / 2;
let startingY = canvasWidth / 2;

let over = false;

init();

class Snake {
    constructor(startingX, startingY) {
        this.startingX = startingX;
        this.startingY = startingY;
        this.blockHeight = canvasHeight / 25;
        this.blockWidth = canvasWidth / 25;
        this.direction = "up";
        this.history = [];
    }
}

snek = new Snake(startingX, startingY);

function init() {
    let paused = false;

    let timer = setInterval(() => {
        if (over) {
            alert("Game over. Press 'refresh' to play again");
            paused = true;
            clearInterval(timer);
        }
        drawSnake(snek);
    }, 500);

    document.getElementById('refreshButton').onclick = function refreshPage() {
        window.location.reload();
    }
    document.getElementById('stopButton').onclick = function stopSnake() {
        if (!paused) {
            paused = true;
            document.getElementById('stopButton').innerHTML = "Start";
            clearTimeout(timer);
        } else {
            if (over) {
                window.location.reload();
            }
            paused = false;
            document.getElementById('stopButton').innerHTML = "Stop";
            timer = setInterval(() => {
                drawSnake(snek);
            }, 500);
        }
    }
}
document.getElementById('rightButton').onclick = function goRight() {
    console.log("clicked right button");
    if (snek.direction == "right") {
        snek.direction = "down";
    } else if (snek.direction == "left") {
        snek.direction = "up";
    } else if (snek.direction == "up") {
        snek.direction = "right";
    } else if (snek.direction == "down") {
        snek.direction = "left";
    }
}
document.getElementById('leftButton').onclick = function goLeft() {
    if (snek.direction == "right") {
        snek.direction = "up";
    } else if (snek.direction == "left") {
        snek.direction = "down";
    } else if (snek.direction == "up") {
        snek.direction = "left";
    } else if (snek.direction == "down") {
        snek.direction = "right";
    }
}

function drawSnake(snake) {

    //    if (direction == )
    console.log("draw snake direction " + snek.direction);
    if (snek.startingX == canvasWidth || snek.startingX == 0 ||
        snek.startingY == canvasHeight || snek.startingY == 0) {
        over = true;
    }
    if (snek.direction == "right") {
        placeBlock(snake.startingX += snek.blockHeight, snake.startingY, snake);
        console.log("right" + snake.startingX);
    }
    if (snek.direction == "left") {
        placeBlock(snake.startingX -= snek.blockHeight, snake.startingY, snake);
    }
    if (snek.direction == "down") {
        placeBlock(snake.startingX, snake.startingY += snek.blockHeight, snake);
    }
    if (snek.direction == "up") {
        placeBlock(snake.startingX, snake.startingY -= snek.blockHeight, snake);
    }
}

function placeBlock(x, y, snake) {
    for (let i = 0; i < xList.length; i++) {
        if (xList[i] === x && yList[i] === y) {
           over = true; 
        }
    }
    xList.push(x);
    yList.push(y);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, snake.blockHeight, snake.blockWidth);
    
}