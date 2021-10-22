
function setup() {
  createCanvas(600, 600);
	
}

function draw() {
  background(200)
	for(var x = 30; x < width; x += 50){
		for(var y = 30; y < height; y += 50){
			
			ellipse(x, y, 50, 50)
		}
	}
}