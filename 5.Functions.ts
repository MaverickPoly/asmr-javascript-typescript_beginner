function returnTime(): number {
    return new Date().getTime();
}

function greetUser(name: string): void {
    console.log(`Hello, ${name}`);
}

function sum(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number, c?: number): number {
    return a * b * (c || 1);
}

function power(num: number, exponent: number = 10): number {
    return num ** exponent;
}

function describePerson({name, age}: {name: string, age: number}): string{
    return `Name: ${name}, Age: ${age}`;
}

type Person = {
    name: string,
    age: number,
    job: string,
}

function greetPerson(person: Person): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old and your work is ${person.job}`);
}


console.log(returnTime());
greetUser("Bob");
console.log(sum(5, 6));
console.log(multiply(5, 3, 2));
console.log(multiply(5, 3));
console.log(power(4, 3));
console.log(describePerson({name: "John", age: 35}));

const person: Person = {name: "Mike", age:20, job: "Programmer"};
greetPerson(person);

// -------------- Never type cases -------------
function raiseError(): never {
    throw new Error("Never data type!");
}

function infiniteLoop(): never {
    while(true) {}
}

// raiseError();
// infiniteLoop()

