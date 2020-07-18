class Ground 
{
    constructor(x,y,width,height){

        var options = 
        {
        isStatic : true
            
        };    
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
display(){

var pos = this.body.position;
var width = this.width;
var height = this.height;

rectMode(CENTER);
fill("brown"); 
rect(pos.x,pos.y,width,height);    
}

}
