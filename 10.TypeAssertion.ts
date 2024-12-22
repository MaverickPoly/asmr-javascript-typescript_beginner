/*
In Typescript, Type assertion is a technique that informs the compiler about
the type of a variable. Type assertion is similar to typecasting but it
doesn’t reconstruct code. You can use type assertion to specify a value’s
type and tell the compiler not to deduce it. When we want to change a variable
from one type to another such as any to number etc, we use Type assertion.
 */

// Example 1:
let myString: unknown = "My String";
console.log(myString);

let len: number = (myString as string).length;
console.log(len);
console.log(typeof len);


// Example 2:
let input: string = "55";
let num: number = input as unknown as number;  // We need to convert string to unknown first, then to number
console.log(input);
console.log(typeof input);
console.log(num);
console.log(typeof num);


// Example 3:
let num1: any = 77;
let num2 = <Number> num1;

console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);

