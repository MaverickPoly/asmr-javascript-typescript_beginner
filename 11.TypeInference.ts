// Inferred return type
function addNumbers(a: number, b: number) {
    return a + b;
}

const sum = addNumbers(5, 10);
console.log(sum);


// Inferred types with objects
function createUser(name: string, age: number) {
    return {name, age};
}

const user = createUser("Mike", 25);
console.log(user.name);
console.log(user.age);

// Inferred types with arrays
function getNumbers(): number[] {
    return [1, 2, 3];
}

const numbers = getNumbers();
console.log(numbers);
console.log(numbers.map(num => num * 2));