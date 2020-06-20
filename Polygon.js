class Polygon {

    constructor(x, y, radius)
    {
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 1,
            density : 2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("hexagon.png");
        World.add(world, this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y, this.body.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);  
        pop();
    }
};