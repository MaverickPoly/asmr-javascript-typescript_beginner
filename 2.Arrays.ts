// Method 1: Old way
let array1: Array<number> = [1, 2, 3, 4, 5];
console.log(array1);
console.log(typeof array1);

// Method 2: Modern way
let array2: number[] = [1, 2, 3, 4, 5];
console.log(array2);
console.log(typeof array2);

// Arrays with different types
let mixedArray: (number | string)[] = [1, 2, 3, 'hello', 'world'];  // | -> or
console.log(mixedArray);
console.log(typeof mixedArray);

// Multidimensional array
let multiDimArray: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiDimArray);
console.log(typeof multiDimArray);

// Multidimensional array with different types
let multiDimMixedArray: (number | string | boolean)[][] = [[1, 2, 3], ['a', 'b', 'c'],[true, false, true]];
console.log(multiDimMixedArray);
console.log(typeof multiDimMixedArray);
console.log(multiDimMixedArray.length);


// Tuples
let myTuple: [number, boolean, string] = [1, false, 'Tuple'];
console.log(myTuple);

// Or Tuples
let orTuple: [number | string] = [1];
orTuple = ['Or Tuple'];
// orTuple = [true];  //! Warning
console.log(orTuple);
console.log(typeof orTuple);

// Any type
let anyType: any = "Hello world!";
console.log(anyType);
anyType = 123;
console.log(anyType);
anyType = true;
console.log(anyType);