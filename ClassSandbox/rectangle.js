class Rectangle { 
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    get heights() {
        return this.height;
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
const square = new Rectangle();
console.log(square.area);
console.log(square.height);

console.log(square.area); // 100

