// Signatures
function processInput(input: string): string;
function processInput(input: number): number;

// Implementation
function processInput(input: string | number) : string | number {
    if (typeof input === "string") {
        return `Processed string: ${input.toUpperCase()}`;
    } else if (typeof input === "number") {
        return `Processed number: ${input * 2}`;
    }
    throw new Error("Invalid input type. Expected string or number");
}

const result1 = processInput("Hello World!");
const result2 = processInput(10);

console.log(result1);
console.log(result2);
