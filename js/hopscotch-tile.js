class Tile {
  constructor(x,y,col,row, hide = true, type = 0){
    this.x = x;
    this.y = y;
    this.col = col;
    this.row = row;
    this.hide = hide;
    this.type = type;
  }
  display() {
    let c = color(255,255,255);
    if(this.type == 1 && !this.hide){
      c = color(50,50,255);
    } else if(this.type == 2 && !this.hide){
      c = color(255,255,0);
    }
    fill(c);
    rect(this.y, this.x, 50, 50);
    c = color(255,0,0);
    fill(c);
    rect(this.y+25,this.x+25,5,5);
  }
  show(delay){
    setTimeout(this.unhideTile.bind(this), delay);
    setTimeout(this.hideTile.bind(this), delay+500);
  }
  unhideTile(delay=100){
    this.hide = false;
  }
  hideTile() {
    this.hide = true;
  }
  click(){
    let d = dist(mouseX,mouseY,this.y+25,this.x+25);
    if(d < 25){
      if(this.type==1){
        this.hide = false; 
        return 1;
      } else {
        // this.type = 2;
        return 2;
      }
    }
    return 3;
  }
  randomize(){
    this.type = random([0,1]);
    return this.type;
  }
}