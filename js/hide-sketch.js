let nGrid = [];
let eGrid = [];
let sGrid = [];
let wGrid = [];
let cols = 7;
let rows = 2;
let timerValue = 20;
let num_found = 0;
let max_blue = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  nGrid = makeGrid();
  eGrid = makeGrid(150);
  sGrid = makeGrid(300);
  wGrid = makeGrid(450);
  textSize(18);
  
}
function mouseReleased(){
  checkClick(nGrid);
  checkClick(eGrid);
  checkClick(sGrid);
  checkClick(wGrid);
}
function checkClick(thisGrid){
    for(let r = 0; r < rows; r++){
    for(let c = 0; c < cols; c++){
      thisGrid[r][c].click();
    }
  }
}
function makeGrid(yoffset = 0, xoffset = 10){
  let grid = [];
  for(let r = 0; r < rows; r++){
    grid[r] = [];
    for(let c = 0; c < cols; c++){
      let x = r * 50; // x position of the square
      let y = c * 50;
      x = x + yoffset;
      y = y + xoffset;
      grid[r][c] = new Tile(x,y,c,r);
    }
  }
  return grid;
}
function draw() {
  background(255);
  drawGrid(nGrid);
  text("N",352,50);
  drawGrid(eGrid);
  text("E",352,200);
  drawGrid(sGrid);
  text("S",352,350);
  
  drawGrid(wGrid);
  text("W",352,500);
  
  
}


function drawGrid(thisGrid) {
  for(let r = 0; r < rows; r++){
    for(let c = 0; c < cols; c++){
      thisGrid[r][c].display();
    }
  }
}

