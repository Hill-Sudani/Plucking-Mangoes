class mango 
{
    constructor(x,y)
    {
        this.image = loadImage("Plucking mangoes/mango.png")
        var options = 
        {
            isStatic : true,
            restitutuon : 0
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }

    display()
    {
        this.pos = this.body.position;
        push();
        translate(this.pos.x,this.pos.y);
        rotate(this.body.angle);
        image(this.image,0,0,40,40);

        pop();
    }
}