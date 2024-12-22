// Generic functions
function returnSelf<T>(arg: T): T {
    return arg;
}

console.log(returnSelf("MyString"));
console.log(returnSelf(2029));
console.log(returnSelf(true));

function genericArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

console.log(genericArr([1, 2, 3, 4]));
console.log(genericArr(['C', "R", "D", "F"]));


function createPairs<S, T>(a: S, b: T): [S, T] {
    return [a, b];
}

console.log(createPairs<string, number>('Hello', 42));


// Type aliases
type MyType<T> = {value: T};

const myValue: MyType<number> = {value: 40};
console.log(myValue);



// Generic Classes
class Box<T> {
    private box: T;
    constructor(value: T) {
        this.box = value;
    }

    public getBox() : T {
        return this.box;
    }

    public setBox(value: T) {
        this.box = value;
    }
}
const myBox = new Box<number>(5);
console.log(myBox);
myBox.setBox(10);
console.log(myBox.getBox());

const box2 = new Box<string>("Hello");
console.log(box2);
box2.setBox("World");
console.log(box2.getBox());


// Swap Values
function swapValues<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

const swappedValue = swapValues<number, string>(5, "Hello");
console.log(swappedValue);