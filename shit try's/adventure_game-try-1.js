////// Variables //////
var canvas = {width:1400, height:700 };
var score = 0;

var player = {
	x:canvas.width/2,
	y:canvas.height-100,
	speed: 4
};

var LEFT = false; 
var RIGHT = false;
var UP = false;
var DOWN = false;
var SPACE = false;

////// Arrow keys //////

function move() {
	
	if(LEFT) { 
		player.x -= player.speed;
	}
	if(RIGHT) {
		player.x += player.speed;	
	}
	if(UP) {
		player.y -= player.speed;
	}
	if(DOWN) {
		player.y += player.speed;
	}
}

document.onkeydown = function(e) {
	if(e.keyCode == 37) LEFT = true;
	if(e.keyCode == 39) RIGHT = true;
	if(e.keyCode == 38) UP = true;
	if(e.keyCode == 40) DOWN = true;
	if(e.keyCode == 32) SPACE = true;
}

document.onkeyup = function(e) {
	if(e.keyCode == 37) LEFT = false;
	if(e.keyCode == 39) RIGHT = false;
	if(e.keyCode == 38) UP = false;
	if(e.keyCode == 40) DOWN = false;
	if(e.keyCode == 32) SPACE = false;
}

////// other functions //////

//function to clear canvas
function clearCanvas() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

// Draw Player ship.
function ship(x,y) {
	var x = player.x;
	var y = player.y;
	ctx.fillStyle = "#FFFFFF";
// X = left to right Y = up and down
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+15,y+50);
	ctx.lineTo(x-15,y+50);
	ctx.fill();
}
var ObjectBoundaries = function(Coordinate, Dimension){
    var leftBound = Coordinate.getX();
    var rightBound = (Coordinate.getX() + Dimension.getWidth());
    var upperBound = Coordinate.getY();
    var lowerBound = (Coordinate.getY() + Dimension.getHeight());
    this.getLeftBound = function(){ return leftBound; };
    this.getRightBound = function(){ return rightBound; };
    this.getUpperBound = function(){ return upperBound; };
    this.getLowerBound = function(){ return lowerBound; };
};
// update

setInterval (update, 10);

function update() {
	clearCanvas();
	ship();
	move();
}
ctx.strokeRect(0, 0, theCanvas.width, theCanvas.height);