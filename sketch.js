/* shift alt a
pattern idea: brick tile pattern
 */
var tilesAcross = 10;
var tileSize;
var shapes = [];

var slider1;
var slider2;
var button;
var pause= true;

function setup() {
	createCanvas(windowWidth, windowHeight);

	slider1 = createSlider(0,150, 0); //min, max, value it starts at, step aka increment
	slider2 = createSlider(0.03,0.2,0.03, 0.01);

	button = select('button');
	button.mousePressed(pausePlay);

	tileSize = width / tilesAcross;

	for (var x = 0; x < width; x += tileSize) {
		for (var y = 0; y < height; y += tileSize) {
			shapes.push(new Bricks(x, y))
		}
	}
}

function draw() {
	background(220);

	for (var i = 0; i < shapes.length; i++) {
		shapes[i].view();
		if (pause) {
		shapes[i].changeColor();
		}
	}
}

class Bricks {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.startColor = color(151, 45, 7)
		this.endColor = color(105, 20, 14);
		this.colorValue = 0
	}

	view() {
		stroke(60, 21, 24)
		strokeWeight(10)
		var brickColor = lerpColor(this.startColor, this.endColor, cos(this.colorValue))
		var brickColor2 = lerpColor(this.endColor, this.startColor, cos(this.colorValue))

		var newtileSize = tileSize + slider1.value();

		//vertical
		fill(brickColor);
		rect(this.x, this.y, newtileSize / 2, newtileSize / 2);
		rect(this.x + (newtileSize / 2), this.y, newtileSize / 2, newtileSize / 2);
		//horizontal		
		fill(brickColor2);
		rect(this.x, this.y + (newtileSize / 2), newtileSize, newtileSize / 2);
		rect(this.x, this.y + (newtileSize * 0.75), newtileSize, newtileSize / 2);

	}

	changeColor() {
		this.colorValue += slider2.value();
	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function pausePlay() {
pause = !pause;
}

