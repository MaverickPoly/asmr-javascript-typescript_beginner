function isString(value: unknown): boolean {
    return typeof value === 'string';
}

function checkType(input: string | number): string {
    if (isString(input)) {
        return `You passed a string: ${input}`;
    } else {
        return `You passed a number: ${input}`;
    }
}

console.log(checkType('Hi typescript!'));
console.log(checkType(2029));
