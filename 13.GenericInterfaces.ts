// Generic Interfaces
interface GenericInterface {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}
let myInterface: GenericInterface = identity;
console.log(myInterface("Hello"));
