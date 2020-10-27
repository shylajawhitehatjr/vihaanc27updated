class Ball {
    constructor(x, y) {
        var options = {
isStatic:false,
            restitution: 1,
            density: 1,
            friction: 0.2
        }
this.x=x;
this.y=y;
this.r=40;
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options);
       // this.r = r / 2;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("red");
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
       pop();
    }
}