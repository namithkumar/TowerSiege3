class Block
{
    constructor(x, y, width, height) 
    {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':30.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        this.image = loadImage("wood1.png");
        World.add(world, this.body);
      }

      score()
      {
        if(this.Visiblity <0 || this.Visiblity > -105)
        {
          score = score+1;
        }
      }

      display()
      {

        if(this.body.speed < 3)
        {
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else
        {
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255, this.Visiblity);
          image(this.image, this.body.positionx, this.body.positiony, 50,50);
          pop();
        }
      }

      
};