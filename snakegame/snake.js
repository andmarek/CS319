var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");
//var timer = window.;

var interval = setInterval(placeBlockWidth, 50)
setTimeout()
//function placeBlock(xpos, ypos, height, width) {
    ctx.strokeRect(xpos, ypos, width, height);
}

var x = 0;
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

