var chair,chairImg;
var chairs = [];

function preload() {
    chairImg = loadImage("chair.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    for(var i = 0; i < width-10; i++) {
        chairs.push(createSprite(i*100,350,20,20));
        chairs[i].addImage(chairImg);
        chairs[i].scale = 0.5;
    }
}

function draw() {
    
    drawSprites();
}