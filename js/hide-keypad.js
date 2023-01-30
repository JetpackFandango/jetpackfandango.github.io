class Keypad {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.digit1 = 0;
    this.digit2 = 0;
  }
  display() {
    let c = color(255,255,255);
    if(!this.hide){
      c = color(255,255-(20*this.number),255-(20*this.number));
    }
    fill(c);
    rect(this.y, this.x, 40, 40);
    fill(color(0,0,0));
    if(this.number != 0){
      text(this.number, this.y+10,this.x+30);      
    }
    this.debounce -= 1;
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
      // this.number = prompt("#");
      this.hide = false;
      this.number += 1;
      this.debounce = 10;
    }
  }
  randomize(){
    this.type = random([0,1]);
    return this.type;
  }
}