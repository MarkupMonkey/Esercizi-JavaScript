class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  constructor(poligon) {
    this.poligon = poligon;
  }
  static calculate(cal) {
    if (cal === square) {
      return square.side * square.side;
    } else if (cal === rectangle) {
      return rectangle.height * rectangle.width;
    } else if (cal === circle) {
      return (circle.radius * 3, 14) * 2;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));