var ball;
var database;
var positionDatabase

function setup(){
    createCanvas(500, 500);
    database = firebase.database();
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";

    var getinfo = database.ref("Ball/position");
    getinfo.on("value", readop, showerr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x, y) {
    database.ref("Ball/position").set({
        x: ball.x + x,
        y: ball.y + y
    })
}

function readop(data) {
    positionDatabase = data.val();
    ball.x = positionDatabase.x
    ball.y = positionDatabase.y
}

function showerr() {

    console.log("error");
}