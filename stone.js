class stone
{
    constructor(x,y,diameter)
    {
        this.image = loadImage("Plucking mangoes/stone.png");

        this.dia = diameter;

        var options = 
        {
            isStatic : false,
            friction : 1,
            density : 1.22
        }
        this.body = Bodies.circle(x,y,diameter,options);
        World.add(world,this.body);
    }

    display()
    {
        this.pos = this.body.position;
        image(this.image,this.pos.x,this.pos.y,this.dia,this.dia);
    }
}