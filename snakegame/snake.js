var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");

let canvasHeight = canvas.height;
let canvasWidth = canvas.width;
let blockHeight = canvasHeight / 100;
let blockWidth = canvasWidth / 100;

let timer = setInterval(() => { drawSnake(); }, 1000);

func drawSnake() {
    let startingX = canvasHeight / 2;
    let startingY = canvasWidth / 2; 

    for (let i = 0; i < 20; i++) {
        placeBlock(startingX, startingY);
        if ()
    }
}

func placeBlock(x, y) {
    ctx.fillRect(x, y, blockHeight, blockWidth);
}

// Helpers

function placeBlockWidth() {
    let xpos = x;
    console.log(xpos);
    let ypos = 0;

    if (xpos * 50 >= 750) { //start drawing downard
        ypos++;
        placeBlock((xpos - ypos) * 50, ypos * 50, 50, 50);
    }
    placeBlock(xpos * 50, ypos, 50, 50);
    x++;
}

let b1 = new Block(50, 50, 50, 50);

function draw(y, x) {
    img.onload = function() {
            ctx.drawImage(img, x, y);
    };
    img.src = 'assets/snaketile.png';

}



let timer = setInterval(() => {
    //    placeBlock(b1.xpos, b1.ypos, b1.height, b1.width);
    draw(b1.xpos, b1.ypos);
    ctx.clearRect(b1.xpos, b1.ypos, b1.height, b1.width);
    ctx.save();
    ctx.translate(50, 0);
    //    moveBlock(b1);
    ctx.restore();
    draw(b1.xpos, b1.ypos);
    placeBlock(b1.xpos, b1.ypos, b1.height, b1.width);

}, 1000)

function placeBlock(xpos, ypos, height, width) {
        ctx.strokeRect(xpos, ypos, width, height);
}

function removeBlock(xpos, ypos, height, width) {
    ctx.clearRect(xpos, ypos, width, height);
}

setTimeout(() =>  {clearInterval(timer); }, 10000);

var x = 0;
var y = 0;

function moveBlock(b) {
    b.moveRight();
}

function placeBlockWidth() {
    let xpos = x;
    console.log(xpos);
    let ypos = y;

    if (xpos * 50 >= 750) { //start drawing downard
        y++;
        placeBlock((xpos - ypos) * 50, ypos * 50, 50, 50);
    }
    placeBlock(xpos * 50, ypos, 50, 50);
    x++;
}
//ctx.rect(100, 100, 100, 100);

//let gameboard = new Array();


/*
function genSnake(len) {
    let ypos = 0;

    for(let xpos =  0; xpos < len; xpos++) {
        if (xpos*50 >= 750) { //start drawing downard
            ypos++;
            placeBlock((xpos-ypos)*50, ypos*50, 50, 50);
            continue;
        }
            placeBlock(xpos*50, ypos, 50, 50);
    }
}

genSnake(20);*/
/// do things here

