class launch
{
    constructor(BodyA,anchor)
    {
        var options = 
        {
            bodyA : BodyA,
            pointB : anchor,

            stiffness : 0.004,
            length : 0.01   
        }

        this.Sling = Constraint.create(options);
        World.add(world,this.Sling);
    }

    fly()
    {
        this.Sling.bodyA = null;
    }

    attach(body)
    {
        this.Sling.bodyA = body;
    }

    display()
    {
        if(this.Sling.bodyA)
        {
            var pointA = this.Sling.bodyA.position;
            var pointB = this.Sling.pointB;
        
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}