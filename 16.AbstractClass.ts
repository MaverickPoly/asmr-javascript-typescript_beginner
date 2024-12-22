abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(5);

console.log(rectangle);
console.log(circle);

console.log(`Area of the rectangle: ${rectangle.area()}`);
console.log(`Area of the circle: ${circle.area().toFixed(2)}`);