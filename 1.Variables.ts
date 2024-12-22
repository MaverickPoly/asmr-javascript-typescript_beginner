// Numeric variables
let numberVar: number = 0;
// numberVar = true;  //! Warning
console.log(numberVar);
console.log(typeof numberVar);

// Boolean variables
let boolVar: boolean = true;
boolVar = false;
// boolVar = "Hello world";  //! Warning

console.log(boolVar);
console.log(typeof boolVar);


// String variables
let strVar: string = "My string variable!";
strVar = "Another string variable!";
// strVar = 25;  //! Warning
console.log(strVar);
console.log(typeof strVar);

// Big Int Variables
// @ts-ignore
let bigIntVar: bigint = BigInt(9007199254740991);
console.log(bigIntVar);
console.log(typeof bigIntVar);

// Null variables
let nullVar: null = null;
console.log(nullVar);
console.log(typeof nullVar);  // -> object

// Symbol variables
// @ts-ignore
let symbolVar: symbol = Symbol("My symbol variable!");
// let symbolVar: symbol = 0;  //! Warning
console.log(symbolVar);
console.log(typeof symbolVar);

// Undefined variables
let undefinedVar: undefined = undefined;
// let undefinedVar: undefined = null;  // OK!
console.log(undefinedVar);
console.log(typeof undefinedVar);

