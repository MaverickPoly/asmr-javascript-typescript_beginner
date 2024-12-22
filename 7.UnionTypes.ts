function handleInput(input: string | number): string {
    if (typeof  input === "string") {
        return `You entered a string: ${input}`;
    } else if (typeof input === 'number') {
        return `You entered a number: ${input}`;
    } else {
        return "Invalid input!";
    }
}

console.log(handleInput("Hello typescript!"));
console.log(handleInput(2029));
