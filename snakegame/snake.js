var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");

let canvasHeight = canvas.height;
let canvasWidth = canvas.width;

let startingX = canvasHeight / 2;
let startingY = canvasWidth / 2;

class Snake {
    constructor(startingX, startingY) {
        this.startingX = startingX;
        this.startingY = startingY;

        this.blockHeight = canvasHeight / 25;
        this.blockWidth = canvasWidth / 25;

        this.direction = "up";
    }
}

snek = new Snake(startingX, startingY);

init();

function init() {
    let paused = false;

    var timer = setInterval(() => {
        drawSnake(snek);
    }, 500);

    document.getElementById('stopButton').onclick = function stopSnake() {
        if (!paused) {
            paused = true;
            console.log("Snake stopped");
            document.getElementById('stopButton').innerHTML = "Start";
            clearTimeout(timer);

        } else {
            paused = false;
            console.log("snake started");
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
        snek.direction = "left";
    }
}

function drawSnake(snake) {

    //    if (direction == )
    console.log("draw snake direction " + snek.direction);

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
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, snake.blockHeight, snake.blockWidth);
}