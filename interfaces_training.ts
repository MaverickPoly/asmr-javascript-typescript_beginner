interface Person {
    username: string,
    email: string,
    password: string
}

const person: Person = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123'
}

console.log(person);
console.log(person.username);
console.log(person.email);
console.log(person.password);


interface Dog {
    breed: string,
    color: string,
    age: number,
}

const dog: Dog = {
    breed: "Labrador",
    color: "Black",
    age: 5,
}

console.log(dog);

interface Multiply {
    (num1: number, num2: number): number
}

const multiplyInterface: Multiply = (x: number, y: number): number => x * y;

console.log(multiplyInterface(2, 3));
console.log(multiplyInterface(5, 3));


// Objects
interface Box2 {
    width: number,
    color: string,
    height: number,
    describe(): void;
}

const box: Box2 = {
    width: 10,
    color: "Red",
    height: 5,
    describe() {
        console.log(this.width, this.color, this.height);
    }
}

console.log(box);
box.describe();

// Classes
interface MyCar {
    brand: string,
    start(): void,
    stop(): void,
};

class Car implements MyCar {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    start(): void {
        console.log("Car started");
    }
    stop() : void {
        console.log("Car stopped");
    }
}

const myCar: Car = new Car("BMW");
console.log(myCar);