class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
   
    get surface() {

        return Math.PI * this.radius * this.radius;
    }
    move(xOffset, yOffset) {

      this.xPos += xOffset;
      this.yPos += yOffset;

    }
}
const cercle = new Circle(5, 8, 3);

console.log(cercle.surface);


