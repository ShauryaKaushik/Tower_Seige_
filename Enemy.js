class Enemy {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,80,80,options);
      this.width = 80;
      this.height = 80;
      this.image = loadImage("lavaBall.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      image(this.image,0,0,this.width,this.height); 
      pop();
    }
  };                                                                 
