let a = 1
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {

    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
}

    collides(otherRectangle) {

      this.otherRectangle = rectangle1 //celui-ci est utiliser dans console.log

       if(rectangle1.topLeftXPos <  rectangle2.topLeftXPos + rectangle2.width &&
            rectangle1.topLeftXPos + rectangle1.width > rectangle2.topLeftXPos &&
            rectangle1.topLeftYPos < rectangle2.topLeftYPos + rectangle2.length &&
            rectangle1.length + rectangle1.topLeftYPos > rectangle2.topLeftYPos) {
//methode qui permet d'analyser si les 2 rectangles se touchent. La largeur et la longueur rentre en compte dans le calcul.
                return true;
            } else {
                return false;
            }
         } 
        } 
        const rectangle1 = new Rectangle (2, 4, 3, 2);
        const rectangle2 = new Rectangle (3, 3, 4, 2);
        console.log(rectangle2.collides(rectangle1));
        
     while (a <= 1000) {
                a = a + 1;
                rectangle3 = new Rectangle(
                    Math.floor(Math.random() * 100) + 1,
                    Math.floor(Math.random() * 100) + 1,
                    Math.floor(Math.random() * 100) + 1,
                    Math.floor(Math.random() * 100) + 1
                );
                
                console.log(rectangle3);
                console.log(rectangle3.collides(rectangle1));
       
                }

                
                
