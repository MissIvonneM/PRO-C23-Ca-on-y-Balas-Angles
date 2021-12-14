class CannonBall {
    constructor(x, y)  //a) Sólo pasa los argumentos de X,Y 
    {
      var options = {    
        isStatic: true
      };   //b) La propiedad de la bala sea estática y no se caiga
      this.r = 30;    //c) Agrega el argumento del radio=30
      this.body = Bodies.circle(x, y, this.r, options);  //d) agrega el valor del radio a círculo de la bala.
      this.image = loadImage("./assets/cannonball.png"); //e) agrega la imágen de la bala
      World.add(world, this.body);    //f) agrega la bala al mundo
    }
  
    display() 
    {
      var pos = this.body.position;  
      push();      //i) Usamos push() y pop() para que los imageMode() sean únicamente en ésta imagen
      imageMode(CENTER);      //g) Centramos la imagen
      image(this.image, pos.x, pos.y, this.r, this.r);  //h) Agregamos la imagen al cuerpo
      pop();
    }
  }
  