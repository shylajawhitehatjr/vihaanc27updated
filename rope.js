class Rope{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:200
        }
this.pointB=pointB;

        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
        
        
    
    }
    display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
    line (pointA.x,pointA.y,pointB.x,pointB.y);
    
    }
    
    
    }