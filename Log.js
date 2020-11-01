class Log extends Superclass{
    constructor(x, y,height,angle) {
     super(x,y,20,height,angle);
     this.image=loadImage("images-main/wood2.png")
     Matter.Body.setAngle(this.body,angle)
  
    }
  };
  