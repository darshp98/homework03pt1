/* shift alt a
pattern idea: brick tile pattern
 */
var tilesAcross = 10;
var tileSize;
var shapes = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

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
		shapes[i].changeColor();
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

		//vertical
		fill(brickColor);
		rect(this.x, this.y, tileSize / 2, tileSize / 2);
		rect(this.x + (tileSize / 2), this.y, tileSize / 2, tileSize / 2);
		//horizontal		
		fill(brickColor2);
		rect(this.x, this.y + (tileSize / 2), tileSize, tileSize / 2);
		rect(this.x, this.y + (tileSize * 0.75), tileSize, tileSize / 2);

	}

	changeColor() {
		this.colorValue += .03;
	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

