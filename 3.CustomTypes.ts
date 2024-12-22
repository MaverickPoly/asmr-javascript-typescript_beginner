// Custom Types
type User = {
    name: string;
    age: number;
    isStudent: boolean;
};

const user1: User = {
    name: "Bob",
    age: 30,
    isStudent: false,
};

console.log(user1);
console.log(typeof user1);


// Using interface
interface Person {
    name: string;
    age: number;
    isMale: boolean;
}

const person1: Person = {
    name: "John",
    age: 25,
    isMale: true,
}

console.log(person1);
console.log(typeof person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.isMale);


type Programmer = {
    name: string;
    skills: string[];
}

const programmer1: Programmer = {
    name: "Mike",
    skills: ["JavaScript", "Python", "GoLang", "React"],
}

console.log(programmer1);
console.log(typeof programmer1);
console.log(typeof programmer1.name);
console.log(typeof programmer1.skills);
