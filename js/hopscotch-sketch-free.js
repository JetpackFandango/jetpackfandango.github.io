let grid = []; 
let displayButton;
let cols = 3;
let rows = 10;
let timerValue = 20;
let num_found = 0;
let max_blue = 0;
let video;
function setup() {
  createCanvas(600, 600);
  let constraints = {
    video: {
    facingMode: { exact: "environment" }
  }};
  video = createCapture(constraints);
  video.size(windowWidth, windowHeight);
  video.hide();
  displayButton = createButton("Clear");
  displayButton.mousePressed(hideAll);
  for(let r = 0; r < rows; r++){
    grid[r] = [];
    for(let c = 0; c < cols; c++){
      let x = r * 50; // x position of the square
      let y = c * 50;
      grid[r][c] = new Tile(x,y,c,r);
    }
  }
}
function draw() {
  background(255);
  tint(255, 100)
  image(video,165,10,200,500);
  drawGrid();
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
      grid[r][c].click();
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

