let dots = [];
let count;
let cellSize = 100;

function setup() {
  createCanvas(800, 500);
  
  let xCellsCount = width / cellSize;
  let yCellsCount = height / cellSize;
  count = xCellsCount * yCellsCount;
  
  for (let yCount = 0; yCount < yCellsCount; yCount++) {
    for (let xCount = 0; xCount < xCellsCount; xCount++) {
      dots.push(createDot({xCount,yCount }))
    }
  }
}

function draw() {
  background('#D2C0D4');
  
  for (let i = 0; i < count; i++) {
    dots[i].move()
    dots[i].display()
  }
}

function createDot({
  xCount,  
  yCount,
  d = random(40, 50),
  speed = random(1, 3)
}){
  let paddingX = cellSize/2;
  let paddingY = cellSize/2;
  let directionX = 1;
  let directionY = 1;
 
  return {
    move() {
      paddingX = paddingX + speed * directionX;
      if(paddingX > cellSize || paddingX < 0) {
        directionX *= -1;
        paddingY = paddingY + speed * directionY;
        d = random(40, 60)
      }
      if(paddingY > cellSize || paddingY < 0) {
         directionY *= -1;
        paddingY = paddingY + speed * directionY;
        d = random(40, 60)
        }
    },
    
    display() {
      let x = xCount * cellSize + paddingX;
      let y = yCount * cellSize + paddingY;
      
       
      // stroke(mouseX, 50)
      // line(mouseX, mouseY, x, y);
      
      // let dotsColor = map(mouseX, mouseY , 600, 255, 0);
      if(mouseX < width/2) {
        noStroke();
        fill(255)
      }
      if(mouseX > width/2){
        stroke(255);
        strokeWeight(3);
        noFill();
      }
      
//       fill(dotsColor);
      if (mouseIsPressed){
        noStroke();
        fill(random(0, 255),random(80, 100), random(200, 255));
          x = xCount * mouseY + paddingX;
          y = yCount * mouseY + paddingY;
        
         textSize(40);
         text('WOW', mouseY, mouseX);
      }
      
     
      ellipse(x, y, d);
     
    }
  }
}