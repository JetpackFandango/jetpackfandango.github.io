let grid = []; 
let randomizeButton;
let displayButton;
let cols = 3;
let rows = 6;
let timerValue = 20;
let num_found = 0;
let max_blue = 0;
function setup() {
  createCanvas(600, 600);
  randomizeButton = createButton("Randomize");
  randomizeButton.mousePressed(changeColor);
  displayButton = createButton("Display");
  displayButton.mousePressed(displayColor);
  for(let r = 0; r < rows; r++){
    grid[r] = [];
    for(let c = 0; c < cols; c++){
      let x = r * 50; // x position of the square
      let y = c * 50;
      grid[r][c] = new Tile(x,y,c,r);
    }
  }
  setInterval(timeIt, 1000);
}
function timeIt(){
  timerValue--;
  if(timerValue < 0){
    timerValue = 20;
  }
}
function draw() {
  background(255);
  drawGrid();
  fill(color(0,0,0));
  text(timerValue,200,20);
  fill(color(0,0,255));
  text(max_blue-num_found,200,50);
}
function displayColor(){
  let delay = 500;
  let current_delay = 0;
  let i = 0;
  for(let r = rows-1; r >= 0; r--){
    for(let c = 0; c < cols; c++){
      current_delay = (i+1)*delay;
      grid[r][c].show(current_delay);
    }
    i++;
  }
}
function hideAll(){
    for(let r = 0; r < rows; r++){
    for(let c = 0; c < cols; c++){
      grid[r][c].hide = true;
    }
  }
}
function mousePressed(){
    for(let r = 0; r < rows; r++){
    for(let c = 0; c < cols; c++){
      let clicked_data = grid[r][c].click();
      if(clicked_data == 2){
        hideAll();
        num_found = 0;
      } else if(clicked_data == 1){
        num_found++;
      }
    }
  }
}

function drawGrid() {
  for(let r = 0; r < rows; r++){
    for(let c = 0; c < cols; c++){
      grid[r][c].display();
    }
  }
}

function changeColor() {
  hideAll();
  timerValue = 20;
  num_found = 0;
  max_blue = 0;
  for(let r = 0; r < rows; r++){
    num_blue = 0;
    for(let c = 0; c < cols; c++){
      if(num_blue < 2){
        num_blue += grid[r][c].randomize();      
      } else {
        grid[r][c].type = 0;
      }
    }
    if(num_blue == 0){
      grid[r][random([0,2])].type = 1;
      num_blue++;
    }
    max_blue+= num_blue;
  }
}

function fadeOut() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = color(255);
    }
  }
}