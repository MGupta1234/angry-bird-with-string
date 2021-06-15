class Pig extends BaseClass {
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      
      
    }
    /*display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);

      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }*/
  };
  