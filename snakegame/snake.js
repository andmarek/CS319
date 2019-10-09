// Canvas from HTML
var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");

//var timer = window.;
var img = new Image();

class Block {
    constructor(height, width, ypos, xpos) {
        this.height = height;
        this.width = width;
        this.ypos = ypos;
        this.xpos = xpos;
    }

    moveRight() {
        this.xpos+=50;
    }
}

function drawRectangle() {
    ctx.
}

/*** */
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('snakeCanvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();

function legitDraw() {
  var ctx = document.getElementById('snakeCanvas').getContext('2d');
  ctx.clearRect(0, 0, 0, 300, 300);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

}
//let b1 = new Block(50, 50, 50, 50);
/*
function draw(y, x) {
    img.onload = function() {
            ctx.drawImage(img, x, y);
    };
    img.src = 'assets/snaketile.png';

}*/

var snakeTile = new Image();
snakeTile.src = 'assets/snaketile.png';
/*
function draw() {
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 500, 500);
    ctx.save();
    ctx.translate(150, 150);
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(50, 0);
    ctx.fillRect(b1.xpos, b1.ypos, b1.width, b1.height);
    ctx.drawImage(snakeTile, 50, 50);

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI *2 , false);
    ctx.stroke();
}
*/
window.requestAnimationFrame(draw);
/*
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
*/
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

function increaseWidth(i) {
    i++;
    return i;
}

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case '37': //left
            break;
        case '38': //up
            break;
        case '39': //right
            break;
        case '40': //down
            break;
    };


});

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

