class Bird  extends Superclass{
    constructor(x, y) {
      super(x,y,70,70)
      this.image= loadImage("images-main/bird.png");
      
    }
    display(){
     
      var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;

        super.display();
      
    }
  };
  