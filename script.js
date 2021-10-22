
function setup() {
  createCanvas(600, 600);
	frameRate(5)
}

function draw() {
  background(200)


	// Challenge 1
	for(var x = 0; x < width; x += 50){
		for(var y = 0; y < height; y += 50){
			ellipse(x,y, 50,50)	
		}
	}

	// Challenge 2
	for(var x = 0; x < width; x += 50){
		for(var y = 0; y < height; y += 50){
			fill("red")
			ellipse(x,y, 50,50)
			fill("aqua")
			ellipse(x, y, 40, 40)
			fill("blue")
			ellipse(x, y, 30, 30)
			fill("magenta")
			ellipse(x, y, 20, 20)
		}
	}

	// Challenge 3
	for(var x = 0; x < width; x += 50){
		for(var y = 0; y < height; y += 50){
			fill('yellow')
			ellipse(x, y, 50,50)
			fill('white')
			ellipse(x - 12.5, y - 12.5, 10, 10)
			ellipse(x + 12.5, y - 12.5, 10, 10)
			fill('black')
			ellipse(x - 12.5, y - 12.5, 5, 5)
			ellipse(x + 12.5, y - 12.5, 5, 5)
			ellipse(x,y, 10,10)
			
		}
	}

	// Challenge 4
	// for(var x = 0; x < width; x += 50){
	// 	for(var y = 0; y < height; y += 50){
	// 		stroke("white")
	// 		strokeWeight(5)
	// 		fill(random(0,255), 0, random(0,255))
	// 		ellipse(x,y, 50,50)	
	// 	}
	// }

	// Challenge 5
	for(var x = 0; x < mouseX; x += 50){
		for(var y = 0; y < height; y += 50){
			stroke("white")
			strokeWeight(5)
			fill(random(0,255), 0, random(0,255))
			ellipse(x,y, 50,50)	
		}
	}

	// Challenge 6
	for(var x = 0; x < width; x += 50){
		for(var y = 0; y < mouseY; y += 50){
			stroke("white")
			strokeWeight(5)
			fill(random(0,255), 0, random(0,255))
			ellipse(x,y, 50,50)	
		}
	}

	// Challenge 7
	for(var x = 0; x < mouseX; x += 50){
		for(var y = 0; y < height; y += 50){
			stroke("white")
			strokeWeight(5)
			fill(random(0,255), 0, random(0,255))
			if(mouseIsPressed){
				fill("green")
			}
			ellipse(x,y, 50,50)	
		}
	}

	// Challenge 8
	for(var x = 0; x < mouseX; x += 50){
		for(var y = 0; y < height; y += 50){
			stroke("white")
			fill('aqua')
			triangle(x, y, x + 25, y + 25, x, y + 50)
			strokeWeight(5)
			fill(random(0,255), 0, random(0,255))
			ellipse(x,y, 50,50)
			}
		}
}