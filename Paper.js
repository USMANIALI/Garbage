class Paper {
    constructor(x,y) {
var options={
     isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
}
this.width = 50;
this.height = 50;
this.body=Bodies.rectangle(x, y, 50, 50, options);
World.add(world, this.body);
this.image=loadImage("paper.png")


    }

    display(){
var pos=this.body.position;		
push()
translate(pos.x, pos.y);
imageMode(CENTER)
strokeWeight(4);
stroke("black");
fill("white");
image(this.image, 0, 0, this.width,this.height);
pop()

    }
}