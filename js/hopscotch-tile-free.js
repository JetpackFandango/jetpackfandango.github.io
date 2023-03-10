class Tile {
  constructor(x,y,col,row, hide = true, type = 0){
    this.x = x;
    this.y = y;
    this.col = col;
    this.row = row;
    this.hide = hide;
    this.type = type;
    this.debounce = 0;
  }
  display() {
    let c = color(255,255,255);
    if(!this.hide){
      c = color(50,50,255);
    }
    fill(c);
    rect(this.y, this.x, 50, 50);
    if(this.debounce < 0){
      this.debounce = 0;
    } else {
      this.debounce-=1;
    }
    // c = color(255,0,0);
    // fill(c);
    // rect(this.y+25,this.x+25,5,5);
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
    if(d < 25 && this.debounce <= 0){
      // this.hide = false;
      this.hide = this.hide ? false : true;
      this.debounce = 25;
    }
  }
  randomize(){
    this.type = random([0,1]);
    return this.type;
  }
}