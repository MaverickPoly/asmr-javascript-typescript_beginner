class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}, and I am ${this.age} years old.`;
    }
}

const person1 = new Person('Mike', 25);
const person2 = new Person('Bob', 30);

console.log(person1);
console.log(person1.greet());
console.log(person2);
console.log(person2.greet());
