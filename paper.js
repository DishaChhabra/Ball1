class Paper{
constructor(x,y){
var options = {

//isStatic: true,
restitution: 0.3,
friction: 0.5,
density: 5
}
this.body = Bodies.circle(x,y,20,options);
World.add(world,this.body);
}

display(){
    ellipseMode(RADIUS)
    fill(255, 0, 255);
    ellipse(this.body.position.x, this.body.position.y, 20)
}
}